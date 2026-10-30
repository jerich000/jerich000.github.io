const STORAGE_KEY = 'tablas';
const DEFAULT_POSE = [50, 18, 50, 30, 50, 56, 50, 44, 50, 58, 50, 73, 50, 90];

const OBJECTIVE_SETTINGS = {
  fuerza: { sets: 5, reps: '5', rest: 150 },
  hipertrofia: { sets: 4, reps: '8-12', rest: 75 },
  resistencia: { sets: 3, reps: '15-20', rest: 45 },
};

const DAY_GROUPS = {
  'Cuerpo completo': ['Piernas', 'Pecho', 'Espalda', 'Hombro', 'Glúteo', 'Abdomen', 'Bíceps', 'Tríceps', 'Gemelos'],
  Empuje: ['Pecho', 'Hombro', 'Tríceps'],
  Tirón: ['Espalda', 'Bíceps', 'Abdomen'],
  Pierna: ['Piernas', 'Glúteo', 'Gemelos'],
  Torso: ['Pecho', 'Espalda', 'Hombro', 'Abdomen'],
};

const EXERCISE_DETAILS = {
  Sentadilla: ['Barra, mancuernas o peso corporal', 0.8, 0, 'Pies a la anchura de los hombros. Baja llevando la cadera atrás y abajo con la espalda recta y las rodillas alineadas con los pies; sube empujando el suelo.'],
  'Peso muerto rumano': ['Barra o mancuernas', 0.6, 0, 'Con las rodillas ligeramente flexionadas, lleva la cadera atrás y baja el peso pegado a las piernas con la espalda neutra. Sube apretando los glúteos.'],
  'Press de banca': ['Banco y barra (o mancuernas)', 0.7, 0, 'Tumbado en el banco, baja la barra hasta rozar el pecho con los codos a unos 45° y empuja hacia arriba hasta extender los brazos.'],
  'Dominadas': ['Barra fija', 0, 0, 'Cuélgate con un agarre algo más ancho que los hombros y sube hasta pasar la barbilla de la barra llevando los codos hacia abajo. Baja controlado.'],
  'Remo con mancuerna': ['Mancuerna y banco', 0.3, 1, 'Con el torso inclinado y la espalda recta, tira de la mancuerna hacia la cadera llevando el codo atrás. Baja con control.'],
  'Press militar': ['Barra o mancuernas', 0.4, 0, 'De pie con el abdomen firme, empuja el peso desde los hombros hasta estirar los brazos sobre la cabeza sin arquear la espalda. Baja controlado.'],
  'Curl de bíceps': ['Mancuernas o barra', 0.15, 1, 'De pie con los codos pegados al torso, sube el peso hacia los hombros flexionando los codos y baja despacio sin balancearte.'],
  'Extensión de tríceps': ['Polea alta con cuerda o barra', 0.25, 0, 'Con los codos pegados a los costados, extiende los brazos hacia abajo hasta estirar los brazos y vuelve despacio.'],
  'Crunch abdominal': ['Peso corporal', 0, 0, 'Tumbado con las rodillas flexionadas, levanta hombros y espalda alta contrayendo el abdomen, sin tirar del cuello. Baja con control.'],
  'Plancha': ['Peso corporal', 0, 0, 'Apoya antebrazos y puntas de los pies, cuerpo recto de cabeza a talones, abdomen y glúteos apretados. Mantén sin hundir la cadera.'],
  'Prensa de piernas': ['Máquina de prensa', 1.2, 0, 'Espalda y cadera apoyadas, pies a la anchura de los hombros en la plataforma. Baja hasta unos 90° y empuja sin bloquear las rodillas.'],
  'Subida al banco': ['Banco o cajón y mancuernas', 0.2, 1, 'Sube con un pie sobre el banco empujando con esa pierna hasta quedar erguido; baja con control y alterna las piernas.'],
  'Puente de glúteo': ['Peso corporal', 0, 0, 'Tumbado boca arriba con las rodillas dobladas, sube la cadera apretando glúteos hasta alinear hombros, cadera y rodillas. Baja despacio.'],
  'Patada de glúteo': ['Peso corporal, tobillera o polea', 0.1, 0, 'A cuatro apoyos con el abdomen firme, extiende una pierna hacia atrás y arriba apretando el glúteo. Vuelve sin arquear la espalda.'],
  'Gemelos sentado': ['Máquina o mancuernas sobre las rodillas', 0.4, 0, 'Sentado con el peso sobre los muslos, sube los talones al máximo, haz una pausa arriba y baja despacio estirando el gemelo.'],
  'Press inclinado': ['Banco inclinado y mancuernas', 0.25, 1, 'En un banco inclinado a unos 30°, empuja las mancuernas hacia arriba sobre el pecho y baja hasta que los codos queden a la altura del torso.'],
  'Aperturas con mancuernas': ['Banco y mancuernas', 0.1, 1, 'Tumbado con los brazos arriba y los codos ligeramente flexionados, abre los brazos en arco hasta notar el estiramiento del pecho y vuelve junto al cuerpo.'],
  'Jalón al pecho': ['Polea alta', 0.6, 0, 'Sentado, tira de la barra hacia la parte alta del pecho llevando los codos abajo y atrás, con el pecho abierto. Sube controlado.'],
  'Face pull': ['Polea con cuerda', 0.2, 0, 'Tira de la cuerda hacia la cara abriendo los codos y llevando las manos a los lados de la cabeza. Vuelve despacio.'],
  'Curl predicador': ['Banco predicador y mancuerna o barra Z', 0.2, 1, 'Con los brazos apoyados en el banco, sube el peso flexionando los codos y baja despacio hasta casi extender.'],
  'Press francés': ['Banco y barra Z o mancuernas', 0.25, 1, 'Tumbado con los brazos hacia arriba, flexiona solo los codos llevando el peso hacia la frente y extiende de nuevo.'],
  'Escaladores': ['Peso corporal', 0, 0, 'En posición de flexión, lleva una rodilla al pecho y alterna las piernas a buen ritmo con la cadera baja y el abdomen firme.'],
  'Giro ruso': ['Peso corporal, mancuerna o disco', 0.1, 0, 'Sentado con el torso inclinado y los pies elevados o apoyados, gira el tronco llevando el peso de un lado a otro con el abdomen apretado.'],
};

