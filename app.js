/* ==========================================================================
   CALISTENES — app.js
   Lógica da aplicação. Depende de exercises.js (exerciseDB, CATEGORY_ORDER,
   NIVEL_ORDER, GUIDED_PROGRAMS, findExercise, exerciseImage) já carregado.
   ========================================================================== */

const WEEKDAYS = ["SEGUNDA","TERÇA","QUARTA","QUINTA","SEXTA","SÁBADO","DOMINGO"];
const GOAL_TYPES = [
  "Emagrecimento / condicionamento metabólico",
  "Força",
  "Resistência muscular",
  "Hipertrofia",
  "Movimentos avançados / skills",
  "Core / estabilidade",
  "Mobilidade / flexibilidade",
];
const GOAL_LEVELS = ["Iniciante","Intermediário","Avançado","Elite"];
const GOAL_RECOMMENDATIONS = {
  "Emagrecimento / condicionamento metabólico": {
    Iniciante: { title: "Circuito leve de calorias", format: "3 rounds · 30s trabalho / 20s descanso", exercises: ["Polichinelo 3x20s", "Agachamento 3x12", "Flexão inclinada 3x10", "Mountain climber 3x20s", "Prancha 3x30s"] },
    Intermediário: { title: "Circuito metabólico", format: "4 rounds · 30s trabalho / 15s descanso", exercises: ["Burpee 4x10", "Agachamento com salto 4x12", "Flexão 4x10", "Mountain climber 4x20s", "Remada invertida 4x12"] },
    Avançado: { title: "Circuito de alta densidade", format: "5 rounds · 35s trabalho / 15s descanso", exercises: ["Burpee com flexão 5x8", "Pistol assistido 5x6", "Flexão explosiva 5x8", "L-sit 5x20s", "Dragon flag 5x6"] },
    Elite: { title: "Circuito de performance", format: "5 rounds · 40s trabalho / 10s descanso", exercises: ["Burpee com muscle-up 5x5", "Handstand push-up 5x4", "Human flag 5x15s", "Planche push-up 5x5", "Front lever rows 5x6"] }
  },
  "Força": {
    Iniciante: { title: "Força base", format: "3–4 séries · 6–10 reps · 90s descanso", exercises: ["Flexão inclinada 4x8", "Remada invertida assistida 4x8", "Agachamento 4x10", "Pike push-up 4x8", "Prancha 4x30s"] },
    Intermediário: { title: "Força funcional", format: "4 séries · 5–8 reps · 2–3 min descanso", exercises: ["Flexão completa 4x8", "Pull-up 4x6", "Dips em paralelas 4x6", "Agachamento 4x10", "Dragon flag 4x5"] },
    Avançado: { title: "Força explosiva e tensão", format: "5 séries · 4–6 reps · 3 min descanso", exercises: ["Archer pull-up 5x4", "Dips em argolas 5x6", "Handstand push-up 5x4", "Pistol squat 5x4", "Front lever raises 5x5"] },
    Elite: { title: "Força máxima", format: "4–5 séries · 3–5 reps · 3–5 min descanso", exercises: ["One arm pull-up 4x3", "One arm push-up 4x3", "Front lever 4x10s", "Human flag 4x15s", "Planche 4x20s"] }
  },
  "Resistência muscular": {
    Iniciante: { title: "Resistência base", format: "3 rounds · 12–15 reps · 45s descanso", exercises: ["Agachamento 3x15", "Flexão inclinada 3x12", "Remada invertida assistida 3x12", "Prancha 3x30s", "Dips em bancada 3x10"] },
    Intermediário: { title: "Resistência de força", format: "4 rounds · 10–15 reps · 60s descanso", exercises: ["Flexão completa 4x12", "Pull-up 4x10", "Dips 4x10", "L-sit assistido 4x20s", "Agachamento 4x15"] },
    Avançado: { title: "Resistência com tensão", format: "4 rounds · 12–20 reps · 60–90s descanso", exercises: ["Pull-up 4x12", "Dips em argolas 4x10", "Front lever hold 4x15s", "Planche knees 4x20s", "Pistol squat 4x8"] },
    Elite: { title: "Resistência de alto controle", format: "5 rounds · 8–15 reps / holds · 60s descanso", exercises: ["Front lever 5x20s", "Planche 5x25s", "Human flag 5x20s", "Pull-up 5x12", "Handstand push-up 5x5"] }
  },
  "Hipertrofia": {
    Iniciante: { title: "Hipertrofia base", format: "3–4 séries · 8–12 reps · 60–90s descanso", exercises: ["Agachamento 4x10", "Flexão inclinada 4x10", "Remada invertida assistida 4x10", "Dips em bancada 4x8", "Prancha 4x20s"] },
    Intermediário: { title: "Hipertrofia funcional", format: "4 séries · 8–12 reps · 75–90s descanso", exercises: ["Flexão completa 4x10", "Pull-up 4x8", "Agachamento 4x12", "Pike push-up 4x10", "L-sit assistido 4x20s"] },
    Avançado: { title: "Hipertrofia com tensão", format: "4–5 séries · 6–10 reps · 90s descanso", exercises: ["Pull-up 5x8", "Dips 5x8", "Pistol squat 4x6", "Front lever raises 4x8", "Planche push-up 4x6"] },
    Elite: { title: "Hipertrofia máxima", format: "5 séries · 6–10 reps · 90–120s descanso", exercises: ["One arm pull-up 5x5", "Front lever 5x10s", "Planche 5x15s", "Human flag 5x12s", "Handstand push-up 5x5"] }
  },
  "Movimentos avançados / skills": {
    Iniciante: { title: "Progressão de skill", format: "3–4 rounds · 3–6 reps / 10–20s hold · 90s descanso", exercises: ["Wall handstand 4x15s", "Frog stand 4x20s", "Tuck front lever 4x10s", "Wall walk 4x3", "Scapular pull-up 4x8"] },
    Intermediário: { title: "Skill técnica", format: "4 rounds · 4–8 reps / 15–30s hold · 2 min descanso", exercises: ["Freestanding handstand 4x20s", "Tuck planche 4x15s", "Tuck back lever 4x10s", "Pull-up 4x6", "L-sit 4x20s"] },
    Avançado: { title: "Skill de alta exigência", format: "4 rounds · 3–6 reps / 10–20s hold · 2–3 min descanso", exercises: ["Handstand press 4x4", "Straddle planche 4x15s", "Front lever 4x15s", "Muscle-up 4x3", "Human flag 4x12s"] },
    Elite: { title: "Skills de elite", format: "4–5 rounds · 2–5 reps / 15–30s hold · 3–4 min descanso", exercises: ["One arm handstand 4x3", "Full planche 4x15s", "Full front lever 4x15s", "Human flag pull-up 4x3", "Back lever 4x15s"] }
  },
  "Core / estabilidade": {
    Iniciante: { title: "Core base", format: "3 rounds · 20–30s hold / 10 reps · 30s descanso", exercises: ["Prancha 3x30s", "Dead bug 3x10", "Hollow body hold 3x20s", "Knee raise 3x12", "Side plank 3x20s"] },
    Intermediário: { title: "Core funcional", format: "4 rounds · 20–40s hold / 8–12 reps · 45s descanso", exercises: ["Hollow body 4x20s", "Leg raise 4x10", "Dragon flag 4x5", "L-sit assistido 4x20s", "Mountain climber 4x20s"] },
    Avançado: { title: "Core de controle", format: "4 rounds · 20–30s hold / 6–10 reps · 60s descanso", exercises: ["Front lever raise 4x8", "Hollow body 4x30s", "V-sit 4x10", "Planche lean 4x20s", "Dragon flag 4x6"] },
    Elite: { title: "Core avançado", format: "5 rounds · 20–30s hold / 3–6 reps · 90s descanso", exercises: ["Full planche 5x20s", "Front lever 5x20s", "Back lever 5x20s", "Human flag 5x15s", "Manna 5x3"] }
  },
  "Mobilidade / flexibilidade": {
    Iniciante: { title: "Mobilidade básica", format: "3 rounds · 30–45s por movimento · sem pressão", exercises: ["Alongamento de ombros 3x30s", "Mobilidade de quadril 3x30s", "Alongamento de peitoral 3x30s", "Panturrilha 3x30s", "Agachamento profundo assistido 3x10"] },
    Intermediário: { title: "Mobilidade de trabalho", format: "3–4 rounds · 45s por movimento · controle total", exercises: ["Open book 4x30s", "Pigeon variation 4x30s", "Lunge mobility 4x30s", "Straddle stretch 4x30s", "Frog stretch 4x30s"] },
    Avançado: { title: "Mobilidade ativa", format: "4 rounds · 45–60s por movimento · amplitude controlada", exercises: ["Front split assistido 4x45s", "Ponte completa 4x30s", "Deep squat hold 4x45s", "Shoulder dislocates 4x20", "Couch stretch 4x40s"] },
    Elite: { title: "Flexibilidade de elite", format: "5 rounds · 60s por movimento · amplitude técnica", exercises: ["Front split 5x45s", "Middle split 5x45s", "German hang 5x30s", "Pancake stretch 5x45s", "Handstand mobility 5x30s"] }
  }
};

