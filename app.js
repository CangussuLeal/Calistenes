/* ==========================================================================
   CALISTENES — app.js
   Lógica da aplicação. Depende de exercises.js (exerciseDB, CATEGORY_ORDER,
   NIVEL_ORDER, GUIDED_PROGRAMS, findExercise, exerciseImage) já carregado.
   ========================================================================== */

const WEEKDAYS = ["SEGUNDA","TERÇA","QUARTA","QUINTA","SEXTA","SÁBADO","DOMINGO"];

// ---- Estado em memória (sem localStorage, tudo vive na sessão) ------------
const state = {
  view: "home",
  builder: {
    category: "Push",
    nivel: "Todos",
    search: "",
    activeDay: 0,
    plan: WEEKDAYS.reduce((acc,d)=>(acc[d]=[],acc),{}),   // dia -> [exercicio]
    goals: [{label:"Hipertrofia", value:60}, {label:"Skills", value:40}],
    name: "",
  },
  session: {
    programId: null,
    exIndex: 0,
    seconds: 0,
    running: false,
    timerHandle: null,
  },
};

function closeMobileNav(){
  const nav = document.getElementById("nav-links");
  const navToggle = document.getElementById("nav-toggle");
  nav.classList.remove("open");
  navToggle.classList.remove("open");
  navToggle.setAttribute("aria-expanded", "false");
}

// ---- Navegação --------------------------------------------------------------
function goTo(view, opts = {}){
  document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
  const el = document.getElementById("view-" + view);
  if(el) el.classList.add("active");
  state.view = view;
  window.scrollTo({top:0, behavior:"instant"});

  document.querySelectorAll(".nav-links button").forEach(b=>{
    b.classList.toggle("active", b.dataset.nav === view);
  });

  if(view === "detail" && opts.programId) renderDetail(opts.programId);
  if(view === "session" && opts.programId !== undefined) startSession(opts.programId, opts.exIndex || 0);
  if(view === "dashboard") renderDashboard();
  if(view === "myworkouts") renderMyWorkouts();
  if(view === "builder") renderGoalsPanel();
}
window.goTo = goTo;

// ---- Toast ------------------------------------------------------------------
let toastTimer;
function showToast(msg){
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>t.classList.remove("show"), 2200);
}

/* ============================================================================
   DASHBOARD — mini calendário + gráfico de metas
   ========================================================================== */
function renderDashboard(){
  renderCalendar();
  renderGoalsDonut("goal-donut-dash", state.builder.goals);
}

function renderCalendar(gridId = "cal-grid", labelId = "cal-month-label"){
  const grid = document.getElementById(gridId);
  const label = document.getElementById(labelId);
  if(!grid) return;

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  label.textContent = today.toLocaleDateString("pt-BR", {month:"long", year:"numeric"});

  const firstDow = new Date(year, month, 1).getDay(); // 0=Dom
  const daysInMonth = new Date(year, month+1, 0).getDate();
  const daysInPrevMonth = new Date(year, month, 0).getDate();

  let html = "";
  ["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"].forEach(d=> html += `<div class="dow">${d}</div>`);

  for(let i=0;i<firstDow;i++){
    html += `<div class="day muted">${daysInPrevMonth - firstDow + i + 1}</div>`;
  }
  for(let d=1; d<=daysInMonth; d++){
    const isToday = d === today.getDate();
    html += `<div class="day ${isToday ? "today":""}">${d}</div>`;
  }
  const totalCells = firstDow + daysInMonth;
  const trailing = (7 - (totalCells % 7)) % 7;
  for(let i=1;i<=trailing;i++) html += `<div class="day muted">${i}</div>`;

  grid.innerHTML = html;
}