const EXERCISES = [
  { name: 'Sentadilla', group: 'Piernas', material: 'cmg', weighted: 1, a: [50, 18, 50, 30, 50, 56, 56, 38, 60, 32, 50, 73, 50, 90], b: [56, 32, 54, 44, 40, 68, 60, 50, 64, 44, 58, 70, 50, 90] },
  { name: 'Peso muerto rumano', group: 'Piernas', material: 'mg', weighted: 1, a: DEFAULT_POSE, b: [74, 42, 66, 46, 40, 52, 66, 58, 64, 70, 44, 72, 44, 90] },
  { name: 'Press de banca', group: 'Pecho', material: 'mg', weighted: 1, a: [20, 62, 32, 62, 58, 62, 32, 48, 32, 36, 76, 60, 80, 88], b: [20, 62, 32, 62, 58, 62, 40, 56, 33, 52, 76, 60, 80, 88] },
  { name: 'Dominadas', group: 'Espalda', material: 'cg', weighted: 0, env: '<path d="M30 10H70"/>', a: [54, 22, 50, 32, 50, 58, 52, 20, 50, 10, 54, 72, 48, 86], b: [56, 10, 50, 24, 50, 50, 58, 38, 52, 34, 50, 72, 48, 86] },
  { name: 'Remo con mancuerna', group: 'Espalda', material: 'mg', weighted: 1, a: [70, 40, 62, 44, 36, 54, 64, 62, 64, 76, 42, 72, 40, 90], b: [70, 40, 62, 44, 36, 54, 52, 52, 60, 56, 42, 72, 40, 90] },
  { name: 'Press militar', group: 'Hombro', material: 'mg', weighted: 1, a: clonePose(DEFAULT_POSE, { 6: 56, 7: 40, 8: 54, 9: 28 }), b: [46, 20, 50, 30, 50, 56, 54, 20, 54, 8, 50, 73, 50, 90] },
  { name: 'Curl de bíceps', group: 'Bíceps', material: 'mg', weighted: 1, a: clonePose(DEFAULT_POSE, { 6: 52, 8: 54 }), b: clonePose(DEFAULT_POSE, { 6: 54, 8: 62, 9: 30 }) },
  { name: 'Extensión de tríceps', group: 'Tríceps', material: 'mg', weighted: 1, a: clonePose(DEFAULT_POSE, { 6: 54, 8: 64, 9: 36 }), b: clonePose(DEFAULT_POSE, { 6: 54, 8: 56, 9: 60 }) },
  { name: 'Crunch abdominal', group: 'Abdomen', material: 'cmg', weighted: 0, a: [20, 76, 28, 78, 52, 82, 24, 70, 20, 74, 66, 66, 76, 84], b: [34, 62, 38, 68, 52, 82, 34, 58, 32, 62, 66, 66, 76, 88] },
  { name: 'Plancha', group: 'Abdomen', material: 'cmg', weighted: 0, t: 1, a: [22, 60, 28, 66, 58, 72, 28, 82, 40, 82, 72, 76, 88, 86], b: [22, 58, 28, 64, 58, 66, 28, 82, 40, 82, 72, 72, 88, 86] },
  { name: 'Prensa de piernas', group: 'Piernas', material: 'g', weighted: 0, env: '<path d="M10 62L34 84M60 58L84 40"/>', a: [16, 52, 24, 60, 38, 74, 32, 70, 38, 66, 56, 58, 68, 46], b: [16, 52, 24, 60, 38, 74, 38, 70, 38, 66, 56, 58, 68, 46] },
  { name: 'Subida al banco', group: 'Piernas', material: 'cmg', weighted: 1, env: '<path d="M56 76H82V90H56Z"/>', a: [50, 18, 50, 30, 48, 56, 50, 44, 50, 58, 64, 64, 66, 76], b: [60, 6, 60, 18, 60, 30, 60, 50, 60, 58, 64, 64, 66, 76] },
  { name: 'Puente de glúteo', group: 'Glúteo', material: 'c', weighted: 0, a: [14, 80, 24, 82, 46, 84, 34, 84, 44, 86, 62, 66, 66, 88], b: [14, 80, 24, 82, 48, 62, 34, 84, 44, 86, 64, 60, 66, 88] },
  { name: 'Patada de glúteo', group: 'Glúteo', material: 'cmg', weighted: 0, a: [18, 46, 28, 52, 60, 54, 28, 68, 28, 86, 64, 74, 60, 86], b: [18, 46, 28, 52, 60, 54, 28, 68, 28, 86, 78, 56, 94, 86] },
  { name: 'Gemelos sentado', group: 'Gemelos', material: 'mg', weighted: 1, env: '<path d="M28 40V66H48"/>', a: [38, 28, 38, 40, 40, 64, 46, 54, 60, 60, 62, 62, 64, 88], b: [38, 28, 38, 40, 40, 64, 38, 48, 54, 50, 62, 62, 64, 88] },
  { name: 'Press inclinado', group: 'Pecho', material: 'mg', weighted: 1, env: '<path d="M20 42L50 72H64"/>', a: [26, 40, 34, 48, 52, 70, 36, 36, 36, 22, 70, 64, 76, 88], b: [26, 40, 34, 48, 52, 70, 36, 36, 36, 22, 70, 64, 76, 88] },
  { name: 'Aperturas con mancuernas', group: 'Pecho', material: 'mg', weighted: 1, env: '<path d="M12 69H64"/>', a: [20, 62, 32, 62, 58, 62, 32, 48, 32, 36, 76, 60, 80, 88], b: [20, 62, 32, 62, 58, 62, 32, 48, 32, 36, 76, 60, 80, 88] },
  { name: 'Jalón al pecho', group: 'Espalda', material: 'g', weighted: 0, env: '<path d="M36 6H72"/>', a: [40, 26, 40, 38, 42, 62, 48, 24, 52, 8, 62, 62, 64, 88], b: [40, 26, 40, 38, 42, 62, 48, 24, 52, 8, 62, 62, 64, 88] },
  { name: 'Face pull', group: 'Hombro', material: 'g', weighted: 0, env: '<path d="M82 24V34"/>', a: clonePose(DEFAULT_POSE, { 6: 60, 7: 34, 8: 74, 9: 32 }), b: clonePose(DEFAULT_POSE, { 6: 64, 7: 36, 8: 56, 9: 26 }) },
  { name: 'Curl predicador', group: 'Bíceps', material: 'mg', weighted: 1, env: '<path d="M56 38L68 62"/>', a: clonePose(DEFAULT_POSE, { 6: 60, 7: 46, 8: 64, 9: 58 }), b: clonePose(DEFAULT_POSE, { 6: 60, 7: 46, 8: 64, 9: 58 }) },
  { name: 'Press francés', group: 'Tríceps', material: 'mg', weighted: 1, env: '<path d="M12 69H64"/>', a: [20, 62, 32, 62, 58, 62, 32, 48, 32, 36, 76, 60, 80, 88], b: [20, 62, 32, 62, 58, 62, 32, 48, 32, 36, 76, 60, 80, 88] },
  { name: 'Escaladores', group: 'Abdomen', material: 'c', weighted: 0, a: [22, 60, 28, 66, 58, 72, 28, 82, 28, 86, 72, 76, 88, 86], b: [22, 60, 28, 66, 58, 72, 28, 82, 28, 86, 48, 66, 42, 82] },
  { name: 'Giro ruso', group: 'Abdomen', material: 'cmg', weighted: 1, a: [32, 36, 36, 46, 44, 70, 52, 56, 62, 58, 66, 60, 78, 76], b: [32, 36, 36, 46, 44, 70, 46, 60, 54, 68, 66, 60, 78, 76] },
];