function getGoalRecommendation(goal){
  const goalType = goal.goalType || GOAL_TYPES[0];
  const level = goal.level || GOAL_LEVELS[0];
  const lookup = GOAL_RECOMMENDATIONS[goalType] || GOAL_RECOMMENDATIONS[GOAL_TYPES[0]];
  return lookup[level] || lookup[GOAL_LEVELS[0]];
}

function renderGoalRecommendations(){
  const wrap = document.getElementById("goal-recommendations");
  if(!wrap) return;

  if(state.builder.goals.length === 0){ wrap.innerHTML = ""; return; }

  wrap.innerHTML = state.builder.goals.slice(-3).map(goal => {
    const recommendation = getGoalRecommendation(goal);
    return `
      <div class="recommendation-card">
        <span class="recommendation-tag">${goal.goalType} · ${goal.level}</span>
        <h4>${recommendation.title}</h4>
        <p>${recommendation.format}</p>
        <ul>
          ${recommendation.exercises.map(item => `<li>${item}</li>`).join("")}
        </ul>
      </div>
    `;
  }).join("");
}

function showCustomModal({ title, fields = [], submitText = "Salvar", onSubmit }){
  const modal = document.getElementById("custom-modal");
  const form = document.getElementById("custom-modal-form");
  const titleEl = document.getElementById("custom-modal-title");
  const fieldsWrap = document.getElementById("custom-modal-fields");
  const submitBtn = document.getElementById("custom-modal-submit");

  if(!modal || !form || !titleEl || !fieldsWrap || !submitBtn) return;

  titleEl.textContent = title;
  submitBtn.textContent = submitText;
  fieldsWrap.innerHTML = fields.map(field => {
    const id = `custom-modal-field-${field.name}`;
    const value = field.value ?? "";
    const label = `<label for="${id}">${field.label}</label>`;

    if(field.type === "select"){
      const options = (field.options || []).map(option =>
        `<option value="${option.value}" ${option.value === value ? "selected" : ""}>${option.label}</option>`
      ).join("");
      return `<div class="modal-field">${label}<select id="${id}" name="${field.name}">${options}</select></div>`;
    }

    return `<div class="modal-field">${label}<input id="${id}" name="${field.name}" type="${field.type || "text"}" value="${field.value ?? ""}" ${field.min !== undefined ? `min="${field.min}"` : ""} ${field.step ? `step="${field.step}"` : ""} ${field.required ? "required" : ""}></div>`;
  }).join("");

  form.onsubmit = null;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const values = {};
    fields.forEach(field => {
      const input = form.querySelector(`[name="${field.name}"]`);
      if(!input) return;
      values[field.name] = field.type === "number" ? Number(input.value) : input.value;
    });
    hideCustomModal();
    onSubmit?.(values);
  }, { once: true });

  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
  setTimeout(() => {
    const firstInput = form.querySelector("input, select");
    if(firstInput) firstInput.focus();
  }, 30);
}

