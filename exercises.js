/* ==========================================================================
   CALISTENES — Biblioteca de exercícios
   Fonte: Calisthenics Blue v2.0 (exerciseDB) — 160+ exercícios.
   Este arquivo é só dados; a lógica de exibição fica em app.js.
   ========================================================================== */

const exerciseDB = [

    // ==========================================
    // FORÇA - PULL (COSTAS E BÍCEPS)
    // ==========================================
    { nome: "Australian Pull Up", nivel: "Iniciante", grupo_principal: "Costas", grupos_secundarios: ["Bíceps", "Core"], tipo: "Pull", xp: 15, duracao: 45, video: "UaTnPqbK9ZA", gif: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjlhanBpYWJ4OTM3Znk2YzUyMmU2ZjFsd2g5ZmYydWI2cjVkZms3MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WB4AIcJh76pWq2W5wn/giphy.gif" },
    { nome: "Pull Up", nivel: "Iniciante", grupo_principal: "Costas", grupos_secundarios: ["Bíceps", "Antebraço"], tipo: "Pull", xp: 20, duracao: 45, video: "eGo4IYlbE5g", gif: "https://i.pinimg.com/originals/6a/48/f2/6a48f2ce2ed77de80e7e139036638cf2.gif" },
    { nome: "Chin Up", nivel: "Iniciante", grupo_principal: "Bíceps", grupos_secundarios: ["Dorsal", "Core"], tipo: "Pull", xp: 20, duracao: 45, video: "e1YSApl-QcM", gif: "https://hips.hearstapps.com/hmg-prod/images/workouts/2016/03/chinup-1457101678.gif?crop=1xw:1xh;center,top&resize=980:*" },
    { nome: "Negative Pull Up", nivel: "Iniciante", grupo_principal: "Costas", grupos_secundarios: ["Bíceps"], tipo: "Pull", xp: 18, duracao: 45, video: "k9cq7kLG1UA", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Negative-Pull-Up.gif" },
    { nome: "Scapular Pull Up", nivel: "Iniciante", grupo_principal: "Costas", grupos_secundarios: ["Trapézio"], tipo: "Pull", xp: 12, duracao: 45, video: "lYfG-I9_5m0", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Scapular-Pull-Up.gif" },
    { nome: "Wide Pull Up", nivel: "Intermediário", grupo_principal: "Costas", grupos_secundarios: ["Bíceps"], tipo: "Pull", xp: 28, duracao: 45, video: "dVyjwHGxL4g", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Wide-Pull-Up.gif" },
    { nome: "Archer Pull Up", nivel: "Intermediário", grupo_principal: "Costas", grupos_secundarios: ["Bíceps", "Ombro"], tipo: "Pull", xp: 35, duracao: 45, video: "LGLKUiQH5k", gif: "https://media.giphy.com/media/MAoPEuidcfXxprfkNZ/giphy.gif" },
    { nome: "Typewriter Pull Up", nivel: "Intermediário", grupo_principal: "Costas", grupos_secundarios: ["Bíceps", "Core"], tipo: "Pull", xp: 35, duracao: 45, video: "bEp2oBM47C0", gif: "https://i.makeagif.com/media/6-21-2026/aOVWQN.gif" },
    { nome: "Chest-to-Bar Pull Up", nivel: "Intermediário", grupo_principal: "Costas", grupos_secundarios: ["Bíceps", "Trapézio"], tipo: "Pull", xp: 35, duracao: 45, video: "SmduaQzt8Jk", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Chest-to-Bar-Pull-Up.gif" },
    { nome: "L-Sit Pull Up", nivel: "Intermediário", grupo_principal: "Costas", grupos_secundarios: ["Core", "Bíceps"], tipo: "Pull", xp: 38, duracao: 45, video: "nOK3xXDEk4E", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/L-Sit-Pull-Up.gif" },
    { nome: "Explosive Pull Up", nivel: "Intermediário", grupo_principal: "Costas", grupos_secundarios: ["Bíceps", "Ombro"], tipo: "Pull", xp: 40, duracao: 45, video: "DpAoHo3T3f0", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Explosive-Pull-Up.gif" },
    { nome: "Muscle Up", nivel: "Avançado", grupo_principal: "Costas", grupos_secundarios: ["Peitoral", "Tríceps", "Core"], tipo: "Pull", xp: 70, duracao: 45, video: "_eQ2gw_Gg5Y", gif: "https://fitnessprogramer.com/wp-content/uploads/2015/08/Muscle-Up.gif" },
    { nome: "One Arm Pull Up", nivel: "Avançado", grupo_principal: "Costas", grupos_secundarios: ["Bíceps", "Core"], tipo: "Pull", xp: 80, duracao: 45, video: "vdjWgw98EeI", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/One-Arm-Pull-Up.gif" },

    // ==========================================
    // FORÇA - PUSH (PEITORAL, OMBROS, TRÍCEPS)
    // ==========================================
    { nome: "Incline Push Up", nivel: "Iniciante", grupo_principal: "Peitoral", grupos_secundarios: ["Ombro", "Tríceps"], tipo: "Push", xp: 10, duracao: 45, video: "Me9bHFAxnCs", gif: "https://fitnessprogramer.com/wp-content/uploads/2015/08/Incline-Push-Up.gif" },
    { nome: "Push Up", nivel: "Iniciante", grupo_principal: "Peitoral", grupos_secundarios: ["Ombro", "Tríceps"], tipo: "Push", xp: 12, duracao: 45, video: "IODxDxX7oi4", gif: "https://fitnessprogramer.com/wp-content/uploads/2015/08/Push-Up.gif" },
    { nome: "Knee Push Up", nivel: "Iniciante", grupo_principal: "Peitoral", grupos_secundarios: ["Ombro", "Tríceps"], tipo: "Push", xp: 8, duracao: 45, video: "jW5sCKf3GqM", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Knee-Push-Up.gif" },
    { nome: "Diamond Push Up", nivel: "Iniciante", grupo_principal: "Tríceps", grupos_secundarios: ["Peitoral"], tipo: "Push", xp: 15, duracao: 45, video: "kGhDnFwMY3E", gif: "https://fitnessprogramer.com/wp-content/uploads/2015/08/Diamond-Push-Up.gif" },
    { nome: "Decline Push Up", nivel: "Intermediário", grupo_principal: "Peitoral Superior", grupos_secundarios: ["Ombro"], tipo: "Push", xp: 25, duracao: 45, video: "QBlYp-EwHlo", gif: "https://fitnessprogramer.com/wp-content/uploads/2015/08/Decline-Push-Up.gif" },
    { nome: "Wide Push Up", nivel: "Intermediário", grupo_principal: "Peitoral", grupos_secundarios: ["Ombro"], tipo: "Push", xp: 22, duracao: 45, video: "V8SfdNj4AZ4", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Wide-Push-Up.gif" },
    { nome: "Archer Push Up", nivel: "Intermediário", grupo_principal: "Peitoral", grupos_secundarios: ["Ombro", "Core"], tipo: "Push", xp: 30, duracao: 45, video: "MxVbNel13Ek", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Archer-Push-Up.gif" },
    { nome: "Ring Push Up", nivel: "Intermediário", grupo_principal: "Peitoral", grupos_secundarios: ["Core", "Ombro"], tipo: "Push", xp: 30, duracao: 45, video: "7FRwuB1_l7U", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Ring-Push-Up.gif" },
    { nome: "Pseudo Planche Push Up", nivel: "Avançado", grupo_principal: "Ombro", grupos_secundarios: ["Peitoral", "Core"], tipo: "Push", xp: 55, duracao: 45, video: "i33vHrgElkE", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Pseudo-Planche-Push-Up.gif" },
    { nome: "One Arm Push Up Progressão", nivel: "Avançado", grupo_principal: "Peitoral", grupos_secundarios: ["Tríceps", "Core"], tipo: "Push", xp: 65, duracao: 45, video: "bWqDvHweWfo", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/One-Arm-Push-Up-Progression.gif" },
    { nome: "Planche Push Up", nivel: "Avançado", grupo_principal: "Ombro", grupos_secundarios: ["Peitoral", "Core"], tipo: "Push", xp: 75, duracao: 45, video: "TZ63httkob4", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Planche-Push-Up.gif" },

    // ==========================================
    // FORÇA - OMBROS
    // ==========================================
    { nome: "Pike Hold", nivel: "Iniciante", grupo_principal: "Ombros", grupos_secundarios: ["Core"], tipo: "Ombros", xp: 12, duracao: 30, video: "lIZ_C4VJnmc", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Pike-Hold.gif" },
    { nome: "Pike Push Up", nivel: "Iniciante", grupo_principal: "Ombros", grupos_secundarios: ["Tríceps"], tipo: "Ombros", xp: 18, duracao: 45, video: "Vr07z6qK2ec", gif: "https://fitnessprogramer.com/wp-content/uploads/2015/08/Pike-Push-Up.gif" },
    { nome: "Elevated Pike Push Up", nivel: "Intermediário", grupo_principal: "Ombros", grupos_secundarios: ["Core"], tipo: "Ombros", xp: 28, duracao: 45, video: "DG-NcMnfZ_0", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Elevated-Pike-Push-Up.gif" },
    { nome: "Wall Handstand Hold", nivel: "Intermediário", grupo_principal: "Ombros", grupos_secundarios: ["Core"], tipo: "Ombros", xp: 25, duracao: 30, video: "vZIl_i10B6c", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Wall-Handstand-Hold.gif" },
    { nome: "Handstand Push Up Negativa", nivel: "Intermediário", grupo_principal: "Ombros", grupos_secundarios: ["Tríceps"], tipo: "Ombros", xp: 32, duracao: 45, video: "76u4GXz1Wqg", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Handstand-Push-Up-Negative.gif" },
    { nome: "Handstand Push Up", nivel: "Avançado", grupo_principal: "Ombros", grupos_secundarios: ["Core", "Tríceps"], tipo: "Ombros", xp: 60, duracao: 45, video: "SKV4HFHO7as", gif: "https://fitnessprogramer.com/wp-content/uploads/2015/08/Handstand-Push-Up.gif" },
    { nome: "Freestanding HSPU", nivel: "Avançado", grupo_principal: "Ombros", grupos_secundarios: ["Core"], tipo: "Ombros", xp: 70, duracao: 45, video: "MlA7kq0oAYs", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Freestanding-HSPU.gif" },

    // ==========================================
    // FORÇA - TRÍCEPS
    // ==========================================
    { nome: "Bench Dip", nivel: "Iniciante", grupo_principal: "Tríceps", grupos_secundarios: ["Peitoral"], tipo: "Tríceps", xp: 10, duracao: 45, video: "c3VPhFAFaXs", gif: "https://fitnessprogramer.com/wp-content/uploads/2015/08/Bench-Dip.gif" },
    { nome: "Parallel Bar Dip", nivel: "Intermediário", grupo_principal: "Tríceps", grupos_secundarios: ["Peitoral"], tipo: "Tríceps", xp: 28, duracao: 45, video: "k7BID1OsQ70", gif: "https://fitnessprogramer.com/wp-content/uploads/2015/08/Parallel-Bar-Dip.gif" },
    { nome: "Korean Dip", nivel: "Intermediário", grupo_principal: "Tríceps", grupos_secundarios: ["Ombro"], tipo: "Tríceps", xp: 32, duracao: 45, video: "2d7Cb9N7z6k", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Korean-Dip.gif" },
    { nome: "Ring Dip", nivel: "Avançado", grupo_principal: "Tríceps", grupos_secundarios: ["Core"], tipo: "Tríceps", xp: 50, duracao: 45, video: "3SfEFyM-0c0", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Ring-Dip.gif" },
    { nome: "Straight Bar Dip", nivel: "Avançado", grupo_principal: "Tríceps", grupos_secundarios: ["Peitoral"], tipo: "Tríceps", xp: 55, duracao: 45, video: "A4GpCkJyqj4", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Straight-Bar-Dip.gif" },
    { nome: "Impossible Dip", nivel: "Elite", grupo_principal: "Tríceps", grupos_secundarios: ["Ombros", "Core"], tipo: "Tríceps", xp: 90, duracao: 45, video: "R4F9kFqOfgs", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Impossible-Dip.gif" },

    // ==========================================
    // FORÇA - CORE (ABDÔMEN E LOMBAR)
    // ==========================================
    { nome: "Hollow Body Hold", nivel: "Iniciante", grupo_principal: "Abdômen", grupos_secundarios: ["Lombar"], tipo: "Core", xp: 10, duracao: 30, video: "p7_haM69g4c", gif: "https://fitnessprogramer.com/wp-content/uploads/2015/08/Hollow-Body-Hold.gif" },
    { nome: "Dead Bug", nivel: "Iniciante", grupo_principal: "Abdômen", grupos_secundarios: ["Lombar"], tipo: "Core", xp: 10, duracao: 45, video: "0ZqT0O4eP7g", gif: "https://fitnessprogramer.com/wp-content/uploads/2015/08/Dead-Bug.gif" },
    { nome: "Knee Raise", nivel: "Iniciante", grupo_principal: "Abdômen", grupos_secundarios: ["Flexores do Quadril"], tipo: "Core", xp: 12, duracao: 45, video: "N_b9Qq71W80", gif: "https://fitnessprogramer.com/wp-content/uploads/2015/08/Knee-Raise.gif" },
    { nome: "Leg Raise", nivel: "Intermediário", grupo_principal: "Abdômen", grupos_secundarios: ["Core"], tipo: "Core", xp: 22, duracao: 45, video: "9H4K7jI7K_M", gif: "https://fitnessprogramer.com/wp-content/uploads/2015/08/Leg-Raise.gif" },
    { nome: "Toes to Bar", nivel: "Intermediário", grupo_principal: "Abdômen", grupos_secundarios: ["Costas"], tipo: "Core", xp: 28, duracao: 45, video: "RiwR5yHm2qU", gif: "https://fitnessprogramer.com/wp-content/uploads/2015/08/Toes-to-Bar.gif" },
    { nome: "Dragon Flag", nivel: "Avançado", grupo_principal: "Core", grupos_secundarios: ["Lombar"], tipo: "Core", xp: 55, duracao: 30, video: "K1U7vK5QbG0", gif: "https://fitnessprogramer.com/wp-content/uploads/2015/08/Dragon-Flag.gif" },
    { nome: "Windshield Wiper", nivel: "Avançado", grupo_principal: "Core", grupos_secundarios: ["Ombros"], tipo: "Core", xp: 60, duracao: 30, video: "2IzXVd1jG30", gif: "https://fitnessprogramer.com/wp-content/uploads/2015/08/Windshield-Wiper.gif" },
    { nome: "L-Sit (no chão)", nivel: "Intermediário", grupo_principal: "Core", grupos_secundarios: ["Flexores do Quadril", "Tríceps"], tipo: "Core", xp: 35, duracao: 30, video: "3QpZ0j9f9h0", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/L-Sit.gif" },
    { nome: "V-Sit", nivel: "Avançado", grupo_principal: "Core", grupos_secundarios: ["Flexores do Quadril"], tipo: "Core", xp: 65, duracao: 30, video: "M2Cj6V_6lD4", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/V-Sit.gif" },
    { nome: "Manna", nivel: "Elite", grupo_principal: "Core", grupos_secundarios: ["Ombros", "Flexibilidade"], tipo: "Core", xp: 100, duracao: 30, video: "eY2uK2vGmS8", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Manna.gif" },

    // ==========================================
    // FORÇA - PERNAS
    // ==========================================
    { nome: "Agachamento Livre", nivel: "Iniciante", grupo_principal: "Quadríceps", grupos_secundarios: ["Glúteos"], tipo: "Pernas", xp: 12, duracao: 45, video: "Qc_fGcL45e0", gif: "https://fitnessprogramer.com/wp-content/uploads/2015/08/Bodyweight-Squat.gif" },
    { nome: "Afundo", nivel: "Iniciante", grupo_principal: "Quadríceps", grupos_secundarios: ["Glúteos"], tipo: "Pernas", xp: 12, duracao: 45, video: "QOV7BwOP2iE", gif: "https://fitnessprogramer.com/wp-content/uploads/2015/08/Lunge.gif" },
    { nome: "Step Up", nivel: "Iniciante", grupo_principal: "Quadríceps", grupos_secundarios: ["Panturrilha"], tipo: "Pernas", xp: 10, duracao: 45, video: "1Tq3QdYUu88", gif: "https://fitnessprogramer.com/wp-content/uploads/2015/08/Step-Up.gif" },
    { nome: "Glute Bridge", nivel: "Iniciante", grupo_principal: "Glúteos", grupos_secundarios: ["Posterior da Coxa"], tipo: "Pernas", xp: 10, duracao: 45, video: "w2Wd7Q1A1go", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Glute-Bridge.gif" },
    { nome: "Bulgarian Split Squat", nivel: "Intermediário", grupo_principal: "Quadríceps", grupos_secundarios: ["Glúteos"], tipo: "Pernas", xp: 25, duracao: 45, video: "CbyE45cIeYk", gif: "https://fitnessprogramer.com/wp-content/uploads/2015/08/Bulgarian-Split-Squat.gif" },
    { nome: "Jump Squat", nivel: "Intermediário", grupo_principal: "Quadríceps", grupos_secundarios: ["Panturrilha"], tipo: "Pernas", xp: 22, duracao: 45, video: "wA9i0X9YqE0", gif: "https://fitnessprogramer.com/wp-content/uploads/2015/08/Jump-Squat.gif" },
    { nome: "Pistol Squat Assistido", nivel: "Intermediário", grupo_principal: "Quadríceps", grupos_secundarios: ["Core"], tipo: "Pernas", xp: 28, duracao: 45, video: "qD7L-0Jh6uU", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Assisted-Pistol-Squat.gif" },
    { nome: "Pistol Squat", nivel: "Avançado", grupo_principal: "Quadríceps", grupos_secundarios: ["Core"], tipo: "Pernas", xp: 50, duracao: 45, video: "6WJBPY7c0N8", gif: "https://fitnessprogramer.com/wp-content/uploads/2015/08/Pistol-Squat.gif" },
    { nome: "Shrimp Squat", nivel: "Avançado", grupo_principal: "Quadríceps", grupos_secundarios: ["Core"], tipo: "Pernas", xp: 52, duracao: 45, video: "iL2pkeQt41c", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Shrimp-Squat.gif" },
    { nome: "Nordic Curl (excêntrico)", nivel: "Avançado", grupo_principal: "Posterior da Coxa", grupos_secundarios: ["Glúteos"], tipo: "Pernas", xp: 48, duracao: 45, video: "HDBOjmJ_Bb4", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Nordic-Curl.gif" },

    // ==========================================
    // HABILIDADES - FRONT LEVER
    // ==========================================
    { nome: "Scapula Pull", nivel: "Iniciante", grupo_principal: "Front Lever", grupos_secundarios: ["Costas"], tipo: "Front Lever", xp: 15, duracao: 45, video: "xYwTLVIBu58", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Scapula-Pull.gif" },
    { nome: "Tuck Front Lever Hold", nivel: "Iniciante", grupo_principal: "Front Lever", grupos_secundarios: ["Core"], tipo: "Front Lever", xp: 20, duracao: 30, video: "d8GJc7T_Zko", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Tuck-Front-Lever-Hold.gif" },
    { nome: "Tuck Front Lever Pulls", nivel: "Iniciante", grupo_principal: "Front Lever", grupos_secundarios: ["Costas"], tipo: "Front Lever", xp: 22, duracao: 45, video: "N8oGxy1pFbI", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Tuck-Front-Lever-Pull.gif" },
    { nome: "Advanced Tuck Front Lever", nivel: "Intermediário", grupo_principal: "Front Lever", grupos_secundarios: ["Core"], tipo: "Front Lever", xp: 35, duracao: 30, video: "p-0Yxm3-rNg", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Advanced-Tuck-Front-Lever.gif" },
    { nome: "One Leg Front Lever", nivel: "Intermediário", grupo_principal: "Front Lever", grupos_secundarios: ["Core"], tipo: "Front Lever", xp: 40, duracao: 30, video: "O11uXKqnny8", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/One-Leg-Front-Lever.gif" },
    { nome: "Straddle Front Lever", nivel: "Avançado", grupo_principal: "Front Lever", grupos_secundarios: ["Core"], tipo: "Front Lever", xp: 60, duracao: 30, video: "HcXH-ZYPv6w", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Straddle-Front-Lever.gif" },
    { nome: "Full Front Lever", nivel: "Avançado", grupo_principal: "Front Lever", grupos_secundarios: ["Corpo inteiro"], tipo: "Front Lever", xp: 75, duracao: 30, video: "7U35X08dGqA", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Full-Front-Lever.gif" },
    { nome: "Front Lever Pull Up", nivel: "Elite", grupo_principal: "Front Lever", grupos_secundarios: ["Bíceps", "Core"], tipo: "Front Lever", xp: 100, duracao: 45, video: "GgqapEdbL5w", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Front-Lever-Pull-Up.gif" },

    // ==========================================
    // HABILIDADES - BACK LEVER
    // ==========================================
    { nome: "Skin the Cat", nivel: "Iniciante", grupo_principal: "Back Lever", grupos_secundarios: ["Ombros", "Costas"], tipo: "Back Lever", xp: 18, duracao: 45, video: "lZfR3GgD7UI", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Skin-the-Cat.gif" },
    { nome: "Tuck Back Lever", nivel: "Intermediário", grupo_principal: "Back Lever", grupos_secundarios: ["Core"], tipo: "Back Lever", xp: 35, duracao: 30, video: "gQpD3NjqP-0", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Tuck-Back-Lever.gif" },
    { nome: "Advanced Tuck Back Lever", nivel: "Intermediário", grupo_principal: "Back Lever", grupos_secundarios: ["Ombros"], tipo: "Back Lever", xp: 40, duracao: 30, video: "hC9W7mFnKhg", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Advanced-Tuck-Back-Lever.gif" },
    { nome: "One Leg Back Lever", nivel: "Intermediário", grupo_principal: "Back Lever", grupos_secundarios: ["Core"], tipo: "Back Lever", xp: 45, duracao: 30, video: "u_2l5pSMcQE", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/One-Leg-Back-Lever.gif" },
    { nome: "Straddle Back Lever", nivel: "Avançado", grupo_principal: "Back Lever", grupos_secundarios: ["Ombros"], tipo: "Back Lever", xp: 60, duracao: 30, video: "T6J4qG8yWpI", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Straddle-Back-Lever.gif" },
    { nome: "Full Back Lever", nivel: "Avançado", grupo_principal: "Back Lever", grupos_secundarios: ["Corpo inteiro"], tipo: "Back Lever", xp: 75, duracao: 30, video: "5V4A1yqP7Ic", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Full-Back-Lever.gif" },

    // ==========================================
    // HABILIDADES - PLANCHE
    // ==========================================
    { nome: "Frog Stand", nivel: "Iniciante", grupo_principal: "Planche", grupos_secundarios: ["Ombros"], tipo: "Planche", xp: 15, duracao: 30, video: "x8fEeM01YCE", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Frog-Stand.gif" },
    { nome: "Planche Lean", nivel: "Iniciante", grupo_principal: "Planche", grupos_secundarios: ["Ombros", "Core"], tipo: "Planche", xp: 18, duracao: 30, video: "uC8zHvHpD1Y", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Planche-Lean.gif" },
    { nome: "Tuck Planche", nivel: "Intermediário", grupo_principal: "Planche", grupos_secundarios: ["Ombros", "Core"], tipo: "Planche", xp: 35, duracao: 30, video: "ZcHaeGCyefA", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Tuck-Planche.gif" },
    { nome: "Advanced Tuck Planche", nivel: "Intermediário", grupo_principal: "Planche", grupos_secundarios: ["Ombros", "Core"], tipo: "Planche", xp: 40, duracao: 30, video: "Qq9lOqewhKk", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Advanced-Tuck-Planche.gif" },
    { nome: "Straddle Planche", nivel: "Avançado", grupo_principal: "Planche", grupos_secundarios: ["Ombros", "Core"], tipo: "Planche", xp: 65, duracao: 30, video: "ByKpXpCeoZ8", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Straddle-Planche.gif" },
    { nome: "Full Planche", nivel: "Avançado", grupo_principal: "Planche", grupos_secundarios: ["Corpo inteiro"], tipo: "Planche", xp: 85, duracao: 30, video: "wX-_9F7aOyM", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Full-Planche.gif" },
    { nome: "Planche Push Up (Elite)", nivel: "Elite", grupo_principal: "Planche", grupos_secundarios: ["Ombros", "Peitoral", "Core"], tipo: "Planche", xp: 110, duracao: 45, video: "X1mDqPeFq0g", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Planche-Push-Up-Elite.gif" },

    // ==========================================
    // HABILIDADES - HANDSTAND
    // ==========================================
    { nome: "Wall Walk", nivel: "Iniciante", grupo_principal: "Handstand", grupos_secundarios: ["Ombros", "Core"], tipo: "Handstand", xp: 15, duracao: 45, video: "sfrYbLmB2cM", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Wall-Walk.gif" },
    { nome: "Wall Handstand", nivel: "Iniciante", grupo_principal: "Handstand", grupos_secundarios: ["Ombros", "Core"], tipo: "Handstand", xp: 18, duracao: 30, video: "vZIl_i10B6c", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Wall-Handstand.gif" },
    { nome: "Shoulder Tap", nivel: "Intermediário", grupo_principal: "Handstand", grupos_secundarios: ["Ombros", "Core"], tipo: "Handstand", xp: 30, duracao: 45, video: "v80qEPRg3Vo", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Shoulder-Tap.gif" },
    { nome: "Freestanding Handstand", nivel: "Intermediário", grupo_principal: "Handstand", grupos_secundarios: ["Core"], tipo: "Handstand", xp: 40, duracao: 30, video: "nF9rDdqy2Jo", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Freestanding-Handstand.gif" },
    { nome: "Handstand Press", nivel: "Avançado", grupo_principal: "Handstand", grupos_secundarios: ["Ombros", "Core"], tipo: "Handstand", xp: 65, duracao: 45, video: "vZIl_i10B6c", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Handstand-Press.gif" },
    { nome: "One Arm Handstand", nivel: "Elite", grupo_principal: "Handstand", grupos_secundarios: ["Core", "Ombros"], tipo: "Handstand", xp: 120, duracao: 30, video: "S0YJtM9mP2w", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/One-Arm-Handstand.gif" },

    // ==========================================
    // HABILIDADES - HUMAN FLAG
    // ==========================================
    { nome: "Vertical Flag Hold", nivel: "Iniciante", grupo_principal: "Human Flag", grupos_secundarios: ["Ombros", "Core"], tipo: "Human Flag", xp: 20, duracao: 30, video: "fKJzRjUzI7Q", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Vertical-Flag-Hold.gif" },
    { nome: "Tuck Flag", nivel: "Intermediário", grupo_principal: "Human Flag", grupos_secundarios: ["Core", "Ombros"], tipo: "Human Flag", xp: 35, duracao: 30, video: "Jj5yF6R2vKE", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Tuck-Flag.gif" },
    { nome: "Advanced Tuck Flag", nivel: "Intermediário", grupo_principal: "Human Flag", grupos_secundarios: ["Core", "Ombros"], tipo: "Human Flag", xp: 40, duracao: 30, video: "6L8K3q0S8Y0", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Advanced-Tuck-Flag.gif" },
    { nome: "Straddle Flag", nivel: "Avançado", grupo_principal: "Human Flag", grupos_secundarios: ["Core", "Ombros"], tipo: "Human Flag", xp: 60, duracao: 30, video: "b7e8q8Y9q1U", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Straddle-Flag.gif" },
    { nome: "Full Human Flag", nivel: "Avançado", grupo_principal: "Human Flag", grupos_secundarios: ["Corpo inteiro"], tipo: "Human Flag", xp: 80, duracao: 30, video: "7VXZ8y1WvLk", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Full-Human-Flag.gif" },
    { nome: "Human Flag Pull Up", nivel: "Elite", grupo_principal: "Human Flag", grupos_secundarios: ["Costas", "Core", "Ombros"], tipo: "Human Flag", xp: 130, duracao: 45, video: "8u9PZ5bS7S4", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Human-Flag-Pull-Up.gif" },

    // ==========================================
    // HABILIDADES - L-SIT / V-SIT / MANNA
    // ==========================================
    { nome: "L-Sit Tuck Hold", nivel: "Iniciante", grupo_principal: "L-Sit", grupos_secundarios: ["Core", "Tríceps"], tipo: "L-Sit", xp: 15, duracao: 30, video: "GgY2lC6zKLA", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/L-Sit-Tuck.gif" },
    { nome: "L-Sit One Leg", nivel: "Intermediário", grupo_principal: "L-Sit", grupos_secundarios: ["Core"], tipo: "L-Sit", xp: 30, duracao: 30, video: "YtB6sYP0Uy0", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/One-Leg-L-Sit.gif" },
    { nome: "Full L-Sit", nivel: "Intermediário", grupo_principal: "L-Sit", grupos_secundarios: ["Flexores do Quadril"], tipo: "L-Sit", xp: 40, duracao: 30, video: "3QpZ0j9f9h0", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/L-Sit.gif" },
    { nome: "V-Sit Tuck", nivel: "Intermediário", grupo_principal: "V-Sit", grupos_secundarios: ["Core"], tipo: "L-Sit", xp: 45, duracao: 30, video: "oSZ1JqCbLr4", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/V-Sit-Tuck.gif" },
    { nome: "V-Sit", nivel: "Avançado", grupo_principal: "V-Sit", grupos_secundarios: ["Ombros"], tipo: "L-Sit", xp: 65, duracao: 30, video: "M2Cj6V_6lD4", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/V-Sit.gif" },
    { nome: "Manna", nivel: "Elite", grupo_principal: "Manna", grupos_secundarios: ["Ombros", "Core"], tipo: "L-Sit", xp: 100, duracao: 30, video: "eY2uK2vGmS8", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Manna.gif" },

    // ==========================================
    // CORPO INTEIRO (COMPOSTOS AVANÇADOS)
    // ==========================================
    { nome: "Muscle Up (Full Body)", nivel: "Avançado", grupo_principal: "Corpo Inteiro", grupos_secundarios: ["Costas", "Peitoral", "Ombros", "Tríceps", "Core"], tipo: "Corpo Inteiro", xp: 70, duracao: 45, video: "Gdxg5wI6Ckg", gif: "https://fitnessprogramer.com/wp-content/uploads/2015/08/Muscle-Up.gif" },
    { nome: "Front Lever Pull Up (Full)", nivel: "Elite", grupo_principal: "Corpo Inteiro", grupos_secundarios: ["Costas", "Bíceps", "Core"], tipo: "Corpo Inteiro", xp: 100, duracao: 45, video: "GgqapEdbL5w", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Front-Lever-Pull-Up.gif" },
    { nome: "Planche Push Up (Full)", nivel: "Elite", grupo_principal: "Corpo Inteiro", grupos_secundarios: ["Ombros", "Peitoral", "Core", "Tríceps"], tipo: "Corpo Inteiro", xp: 110, duracao: 45, video: "X1mDqPeFq0g", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Planche-Push-Up.gif" },
    { nome: "Human Flag (Full)", nivel: "Elite", grupo_principal: "Corpo Inteiro", grupos_secundarios: ["Ombros", "Costas", "Core"], tipo: "Corpo Inteiro", xp: 80, duracao: 30, video: "7VXZ8y1WvLk", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Full-Human-Flag.gif" },
    { nome: "One Arm Pull Up (Full)", nivel: "Elite", grupo_principal: "Corpo Inteiro", grupos_secundarios: ["Costas", "Bíceps", "Core"], tipo: "Corpo Inteiro", xp: 80, duracao: 45, video: "x7dyO7iCrGs", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/One-Arm-Pull-Up.gif" },
    { nome: "Full Planche (Full)", nivel: "Elite", grupo_principal: "Corpo Inteiro", grupos_secundarios: ["Corpo inteiro"], tipo: "Corpo Inteiro", xp: 85, duracao: 30, video: "wX-_9F7aOyM", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Full-Planche.gif" },
    { nome: "Full Front Lever (Full)", nivel: "Elite", grupo_principal: "Corpo Inteiro", grupos_secundarios: ["Corpo inteiro"], tipo: "Corpo Inteiro", xp: 75, duracao: 30, video: "7U35X08dGqA", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Full-Front-Lever.gif" },
    { nome: "Back Lever Pull Out", nivel: "Elite", grupo_principal: "Corpo Inteiro", grupos_secundarios: ["Costas", "Ombros"], tipo: "Corpo Inteiro", xp: 90, duracao: 45, video: "ZtHk4LqK-fc", gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Back-Lever-Pull-Out.gif" },

    // ==========================================
    // ALONGAMENTOS
    // ==========================================
    { nome: "Alongamento de Pescoço", nivel: "Iniciante", grupo_principal: "Cervical", grupos_secundarios: [], tipo: "Alongamento", xp: 10, duracao: 30, video: "2t_YJ8Tsh9U" },
    { nome: "Alongamento de Trapézio", nivel: "Iniciante", grupo_principal: "Pescoço/Ombros", grupos_secundarios: [], tipo: "Alongamento", xp: 10, duracao: 30, video: "p0Z-j_DbtO8" },
    { nome: "Alongamento de Ombros Cruzado", nivel: "Iniciante", grupo_principal: "Ombros", grupos_secundarios: [], tipo: "Alongamento", xp: 10, duracao: 30, video: "y6G62NqscU0" },
    { nome: "Alongamento de Tríceps", nivel: "Iniciante", grupo_principal: "Braços", grupos_secundarios: [], tipo: "Alongamento", xp: 10, duracao: 30, video: "iSgG2vDOfP0" },
    { nome: "Alongamento de Punhos", nivel: "Iniciante", grupo_principal: "Punhos", grupos_secundarios: [], tipo: "Alongamento", xp: 10, duracao: 30, video: "PstjC_0n8E0" },
    { nome: "Alongamento de Peitoral na Parede", nivel: "Iniciante", grupo_principal: "Peitoral", grupos_secundarios: [], tipo: "Alongamento", xp: 10, duracao: 30, video: "Z8f9mGf_KxY" },
    { nome: "Alongamento de Panturrilha", nivel: "Iniciante", grupo_principal: "Panturrilhas", grupos_secundarios: [], tipo: "Alongamento", xp: 10, duracao: 30, video: "m7aXunIn0rM" },
    { nome: "Alongamento de Quadríceps em Pé", nivel: "Iniciante", grupo_principal: "Coxas", grupos_secundarios: [], tipo: "Alongamento", xp: 10, duracao: 30, video: "z9aZ_D8UfI0" },
    { nome: "Alongamento Borboleta", nivel: "Iniciante", grupo_principal: "Adutores", grupos_secundarios: [], tipo: "Alongamento", xp: 10, duracao: 30, video: "MdZ977S9bX0" },
    { nome: "Alongamento Sentado para Isquiotibiais", nivel: "Iniciante", grupo_principal: "Posterior da Coxa", grupos_secundarios: [], tipo: "Alongamento", xp: 10, duracao: 30, video: "4_D6O08rKjU" },
    { nome: "Pancake Stretch", nivel: "Intermediário", grupo_principal: "Adutores", grupos_secundarios: ["Quadril"], tipo: "Alongamento", xp: 20, duracao: 45, video: "v_1H6XgGcoA" },
    { nome: "Alongamento de Flexores do Quadril", nivel: "Intermediário", grupo_principal: "Quadril", grupos_secundarios: [], tipo: "Alongamento", xp: 20, duracao: 45, video: "Ie6Y_S4wV94" },
    { nome: "Alongamento de Costas Sentado", nivel: "Intermediário", grupo_principal: "Lombar", grupos_secundarios: [], tipo: "Alongamento", xp: 20, duracao: 45, video: "gnb1R_gJk7Q" },
    { nome: "Jefferson Curl Leve", nivel: "Intermediário", grupo_principal: "Cadeia Posterior", grupos_secundarios: [], tipo: "Alongamento", xp: 20, duracao: 45, video: "g5Z1167Vf5U" },
    { nome: "Alongamento de Ombros com Bastão", nivel: "Intermediário", grupo_principal: "Ombros", grupos_secundarios: [], tipo: "Alongamento", xp: 20, duracao: 45, video: "f8XgR0qGq_w" },
    { nome: "Frog Stretch", nivel: "Intermediário", grupo_principal: "Quadril", grupos_secundarios: ["Adutores"], tipo: "Alongamento", xp: 20, duracao: 45, video: "6f8V-8_8U_w" },
    { nome: "Couch Stretch", nivel: "Intermediário", grupo_principal: "Quadríceps", grupos_secundarios: [], tipo: "Alongamento", xp: 20, duracao: 45, video: "Xg0j6_Z7b-U" },
    { nome: "Alongamento de Pulso Avançado", nivel: "Intermediário", grupo_principal: "Punhos", grupos_secundarios: [], tipo: "Alongamento", xp: 20, duracao: 45, video: "E8G1a7-f9hU" },
    { nome: "Alongamento de Dorsal no Chão", nivel: "Intermediário", grupo_principal: "Costas", grupos_secundarios: ["Ombros"], tipo: "Alongamento", xp: 20, duracao: 45, video: "kX4nF3rpHpA" },
    { nome: "Middle Split", nivel: "Avançado", grupo_principal: "Adutores", grupos_secundarios: ["Quadril"], tipo: "Alongamento", xp: 40, duracao: 60, video: "1X7qO0Gq9YU" },
    { nome: "Front Split", nivel: "Avançado", grupo_principal: "Pernas", grupos_secundarios: ["Quadril"], tipo: "Alongamento", xp: 40, duracao: 60, video: "f3GZ8L_XGco" },
    { nome: "Ponte Completa", nivel: "Avançado", grupo_principal: "Ombros e Coluna", grupos_secundarios: ["Peitoral"], tipo: "Alongamento", xp: 40, duracao: 60, video: "1U6-hR_G-Co" },
    { nome: "German Hang", nivel: "Avançado", grupo_principal: "Ombros", grupos_secundarios: ["Costas"], tipo: "Alongamento", xp: 40, duracao: 45, video: "gZ6V3V7f9Xw" },
    { nome: "Pancake Avançado", nivel: "Avançado", grupo_principal: "Quadril", grupos_secundarios: ["Adutores"], tipo: "Alongamento", xp: 40, duracao: 60, video: "U-G1U8XGco4" },
    { nome: "Oversplit", nivel: "Elite", grupo_principal: "Flexibilidade Extrema", grupos_secundarios: ["Pernas"], tipo: "Alongamento", xp: 60, duracao: 60, video: "Z8f9mGf_Kx4" },

    // ==========================================
    // AQUECIMENTO
    // ==========================================
    { nome: "Polichinelo", nivel: "Iniciante", grupo_principal: "Corpo Inteiro", grupos_secundarios: ["Pernas", "Ombros"], tipo: "Aquecimento", xp: 5, duracao: 30, video: "UpH7snNksVU" },
    { nome: "Rotação de Ombros", nivel: "Iniciante", grupo_principal: "Ombros", grupos_secundarios: [], tipo: "Aquecimento", xp: 5, duracao: 20, video: "78G08rKjUv4" },
    { nome: "Agachamento Livre (sem carga)", nivel: "Iniciante", grupo_principal: "Pernas", grupos_secundarios: ["Core"], tipo: "Aquecimento", xp: 5, duracao: 30, video: "Qc_fGcL45e0" },
    { nome: "Mobilidade de Quadril", nivel: "Iniciante", grupo_principal: "Quadril", grupos_secundarios: ["Core"], tipo: "Aquecimento", xp: 5, duracao: 25, video: "Ie6Y_S4wV98" },
    { nome: "Alongamento Dinâmico", nivel: "Iniciante", grupo_principal: "Corpo Inteiro", grupos_secundarios: [], tipo: "Aquecimento", xp: 5, duracao: 20, video: "gnb1R_gJk74" },
    { nome: "Jumping Jack", nivel: "Iniciante", grupo_principal: "Corpo Inteiro", grupos_secundarios: ["Pernas"], tipo: "Aquecimento", xp: 5, duracao: 30, video: "UpH7snNksVU" },
    { nome: "High Knees", nivel: "Iniciante", grupo_principal: "Pernas", grupos_secundarios: ["Core"], tipo: "Aquecimento", xp: 5, duracao: 30, video: "Z8f9mGf_Kx8" },
    { nome: "Mobilidade de Punhos e Tornozelos", nivel: "Iniciante", grupo_principal: "Articulações", grupos_secundarios: [], tipo: "Aquecimento", xp: 5, duracao: 20, video: "sF1t0qJT9LQ" }
];

// ---- Ordem de exibição dos filtros na Biblioteca de Exercícios ------------
const CATEGORY_ORDER = [
  "Push","Pull","Pernas","Core","Ombros","Tríceps",
  "Handstand","Front Lever","Back Lever","Planche","Human Flag","L-Sit",
  "Corpo Inteiro","Alongamento","Aquecimento",
];

const NIVEL_ORDER = ["Iniciante","Intermediário","Avançado","Elite"];

// ---- Helper: acha um exercício da base pelo nome exato ---------------------
function findExercise(nome){
  return exerciseDB.find(e => e.nome === nome);
}

// ---- Helper: imagem de exibição (gif se existir, senão thumb do YouTube) --
function exerciseImage(ex){
  if(ex.gif) return ex.gif;
  if(ex.video) return `https://img.youtube.com/vi/${ex.video}/hqdefault.jpg`;
  return "";
}

// ============================================================================
// PROGRAMAS GUIADOS (Módulos de Progressão) — construídos a partir do
// exerciseDB acima, com séries/repetições sugeridas para cada etapa.
// ============================================================================
const GUIDED_PROGRAMS = [
  {
    id: "muscle-up",
    name: "Muscle Up",
    level: "Treino Avançado",
    intro: "Combine a força de puxada com a transição para cima da barra. Domine cada etapa antes de tentar o movimento completo.",
    plan: [
      { nome: "Pull Up", sets: "4×6-8" },
      { nome: "Chest-to-Bar Pull Up", sets: "4×5" },
      { nome: "Explosive Pull Up", sets: "5×3" },
      { nome: "Parallel Bar Dip", sets: "4×8-10" },
      { nome: "Negative Pull Up", sets: "3×20-30 s" },
      { nome: "Muscle Up", sets: "4×3-5" },
    ],
    goalRefs: [
      { nome: "Pull Up", label: "Pull Up estrito", target: "5×8" },
      { nome: "Chest-to-Bar Pull Up", label: "Chest to Bar", target: "3×5" },
      { nome: "Muscle Up", label: "Muscle Up", target: "3×3" },
    ],
  },
  {
    id: "handstand",
    name: "Handstand",
    level: "Treino Iniciante",
    intro: "Antes de tentar ficar de cabeça para baixo, desenvolva força nos ombros e no core.",
    plan: [
      { nome: "Hollow Body Hold", sets: "3×45 s" },
      { nome: "Pike Hold", sets: "3×30-60 s" },
      { nome: "Pike Push Up", sets: "3×10-15" },
      { nome: "Wall Walk", sets: "4×5" },
      { nome: "Wall Handstand", sets: "3×30 s" },
      { nome: "Shoulder Tap", sets: "3×20" },
    ],
    goalRefs: [
      { nome: "Hollow Body Hold", label: "Hollow Hold", target: "45-60 s" },
      { nome: "Pike Hold", label: "Pike Hold", target: "30-60 s" },
      { nome: "Wall Handstand", label: "Wall Handstand", target: "60 s" },
    ],
  },
  {
    id: "bandeira-humana",
    name: "Bandeira Humana",
    level: "Treino Avançado",
    intro: "A bandeira humana exige força lateral de core e ombro em conjunto. Progrida com holds parciais antes da versão completa.",
    plan: [
      { nome: "Vertical Flag Hold", sets: "3×30 s" },
      { nome: "Windshield Wiper", sets: "3×10" },
      { nome: "Tuck Flag", sets: "4×10-15 s" },
      { nome: "Advanced Tuck Flag", sets: "4×10 s" },
      { nome: "Straddle Flag", sets: "4×8-12 s" },
      { nome: "Full Human Flag", sets: "3×3-5 s" },
    ],
    goalRefs: [
      { nome: "Tuck Flag", label: "Tuck Flag", target: "15 s" },
      { nome: "Straddle Flag", label: "Straddle Flag", target: "10 s" },
      { nome: "Full Human Flag", label: "Full Flag", target: "3 s" },
    ],
  },
];

// Resolve cada etapa do plano/metas para o exercício completo do exerciseDB
// (imagem, vídeo, nível, xp) e monta a estrutura final usada pelo app.js.
GUIDED_PROGRAMS.forEach(p => {
  p.exercises = p.plan.map(step => {
    const ex = findExercise(step.nome) || {};
    return { name: step.nome, sets: step.sets, ...ex };
  });
  p.goals = p.goalRefs.map(g => ({ label: g.label, value: g.target }));
  const heroEx = findExercise(p.plan[p.plan.length-1].nome) || findExercise(p.plan[0].nome);
  p.hero = heroEx ? exerciseImage(heroEx) : "";
});