const DAY_NAMES = {
  2: ['Torso', 'Pierna'],
  3: ['Empuje', 'Tirón', 'Pierna'],
  4: ['Torso', 'Pierna', 'Torso', 'Pierna'],
  5: ['Empuje', 'Tirón', 'Pierna', 'Torso', 'Pierna'],
  6: ['Empuje', 'Tirón', 'Pierna', 'Empuje', 'Tirón', 'Pierna'],
};

const state = {
  activeTab: 0,
  pendingTable: null,
};

const ui = {
  view: document.querySelector('#view'),
  navButtons: [...document.querySelectorAll('nav button')],
};

function select(selector) {
  return document.querySelector(selector);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  }[char]));
}

function clonePose(pose, overrides = {}) {
  const nextPose = pose.slice();
  Object.entries(overrides).forEach(([key, value]) => {
    nextPose[key] = value;
  });
  return nextPose;
}

function loadSavedTables() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  } catch (error) {
    return [];
  }
}

function saveTables(tableList) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tableList));
    return true;
  } catch (error) {
    alert('No se pudo guardar en este dispositivo.');
    return false;
  }
}

function estimateSuggestedLoad(exerciseName, workoutConfig = {}) {
  const details = EXERCISE_DETAILS[exerciseName];
  if (!details || !details[1] || !workoutConfig.weight || !workoutConfig.material?.some((code) => code !== 'c')) {
    return null;
  }

  const heightRatio = (workoutConfig.height || 170) / 100;
  const bodyWeight = Math.min(workoutConfig.weight || 70, 27 * heightRatio * heightRatio);
  const ageFactor = workoutConfig.age < 18 ? 0.7 : workoutConfig.age < 40 ? 1 : workoutConfig.age < 50 ? 0.9 : workoutConfig.age < 60 ? 0.8 : 0.65;
  const objectiveMultiplier = {
    fuerza: 1.15,
    hipertrofia: 1,
    resistencia: 0.75,
  }[workoutConfig.objective] || 1;

  const load = bodyWeight * details[1] * ageFactor * objectiveMultiplier;
  return `${Math.round(load)} kg`;
}