function hideCustomModal(){
  const modal = document.getElementById("custom-modal");
  if(!modal) return;
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
}

const state = {
  view: "home",
  builder: {
    category: "Push",
    nivel: "Todos",
    search: "",
    activeDay: 0,
    plan: WEEKDAYS.reduce((acc,d)=>(acc[d]=[],acc),{}),
    goals: [],
    name: "",
  },
  savedWorkouts: [],
  session: {
    programId: null,
    exIndex: 0,
    seconds: 0,
    totalSeconds: 0,
    running: false,
    timerHandle: null,
    workoutRunning: false,
    workoutTimerHandle: null,
    pauseSeconds: 0,
    pauseRunning: false,
    pauseHandle: null,
    seriesStarted: false,
  },
};

function closeMobileNav(){
  const nav = document.getElementById("nav-links");
  const navToggle = document.getElementById("nav-toggle");
  nav.classList.remove("open");
  navToggle.classList.remove("open");
  navToggle.setAttribute("aria-expanded", "false");
}

function buildWorkoutFromProgram(program, overrides = {}){
  const hero = overrides.hero || program.hero || "fotos/capa.png";
  const exercises = (program.exercises || []).map((ex, index) => ({
    id: `${program.id || "workout"}-${index}`,
    name: ex.name || ex.nome || `Exercício ${index + 1}`,
    sets: ex.sets || `${Math.max(3, index + 3)}x10`,
    image: exerciseImage(ex) || hero,
    nivel: ex.nivel || "Intermediário",
    xp: ex.xp || 20,
  }));

  return {
    id: overrides.id || `module-${program.id || Date.now()}`,
    name: overrides.name || program.name || "Treino guiado",
    level: overrides.level || program.level || "Treino guiado",
    day: overrides.day ?? 1,
    hero,
    exercises,
    source: overrides.source || "module",
    summary: overrides.summary || program.intro || "Progressão de habilidades e força.",
  };
}

function getSavedWorkouts(){
  if(state.savedWorkouts.length > 0) return state.savedWorkouts;
  state.savedWorkouts = GUIDED_PROGRAMS.map(program => buildWorkoutFromProgram(program));
  return state.savedWorkouts;
}

function buildWorkoutAgendaMap(){
  const map = Array.from({ length: 7 }, () => []);
  getSavedWorkouts().forEach(workout => {
    const dayIndex = Number.isInteger(workout.day) ? workout.day : 1;
    const clamped = Math.max(0, Math.min(6, Number(dayIndex) || 1));
    map[clamped].push(workout);
  });
  return map;
}