function renderGoalsDonut(svgId, goals){
  const svg = document.getElementById(svgId);
  const legend = document.getElementById(svgId + "-legend");
  if(!svg) return;
  const colors = ["#F4D93E","#7C9CFF","#FF7A3D","#5FE0A8","#C77DFF"];
  const total = goals.reduce((s,g)=>s+Number(g.value||0),0) || 1;

  let offset = 0;
  const r = 60, cx = 80, cy = 80, circumference = 2*Math.PI*r;
  let paths = "";
  goals.forEach((g,i)=>{
    const frac = Number(g.value||0)/total;
    const dash = frac*circumference;
    paths += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${colors[i%colors.length]}"
      stroke-width="22" stroke-dasharray="${dash} ${circumference-dash}"
      stroke-dashoffset="${-offset}" transform="rotate(-90 ${cx} ${cy})"/>`;
    offset += dash;
  });
  svg.innerHTML = paths;

  if(legend){
    legend.innerHTML = goals.map((g,i)=>{
      const pct = Math.round((Number(g.value||0)/total)*100);
      return `<span><span class="legend-dot" style="background:${colors[i%colors.length]}"></span>${g.label} — ${pct}%</span>`;
    }).join("");
  }
}

/* ============================================================================
   MONTAR TREINO — biblioteca + plano semanal
   ========================================================================== */
function renderCategoryPills(){
  const wrap = document.getElementById("lib-cats");
  wrap.innerHTML = CATEGORY_ORDER.map(cat => `
    <button class="pill-tag ${cat===state.builder.category?"active":""}" data-cat="${cat}">
      ${cat}
    </button>`).join("");

  wrap.querySelectorAll("button").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      state.builder.category = btn.dataset.cat;
      renderCategoryPills();
      renderLibraryList();
    });
  });
}

function renderNivelFilter(){
  const sel = document.getElementById("lib-nivel");
  if(!sel) return;
  sel.innerHTML = `<option value="Todos">Todos os níveis</option>` +
    NIVEL_ORDER.map(n => `<option value="${n}">${n}</option>`).join("");
  sel.value = state.builder.nivel;
}

function renderLibraryList(){
  const list = document.getElementById("lib-list");
  const cat = state.builder.category;
  const nivel = state.builder.nivel;
  const term = state.builder.search.trim().toLowerCase();

  const items = exerciseDB.filter(ex =>
    ex.tipo === cat &&
    (nivel === "Todos" || ex.nivel === nivel) &&
    ex.nome.toLowerCase().includes(term)
  );

  if(items.length === 0){
    list.innerHTML = `<p class="empty-note">Nenhum exercício encontrado.</p>`;
    return;
  }
  list.innerHTML = items.map(ex => `
    <button class="lib-item" data-nome="${ex.nome.replace(/"/g,'&quot;')}">
      <span class="lib-item-info">
        <span class="lib-item-name">${ex.nome}</span>
        <span class="lib-item-meta">${ex.nivel} · ${ex.xp} XP</span>
      </span>
      <span class="plus">+</span>
    </button>`).join("");

  list.querySelectorAll(".lib-item").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      const ex = findExercise(btn.dataset.nome);
      if(ex) addExerciseToDay(ex);
    });
  });
}

function addExerciseToDay(ex){
  const day = WEEKDAYS[state.builder.activeDay];
  state.builder.plan[day].push({...ex, uid: ex.nome + "-" + Date.now()});
  renderWeekTabs();
  renderPlanDrop();
  showToast(`${ex.nome} adicionado — ${day}`);
}

function removeFromDay(day, uid){
  state.builder.plan[day] = state.builder.plan[day].filter(e=>e.uid!==uid);
  renderWeekTabs();
  renderPlanDrop();
}

function renderWeekTabs(){
  const wrap = document.getElementById("week-tabs");
  wrap.innerHTML = WEEKDAYS.map((d,i)=>`
    <button class="${i===state.builder.activeDay?"active":""}" data-day="${i}">
      ${d.slice(0,3)}<span class="count">${state.builder.plan[d].length}</span>
    </button>`).join("");

  wrap.querySelectorAll("button").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      state.builder.activeDay = Number(btn.dataset.day);
      renderWeekTabs();
      renderPlanDrop();
    });
  });
}

function renderPlanDrop(){
  const drop = document.getElementById("plan-drop");
  const stats = document.getElementById("plan-stats");
  const day = WEEKDAYS[state.builder.activeDay];
  const items = state.builder.plan[day];

  drop.innerHTML = items.map(ex => `
    <span class="chip">${ex.nome} <button data-uid="${ex.uid}" aria-label="Remover">✕</button></span>
  `).join("");
  drop.querySelectorAll("button[data-uid]").forEach(b=>{
    b.addEventListener("click", ()=> removeFromDay(day, b.dataset.uid));
  });

  if(stats){
    const totalXp = items.reduce((s,e)=>s+(e.xp||0),0);
    const totalMin = Math.round(items.reduce((s,e)=>s+(e.duracao||0),0)/60*10)/10;
    stats.textContent = items.length
      ? `${items.length} exercício${items.length>1?"s":""} · ~${totalMin} min · ${totalXp} XP`
      : "";
  }
}

function renderGoalsPanel(){
  const list = document.getElementById("builder-goals-list");
  list.innerHTML = state.builder.goals.map(g => `<li>${g.label} <b>${g.value}%</b></li>`).join("");
  renderGoalsDonut("goal-donut-builder", state.builder.goals);
}

function initBuilder(){
  renderCategoryPills();
  renderNivelFilter();
  renderLibraryList();
  renderWeekTabs();
  renderPlanDrop();
  renderGoalsPanel();

  document.getElementById("lib-search").addEventListener("input", (e)=>{
    state.builder.search = e.target.value;
    renderLibraryList();
  });

  document.getElementById("lib-nivel").addEventListener("change", (e)=>{
    state.builder.nivel = e.target.value;
    renderLibraryList();
  });

  document.getElementById("plan-name").addEventListener("input", (e)=>{
    state.builder.name = e.target.value;
  });

  document.getElementById("save-plan-btn").addEventListener("click", ()=>{
    const name = state.builder.name.trim() || "Meu treino";
    const totalEx = WEEKDAYS.reduce((s,d)=>s+state.builder.plan[d].length,0);
    if(totalEx === 0){
      showToast("Adicione ao menos um exercício antes de salvar");
      return;
    }
    showToast(`"${name}" salvo com sucesso!`);
  });
}

/* ============================================================================
   MÓDULOS DE PROGRESSÃO — cards + página de detalhe
   ========================================================================== */
function renderModules(containerId){
  const wrap = document.getElementById(containerId);
  wrap.innerHTML = GUIDED_PROGRAMS.map(p => `
    <div class="module-card" data-id="${p.id}" style="background-image:url('${p.hero}')">
      <span class="level">${p.level.replace("Treino ","")}</span>
      <img src="${p.hero}" alt="${p.name}" />
      <span class="tag">${p.name}</span>
    </div>
  `).join("");

  wrap.querySelectorAll(".module-card").forEach(card=>{
    card.addEventListener("click", ()=> goTo("detail", {programId: card.dataset.id}));
  });
}

function renderDetail(programId){
  const p = GUIDED_PROGRAMS.find(x=>x.id===programId) || GUIDED_PROGRAMS[0];
  document.getElementById("detail-img").style.backgroundImage = `url('${p.hero}')`;
  document.getElementById("detail-name").textContent = p.name;
  document.getElementById("detail-level").textContent = p.level;
  document.getElementById("detail-intro").textContent = p.intro;

  document.getElementById("detail-exlist").innerHTML = p.exercises.map(ex => `
    <li><span>${ex.name}</span><span class="sets">${ex.sets}</span></li>
  `).join("");

  document.getElementById("detail-goals").innerHTML = p.goals.map(g => `
    <li><span>${g.label}</span><b>${g.value}</b></li>
  `).join("");

  document.getElementById("start-session-btn").onclick = () => goTo("session", {programId: p.id, exIndex: 0});
}

/* ============================================================================
   MEUS TREINOS — grade de seleção
   ========================================================================== */
function renderMyWorkouts(){
  renderModules("my-workouts-grid");
  renderCalendar("cal-grid-2", "cal-month-label-2");
}

/* ============================================================================
   SESSÃO DE TREINO — cronômetro
   ========================================================================== */
function startSession(programId, exIndex){
  const p = GUIDED_PROGRAMS.find(x=>x.id===programId) || GUIDED_PROGRAMS[0];
  state.session.programId = p.id;
  state.session.exIndex = exIndex || 0;
  stopTimer();
  state.session.seconds = 0;
  renderSessionExercise();
}

function currentSessionExercise(){
  const p = GUIDED_PROGRAMS.find(x=>x.id===state.session.programId);
  return { program: p, ex: p.exercises[state.session.exIndex] };
}

function renderSessionExercise(){
  const { program, ex } = currentSessionExercise();
  document.getElementById("session-exname").textContent = ex.name;
  document.getElementById("session-exsets").textContent = ex.sets;
  document.getElementById("session-exindex").textContent = state.session.exIndex + 1;
  document.getElementById("session-extotal").textContent = program.exercises.length;

  const img = exerciseImage(ex) || program.hero;
  document.getElementById("session-photo-img").src = img;

  const metaEl = document.getElementById("session-exmeta");
  if(metaEl){
    metaEl.textContent = [ex.nivel, ex.duracao ? `meta ${ex.duracao}s` : null, ex.xp ? `${ex.xp} XP` : null]
      .filter(Boolean).join(" · ");
  }

  const tutorialLink = document.getElementById("session-tutorial-link");
  if(tutorialLink){
    if(ex.video){
      tutorialLink.href = `https://www.youtube.com/watch?v=${ex.video}`;
      tutorialLink.style.display = "inline-flex";
    }else{
      tutorialLink.style.display = "none";
    }
  }

  updateTimerDisplay();
  updateTimerRing();
}