function renderExerciseFigure(exercise) {
  const skinTone = '#e0a982';
  const shirtColor = '#0f766e';
  const shortsColor = '#334155';
  const hairColor = '#3b2a20';
  const shadowColor = '#f1f5f9';
  const highlight = '#f97316';

  const line = (a, b, width, stroke, opacity = 1) => `
    <line x1="${a[0]}" y1="${a[1]}" x2="${b[0]}" y2="${b[1]}" stroke="${stroke}" stroke-width="${width}" opacity="${opacity}" />
  `;

  const lerp = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
  const pose = exercise.a || DEFAULT_POSE;
  const [head, shoulders, hip, elbow, hand, knee, foot] = [0, 1, 2, 3, 4, 5, 6].map((index) => [pose[index * 2], pose[index * 2 + 1]]);

  const leg = (offset) => {
    const hipPoint = [hip[0] + offset, hip[1]];
    const kneePoint = [knee[0] + offset, knee[1]];
    const footPoint = [foot[0] + offset, foot[1]];

    return [
      line(hipPoint, kneePoint, 10, skinTone, 1),
      line(hipPoint, lerp(hipPoint, kneePoint, 0.7), 11.5, shortsColor, 1),
      line(kneePoint, footPoint, 7, skinTone, 1),
      line([footPoint[0] - 2, footPoint[1] - 1.5], [footPoint[0] + 6, footPoint[1] - 1.5], 5, shadowColor, 1),
    ].join('');
  };

  const arm = (offset) => {
    const shoulderPoint = [shoulders[0] + offset, shoulders[1]];
    const elbowPoint = [elbow[0] + offset, elbow[1]];
    const handPoint = [hand[0] + offset, hand[1]];

    return [
      line(shoulderPoint, elbowPoint, 7.5, shirtColor, 1),
      line(elbowPoint, handPoint, 5.5, skinTone, 1),
      `<circle cx="${handPoint[0]}" cy="${handPoint[1]}" r="3" fill="${skinTone}" />`,
    ].join('');
  };

  return `
    <svg viewBox="0 0 100 100" role="img" aria-label="${escapeHtml(exercise.name)}">
      <path d="M5 91H95" stroke="var(--border-color)" stroke-width="2" fill="none"/>
      <g fill="none" stroke="var(--text-muted)" stroke-width="3" stroke-linecap="round">
        <line x1="15" y1="90" x2="85" y2="90"/>
      </g>
      <g opacity="1">
        <g style="filter:brightness(.7)">${leg(-3)}${arm(-3)}</g>
        ${line(head, shoulders, 5, skinTone, 1)}
        ${line(shoulders, hip, 15, shirtColor, 1)}
        ${line(lerp(shoulders, hip, 0.65), hip, 14, shortsColor, 1)}
        ${leg(0)}
        ${arm(0)}
        <circle cx="${head[0]}" cy="${head[1]}" r="6.8" fill="${skinTone}"/>
        <circle cx="${head[0] + 1.3}" cy="${head[1] - 1.3}" r="1.2" fill="${hairColor}"/>
        <circle cx="${head[0] - 1.3}" cy="${head[1] - 1.5}" r="1.1" fill="${highlight}"/>
      </g>
    </svg>
  `;
}