function renderWorkoutAgendaList(){
  const list = document.getElementById("agenda-list");
  if(!list) return;

  const map = buildWorkoutAgendaMap();
  list.innerHTML = WEEKDAYS.map((day, index) => {
    const workouts = map[index];
    return `
      <div class="agenda-day ${workouts.length ? "filled" : ""}">
        <strong>${day}</strong>
        <div class="agenda-day-items">
          ${workouts.length
            ? workouts.map(w => `<span>${w.name}</span>`).join("")
            : '<span class="agenda-empty">Livre</span>'}
        </div>
      </div>
    `;
  }).join("");
}

function deleteSavedWorkout(workoutId){
  state.savedWorkouts = state.savedWorkouts.filter(workout => workout.id !== workoutId);
  renderMyWorkouts();
}

function editSavedWorkout(workoutId){
  const workout = getSavedWorkouts().find(item => item.id === workoutId);
  if(!workout) return;

  showCustomModal({
    title: `Editar treino`,
    submitText: "Atualizar",
    fields: [
      { name: "name", label: "Nome do treino", type: "text", value: workout.name },
      { name: "day", label: "Dia da semana", type: "select", value: String(workout.day ?? 1), options: WEEKDAYS.map((day, index) => ({ value: String(index), label: day })) },
      { name: "level", label: "Nível", type: "text", value: workout.level },
    ],
    onSubmit: ({ name, day, level }) => {
      const selected = getSavedWorkouts().find(item => item.id === workoutId);
      if(!selected) return;
      selected.name = String(name || selected.name).trim() || selected.name;
      selected.level = String(level || selected.level).trim() || selected.level;
      selected.day = Number(day) || selected.day || 1;
      renderMyWorkouts();
      showToast(`${selected.name} atualizado`);
    }
  });
}