function formatTime(totalSeconds){
  const m = String(Math.floor(totalSeconds/60)).padStart(2,"0");
  const s = String(totalSeconds%60).padStart(2,"0");
  return `${m}:${s}`;
}

function updateTimerDisplay(){
  document.getElementById("timer-time").textContent = formatTime(state.session.seconds);
}

function updateTimerRing(){
  const circle = document.getElementById("timer-fg");
  const r = 130;
  const circumference = 2*Math.PI*r;
  circle.style.strokeDasharray = `${circumference} ${circumference}`;
  // cicla visualmente a cada 60s para dar sensação de progresso contínuo
  const progress = (state.session.seconds % 60) / 60;
  circle.style.strokeDashoffset = circumference * (1-progress);
}

function toggleTimer(){
  if(state.session.running){
    stopTimer();
  }else{
    state.session.running = true;
    document.getElementById("timer-play-icon").textContent = "❚❚";
    state.session.timerHandle = setInterval(()=>{
      state.session.seconds++;
      updateTimerDisplay();
      updateTimerRing();
    }, 1000);
  }
}

function stopTimer(){
  state.session.running = false;
  clearInterval(state.session.timerHandle);
  const icon = document.getElementById("timer-play-icon");
  if(icon) icon.textContent = "▶";
}