function renderExerciseInfo(exercise, workoutConfig = { material: [], weight: 70, height: 175, age: 30, objective: 'hipertrofia' }) {
  const details = EXERCISE_DETAILS[exercise.name];
  if (!details) return '';

  const suggestedLoad = estimateSuggestedLoad(exercise.name, workoutConfig);

  return `
    <div class="info-text">🧰 ${details[0]}${suggestedLoad ? ` · ⚖️ Peso orientativo: <b>${suggestedLoad}</b>` : ''}</div>
    <details>
      <summary>Cómo se hace</summary>
      <div class="muted">${details[3]}</div>
    </details>
  `;
}

function getDayNames(daysPerWeek) {
  return DAY_NAMES[daysPerWeek] || DAY_NAMES[5];
}

function chooseExercisesForGroup(groupName, availableExercises, usedNames) {
  const candidateList = availableExercises.filter(
    (exercise) => exercise.group === groupName && !usedNames.has(exercise.name)
  );

  if (candidateList.length) {
    return candidateList;
  }

  return availableExercises.filter(
    (exercise) => exercise.group === groupName || groupName === 'Cuerpo completo'
  );
}

function buildWorkoutPlan(config) {
  const objectiveConfig = OBJECTIVE_SETTINGS[config.objective];
  const levelCount = { principiante: 5, intermedio: 6, avanzado: 7 }[config.level] || 5;
  const availableExercises = EXERCISES.filter((exercise) =>
    [...exercise.material].some((code) => config.material.includes(code))
  );

  if (!availableExercises.length) {
    return null;
  }

  const dayNames = getDayNames(config.days);
  const usageMap = new Map();

  const days = dayNames.map((groupName, index) => {
    const groupList = DAY_GROUPS[groupName]?.slice() || [];
    const usedNames = new Set();
    const items = [];

    for (let cursor = 0; cursor < levelCount && items.length < levelCount; cursor += 1) {
      let candidates = [];
      const targetGroup = groupList[cursor % Math.max(groupList.length, 1)] || groupName;
      candidates = chooseExercisesForGroup(targetGroup, availableExercises, usedNames);

      if (!candidates.length) break;

      candidates.sort((a, b) => (usageMap.get(a.name) || 0) - (usageMap.get(b.name) || 0));
      const selected = candidates[0];

      usedNames.add(selected.name);
      usageMap.set(selected.name, (usageMap.get(selected.name) || 0) + 1);
      items.push({
        name: selected.name,
        series: objectiveConfig.sets,
        rest: selected.t ? '30-45 s' : objectiveConfig.reps,
        duration: objectiveConfig.rest,
      });
    }

    return {
      title: `Día ${index + 1} · ${groupName}`,
      items,
    };
  });

  return {
    name: '',
    date: new Date().toLocaleDateString('es-ES'),
    config,
    days,
  };
}