function saveWorkoutFromPlan({ name, exercises, day = state.builder.activeDay, hero }){
  if(!exercises || !exercises.length){
    showToast("Adicione ao menos um exercício antes de salvar o treino.");
    return;
  }

  const workout = {
    id: `custom-${Date.now()}`,
    name: String(name || "Meu treino").trim() || "Meu treino",
    level: "Personalizado",
    day: Number(day) || 0,
    hero: hero || exercises[0]?.image || "fotos/planche.png",
    exercises: exercises.map((ex, index) => ({
      id: `saved-${Date.now()}-${index}`,
      name: ex.name || ex.nome || `Exercício ${index + 1}`,
      sets: ex.sets || `${ex.sets || 3}x${ex.reps || 10}`,
      image: ex.image || ex.gif || "fotos/planche.png",
      nivel: ex.nivel || "Intermediário",
      xp: ex.xp || 10,
    })),
    source: "custom",
    summary: "Treino personalizado ajustado ao cliente.",
  };

  state.savedWorkouts.unshift(workout);
  renderMyWorkouts();
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

function renderCalendar(gridId = "cal-grid", labelId = "cal-month-label", workoutsByDay = []){
  const grid = document.getElementById(gridId);
  const label = document.getElementById(labelId);
  if(!grid) return;

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  if(label) label.textContent = today.toLocaleDateString("pt-BR", {month:"long", year:"numeric"});

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
    const hasWorkout = (workoutsByDay[d - 1] || []).length > 0;
    html += `<div class="day ${isToday ? "today":""} ${hasWorkout ? "has-workout" : ""}">${d}${hasWorkout ? '<span class="day-dot"></span>' : ""}</div>`;
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
  const cfg = normalizeExerciseConfig(ex);

  showCustomModal({
    title: `Adicionar ${ex.nome}`,
    submitText: "Adicionar ao treino",
    fields: [
      { name: "sets", label: "Séries", type: "number", value: cfg.sets, min: 1 },
      { name: "reps", label: "Repetições por série", type: "number", value: cfg.reps, min: 1 },
      { name: "rest", label: "Pausa entre séries (segundos)", type: "number", value: cfg.rest, min: 0 },
    ],
    onSubmit: ({ sets, reps, rest }) => {
      const newExercise = {
        ...ex,
        uid: ex.nome + "-" + Date.now(),
        sets: Number.isFinite(sets) && sets > 0 ? sets : cfg.sets,
        reps: Number.isFinite(reps) && reps > 0 ? reps : cfg.reps,
        rest: Number.isFinite(rest) && rest >= 0 ? rest : cfg.rest,
        isResistance: cfg.isResistance,
      };

      state.builder.plan[day].push(newExercise);
      renderWeekTabs();
      renderPlanDrop();
      showToast(`${ex.nome} adicionado — ${day}`);
    }
  });
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

  drop.innerHTML = items.map(ex => {
    const sets = Number(ex.sets) || 3;
    const reps = Number(ex.reps) || 10;
    return `
      <span class="chip">
        ${ex.nome}
        <small>${sets} série${sets > 1 ? "s" : ""} • ${reps} rep${reps > 1 ? "etições" : "etição"}</small>
        <button data-uid="${ex.uid}" aria-label="Remover">✕</button>
      </span>
    `;
  }).join("");
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

function normalizeExerciseConfig(ex = {}){
  const sets = Number(ex.sets) || 3;
  const reps = Number(ex.reps) || 10;
  const rest = Number(ex.rest) || 45;
  const isResistance = !["Alongamento", "Aquecimento"].includes(ex.tipo);
  return { sets, reps, rest, isResistance };
}

function renderGoalsPanel(){
  const list = document.getElementById("builder-goals-list");
  if(!list) return;

  if(state.builder.goals.length === 0){
    list.innerHTML = '<li class="empty-note">Nenhuma meta adicionada. Escolha um exercício e defina o foco do treino.</li>';
    renderGoalsDonut("goal-donut-builder", []);
    return;
  }

  list.innerHTML = state.builder.goals.map((goal, index) => {
    const programs = goal.programs && goal.programs.length
      ? goal.programs.join(", ")
      : "Treino personalizado";
    const target = goal.target ? `${goal.target}` : `${goal.sets || 3}x${goal.reps || 10}`;
    const goalType = goal.goalType || "Meta";
    const level = goal.level || "Nível";
    return `
      <li>
        <div><strong>${goal.label}</strong> <span>${goal.exercise}</span></div>
        <small>${goalType} · ${level}</small>
        <small>${target}</small>
        <small>Melhores treinos: ${programs}</small>
        <button class="chip tiny" data-goal-index="${index}" style="margin-top:6px;">Remover</button>
      </li>
    `;
  }).join("");

  list.querySelectorAll("button[data-goal-index]").forEach(btn => {
    btn.addEventListener("click", () => {
      state.builder.goals.splice(Number(btn.dataset.goalIndex), 1);
      renderGoalsPanel();
    });
  });

  renderGoalsDonut("goal-donut-builder", state.builder.goals.map(g => ({
    label: g.label,
    value: Number(g.value) || 100 / Math.max(state.builder.goals.length, 1),
  })));
  renderGoalRecommendations();
}

function getRecommendedProgramsForExercise(exerciseName){
  if(!exerciseName) return [];
  const normalized = exerciseName.toLowerCase();
  return GUIDED_PROGRAMS
    .filter(program => program.exercises.some(item => item.name && item.name.toLowerCase().includes(normalized)))
    .map(program => program.name);
}

function addGoalFromExercise(){
  const exerciseNames = [...new Set(exerciseDB.map(ex => ex.nome))].sort();

  showCustomModal({
    title: "Adicionar meta",
    submitText: "Salvar meta",
    fields: [
      {
        name: "goalType",
        label: "Meta",
        type: "select",
        value: GOAL_TYPES[0],
        options: GOAL_TYPES.map(name => ({ value: name, label: name })),
      },
      {
        name: "level",
        label: "Nível",
        type: "select",
        value: GOAL_LEVELS[0],
        options: GOAL_LEVELS.map(name => ({ value: name, label: name })),
      },
      {
        name: "exercise",
        label: "Exercício",
        type: "select",
        value: exerciseNames[0] || "Pull Up",
        options: exerciseNames.map(name => ({ value: name, label: name })),
      },
      { name: "label", label: "Nome da meta", type: "text", value: "Força funcional" },
      { name: "sets", label: "Séries", type: "number", value: 3, min: 1 },
      { name: "reps", label: "Repetições por série", type: "number", value: 10, min: 1 },
    ],
    onSubmit: ({ goalType, level, exercise, label, sets, reps }) => {
      const selected = exerciseDB.find(ex => ex.nome.toLowerCase() === String(exercise).trim().toLowerCase())
        || exerciseDB.find(ex => ex.nome.toLowerCase().includes(String(exercise).trim().toLowerCase()));

      if(!selected){
        showToast("Exercício não encontrado na biblioteca.");
        return;
      }

      const goalLabel = String(label || "Força funcional").trim();
      if(!goalLabel){
        showToast("Informe o nome da meta.");
        return;
      }

      const safeSets = Number(sets) || 3;
      const safeReps = Number(reps) || 10;
      const target = `${safeSets}x${safeReps}`;

      state.builder.goals.push({
        label: goalLabel,
        goalType: goalType || GOAL_TYPES[0],
        level: level || GOAL_LEVELS[0],
        exercise: selected.nome,
        sets: safeSets,
        reps: safeReps,
        value: 100,
        target,
        programs: getRecommendedProgramsForExercise(selected.nome),
      });

      renderGoalsPanel();
      showToast(`${selected.nome} adicionado como meta`);
    }
  });
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
    const name = state.builder.name.trim() || `Treino ${WEEKDAYS[state.builder.activeDay]}`;
    const allExercises = WEEKDAYS.flatMap(day =>
      state.builder.plan[day].map(ex => ({
        name: ex.nome,
        sets: `${ex.sets || 3}x${ex.reps || 10}`,
        image: exerciseImage(ex) || "fotos/capa.png",
        nivel: ex.nivel || "Intermediário",
        xp: ex.xp || 10,
      }))
    );

    if(allExercises.length === 0){
      showToast("Adicione ao menos um exercício antes de salvar");
      return;
    }

    saveWorkoutFromPlan({
      name,
      exercises: allExercises,
      day: state.builder.activeDay,
      hero: allExercises[0].image || "fotos/planche.png",
    });
    showToast(`"${name}" salvo na agenda!`);
  });

  const goalAddButton = document.querySelector(".goal-add");
  if(goalAddButton){
    goalAddButton.addEventListener("click", addGoalFromExercise);
  }
}