function nextExercise(){
  const { program } = currentSessionExercise();
  stopTimer();
  state.session.seconds = 0;
  state.session.exIndex = (state.session.exIndex + 1) % program.exercises.length;
  renderSessionExercise();
}

function finishSession(){
  stopTimer();
  showToast("Treino finalizado — bom trabalho!");
  goTo("myworkouts");
}

/* ============================================================================
   INICIALIZAÇÃO
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-nav]").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      goTo(btn.dataset.nav);
      closeMobileNav();
    });
  });
  document.querySelectorAll("[data-goto]").forEach(btn=>{
    btn.addEventListener("click", ()=> goTo(btn.dataset.goto));
  });

  const navToggle = document.getElementById("nav-toggle");
  navToggle.addEventListener("click", ()=>{
    const nav = document.getElementById("nav-links");
    const open = nav.classList.toggle("open");
    navToggle.classList.toggle("open", open);
    navToggle.setAttribute("aria-expanded", String(open));
  });

  initBuilder();
  renderModules("modules-grid");
  renderDashboard();

  document.getElementById("timer-toggle-btn").addEventListener("click", toggleTimer);
  document.getElementById("timer-next-btn").addEventListener("click", nextExercise);
  document.getElementById("timer-reset-btn").addEventListener("click", ()=>{
    stopTimer(); state.session.seconds = 0; updateTimerDisplay(); updateTimerRing();
  });
  document.getElementById("session-next-link").addEventListener("click", nextExercise);
  document.getElementById("session-finish-link").addEventListener("click", finishSession);

  goTo("home");
});t
