// Pose = [cabeza x,y, hombro, cadera, codo, mano, rodilla, pie] (vista lateral, lienzo 100x100)
const STANDING_POSE = [50, 18, 50, 30, 50, 56, 50, 44, 50, 58, 50, 73, 50, 90];
const EXERCISES = [
            { n: 'Sentadilla', g: 'Piernas', q: 'cmg', w: 1, a: [50, 18, 50, 30, 50, 56, 56, 38, 60, 32, 50, 73, 50, 90], b: [56, 32, 54, 44, 40, 68, 60, 50, 64, 44, 58, 70, 50, 90] },
            { n: 'Zancada', g: 'Piernas', q: 'cmg', w: 1, a: [50, 18, 50, 30, 50, 56, 56, 44, 52, 52, 50, 73, 50, 90], b: [50, 24, 50, 36, 50, 62, 56, 46, 52, 54, 68, 68, 68, 90] },
            { n: 'Peso muerto rumano', g: 'Piernas', q: 'mg', w: 1, a: STANDING_POSE, b: [74, 42, 66, 46, 40, 52, 66, 58, 64, 70, 44, 72, 44, 90] },
            { n: 'Extensión de cuádriceps', g: 'Piernas', q: 'g', w: 0, env: '<path d="M30 30V62H48"/>', a: [38, 24, 38, 36, 40, 60, 44, 50, 54, 58, 60, 62, 60, 86], b: [38, 24, 38, 36, 40, 60, 44, 50, 54, 58, 60, 62, 86, 62] },
            { n: 'Curl femoral tumbado', g: 'Piernas', q: 'g', w: 0, env: '<path d="M12 78H66"/>', a: [20, 66, 30, 68, 56, 70, 40, 74, 30, 76, 72, 70, 90, 70], b: [20, 66, 30, 68, 56, 70, 40, 74, 30, 76, 72, 70, 72, 48] },
            { n: 'Elevación de pelvis', g: 'Glúteo', q: 'cmg', w: 1, env: '<path d="M10 72H34"/>', a: [16, 62, 26, 66, 44, 78, 38, 74, 48, 78, 64, 66, 68, 90], b: [16, 62, 26, 66, 50, 62, 38, 66, 50, 66, 66, 60, 68, 90] },
            { n: 'Elevación de talones', g: 'Gemelos', q: 'cmg', w: 0, a: STANDING_POSE, b: [50, 12, 50, 24, 50, 50, 50, 38, 50, 52, 50, 67, 54, 88] },
            { n: 'Press de banca', g: 'Pecho', q: 'mg', w: 1, env: '<path d="M12 69H64"/>', a: [20, 62, 32, 62, 58, 62, 32, 48, 32, 36, 76, 60, 80, 88], b: [20, 62, 32, 62, 58, 62, 40, 56, 33, 52, 76, 60, 80, 88] },
            { n: 'Flexiones', g: 'Pecho', q: 'c', w: 0, a: [22, 52, 28, 58, 58, 70, 28, 72, 28, 86, 72, 76, 88, 86], b: [20, 72, 28, 76, 58, 80, 40, 80, 28, 86, 72, 83, 88, 86] },
            { n: 'Dominadas', g: 'Espalda', q: 'cg', w: 0, env: '<path d="M30 10H70"/>', a: [54, 22, 50, 32, 50, 58, 52, 20, 50, 10, 54, 72, 48, 86], b: [56, 10, 50, 24, 50, 50, 58, 18, 50, 10, 56, 64, 50, 78] },
            { n: 'Remo con mancuerna', g: 'Espalda', q: 'mg', w: 1, a: [70, 40, 62, 44, 36, 54, 64, 62, 64, 76, 42, 72, 40, 90], b: [70, 40, 62, 44, 36, 54, 52, 52, 60, 56, 42, 72, 40, 90] },
            { n: 'Peso muerto', g: 'Espalda', q: 'mg', w: 1, a: [74, 42, 66, 46, 42, 54, 66, 60, 64, 74, 52, 72, 48, 90], b: [50, 18, 50, 30, 48, 56, 50, 46, 50, 60, 50, 73, 48, 90] },
            { n: 'Press militar', g: 'Hombro', q: 'mg', w: 1, a: [50, 18, 50, 30, 50, 56, 56, 40, 54, 28, 50, 73, 50, 90], b: [46, 20, 50, 30, 50, 56, 54, 20, 54, 8, 50, 73, 50, 90] },
            { n: 'Elevación frontal', g: 'Hombro', q: 'mg', w: 1, a: [50, 18, 50, 30, 50, 56, 52, 44, 54, 58, 50, 73, 50, 90], b: [50, 18, 50, 30, 50, 56, 62, 31, 76, 31, 50, 73, 50, 90] },
            { n: 'Curl de bíceps', g: 'Bíceps', q: 'mg', w: 1, a: [50, 18, 50, 30, 50, 56, 52, 44, 54, 58, 50, 73, 50, 90], b: [50, 18, 50, 30, 50, 56, 54, 44, 62, 30, 50, 73, 50, 90] },
            { n: 'Extensión de tríceps', g: 'Tríceps', q: 'mg', w: 1, a: [50, 18, 50, 30, 50, 56, 54, 44, 64, 36, 50, 73, 50, 90], b: [50, 18, 50, 30, 50, 56, 54, 44, 56, 60, 50, 73, 50, 90] },
            { n: 'Crunch abdominal', g: 'Abdomen', q: 'cmg', w: 0, a: [20, 76, 28, 78, 52, 82, 24, 70, 20, 74, 66, 66, 76, 84], b: [34, 62, 38, 68, 52, 82, 34, 58, 32, 62, 66, 66, 76, 84] },
            { n: 'Plancha', g: 'Abdomen', q: 'cmg', w: 0, t: 1, a: [22, 60, 28, 66, 58, 72, 28, 82, 40, 82, 72, 76, 88, 86], b: [22, 58, 28, 64, 58, 66, 28, 82, 40, 82, 72, 72, 88, 86] },
            { n: 'Prensa de piernas', g: 'Piernas', q: 'g', w: 0, env: '<path d="M10 62L34 84M60 58L84 40"/>', a: [16, 52, 24, 60, 38, 74, 32, 70, 38, 66, 56, 58, 68, 46], b: [16, 52, 24, 60, 38, 74, 32, 70, 38, 66, 72, 50, 88, 36] },
            { n: 'Subida al banco', g: 'Piernas', q: 'cmg', w: 1, env: '<path d="M56 76H82V90H56Z"/>', a: [50, 18, 50, 30, 48, 56, 50, 44, 50, 58, 64, 64, 66, 76], b: [60, 6, 60, 18, 60, 44, 60, 32, 60, 46, 64, 62, 66, 76] },
            { n: 'Sentadilla con salto', g: 'Piernas', q: 'c', w: 0, a: [56, 32, 54, 44, 40, 68, 60, 50, 64, 44, 58, 70, 50, 90], b: [50, 4, 50, 16, 50, 42, 56, 26, 58, 34, 50, 60, 50, 78] },
            { n: 'Puente de glúteo', g: 'Glúteo', q: 'c', w: 0, a: [14, 80, 24, 82, 46, 84, 34, 84, 44, 86, 62, 66, 66, 88], b: [14, 80, 24, 82, 48, 62, 34, 84, 44, 86, 64, 60, 66, 88] },
            { n: 'Patada de glúteo', g: 'Glúteo', q: 'cmg', w: 0, a: [18, 46, 28, 52, 60, 54, 28, 68, 28, 86, 64, 74, 60, 86], b: [18, 46, 28, 52, 60, 54, 28, 68, 28, 86, 78, 56, 94, 52] },
            { n: 'Gemelos sentado', g: 'Gemelos', q: 'mg', w: 1, env: '<path d="M28 40V66H48"/>', a: [38, 28, 38, 40, 40, 64, 46, 54, 60, 60, 62, 62, 64, 88], b: [38, 28, 38, 40, 40, 64, 46, 54, 60, 60, 62, 62, 66, 82] },
            { n: 'Saltos de comba', g: 'Gemelos', q: 'c', w: 0, a: [50, 18, 50, 30, 50, 56, 58, 44, 64, 56, 50, 73, 50, 90], b: [50, 12, 50, 24, 50, 50, 58, 38, 66, 48, 50, 66, 50, 82] },
            { n: 'Press inclinado', g: 'Pecho', q: 'mg', w: 1, env: '<path d="M20 42L50 72H64"/>', a: [26, 40, 34, 48, 52, 70, 36, 36, 36, 22, 70, 64, 76, 88], b: [26, 40, 34, 48, 52, 70, 44, 50, 36, 44, 70, 64, 76, 88] },
            { n: 'Aperturas con mancuernas', g: 'Pecho', q: 'mg', w: 1, env: '<path d="M12 69H64"/>', a: [20, 62, 32, 62, 58, 62, 32, 48, 32, 36, 76, 60, 80, 88], b: [20, 62, 32, 62, 58, 62, 30, 54, 26, 60, 76, 60, 80, 88] },
            { n: 'Fondos en paralelas', g: 'Pecho', q: 'c', w: 0, env: '<path d="M40 50H64"/>', a: [50, 12, 50, 24, 52, 50, 52, 36, 52, 48, 56, 66, 46, 78], b: [56, 26, 52, 36, 52, 60, 60, 44, 52, 50, 56, 70, 46, 82] },
            { n: 'Press en máquina', g: 'Pecho', q: 'g', w: 0, env: '<path d="M28 30V64H44"/>', a: [38, 26, 38, 38, 40, 62, 46, 48, 52, 42, 62, 62, 64, 88], b: [38, 26, 38, 38, 40, 62, 56, 42, 74, 38, 62, 62, 64, 88] },
            { n: 'Jalón al pecho', g: 'Espalda', q: 'g', w: 0, env: '<path d="M36 6H72"/>', a: [40, 26, 40, 38, 42, 62, 48, 24, 52, 8, 62, 62, 64, 88], b: [40, 26, 40, 38, 42, 62, 48, 48, 56, 34, 62, 62, 64, 88] },
            { n: 'Remo en polea', g: 'Espalda', q: 'g', w: 0, a: [40, 26, 40, 38, 42, 64, 58, 50, 72, 52, 64, 62, 70, 88], b: [40, 26, 40, 38, 42, 64, 46, 52, 56, 50, 64, 62, 70, 88] },
            { n: 'Superman', g: 'Espalda', q: 'c', w: 0, a: [20, 78, 30, 80, 56, 82, 18, 82, 8, 82, 72, 82, 90, 82], b: [20, 68, 30, 72, 56, 82, 18, 70, 8, 64, 72, 80, 90, 72] },
            { n: 'Remo al mentón', g: 'Hombro', q: 'mg', w: 1, a: [50, 18, 50, 30, 50, 56, 52, 44, 54, 58, 50, 73, 50, 90], b: [50, 18, 50, 30, 50, 56, 62, 32, 54, 36, 50, 73, 50, 90] },
            { n: 'Face pull', g: 'Hombro', q: 'g', w: 0, env: '<path d="M82 24V34"/>', a: [50, 18, 50, 30, 50, 56, 60, 34, 74, 32, 50, 73, 50, 90], b: [50, 18, 50, 30, 50, 56, 64, 36, 56, 26, 50, 73, 50, 90] },
            { n: 'Pájaros', g: 'Hombro', q: 'mg', w: 1, a: [70, 40, 62, 44, 36, 54, 64, 62, 64, 76, 42, 72, 40, 90], b: [70, 40, 62, 44, 36, 54, 66, 56, 68, 50, 42, 72, 40, 90] },
            { n: 'Curl predicador', g: 'Bíceps', q: 'mg', w: 1, env: '<path d="M56 38L68 62"/>', a: [50, 18, 50, 30, 50, 56, 60, 46, 64, 58, 50, 73, 50, 90], b: [50, 18, 50, 30, 50, 56, 60, 46, 56, 32, 50, 73, 50, 90] },
            { n: 'Curl concentrado', g: 'Bíceps', q: 'm', w: 1, a: [50, 28, 46, 40, 40, 64, 56, 56, 58, 72, 58, 66, 58, 90], b: [50, 28, 46, 40, 40, 64, 56, 56, 50, 52, 58, 66, 58, 90] },
            { n: 'Press francés', g: 'Tríceps', q: 'mg', w: 1, env: '<path d="M12 69H64"/>', a: [20, 62, 32, 62, 58, 62, 32, 48, 32, 36, 76, 60, 80, 88], b: [20, 62, 32, 62, 58, 62, 32, 48, 20, 54, 76, 60, 80, 88] },
            { n: 'Fondos en banco', g: 'Tríceps', q: 'cg', w: 0, env: '<path d="M20 58H44V90"/>', a: [56, 22, 54, 34, 46, 66, 44, 48, 40, 58, 66, 68, 84, 86], b: [56, 34, 54, 46, 46, 76, 38, 54, 40, 58, 66, 76, 84, 86] },
            { n: 'Tríceps sobre la cabeza', g: 'Tríceps', q: 'mg', w: 1, a: [50, 18, 50, 30, 50, 56, 54, 14, 46, 24, 50, 73, 50, 90], b: [50, 18, 50, 30, 50, 56, 54, 14, 54, 2, 50, 73, 50, 90] },
            { n: 'Patada de tríceps', g: 'Tríceps', q: 'mg', w: 1, a: [70, 40, 62, 44, 36, 54, 50, 52, 52, 66, 42, 72, 40, 90], b: [70, 40, 62, 44, 36, 54, 50, 52, 36, 50, 42, 72, 40, 90] },
            { n: 'Elevación de piernas', g: 'Abdomen', q: 'c', w: 0, a: [14, 78, 24, 80, 46, 82, 32, 84, 42, 86, 48, 60, 48, 40], b: [14, 78, 24, 80, 46, 82, 32, 84, 42, 86, 66, 82, 86, 80] },
            { n: 'Escaladores', g: 'Abdomen', q: 'c', w: 0, a: [22, 60, 28, 66, 58, 72, 28, 82, 28, 86, 72, 76, 88, 86], b: [22, 60, 28, 66, 58, 72, 28, 82, 28, 86, 48, 66, 42, 82] },
            { n: 'Giro ruso', g: 'Abdomen', q: 'cmg', w: 1, a: [32, 36, 36, 46, 44, 70, 52, 56, 62, 58, 66, 60, 78, 76], b: [32, 36, 36, 46, 44, 70, 46, 60, 54, 68, 66, 60, 78, 76] }
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
            'Patada de glúteo': ['Peso corporal, tobillera o polea', .1, 0, 'A cuatro apoyos con el abdomen firme, extiende una pierna hacia atrás y arriba apretando el glúteo. Vuelve sin arquear la espalda y alterna.'],
            'Gemelos sentado': ['Máquina o mancuernas sobre las rodillas', .4, 0, 'Sentado con el peso sobre los muslos, sube los talones al máximo, haz una pausa arriba y baja despacio estirando el gemelo.'],
            'Saltos de comba': ['Comba', 0, 0, 'Salta con ambos pies a la vez usando solo las muñecas para girar la cuerda y aterrizando sobre la punta del pie con las rodillas suaves.'],
            'Press inclinado': ['Banco inclinado y mancuernas', .25, 1, 'En un banco inclinado a unos 30°, empuja las mancuernas hacia arriba sobre el pecho y baja hasta que los codos queden a la altura del torso.'],
            'Aperturas con mancuernas': ['Banco y mancuernas', .1, 1, 'Tumbado con los brazos arriba y los codos ligeramente flexionados, abre los brazos en arco hasta notar el estiramiento del pecho y vuelve juntando las manos.'],
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
        function getWeightRecommendation(exerciseName, userProfile) {
            const exerciseDetails = EXERCISE_DETAILS[exerciseName];
            const hasEquipmentWeights = userProfile.eq.some(equipment => equipment !== 'c');
            if (!exerciseDetails || !exerciseDetails[1] || !userProfile.pe || !hasEquipmentWeights) return null;

            const heightInMeters = userProfile.al / 100;
            const bodyMassIndexWeight = Math.min(userProfile.pe, 27 * heightInMeters * heightInMeters);
            const ageFactor = userProfile.ed < 18 ? .7
                : userProfile.ed < 40 ? 1
                    : userProfile.ed < 50 ? .9
                        : userProfile.ed < 60 ? .8
                            : .65;
            const levelFactor = { principiante: .6, intermedio: .85, avanzado: 1.1 }[userProfile.niv];
            const goalFactor = { fuerza: 1.15, hipertrofia: 1, resistencia: .75 }[userProfile.obj];
            const estimatedWeight = bodyMassIndexWeight
                * exerciseDetails[1]
                * ageFactor
                * levelFactor
                * goalFactor;
            const roundingStep = estimatedWeight < 10
                ? .5
                : estimatedWeight < 30 ? 1 : 2.5;
            const recommendedWeight = Math.max(
                1,
                Math.round(estimatedWeight / roundingStep) * roundingStep
            );
            const dumbbellLabel = exerciseDetails[2] ? ' por mancuerna' : '';

            return `${recommendedWeight} kg${dumbbellLabel}`;
        }

        function renderExerciseInfo(exercise, userProfile) {
            const exerciseDetails = EXERCISE_DETAILS[exercise.n];
            if (!exerciseDetails) return '';

            const weightRecommendation = userProfile
                ? getWeightRecommendation(exercise.n, userProfile)
                : null;
            const recommendationMarkup = weightRecommendation
                ? ` · ⚖️ Peso orientativo: <b>${weightRecommendation}</b>`
                : '';

            return `<div class="n">🧰 ${exerciseDetails[0]}${recommendationMarkup}</div><details><summary>Cómo se hace</summary><div class="m">${exerciseDetails[3]}</div></details>`;
        }

        const SPLIT_MUSCLE_GROUPS = {
            'Cuerpo completo': ['Piernas', 'Pecho', 'Espalda', 'Hombro', 'Glúteo', 'Abdomen', 'Bíceps', 'Tríceps', 'Gemelos'],
            Empuje: ['Pecho', 'Hombro', 'Tríceps'],
            Tirón: ['Espalda', 'Bíceps', 'Abdomen'],
            Pierna: ['Piernas', 'Glúteo', 'Gemelos', 'Abdomen'],
            Torso: ['Pecho', 'Espalda', 'Hombro', 'Bíceps', 'Tríceps']
        };
        const GOAL_SETTINGS = {
            fuerza: { sets: 5, repetitions: '5', restSeconds: 150 },
            hipertrofia: { sets: 4, repetitions: '8-12', restSeconds: 75 },
            resistencia: { sets: 3, repetitions: '15-20', restSeconds: 45 }
        };
        const query = selector => document.querySelector(selector);
        const escapeHTML = value => String(value).replace(/[&<>"]/g, character => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;'
        }[character]));

        function renderExerciseIllustration(exercise) {
            const colors = {
                skin: '#e0a982',
                shirt: '#0f766e',
                shorts: '#334155',
                hair: '#3b2a20',
                shoes: '#f1f5f9',
                highlight: '#f97316'
            };
            const usesBarbell = /^(Sentadilla|Press de banca|Peso muerto|Press militar)$/.test(exercise.n);
            const highlightsArms = ['Hombro', 'Bíceps', 'Tríceps', 'Pecho'].includes(exercise.g);
            const highlightsLegs = ['Piernas', 'Glúteo', 'Gemelos'].includes(exercise.g);
            const highlightsTorso = ['Espalda', 'Abdomen', 'Pecho'].includes(exercise.g);

            const drawLine = (start, end, width, color, opacity) =>
                `<line x1="${start[0]}" y1="${start[1]}" x2="${end[0]}" y2="${end[1]}" stroke="${color}" stroke-width="${width}"${opacity ? ` opacity="${opacity}"` : ''}/>`;
            const pointBetween = (start, end, ratio) => [
                start[0] + (end[0] - start[0]) * ratio,
                start[1] + (end[1] - start[1]) * ratio
            ];
            const drawPose = (pose, opacity) => {
                const [head, shoulder, hip, elbow, hand, knee, foot] = [0, 1, 2, 3, 4, 5, 6]
                    .map(index => [pose[index * 2], pose[index * 2 + 1]]);

                const drawLeg = offset => {
                    const shiftedHip = [hip[0] + offset, hip[1]];
                    const shiftedKnee = [knee[0] + offset, knee[1]];
                    const shiftedFoot = [foot[0] + offset, foot[1]];
                    return drawLine(shiftedHip, shiftedKnee, 10, colors.skin)
                        + drawLine(shiftedHip, pointBetween(shiftedHip, shiftedKnee, .7), 11.5, colors.shorts)
                        + drawLine(shiftedKnee, shiftedFoot, 7, colors.skin)
                        + drawLine(
                            [shiftedFoot[0] - 2, shiftedFoot[1] - 1.5],
                            [shiftedFoot[0] + 6, shiftedFoot[1] - 1.5],
                            5,
                            colors.shoes
                        );
                };
                const drawArm = offset => {
                    const shiftedShoulder = [shoulder[0] + offset, shoulder[1]];
                    const shiftedElbow = [elbow[0] + offset, elbow[1]];
                    const shiftedHand = [hand[0] + offset, hand[1]];
                    return drawLine(shiftedShoulder, shiftedElbow, 7.5, colors.shirt)
                        + drawLine(shiftedElbow, shiftedHand, 5.5, colors.skin)
                        + `<circle cx="${shiftedHand[0]}" cy="${shiftedHand[1]}" r="3" fill="${colors.skin}"/>`;
                };
                const armHighlights = highlightsArms
                    ? drawLine(shoulder, elbow, 3, colors.highlight, .7)
                        + drawLine(elbow, hand, 2.5, colors.highlight, .7)
                    : '';
                const legHighlights = highlightsLegs
                    ? drawLine(hip, knee, 3.5, colors.highlight, .7)
                        + drawLine(knee, foot, 3, colors.highlight, .7)
                    : '';
                const torsoHighlight = highlightsTorso
                    ? drawLine(shoulder, hip, 4, colors.highlight, .6)
                    : '';
                const weightMarkup = exercise.w
                    ? `<circle cx="${hand[0]}" cy="${hand[1]}" r="${usesBarbell ? 8 : 4.5}" fill="#1f2937" stroke="#94a3b8" stroke-width="1.2"/>`
                    : '';

                return `<g opacity="${opacity}"><g style="filter:brightness(.7)">${drawLeg(-3)}${drawArm(-3)}</g>`
                    + `${drawLine(head, shoulder, 5, colors.skin)}`
                    + `${drawLine(shoulder, hip, 15, colors.shirt)}`
                    + `${drawLine(pointBetween(shoulder, hip, .65), hip, 14, colors.shorts)}`
                    + `${drawLeg(0)}${drawArm(0)}`
                    + `<circle cx="${head[0]}" cy="${head[1]}" r="6.8" fill="${colors.hair}"/>`
                    + `<circle cx="${head[0] + 1.3}" cy="${head[1] + 1.3}" r="5.6" fill="${colors.skin}"/>`
                    + `${armHighlights}${legHighlights}${torsoHighlight}${weightMarkup}</g>`;
            };

            return `<svg viewBox="0 0 100 100" role="img" aria-label="${escapeHTML(exercise.n)}">`
                + '<path d="M5 91H95" stroke="var(--ln)" stroke-width="2" fill="none"/>'
                + `<g fill="none" stroke="var(--mut)" stroke-width="3" stroke-linecap="round">${exercise.env || ''}</g>`
                + `${drawPose(exercise.a, .28)}${drawPose(exercise.b, 1)}</svg>`;
        }
        function loadSavedTables() {
            try {
                return JSON.parse(localStorage.getItem('tablas') || '[]');
            } catch (error) {
                return [];
            }
        }

        function saveTables(tables) {
            try {
                localStorage.setItem('tablas', JSON.stringify(tables));
                return true;
            } catch (error) {
                alert('No se pudo guardar en este dispositivo.');
                return false;
            }
        }

        let tableDraft = null;
        let activeTab = 0;

        function generateTrainingTable(userOptions) {
            const goalSettings = GOAL_SETTINGS[userOptions.obj];
            const exercisesPerDay = { principiante: 5, intermedio: 6, avanzado: 7 }[userOptions.niv];
            const setsPerExercise = userOptions.niv === 'principiante'
                ? Math.min(goalSettings.sets, 3)
                : goalSettings.sets;
            const availableExercises = EXERCISES.filter(exercise =>
                [...exercise.q].some(equipment => userOptions.eq.includes(equipment))
            );
            if (!availableExercises.length) return null;

            const exerciseUsageCounts = {};
            const splitNames = userOptions.dias <= 3
                ? Array(userOptions.dias).fill('Cuerpo completo')
                : userOptions.dias === 4
                    ? ['Torso', 'Pierna', 'Torso', 'Pierna']
                    : userOptions.dias === 5
                        ? ['Empuje', 'Tirón', 'Pierna', 'Torso', 'Pierna']
                        : ['Empuje', 'Tirón', 'Pierna', 'Empuje', 'Tirón', 'Pierna'];

            const days = splitNames.map((splitName, dayIndex) => {
                let muscleGroups = SPLIT_MUSCLE_GROUPS[splitName].slice();
                if (splitName === 'Cuerpo completo') {
                    muscleGroups = muscleGroups.slice(dayIndex * 2)
                        .concat(muscleGroups.slice(0, dayIndex * 2));
                }

                const dayExercises = [];
                for (let index = 0; index < exercisesPerDay; index++) {
                    let candidates = availableExercises.filter(exercise =>
                        exercise.g === muscleGroups[index % muscleGroups.length]
                        && !dayExercises.includes(exercise)
                    );
                    if (!candidates.length) {
                        candidates = availableExercises.filter(exercise =>
                            muscleGroups.includes(exercise.g)
                            && !dayExercises.includes(exercise)
                        );
                    }
                    if (!candidates.length) break;

                    candidates.sort((firstExercise, secondExercise) =>
                        (exerciseUsageCounts[firstExercise.n] || 0)
                        - (exerciseUsageCounts[secondExercise.n] || 0)
                        + (Math.random() - .5)
                    );
                    const selectedExercise = candidates[0];
                    exerciseUsageCounts[selectedExercise.n] =
                        (exerciseUsageCounts[selectedExercise.n] || 0) + 1;
                    dayExercises.push(selectedExercise);
                }

                return {
                    t: `Día ${dayIndex + 1} · ${splitName}`,
                    it: dayExercises.map(exercise => ({
                        n: exercise.n,
                        s: setsPerExercise,
                        r: exercise.t ? '30-45 s' : goalSettings.repetitions,
                        d: goalSettings.restSeconds
                    }))
                };
            });

            return {
                name: '',
                date: new Date().toLocaleDateString('es-ES'),
                o: userOptions,
                days
            };
        }

        function findExerciseByName(exerciseName) {
            return EXERCISES.find(exercise => exercise.n === exerciseName);
        }

        function renderTrainingTable(trainingTable) {
            const { name, date, o: userOptions, days } = trainingTable;
            const personalDetails = userOptions.pe
                ? ` · ${userOptions.ed} años · ${userOptions.pe} kg · ${userOptions.al} cm`
                : '';
            const safetyNotice = userOptions.pe
                ? `<div class="n">Los pesos son orientativos (calculados con tu edad, peso, altura, nivel y objetivo): un punto de partida para las series de trabajo. Prioriza la técnica y ajusta si te cuesta o te sobra.${userOptions.ed < 18 ? ' Siendo menor de edad, entrena con supervisión y cargas ligeras.' : ''} Consulta con un médico si tienes lesiones o dolencias.</div>`
                : '';
            const renderedDays = days.map(day => {
                const renderedExercises = day.it.map(plannedExercise => {
                    const exercise = findExerciseByName(plannedExercise.n);
                    if (!exercise) return '';

                    return `<div class="c"><div class="ex">${renderExerciseIllustration(exercise)}<div>`
                        + `<b>${escapeHTML(exercise.n)}</b><div class="m">${exercise.g}</div>`
                        + `<div>${plannedExercise.s} series × ${plannedExercise.r}</div>`
                        + `<div class="m">Descanso ${plannedExercise.d} s</div></div></div>`
                        + `${renderExerciseInfo(exercise, userOptions)}</div>`;
                }).join('');

                return `<h2>${escapeHTML(day.t)}</h2>${renderedExercises}`;
            }).join('');

            return `<h2>${escapeHTML(name || 'Vista previa')}</h2>`
                + `<div class="m">${userOptions.obj} · ${userOptions.niv} · ${userOptions.dias} días/semana · ${date}${personalDetails}</div>`
                + safetyNotice
                + renderedDays;
        }

        function renderExerciseCatalog() {
            const muscleGroups = ['Todos', ...new Set(EXERCISES.map(exercise => exercise.g))];
            const view = query('#v');
            view.innerHTML = `<div class="f">${muscleGroups.map(group =>
                `<button data-g="${group}">${group}</button>`
            ).join('')}</div><div class="g" id="gr"></div>`;

            const renderExercisesForGroup = selectedGroup => {
                const matchingExercises = EXERCISES.filter(exercise =>
                    selectedGroup === 'Todos' || exercise.g === selectedGroup
                );
                query('#gr').innerHTML = matchingExercises.map(exercise =>
                    `<div class="c">${renderExerciseIllustration(exercise)}`
                    + `<b>${escapeHTML(exercise.n)}</b><div class="m">${exercise.g}</div>`
                    + `${renderExerciseInfo(exercise)}</div>`
                ).join('');
            };

            renderExercisesForGroup('Todos');
            view.querySelectorAll('[data-g]').forEach(button => {
                button.onclick = () => renderExercisesForGroup(button.dataset.g);
            });
        }

        function renderTableDraft() {
            const draftMarkup = tableDraft
                ? renderTrainingTable(tableDraft)
                    + `<label>Nombre de la tabla</label><input type="text" id="nm" value="${escapeHTML(tableDraft.name)}" placeholder="Ej. Fuerza 4 días">`
                    + '<div class="row"><button class="p" id="sv">💾 Guardar</button>'
                    + '<button id="rg">🔄 Regenerar</button></div>'
                    + '<button class="big" id="nw">← Cambiar condiciones</button>'
                : `<div class="c"><label style="margin-top:0">Objetivo</label><select id="obj"><option value="hipertrofia">Ganar músculo</option><option value="fuerza">Ganar fuerza</option><option value="resistencia">Resistencia muscular</option></select>
<label>Nivel</label><select id="niv"><option>principiante</option><option selected>intermedio</option><option>avanzado</option></select>
<label>Días por semana</label><select id="dias">${[2, 3, 4, 5, 6].map(dayCount => `<option ${dayCount === 3 ? 'selected' : ''}>${dayCount}</option>`).join('')}</select>
<label>Tus datos</label><div class="tri"><div><input type="number" id="ed" placeholder="Edad" inputmode="numeric" min="12" max="90"></div><div><input type="number" id="pe" placeholder="Peso kg" inputmode="decimal" min="30" max="250"></div><div><input type="number" id="al" placeholder="Altura cm" inputmode="numeric" min="120" max="230"></div></div>
<label>Material disponible</label><div class="ck"><label><input type="checkbox" value="c" checked>Peso corporal</label><label><input type="checkbox" value="m" checked>Mancuernas/barra</label><label><input type="checkbox" value="g" checked>Gimnasio</label></div>
<button class="p big" id="go">Generar tabla</button></div>`;

            query('#v').innerHTML = draftMarkup;
            if (tableDraft) {
                bindDraftActions();
            } else {
                query('#go').onclick = handleGenerateTable;
            }
        }

        function bindDraftActions() {
            query('#sv').onclick = () => {
                tableDraft.name = query('#nm').value.trim() || `Tabla ${loadSavedTables().length + 1}`;
                tableDraft.id = Date.now();
                const savedTables = loadSavedTables();
                savedTables.unshift(tableDraft);

                if (saveTables(savedTables)) {
                    tableDraft = null;
                    activeTab = 1;
                    renderCurrentView();
                }
            };
            query('#rg').onclick = () => {
                tableDraft = generateTrainingTable(tableDraft.o);
                renderCurrentView();
            };
            query('#nw').onclick = () => {
                tableDraft = null;
                renderCurrentView();
            };
        }

        function handleGenerateTable() {
            const selectedEquipment = [...document.querySelectorAll('.ck input:checked')]
                .map(input => input.value);
            if (!selectedEquipment.length) {
                alert('Elige al menos un tipo de material.');
                return;
            }

            const age = +query('#ed').value;
            const weight = +query('#pe').value;
            const height = +query('#al').value;
            const validPersonalDetails = age >= 12 && age <= 90
                && weight >= 30 && weight <= 250
                && height >= 120 && height <= 230;
            if (!validPersonalDetails) {
                alert('Introduce edad (12-90), peso (30-250 kg) y altura (120-230 cm).');
                return;
            }

            tableDraft = generateTrainingTable({
                obj: query('#obj').value,
                niv: query('#niv').value,
                dias: +query('#dias').value,
                eq: selectedEquipment,
                ed: age,
                pe: weight,
                al: height
            });
            renderCurrentView();
            scrollTo(0, 0);
        }

        function renderSavedTables() {
            const view = query('#v');
            const savedTables = loadSavedTables();
            view.innerHTML = savedTables.length
                ? savedTables.map(trainingTable =>
                    `<div class="c"><b>${escapeHTML(trainingTable.name)}</b>`
                    + `<div class="m">${trainingTable.o.obj} · ${trainingTable.o.niv} · ${trainingTable.o.dias} días · ${trainingTable.date}</div>`
                    + `<div class="row"><button class="p" data-o="${trainingTable.id}">Abrir</button>`
                    + `<button class="d" data-x="${trainingTable.id}">Borrar</button></div></div>`
                ).join('')
                : '<p class="m">Aún no has guardado ninguna tabla. Ve a «Crear».</p>';

            view.querySelectorAll('[data-o]').forEach(button => {
                button.onclick = () => {
                    const selectedTable = loadSavedTables()
                        .find(trainingTable => trainingTable.id == button.dataset.o);
                    view.innerHTML = '<button id="bk">← Volver</button>'
                        + renderTrainingTable(selectedTable);
                    query('#bk').onclick = renderCurrentView;
                };
            });
            view.querySelectorAll('[data-x]').forEach(button => {
                button.onclick = () => {
                    if (!confirm('¿Borrar esta tabla?')) return;
                    saveTables(loadSavedTables().filter(trainingTable =>
                        trainingTable.id != button.dataset.x
                    ));
                    renderCurrentView();
                };
            });
        }

        function renderCurrentView() {
            document.querySelectorAll('nav button').forEach((button, index) => {
                button.className = index === activeTab ? 'on' : '';
            });

            if (activeTab === 0) {
                renderTableDraft();
            } else if (activeTab === 1) {
                renderSavedTables();
            } else {
                renderExerciseCatalog();
            }
        }

        [0, 1, 2].forEach(tabIndex => {
            query(`#t${tabIndex}`).onclick = () => {
                activeTab = tabIndex;
                renderCurrentView();
            };
        });
        renderCurrentView();