/* ============================================================================
   MÓDULOS DE PROGRESSÃO — cards + página de detalhe
   ========================================================================== */
function renderModules(containerId){
  const wrap = document.getElementById(containerId);
  if(!wrap) return;

  wrap.innerHTML = GUIDED_PROGRAMS.map(p => `
    <div class="module-card" data-id="${p.id}" style="background-image:url('${p.hero}')">
      <span class="level">${p.level.replace("Treino ","")}</span>
      <img src="${p.hero}" alt="${p.name}" />
      <div class="module-card-copy">
        <span class="tag">${p.name}</span>
        <small>${(p.exercises || []).slice(0, 3).map(ex => ex.name || ex.nome).join(" • ")}</small>
      </div>
    </div>
  `).join("");

  wrap.querySelectorAll(".module-card").forEach(card=>{
    card.addEventListener("click", ()=> {
      const id = card.dataset.id;
      const program = GUIDED_PROGRAMS.find(item => item.id === id);
      if(program){
        const workout = buildWorkoutFromProgram(program, { id: `module-${program.id}` });
        const exists = state.savedWorkouts.some(item => item.id === workout.id);
        if(!exists){
          state.savedWorkouts.unshift(workout);
        }
        renderMyWorkouts();
      }
      goTo("detail", {programId: id});
    });
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
  const workouts = getSavedWorkouts();
  const grid = document.getElementById("my-workouts-grid");
  if(!grid) return;

  grid.innerHTML = workouts.map(workout => `
    <article class="workout-card" data-workout-id="${workout.id}" data-workout-source="${workout.source || "module"}">
      <img src="${workout.hero || "fotos/capa.png"}" alt="${workout.name}">
      <div class="workout-card-body">
        <div class="workout-header">
          <h4>${workout.name}</h4>
          <span>${workout.level}</span>
        </div>
        <p>${workout.summary || "Treino guiado com progressão e foco em execução."}</p>
        <ul>
          ${(workout.exercises || []).slice(0, 3).map(ex => `<li>${ex.name}</li>`).join("")}
        </ul>
        <div class="workout-actions">
          <button class="chip tiny" data-edit-workout="${workout.id}">Editar</button>
          <button class="chip tiny danger" data-delete-workout="${workout.id}">Excluir</button>
        </div>
      </div>
    </article>
  `).join("");

  grid.onclick = (event) => {
    const editButton = event.target.closest("button[data-edit-workout]");
    if (editButton) {
      event.stopPropagation();
      editSavedWorkout(editButton.dataset.editWorkout);
      return;
    }

    const deleteButton = event.target.closest("button[data-delete-workout]");
    if (deleteButton) {
      event.stopPropagation();
      deleteSavedWorkout(deleteButton.dataset.deleteWorkout);
      return;
    }

    const card = event.target.closest(".workout-card");
    if (card && card.dataset.workoutId) {
      goTo("session", { programId: card.dataset.workoutId, exIndex: 0 });
    }
  };

  renderCalendar("cal-grid-2", "cal-month-label-2", buildWorkoutAgendaMap());
  renderWorkoutAgendaList();
}

/* ============================================================================
   SESSÃO DE TREINO — cronômetro
   ========================================================================== */
function startWorkoutTimer(){
  if(state.session.workoutRunning) return;
  state.session.workoutRunning = true;
  state.session.workoutTimerHandle = setInterval(() => {
    state.session.totalSeconds++;
    updateWorkoutDisplay();
  }, 1000);
}

function stopWorkoutTimer(){
  state.session.workoutRunning = false;
  clearInterval(state.session.workoutTimerHandle);
  state.session.workoutTimerHandle = null;
}

function resolveSessionProgram(programId){
  const fromGuided = GUIDED_PROGRAMS.find(x => x.id === programId);
  if (fromGuided) return fromGuided;

  const fromSaved = state.savedWorkouts.find(workout => workout.id === programId);
  if (!fromSaved) return GUIDED_PROGRAMS[0];

  return {
    id: fromSaved.id,
    name: fromSaved.name,
    level: fromSaved.level,
    intro: fromSaved.summary,
    hero: fromSaved.hero,
    exercises: (fromSaved.exercises || []).map((ex, index) => {
      const base = findExercise(ex.name || ex.nome) || {};
      return {
        name: ex.name || ex.nome || `Exercício ${index + 1}`,
        sets: ex.sets || `${Math.max(3, index + 3)}x10`,
        reps: ex.reps || 10,
        nivel: ex.nivel || base.nivel || "Intermediário",
        xp: ex.xp || base.xp || 10,
        duracao: ex.duracao || base.duracao || 45,
        video: ex.video || base.video || "",
        gif: ex.image || ex.gif || base.gif || "",
        ...base,
      };
    }),
    goals: (fromSaved.exercises || []).map(ex => ({ label: ex.name || ex.nome || "Exercício", value: ex.sets || "3x10" }))
  };
}

function startSession(programId, exIndex){
  const p = resolveSessionProgram(programId) || GUIDED_PROGRAMS[0];
  state.session.programId = p.id;
  state.session.exIndex = exIndex || 0;
  stopTimer();
  state.session.seconds = 0;
  state.session.totalSeconds = 0;
  startWorkoutTimer();
  renderSessionExercise();
}

function currentSessionExercise(){
  const p = resolveSessionProgram(state.session.programId);
  if(!p || !Array.isArray(p.exercises) || !p.exercises.length){
    return { program: { exercises: [] }, ex: null };
  }
  return { program: p, ex: p.exercises[state.session.exIndex] || p.exercises[0] };
}

function exerciseNeedsTimer(ex = {}){
  const text = `${ex.name || ex.nome || ""} ${ex.tipo || ""}`.toLowerCase();
  const timedKeywords = ["hold","holds","stand","walk","lever","planche","flag","stretch","alongamento","aquecimento","pike","hollow","bridge","hang"];
  return timedKeywords.some(keyword => text.includes(keyword));
}

function renderSessionExercise(){
  const { program, ex } = currentSessionExercise();
  if(!ex) return;
  const cfg = normalizeExerciseConfig(ex);
  const needsTimer = exerciseNeedsTimer(ex);

  document.getElementById("session-exname").textContent = ex.name;
  const setLabel = `${cfg.sets} série${cfg.sets > 1 ? "s" : ""}`;
  const repLabel = `${cfg.reps} rep${cfg.reps > 1 ? "etições" : "etição"}`;
  document.getElementById("session-exsets").textContent = `${setLabel} • ${repLabel}`;
  document.getElementById("session-exindex").textContent = state.session.exIndex + 1;
  document.getElementById("session-extotal").textContent = program.exercises.length;

  const pauseEl = document.getElementById("session-pause-text");
  if(pauseEl){
    pauseEl.textContent = needsTimer ? `Pausa: ${cfg.rest}s` : "Pausa: aguardando conclusão da série";
  }

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

  const timerWrap = document.querySelector(".timer-wrap");
  if(timerWrap) timerWrap.style.opacity = needsTimer ? "1" : "0.35";

  state.session.seconds = 0;
  state.session.pauseSeconds = cfg.rest;
  state.session.seriesStarted = false;
  state.session.running = false;
  state.session.pauseRunning = false;
  clearInterval(state.session.timerHandle);
  state.session.timerHandle = null;
  const playIcon = document.getElementById("timer-play-icon");
  if(playIcon) playIcon.textContent = "▶";
  const startBtn = document.getElementById("session-pause-btn");
  if(startBtn) startBtn.textContent = "Iniciar série";
  updateTimerDisplay();
  updateWorkoutDisplay();
  updateTimerRing();
}

function formatTime(totalSeconds){
  const m = String(Math.floor(totalSeconds/60)).padStart(2,"0");
  const s = String(totalSeconds%60).padStart(2,"0");
  return `${m}:${s}`;
}

function updateTimerDisplay(){
  const displaySeconds = state.session.pauseRunning ? state.session.pauseSeconds : state.session.seconds;
  document.getElementById("timer-time").textContent = formatTime(displaySeconds);
}

function updateWorkoutDisplay(){
  const el = document.getElementById("session-total-time");
  if(el) el.textContent = `Tempo total: ${formatTime(state.session.totalSeconds)}`;
}

function updateTimerRing(){
  const circle = document.getElementById("timer-fg");
  const r = 130;
  const circumference = 2*Math.PI*r;
  circle.style.strokeDasharray = `${circumference} ${circumference}`;
  const activeSeconds = state.session.pauseRunning ? state.session.pauseSeconds : state.session.seconds;
  const progress = activeSeconds > 0 ? (activeSeconds % 60) / 60 : 0;
  circle.style.strokeDashoffset = circumference * (1-progress);
}

function playSignal(type = "exercise"){
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  if(!AudioCtx) return;

  const ctx = new AudioCtx();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type === "pause" ? "triangle" : "square";
  osc.frequency.value = type === "pause" ? 440 : 880;
  gain.gain.value = 0.03;
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start();
  setTimeout(() => {
    osc.stop();
    ctx.close();
  }, 180);
}

function toggleTimer(){
  if(!state.session.programId){
    showToast("Inicie um treino antes de usar o cronômetro do exercício.");
    return;
  }

  if(state.session.running){
    stopTimer();
    return;
  }

  state.session.running = true;
  document.getElementById("timer-play-icon").textContent = "⏸";
  state.session.timerHandle = setInterval(() => {
    state.session.seconds++;
    updateTimerDisplay();
    updateTimerRing();
  }, 1000);
}

function stopTimer(){
  state.session.running = false;
  clearInterval(state.session.timerHandle);
  state.session.timerHandle = null;
  const icon = document.getElementById("timer-play-icon");
  if(icon) icon.textContent = "▶";
}

function togglePauseTimer(){
  const current = currentSessionExercise().ex;
  if(!current){
    showToast("Inicie um treino antes de usar a série.");
    return;
  }

  const needsTimer = exerciseNeedsTimer(current);
  const cfg = normalizeExerciseConfig(current);
  const startBtn = document.getElementById("session-pause-btn");

  if(state.session.pauseRunning){
    clearInterval(state.session.pauseHandle);
    state.session.pauseRunning = false;
    if(startBtn) startBtn.textContent = "Iniciar série";
    return;
  }

  if(!state.session.seriesStarted){
    state.session.seriesStarted = true;
    if(needsTimer){
      state.session.running = true;
      document.getElementById("timer-play-icon").textContent = "⏸";
      state.session.timerHandle = setInterval(() => {
        state.session.seconds++;
        updateTimerDisplay();
        updateTimerRing();
      }, 1000);
      playSignal("exercise");
      showToast("Série iniciada — cronômetro do exercício ligado.");
    } else {
      stopTimer();
      state.session.running = false;
      document.getElementById("timer-play-icon").textContent = "▶";
      state.session.seconds = 0;
      updateTimerDisplay();
      updateTimerRing();
      playSignal("exercise");
      showToast("Série iniciada — conclua a série para começar o descanso.");
    }
    if(startBtn) startBtn.textContent = "Concluir série";
    return;
  }

  if(needsTimer && state.session.running){
    stopTimer();
  }

  state.session.seriesStarted = false;
  state.session.pauseSeconds = cfg.rest;
  state.session.pauseRunning = true;
  state.session.running = false;
  clearInterval(state.session.timerHandle);
  state.session.timerHandle = null;
  state.session.seconds = state.session.pauseSeconds;
  updateTimerDisplay();
  updateTimerRing();
  if(startBtn) startBtn.textContent = "Pausa ativa";
  playSignal("pause");
  showToast("Série concluída — descanso iniciado.");

  state.session.pauseHandle = setInterval(() => {
    state.session.pauseSeconds = Math.max(0, state.session.pauseSeconds - 1);
    state.session.seconds = state.session.pauseSeconds;
    const pauseEl = document.getElementById("session-pause-text");
    if(pauseEl) pauseEl.textContent = `Pausa: ${state.session.pauseSeconds}s`;
    updateTimerDisplay();
    updateTimerRing();

    if(state.session.pauseSeconds <= 0){
      clearInterval(state.session.pauseHandle);
      state.session.pauseRunning = false;
      state.session.seconds = 0;
      if(startBtn) startBtn.textContent = "Iniciar série";
      playSignal("pause");
      showToast("Descanso encerrado. Próxima série.");
      const resetPauseEl = document.getElementById("session-pause-text");
      if(resetPauseEl) resetPauseEl.textContent = `Pausa: ${cfg.rest}s`;
      updateTimerDisplay();
      updateTimerRing();
    }
  }, 1000);
}

function nextExercise(){
  const { program, ex } = currentSessionExercise();
  if(!ex || !program.exercises.length){
    showToast("Nenhum exercício ativo para avançar.");
    return;
  }
  stopTimer();
  if(state.session.pauseHandle) clearInterval(state.session.pauseHandle);
  state.session.pauseRunning = false;
  state.session.seriesStarted = false;
  playSignal("exercise");
  state.session.seconds = 0;
  state.session.exIndex = (state.session.exIndex + 1) % program.exercises.length;
  renderSessionExercise();
}

function finishSession(){
  stopTimer();
  stopWorkoutTimer();
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

  const closeModalBtn = document.getElementById("custom-modal-close");
  if(closeModalBtn) closeModalBtn.addEventListener("click", hideCustomModal);
  const cancelModalBtn = document.getElementById("custom-modal-cancel");
  if(cancelModalBtn) cancelModalBtn.addEventListener("click", hideCustomModal);
  const modalBackdrop = document.querySelector("[data-close-modal='true']");
  if(modalBackdrop) modalBackdrop.addEventListener("click", hideCustomModal);

  state.savedWorkouts = GUIDED_PROGRAMS.map(program => buildWorkoutFromProgram(program));
  initBuilder();
  renderModules("modules-grid");
  renderMyWorkouts();
  renderDashboard();

  document.getElementById("timer-toggle-btn").addEventListener("click", toggleTimer);
  document.getElementById("timer-next-btn").addEventListener("click", nextExercise);
  document.getElementById("timer-reset-btn").addEventListener("click", ()=>{
    stopTimer(); state.session.seconds = 0; updateTimerDisplay(); updateTimerRing();
  });
  document.getElementById("session-next-link").addEventListener("click", nextExercise);
  document.getElementById("session-finish-link").addEventListener("click", finishSession);
  const pauseBtn = document.getElementById("session-pause-btn");
  if(pauseBtn){ pauseBtn.addEventListener("click", togglePauseTimer); }

  goTo("home");
});