function renderTablePreview(table) {
  if (!table) return '<p class="muted">No hay tabla para mostrar.</p>';

  return `
    <h2>${escapeHtml(table.name || 'Vista previa')}</h2>
    <div class="muted">${escapeHtml(table.config.objective)} · ${escapeHtml(table.config.level)} · ${table.config.days} días/semana · ${escapeHtml(table.date)}</div>
    ${table.days.map((day) => `
      <div class="card">
        <h2>${escapeHtml(day.title)}</h2>
        ${day.items.map((item) => {
          const exercise = EXERCISES.find((entry) => entry.name === item.name) || EXERCISES[0];
          return `
            <div class="card">
              <div class="exercise-card">
                ${renderExerciseFigure(exercise)}
                <div>
                  <b>${escapeHtml(item.name)}</b>
                  <div class="muted">${escapeHtml(exercise.group)}</div>
                  <div class="muted">${item.series} series · ${item.rest} · ${item.duration}s</div>
                </div>
              </div>
              ${renderExerciseInfo(exercise, table.config)}
            </div>
          `;
        }).join('')}
      </div>
    `).join('')}
  `;
}

function renderCreateTab() {
  if (state.pendingTable) {
    ui.view.innerHTML = `
      ${renderTablePreview(state.pendingTable)}
      <label>Nombre de la tabla</label>
      <input type="text" id="table-name" value="${escapeHtml(state.pendingTable.name)}" placeholder="Ej. Fuerza 4 días">
      <div class="row">
        <button class="primary" id="save-table">Guardar</button>
        <button id="regenerate-table">Regenerar</button>
      </div>
      <button id="change-settings">Cambiar condiciones</button>
    `;

    select('#save-table').onclick = () => {
      const nameInput = select('#table-name');
      state.pendingTable.name = nameInput.value.trim() || `Tabla ${loadSavedTables().length + 1}`;
      state.pendingTable.id = Date.now();

      const tables = loadSavedTables();
      tables.unshift(state.pendingTable);

      if (saveTables(tables)) {
        state.pendingTable = null;
        state.activeTab = 1;
        renderView();
      }
    };

    select('#regenerate-table').onclick = () => {
      state.pendingTable = buildWorkoutPlan(state.pendingTable.config);
      renderView();
    };

    select('#change-settings').onclick = () => {
      state.pendingTable = null;
      renderView();
    };

    return;
  }

  ui.view.innerHTML = `
    <div class="card">
      <label>Objetivo</label>
      <select id="objective">
        <option value="hipertrofia" selected>Ganancia muscular</option>
        <option value="fuerza">Ganancia de fuerza</option>
        <option value="resistencia">Resistencia muscular</option>
      </select>

      <label>Nivel</label>
      <select id="level">
        <option value="principiante">Principiante</option>
        <option value="intermedio" selected>Intermedio</option>
        <option value="avanzado">Avanzado</option>
      </select>

      <label>Días por semana</label>
      <select id="days">
        ${[2, 3, 4, 5, 6].map((dayCount) => `<option value="${dayCount}" ${dayCount === 3 ? 'selected' : ''}>${dayCount}</option>`).join('')}
      </select>

      <label>Tus datos</label>
      <div class="split-grid">
        <div><input type="number" id="age" placeholder="Edad" inputmode="numeric" min="12" max="90"></div>
        <div><input type="number" id="weight" placeholder="Peso kg" inputmode="decimal" min="30" max="250"></div>
        <div><input type="number" id="height" placeholder="Altura cm" inputmode="numeric" min="120" max="230"></div>
      </div>

      <label>Material disponible</label>
      <div class="checkbox-group">
        <label><input type="checkbox" value="c" checked> Peso corporal</label>
        <label><input type="checkbox" value="m" checked> Mancuernas/barra</label>
        <label><input type="checkbox" value="g" checked> Gimnasio</label>
      </div>

      <button class="primary full-width" id="generate-plan">Generar tabla</button>
    </div>
  `;

  select('#generate-plan').onclick = () => {
    const material = [...document.querySelectorAll('.checkbox-group input:checked')].map((input) => input.value);
    if (!material.length) {
      alert('Elige al menos un tipo de material.');
      return;
    }

    const age = Number(select('#age').value);
    const weight = Number(select('#weight').value);
    const height = Number(select('#height').value);

    if (!(age >= 12 && age <= 90 && weight >= 30 && weight <= 250 && height >= 120 && height <= 230)) {
      alert('Introduce edad (12-90), peso (30-250 kg) y altura (120-230 cm).');
      return;
    }

    state.pendingTable = buildWorkoutPlan({
      objective: select('#objective').value,
      level: select('#level').value,
      days: Number(select('#days').value),
      material,
      age,
      weight,
      height,
    });

    renderView();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
}

function renderSavedTablesTab() {
  const tables = loadSavedTables();

  if (!tables.length) {
    ui.view.innerHTML = '<p class="muted">Aún no has guardado ninguna tabla.</p>';
    return;
  }

  ui.view.innerHTML = tables.map((table) => `
    <div class="card">
      <b>${escapeHtml(table.name)}</b>
      <div class="muted">${escapeHtml(table.config.objective)} · ${escapeHtml(table.config.level)} · ${table.config.days} días · ${escapeHtml(table.date)}</div>
      <div class="row">
        <button class="primary" data-open="${table.id}">Abrir</button>
        <button class="delete" data-delete="${table.id}">Borrar</button>
      </div>
    </div>
  `).join('');

  ui.view.querySelectorAll('[data-open]').forEach((button) => {
    button.onclick = () => {
      const selected = loadSavedTables().find((table) => String(table.id) === String(button.dataset.open));
      if (!selected) return;
      ui.view.innerHTML = `<button id="back-button">← Volver</button>${renderTablePreview(selected)}`;
      select('#back-button').onclick = renderView;
    };
  });

  ui.view.querySelectorAll('[data-delete]').forEach((button) => {
    button.onclick = () => {
      if (!confirm('¿Borrar esta tabla?')) return;

      const updatedTables = loadSavedTables().filter((table) => String(table.id) !== String(button.dataset.delete));
      saveTables(updatedTables);
      renderView();
    };
  });
}

function renderExerciseTab() {
  const groups = ['Todos', ...new Set(EXERCISES.map((exercise) => exercise.group))];
  ui.view.innerHTML = `
    <div class="chip-group">
      ${groups.map((group) => `<button data-group="${group}">${group}</button>`).join('')}
    </div>
    <div class="exercise-grid" id="exercise-grid"></div>
  `;

  const renderList = (groupFilter) => {
    const filtered = groupFilter === 'Todos'
      ? EXERCISES
      : EXERCISES.filter((exercise) => exercise.group === groupFilter);

    select('#exercise-grid').innerHTML = filtered.map((exercise) => `
      <div class="card">
        ${renderExerciseFigure(exercise)}
        <b>${escapeHtml(exercise.name)}</b>
        <div class="muted">${escapeHtml(exercise.group)}</div>
        ${renderExerciseInfo(exercise, { material: ['c', 'm', 'g'], weight: 70, height: 175, age: 30, objective: 'hipertrofia' })}
      </div>
    `).join('');
  };

  renderList('Todos');
  ui.view.querySelectorAll('[data-group]').forEach((button) => {
    button.onclick = () => renderList(button.dataset.group);
  });
}

function renderView() {
  ui.navButtons.forEach((button, index) => {
    button.className = index === state.activeTab ? 'primary' : '';
  });

  switch (state.activeTab) {
    case 0:
      renderCreateTab();
      break;
    case 1:
      renderSavedTablesTab();
      break;
    case 2:
      renderExerciseTab();
      break;
    default:
      renderCreateTab();
  }
}

ui.navButtons.forEach((button, index) => {
  button.onclick = () => {
    state.activeTab = index;
    renderView();
  };
});

renderView();
