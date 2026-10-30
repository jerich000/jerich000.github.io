const STORAGE_KEY = 'tablas';
const DEFAULT_POSE = [50, 18, 50, 30, 50, 56, 50, 44, 50, 58, 50, 73, 50, 90];

const clonePose = (pose, overrides) => {
  const nextPose = pose.slice();
  for (const key in overrides) {
    nextPose[key] = overrides[key];
  }
  return nextPose;
};

const EXERCISES = [
  { name: 'Sentadilla', group: 'Piernas', material: 'cmg', weighted: 1, a: [50, 18, 50, 30, 50, 56, 56, 38, 60, 32, 50, 73, 50, 90], b: [56, 32, 54, 44, 40, 68, 60, 50, 64, 44, 58, 70, 50, 90] },
  { name: 'Zancada', group: 'Piernas', material: 'cmg', weighted: 1, a: [50, 18, 50, 30, 50, 56, 56, 44, 52, 52, 50, 73, 50, 90], b: [50, 24, 50, 36, 50, 62, 56, 46, 52, 54, 68, 68, 68, 90] },
  { name: 'Peso muerto rumano', group: 'Piernas', material: 'mg', weighted: 1, a: DEFAULT_POSE, b: [74, 42, 66, 46, 40, 52, 66, 58, 64, 70, 44, 72, 44, 90] },
  { name: 'Extensión de cuádriceps', group: 'Piernas', material: 'g', weighted: 0, env: '<path d="M30 30V62H48"/>', a: [38, 24, 38, 36, 40, 60, 44, 50, 54, 58, 60, 62, 60, 86], b: [38, 24, 38, 3[...]
  { name: 'Curl femoral tumbado', group: 'Piernas', material: 'g', weighted: 0, env: '<path d="M12 78H66"/>', a: [20, 66, 30, 68, 56, 70, 40, 74, 30, 76, 72, 70, 90, 70], b: [20, 66, 30, 68, 56, 7[...]
  { name: 'Elevación de pelvis', group: 'Glúteo', material: 'cmg', weighted: 1, env: '<path d="M10 72H34"/>', a: [16, 62, 26, 66, 44, 78, 38, 74, 48, 78, 64, 66, 68, 90], b: [16, 62, 26, 66,[...]
  { name: 'Elevación de talones', group: 'Gemelos', material: 'cmg', weighted: 0, a: DEFAULT_POSE, b: [50, 12, 50, 24, 50, 50, 50, 38, 50, 52, 50, 67, 54, 88] },
  { name: 'Press de banca', group: 'Pecho', material: 'mg', weighted: 1, env: '<path d="M12 69H64"/>', a: [20, 62, 32, 62, 58, 62, 32, 48, 32, 36, 76, 60, 80, 88], b: [20, 62, 32, 62, 58, 62, 40, [...]
  { name: 'Flexiones', group: 'Pecho', material: 'c', weighted: 0, a: [22, 52, 28, 58, 58, 70, 28, 72, 28, 86, 72, 76, 88, 86], b: [20, 72, 28, 76, 58, 80, 40, 80, 28, 86, 72, 83, 88, 86] },
  { name: 'Dominadas', group: 'Espalda', material: 'cg', weighted: 0, env: '<path d="M30 10H70"/>', a: [54, 22, 50, 32, 50, 58, 52, 20, 50, 10, 54, 72, 48, 86], b: [56, 10, 50, 24, 50, 50, 58,[...]
  { name: 'Remo con mancuerna', group: 'Espalda', material: 'mg', weighted: 1, a: [70, 40, 62, 44, 36, 54, 64, 62, 64, 76, 42, 72, 40, 90], b: [70, 40, 62, 44, 36, 54, 52, 52, 60, 56, 42, 72, 40, [...]
  { name: 'Peso muerto', group: 'Espalda', material: 'mg', weighted: 1, a: [74, 42, 66, 46, 42, 54, 66, 60, 64, 74, 52, 72, 48, 90], b: [50, 18, 50, 30, 48, 56, 50, 46, 50, 60, 50, 73, 48, 90] },
  { name: 'Press militar', group: 'Hombro', material: 'mg', weighted: 1, a: clonePose(DEFAULT_POSE, { 6: 56, 7: 40, 8: 54, 9: 28 }), b: [46, 20, 50, 30, 50, 56, 54, 20, 54, 8, 50, 73, 50, 90] },
  { name: 'Elevación frontal', group: 'Hombro', material: 'mg', weighted: 1, a: clonePose(DEFAULT_POSE, { 6: 52, 8: 54 }), b: clonePose(DEFAULT_POSE, { 6: 62, 7: 31, 8: 76, 9: 31 }) },
  { name: 'Curl de bíceps', group: 'Bíceps', material: 'mg', weighted: 1, a: clonePose(DEFAULT_POSE, { 6: 52, 8: 54 }), b: clonePose(DEFAULT_POSE, { 6: 54, 8: 62, 9: 30 }) },
  { name: 'Extensión de tríceps', group: 'Tríceps', material: 'mg', weighted: 1, a: clonePose(DEFAULT_POSE, { 6: 54, 8: 64, 9: 36 }), b: clonePose(DEFAULT_POSE, { 6: 54, 8: 56, 9: 60 }) },
  { name: 'Crunch abdominal', group: 'Abdomen', material: 'cmg', weighted: 0, a: [20, 76, 28, 78, 52, 82, 24, 70, 20, 74, 66, 66, 76, 84], b: [34, 62, 38, 68, 52, 82, 34, 58, 32, 62, 66, 66, 76, 8[...]
  { name: 'Plancha', group: 'Abdomen', material: 'cmg', weighted: 0, t: 1, a: [22, 60, 28, 66, 58, 72, 28, 82, 40, 82, 72, 76, 88, 86], b: [22, 58, 28, 64, 58, 66, 28, 82, 40, 82, 72, 72, 88, 86] },
  { name: 'Prensa de piernas', group: 'Piernas', material: 'g', weighted: 0, env: '<path d="M10 62L34 84M60 58L84 40"/>', a: [16, 52, 24, 60, 38, 74, 32, 70, 38, 66, 56, 58, 68, 46], b: [16, 52, 2[...]
  { name: 'Subida al banco', group: 'Piernas', material: 'cmg', weighted: 1, env: '<path d="M56 76H82V90H56Z"/>', a: [50, 18, 50, 30, 48, 56, 50, 44, 50, 58, 64, 64, 66, 76], b: [60, 6, 60, 18, 60[...]
  { name: 'Sentadilla con salto', group: 'Piernas', material: 'c', weighted: 0, a: [56, 32, 54, 44, 40, 68, 60, 50, 64, 44, 58, 70, 50, 90], b: [50, 4, 50, 16, 50, 42, 56, 26, 58, 34, 50, 60, 50, [...]
  { name: 'Puente de glúteo', group: 'Glúteo', material: 'c', weighted: 0, a: [14, 80, 24, 82, 46, 84, 34, 84, 44, 86, 62, 66, 66, 88], b: [14, 80, 24, 82, 48, 62, 34, 84, 44, 86, 64, 60, 66, 88] },
  { name: 'Patada de glúteo', group: 'Glúteo', material: 'cmg', weighted: 0, a: [18, 46, 28, 52, 60, 54, 28, 68, 28, 86, 64, 74, 60, 86], b: [18, 46, 28, 52, 60, 54, 28, 68, 28, 86, 78, 56, 94, [...]
  { name: 'Gemelos sentado', group: 'Gemelos', material: 'mg', weighted: 1, env: '<path d="M28 40V66H48"/>', a: [38, 28, 38, 40, 40, 64, 46, 54, 60, 60, 62, 62, 64, 88], b: [38, 28, 38, 40, 40, 64[...]
  { name: 'Saltos de comba', group: 'Gemelos', material: 'c', weighted: 0, a: clonePose(DEFAULT_POSE, { 6: 58, 7: 44, 8: 64, 9: 56 }), b: [50, 12, 50, 24, 50, 50, 58, 38, 66, 48, 50, 66, 50, 82] },
  { name: 'Press inclinado', group: 'Pecho', material: 'mg', weighted: 1, env: '<path d="M20 42L50 72H64"/>', a: [26, 40, 34, 48, 52, 70, 36, 36, 36, 22, 70, 64, 76, 88], b: [26, 40, 34, 48, 52, 7[...]
  { name: 'Aperturas con mancuernas', group: 'Pecho', material: 'mg', weighted: 1, env: '<path d="M12 69H64"/>', a: [20, 62, 32, 62, 58, 62, 32, 48, 32, 36, 76, 60, 80, 88], b: [20, 62, 32, 62, 58[...]
  { name: 'Fondos en paralelas', group: 'Pecho', material: 'c', weighted: 0, env: '<path d="M40 50H64"/>', a: [50, 12, 50, 24, 52, 50, 52, 36, 52, 48, 56, 66, 46, 78], b: [56, 26, 52, 36, 52, 60, [...]
  { name: 'Press en máquina', group: 'Pecho', material: 'g', weighted: 0, env: '<path d="M28 30V64H44"/>', a: [38, 26, 38, 38, 40, 62, 46, 48, 52, 42, 62, 62, 64, 88], b: [38, 26, 38, 38, 40,[...]
  { name: 'Jalón al pecho', group: 'Espalda', material: 'g', weighted: 0, env: '<path d="M36 6H72"/>', a: [40, 26, 40, 38, 42, 62, 48, 24, 52, 8, 62, 62, 64, 88], b: [40, 26, 40, 38, 42, 62, 48, [...]
  { name: 'Remo en polea', group: 'Espalda', material: 'g', weighted: 0, a: [40, 26, 40, 38, 42, 64, 58, 50, 72, 52, 64, 62, 70, 88], b: [40, 26, 40, 38, 42, 64, 46, 52, 56, 50, 64, 62, 70, 88] },
  { name: 'Superman', group: 'Espalda', material: 'c', weighted: 0, a: [20, 78, 30, 80, 56, 82, 18, 82, 8, 82, 72, 82, 90, 82], b: [20, 68, 30, 72, 56, 82, 18, 70, 8, 64, 72, 80, 90, 72] },
  { name: 'Remo al mentón', group: 'Hombro', material: 'mg', weighted: 1, a: clonePose(DEFAULT_POSE, { 6: 52, 8: 54 }), b: [50, 18, 50, 30, 50, 56, 62, 32, 54, 36, 50, 73, 50, 90] },
  { name: 'Face pull', group: 'Hombro', material: 'g', weighted: 0, env: '<path d="M82 24V34"/>', a: clonePose(DEFAULT_POSE, { 6: 60, 7: 34, 8: 74, 9: 32 }), b: clonePose(DEFAULT_POSE, { 6: 64, 7:[...]
  { name: 'Pájaros', group: 'Hombro', material: 'mg', weighted: 1, a: [70, 40, 62, 44, 36, 54, 64, 62, 64, 76, 42, 72, 40, 90], b: [70, 40, 62, 44, 36, 54, 66, 56, 68, 50, 42, 72, 40, 90] },
  { name: 'Curl predicador', group: 'Bíceps', material: 'mg', weighted: 1, env: '<path d="M56 38L68 62"/>', a: clonePose(DEFAULT_POSE, { 6: 60, 7: 46, 8: 64, 9: 58 }), b: clonePose(DEFAULT_POSE, [...]
  { name: 'Curl concentrado', group: 'Bíceps', material: 'm', weighted: 1, a: [50, 28, 46, 40, 40, 64, 56, 56, 58, 72, 58, 66, 58, 90], b: [50, 28, 46, 40, 40, 64, 56, 56, 50, 52, 58, 66, 58, 90] },
  { name: 'Press francés', group: 'Tríceps', material: 'mg', weighted: 1, env: '<path d="M12 69H64"/>', a: [20, 62, 32, 62, 58, 62, 32, 48, 32, 36, 76, 60, 80, 88], b: [20, 62, 32, 62, 58, 62, 3[...]
  { name: 'Fondos en banco', group: 'Tríceps', material: 'cg', weighted: 0, env: '<path d="M20 58H44V90"/>', a: [56, 22, 54, 34, 46, 66, 44, 48, 40, 58, 66, 68, 84, 86], b: [56, 34, 54, 46, 46, 7[...]
  { name: 'Tríceps sobre la cabeza', group: 'Tríceps', material: 'mg', weighted: 1, a: clonePose(DEFAULT_POSE, { 6: 54, 7: 14, 8: 46, 9: 24 }), b: clonePose(DEFAULT_POSE, { 6: 54, 7: 14, 8: 54, [...]
  { name: 'Patada de tríceps', group: 'Tríceps', material: 'mg', weighted: 1, a: [70, 40, 62, 44, 36, 54, 50, 52, 52, 66, 42, 72, 40, 90], b: [70, 40, 62, 44, 36, 54, 50, 52, 36, 50, 42, 72, 40,[...]
  { name: 'Elevación de piernas', group: 'Abdomen', material: 'c', weighted: 0, a: [14, 78, 24, 80, 46, 82, 32, 84, 42, 86, 48, 60, 48, 40], b: [14, 78, 24, 80, 46, 82, 32, 84, 42, 86, 66, 82, 86[...]
  { name: 'Escaladores', group: 'Abdomen', material: 'c', weighted: 0, a: [22, 60, 28, 66, 58, 72, 28, 82, 28, 86, 72, 76, 88, 86], b: [22, 60, 28, 66, 58, 72, 28, 82, 28, 86, 48, 66, 42, 82] },
  { name: 'Giro ruso', group: 'Abdomen', material: 'cmg', weighted: 1, a: [32, 36, 36, 46, 44, 70, 52, 56, 62, 58, 66, 60, 78, 76], b: [32, 36, 36, 46, 44, 70, 46, 60, 54, 68, 66, 60, 78, 76] }
];

const EXERCISE_DETAILS = {
  'Sentadilla': ['Barra, mancuerna o peso corporal', .8, 0, 'Pies a la anchura de los hombros. Baja llevando la cadera atrás y abajo con la espalda recta y las rodillas alineadas con los pies; sube empujando el suelo.'],
  'Zancada': ['Mancuernas o peso corporal', .25, 1, 'Da un paso largo al frente y baja hasta que ambas rodillas formen unos 90°. Empuja con la pierna delantera para volver y alterna.'],
  'Peso muerto rumano': ['Barra o mancuernas', .6, 0, 'Con las rodillas ligeramente flexionadas, lleva la cadera atrás y baja el peso pegado a las piernas con la espalda neutra. Sube apretando los glúteos.'],
  'Extensión de cuádriceps': ['Máquina de cuádriceps', .5, 0, 'Sentado con la espalda apoyada, extiende las rodillas hasta casi estirar las piernas y baja de forma lenta y controlada.'],
  'Curl femoral tumbado': ['Máquina de curl femoral', .3, 0, 'Tumbado boca abajo, flexiona las rodillas llevando los talones hacia los glúteos sin levantar la cadera. Baja despacio.'],
  'Elevación de pelvis': ['Peso corporal, mancuerna o barra', .6, 0, 'Con la espalda alta apoyada en un banco, sube la cadera apretando los glúteos hasta alinear tronco y muslos. Baja sin tocar el suelo.'],
  'Elevación de talones': ['Peso corporal, mancuernas o máquina', .5, 0, 'De pie, sube sobre las puntas de los pies, haz una pausa arriba y baja lentamente hasta estirar el gemelo.'],
  'Press de banca': ['Banco y barra (o mancuernas)', .7, 0, 'Tumbado en el banco, baja la barra hasta rozar el pecho con los codos a unos 45° y empuja hacia arriba hasta extender los brazos.'],
  'Flexiones': ['Peso corporal', 0, 0, 'Manos bajo los hombros y cuerpo recto. Baja el pecho hacia el suelo flexionando los codos y empuja para subir. Si es muy difícil, apoya las rodillas.'],
  'Dominadas': ['Barra fija', 0, 0, 'Cuélgate con un agarre algo más ancho que los hombros y sube hasta pasar la barbilla de la barra llevando los codos hacia abajo. Baja controlado.'],
  'Remo con mancuerna': ['Mancuerna y banco', .3, 1, 'Con el torso inclinado y la espalda recta, tira de la mancuerna hacia la cadera llevando el codo atrás. Baja con control.'],
  'Peso muerto': ['Barra con discos', 1, 0, 'Barra sobre el medio del pie y espalda neutra. Empuja el suelo con las piernas y extiende la cadera hasta quedar erguido; baja con la barra pegada al cuerpo.'],
  'Press militar': ['Barra o mancuernas', .4, 0, 'De pie con el abdomen firme, empuja el peso desde los hombros hasta estirar los brazos sobre la cabeza sin arquear la espalda. Baja controlado.'],
  'Elevación frontal': ['Mancuernas o disco', .08, 1, 'De pie, sube las mancuernas al frente con los brazos casi estirados hasta la altura de los hombros y baja despacio, sin balancear el cuerpo.'],
  'Curl de bíceps': ['Mancuernas o barra', .15, 1, 'De pie con los codos pegados al torso, sube el peso hacia los hombros flexionando los codos y baja despacio sin balancearte.'],
  'Extensión de tríceps': ['Polea alta con cuerda o barra', .25, 0, 'Con los codos pegados a los costados, extiende los brazos hacia abajo hasta estirarlos y vuelve despacio hasta los 90°.'],
  'Crunch abdominal': ['Peso corporal', 0, 0, 'Tumbado con las rodillas flexionadas, levanta hombros y espalda alta contrayendo el abdomen, sin tirar del cuello. Baja con control.'],
  'Plancha': ['Peso corporal', 0, 0, 'Apoya antebrazos y puntas de los pies, cuerpo recto de cabeza a talones, abdomen y glúteos apretados. Mantén sin hundir la cadera.'],
  'Prensa de piernas': ['Máquina de prensa', 1.2, 0, 'Espalda y cadera apoyadas, pies a la anchura de los hombros en la plataforma. Baja hasta unos 90° y empuja sin bloquear las rodillas.'],
  'Subida al banco': ['Banco o cajón y mancuernas', .2, 1, 'Sube con un pie sobre el banco empujando con esa pierna hasta quedar erguido; baja con control y alterna las piernas.'],
  'Sentadilla con salto': ['Peso corporal', 0, 0, 'Baja a media sentadilla y salta con fuerza hacia arriba. Aterriza suave, con las rodillas flexionadas, y repite.'],
  'Puente de glúteo': ['Peso corporal', 0, 0, 'Tumbado boca arriba con las rodillas dobladas, sube la cadera apretando glúteos hasta alinear hombros, cadera y rodillas. Baja despacio.'],
  'Patada de glúteo': ['Peso corporal, tobillera o polea', .1, 0, 'A cuatro apoyos con el abdomen firme, extiende una pierna hacia atrás y arriba apretando el glúteo. Vuelve sin arquear la espalda.'],
  'Gemelos sentado': ['Máquina o mancuernas sobre las rodillas', .4, 0, 'Sentado con el peso sobre los muslos, sube los talones al máximo, haz una pausa arriba y baja despacio estirando el gemelo.'],
  'Saltos de comba': ['Comba', 0, 0, 'Salta con ambos pies a la vez usando solo las muñecas para girar la cuerda y aterrizando sobre la punta del pie con las rodillas suaves.'],
  'Press inclinado': ['Banco inclinado y mancuernas', .25, 1, 'En un banco inclinado a unos 30°, empuja las mancuernas hacia arriba sobre el pecho y baja hasta que los codos queden a la altura del torso.'],
  'Aperturas con mancuernas': ['Banco y mancuernas', .1, 1, 'Tumbado con los brazos arriba y los codos ligeramente flexionados, abre los brazos en arco hasta notar el estiramiento del pecho y vuelve junto al cuerpo.'],
  'Fondos en paralelas': ['Barras paralelas', 0, 0, 'Con los brazos extendidos, inclina un poco el torso hacia delante y baja flexionando los codos hasta unos 90°; empuja para subir.'],
  'Press en máquina': ['Máquina de press de pecho', .5, 0, 'Con la espalda apoyada, empuja las asas al frente hasta casi estirar los brazos y vuelve despacio sin dejar caer las placas.'],
  'Jalón al pecho': ['Polea alta', .6, 0, 'Sentado, tira de la barra hacia la parte alta del pecho llevando los codos abajo y atrás, con el pecho abierto. Sube controlado.'],
  'Remo en polea': ['Polea baja', .5, 0, 'Sentado con la espalda recta, tira del agarre hacia el abdomen juntando las escápulas. Vuelve estirando los brazos sin encorvarte.'],
  'Superman': ['Peso corporal', 0, 0, 'Tumbado boca abajo, eleva a la vez brazos y piernas contrayendo la espalda baja y los glúteos. Mantén 1-2 s y baja.'],
  'Remo al mentón': ['Barra o mancuernas', .2, 0, 'De pie, sube el peso pegado al cuerpo hasta el pecho con los codos por encima de las muñecas. Baja controlado.'],
  'Face pull': ['Polea con cuerda', .2, 0, 'Tira de la cuerda hacia la cara abriendo los codos y llevando las manos a los lados de la cabeza. Vuelve despacio.'],
  'Pájaros': ['Mancuernas ligeras', .06, 1, 'Con el torso inclinado y la espalda recta, abre los brazos a los lados hasta la altura de los hombros y baja con control.'],
  'Curl predicador': ['Banco predicador y mancuerna o barra Z', .2, 1, 'Con los brazos apoyados en el banco, sube el peso flexionando los codos y baja despacio hasta casi extender.'],
  'Curl concentrado': ['Mancuerna y banco', .1, 1, 'Sentado con el codo apoyado en el interior del muslo, sube la mancuerna hacia el hombro y baja lentamente.'],
  'Press francés': ['Banco y barra Z o mancuernas', .25, 1, 'Tumbado con los brazos hacia arriba, flexiona solo los codos llevando el peso hacia la frente y extiende de nuevo.'],
  'Fondos en banco': ['Banco o silla estable', 0, 0, 'Manos apoyadas en el banco detrás de ti y piernas estiradas. Baja flexionando los codos hacia atrás hasta unos 90° y empuja para subir.'],
  'Tríceps sobre la cabeza': ['Mancuerna', .15, 0, 'De pie o sentado, con la mancuerna sujeta con ambas manos tras la cabeza, extiende los brazos hacia arriba manteniendo los codos juntos.'],
  'Patada de tríceps': ['Mancuernas ligeras', .07, 1, 'Con el torso inclinado y el codo pegado al cuerpo, extiende el antebrazo hacia atrás hasta estirar el brazo y vuelve despacio.'],
  'Elevación de piernas': ['Peso corporal', 0, 0, 'Tumbado con la zona lumbar pegada al suelo, sube las piernas casi rectas hasta la vertical y baja sin tocar el suelo.'],
  'Escaladores': ['Peso corporal', 0, 0, 'En posición de flexión, lleva una rodilla al pecho y alterna las piernas a buen ritmo con la cadera baja y el abdomen firme.'],
  'Giro ruso': ['Peso corporal, mancuerna o disco', .1, 0, 'Sentado con el torso inclinado y los pies elevados o apoyados, gira el tronco llevando el peso de un lado a otro con el abdomen apretado.']
};

const DAY_GROUPS = {
  'Cuerpo completo': ['Piernas', 'Pecho', 'Espalda', 'Hombro', 'Glúteo', 'Abdomen', 'Bíceps', 'Tríceps', 'Gemelos'],
  'Empuje': ['Pecho', 'Hombro', 'Tríceps'],
  'Tirón': ['Espalda', 'Bíceps', 'Abdomen'],
  'Pierna': ['Piernas', 'Glúteo', 'Gemelos'],
  'Torso': ['Pecho', 'Espalda', 'Hombro', 'Abdomen']
};

const OBJECTIVE_SETTINGS = {
  fuerza: { sets: 5, reps: '5', rest: 150 },
  hipertrofia: { sets: 4, reps: '8-12', rest: 75 },
  resistencia: { sets: 3, reps: '15-20', rest: 45 }
};

const select = selector => document.querySelector(selector);
const escapeHtml = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));

function estimateSuggestedLoad(exerciseName, workoutConfig) {
  const details = EXERCISE_DETAILS[exerciseName];
  if (!details || !details[1] || !workoutConfig.weight || !workoutConfig.material.some(code => code !== 'c')) {
    return null;
  }

  const heightRatio = workoutConfig.height / 100;
  const bodyWeight = Math.min(workoutConfig.weight, 27 * heightRatio * heightRatio);
  const ageFactor = workoutConfig.age < 18 ? .7 : workoutConfig.age < 40 ? 1 : workoutConfig.age < 50 ? .9 : workoutConfig.age < 60 ? .8 : .65;
  const objectiveMultiplier = { fuerza: 1.15, hipertrofia: 1, resistencia: .75 }[workoutConfig.objective] || 1;
  const load = bodyWeight * details[1] * ageFactor * objectiveMultiplier;

  return `${Math.round(load)} kg`;
}

function renderExerciseInfo(exercise, workoutConfig = { material: [] }) {
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

function renderExerciseFigure(exercise) {
  const skinTone = '#e0a982';
  const shirtColor = '#0f766e';
  const shortsColor = '#334155';
  const hairColor = '#3b2a20';
  const shadowColor = '#f1f5f9';
  const highlight = '#f97316';

  const line = (a, b, width, stroke, opacity) => `<line x1="${a[0]}" y1="${a[1]}" x2="${b[0]}" y2="${b[1]}" stroke="${stroke}" stroke-width="${width}"${opacity ? ` opacity="${opacity}"` : ''}/> `;
  const lerp = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
  const pose = exercise.a;
  const [head, shoulders, hip, elbow, hand, knee, foot] = [0, 1, 2, 3, 4, 5, 6].map(index => [pose[index * 2], pose[index * 2 + 1]]);

  const leg = offset => {
    const hipPoint = [hip[0] + offset, hip[1]];
    const kneePoint = [knee[0] + offset, knee[1]];
    const footPoint = [foot[0] + offset, foot[1]];

    return line(hipPoint, kneePoint, 10, skinTone, 1)
      + line(hipPoint, lerp(hipPoint, kneePoint, .7), 11.5, shortsColor, 1)
      + line(kneePoint, footPoint, 7, skinTone, 1)
      + line([footPoint[0] - 2, footPoint[1] - 1.5], [footPoint[0] + 6, footPoint[1] - 1.5], 5, shadowColor, 1);
  };

  const arm = offset => {
    const shoulderPoint = [shoulders[0] + offset, shoulders[1]];
    const elbowPoint = [elbow[0] + offset, elbow[1]];
    const handPoint = [hand[0] + offset, hand[1]];

    return line(shoulderPoint, elbowPoint, 7.5, shirtColor, 1)
      + line(elbowPoint, handPoint, 5.5, skinTone, 1)
      + `<circle cx="${handPoint[0]}" cy="${handPoint[1]}" r="3" fill="${skinTone}"/>`;
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
        ${line(lerp(shoulders, hip, .65), hip, 14, shortsColor, 1)}
        ${leg(0)}
        ${arm(0)}
        <circle cx="${head[0]}" cy="${head[1]}" r="6.8" fill="${skinTone}"/>
        <circle cx="${head[0] + 1.3}" cy="${head[1] - 1.3}" r="1.2" fill="${hairColor}"/>
        <circle cx="${head[0] - 1.3}" cy="${head[1] - 1.5}" r="1.1" fill="${highlight}"/>
      </g>
    </svg>
  `;
}

const loadSavedTables = () => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  } catch (error) {
    return [];
  }
};

const saveTables = tableList => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tableList));
    return true;
  } catch (error) {
    alert('No se pudo guardar en este dispositivo.');
    return false;
  }
};

function getDayNames(daysPerWeek) {
  if (daysPerWeek <= 3) {
    return Array(daysPerWeek).fill('Cuerpo completo');
  }

  if (daysPerWeek === 4) {
    return ['Torso', 'Pierna', 'Torso', 'Pierna'];
  }

  if (daysPerWeek === 5) {
    return ['Empuje', 'Tirón', 'Pierna', 'Torso', 'Pierna'];
  }

  return ['Empuje', 'Tirón', 'Pierna', 'Empuje', 'Tirón', 'Pierna'];
}

function generateWorkoutPlan(config) {
  const objectiveConfig = OBJECTIVE_SETTINGS[config.objective];
  const exerciseCount = { principiante: 5, intermedio: 6, avanzado: 7 }[config.level];
  const availableExercises = EXERCISES.filter(exercise => [...exercise.material].some(code => config.material.includes(code)));

  if (!availableExercises.length) {
    return null;
  }

  const usageMap = {};
  const dayNames = getDayNames(config.days);

  const days = dayNames.map((groupName, index) => {
    let groupList = DAY_GROUPS[groupName].slice();

    if (groupName === 'Cuerpo completo') {
      groupList = groupList.slice(index * 2).concat(groupList.slice(0, index * 2));
    }

    const sessionExercises = [];

    for (let counter = 0; counter < exerciseCount && sessionExercises.length < exerciseCount; counter++) {
      let candidates = availableExercises.filter(exercise => exercise.group === groupList[counter % groupList.length] && !sessionExercises.includes(exercise));

      if (!candidates.length) {
        candidates = availableExercises.filter(exercise => groupList.includes(exercise.group) && !sessionExercises.includes(exercise));
      }

      if (!candidates.length) break;

      candidates.sort((a, b) => (usageMap[a.name] || 0) - (usageMap[b.name] || 0) + (Math.random() - .5));
      const selectedExercise = candidates[0];
      usageMap[selectedExercise.name] = (usageMap[selectedExercise.name] || 0) + 1;
      sessionExercises.push(selectedExercise);
    }

    return {
      title: `Día ${index + 1} · ${groupName}`,
      items: sessionExercises.map(exercise => ({
        name: exercise.name,
        series: objectiveConfig.sets,
        rest: exercise.t ? '30-45 s' : objectiveConfig.reps,
        duration: objectiveConfig.rest
      }))
    };
  });

  return {
    name: '',
    date: new Date().toLocaleDateString('es-ES'),
    config,
    days
  };
}

const findExerciseByName = name => EXERCISES.find(exercise => exercise.name === name);

function renderTablePreview(table) {
  return `
    <h2>${escapeHtml(table.name || 'Vista previa')}</h2>
    <div class="muted">${table.config.objective} · ${table.config.level} · ${table.config.days} días/semana · ${table.date}</div>
    ${table.days.map(day => `
      <div class="card">
        <h2>${escapeHtml(day.title)}</h2>
        ${day.items.map(item => {
          const exercise = findExerciseByName(item.name);
          return `
            <div class="card">
              <div class="exercise-card">
                ${renderExerciseFigure(exercise)}
                <div>
                  <b>${escapeHtml(item.name)}</b>
                  <div class="muted">${exercise.group}</div>
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

let pendingTable = null;
let activeTab = 0;

function renderCurrentView() {
  document.querySelectorAll('nav button').forEach((button, index) => {
    button.className = index === activeTab ? 'primary' : '';
  });

  const view = select('#view');

  if (activeTab === 0) {
    view.innerHTML = pendingTable ? (
      renderTablePreview(pendingTable) + `
        <label>Nombre de la tabla</label>
        <input type="text" id="table-name" value="${escapeHtml(pendingTable.name)}" placeholder="Ej. Fuerza 4 días">
        <div class="row">
          <button class="primary" id="save-table">Guardar</button>
          <button id="regenerate-table">Regenerar</button>
        </div>
        <button id="change-settings">Cambiar condiciones</button>
      `
    ) : `
      <div class="card">
        <label>Objetivo</label>
        <select id="objective">
          <option value="hipertrofia">Ganancia muscular</option>
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
        <select id="days">${[2, 3, 4, 5, 6].map(dayCount => `<option value="${dayCount}" ${dayCount === 3 ? 'selected' : ''}>${dayCount}</option>`).join('')}</select>

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

    if (pendingTable) {
      select('#save-table').onclick = () => {
        pendingTable.name = select('#table-name').value.trim() || `Tabla ${loadSavedTables().length + 1}`;
        pendingTable.id = Date.now();

        const existingTables = loadSavedTables();
        existingTables.unshift(pendingTable);

        if (saveTables(existingTables)) {
          pendingTable = null;
          activeTab = 1;
          renderCurrentView();
        }
      };

      select('#regenerate-table').onclick = () => {
        pendingTable = generateWorkoutPlan(pendingTable.config);
        renderCurrentView();
      };

      select('#change-settings').onclick = () => {
        pendingTable = null;
        renderCurrentView();
      };
    } else {
      select('#generate-plan').onclick = () => {
        const material = [...document.querySelectorAll('.checkbox-group input:checked')].map(input => input.value);

        if (!material.length) {
          return alert('Elige al menos un tipo de material.');
        }

        const age = +select('#age').value;
        const weight = +select('#weight').value;
        const height = +select('#height').value;

        if (!(age >= 12 && age <= 90 && weight >= 30 && weight <= 250 && height >= 120 && height <= 230)) {
          return alert('Introduce edad (12-90), peso (30-250 kg) y altura (120-230 cm).');
        }

        pendingTable = generateWorkoutPlan({
          objective: select('#objective').value,
          level: select('#level').value,
          days: +select('#days').value,
          material,
          age,
          weight,
          height
        });

        renderCurrentView();
        scrollTo(0, 0);
      };
    }
  } else if (activeTab === 1) {
    const savedTables = loadSavedTables();
    view.innerHTML = savedTables.length
      ? savedTables.map(table => `
          <div class="card">
            <b>${escapeHtml(table.name)}</b>
            <div class="muted">${table.config.objective} · ${table.config.level} · ${table.config.days} días · ${table.date}</div>
            <div class="row">
              <button class="primary" data-open="${table.id}">Abrir</button>
              <button class="delete" data-delete="${table.id}">Borrar</button>
            </div>
          </div>
        `).join('')
      : '<p class="muted">Aún no has guardado ninguna tabla.</p>';

    view.querySelectorAll('[data-open]').forEach(button => {
      button.onclick = () => {
        const selectedTable = loadSavedTables().find(item => String(item.id) === String(button.dataset.open));
        view.innerHTML = `<button id="back-button">← Volver</button>` + renderTablePreview(selectedTable);
        select('#back-button').onclick = renderCurrentView;
      };
    });

    view.querySelectorAll('[data-delete]').forEach(button => {
      button.onclick = () => {
        if (confirm('¿Borrar esta tabla?')) {
          const updatedTables = loadSavedTables().filter(item => String(item.id) !== String(button.dataset.delete));
          saveTables(updatedTables);
          renderCurrentView();
        }
      };
    });
  } else {
    const groups = ['Todos', ...new Set(EXERCISES.map(exercise => exercise.group))];
    view.innerHTML = `
      <div class="chip-group">${groups.map(group => `<button data-group="${group}">${group}</button>`).join('')}</div>
      <div class="exercise-grid" id="exercise-grid"></div>
    `;

    const renderExerciseList = filterGroup => {
      const filteredExercises = filterGroup === 'Todos' ? EXERCISES : EXERCISES.filter(exercise => exercise.group === filterGroup);

      select('#exercise-grid').innerHTML = filteredExercises.map(exercise => `
        <div class="card">
          ${renderExerciseFigure(exercise)}
          <b>${escapeHtml(exercise.name)}</b>
          <div class="muted">${exercise.group}</div>
          ${renderExerciseInfo(exercise, { material: ['c', 'm', 'g'], weight: 70, height: 175, age: 30, objective: 'hipertrofia' })}
        </div>
      `).join('');
    };

    renderExerciseList('Todos');
    view.querySelectorAll('[data-group]').forEach(button => {
      button.onclick = () => renderExerciseList(button.dataset.group);
    });
  }
}

document.querySelectorAll('[id^="tab-"]').forEach((button, index) => {
  button.onclick = () => {
    activeTab = index;
    renderCurrentView();
  };
});

renderCurrentView();
