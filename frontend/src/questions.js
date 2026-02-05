const preguntas = [
  {
    id: 1,
    question: "Algo que NO deberías decir o hacer en una primera cita",
    answers: [
      { id: 1, text: "50/50", points: 35 },
      { id: 2, text: "Me recuerdas a mi ex", points: 28 },
      { id: 3, text: "Hablar de fútbol o deporte", points: 22 },
      { id: 4, text: "Llegar tarde", points: 15 },
      { id: 5, text: "Usar el teléfono", points: 10 }
    ]
  },
  {
    id: 2,
    question: "Excusas típicas para no ir a una cita",
    answers: [
      { id: 1, text: "Estoy enfermo o un familiar", points: 34 },
      { id: 2, text: "No me dieron permiso", points: 27 },
      { id: 3, text: "Tengo que estudiar o trabajar", points: 21 },
      { id: 4, text: "Tengo pareja", points: 16 },
      { id: 5, text: "Se me olvidó", points: 9 },
      { id: 6, text: "No tengo dinero", points: 5 }
    ]
  },
  {
    id: 3,
    question: "Frase cursi que da cringe",
    answers: [
      { id: 1, text: "Tú y yo contra el mundo", points: 30 },
      { id: 2, text: "Eres mi lugar seguro", points: 18 }
    ]
  },
  {
    id: 4,
    question: "Algo que da más miedo que decir 'te quiero'",
    answers: [
      { id: 1, text: "Tenemos que hablar", points: 33 },
      { id: 2, text: "¿Qué somos?", points: 26 },
      { id: 3, text: "¿Quién te escribió?", points: 20 },
      { id: 4, text: "¿Con quién estás?", points: 14 },
      { id: 5, text: "Mándame tu ubicación", points: 9 },
      { id: 6, text: "Te voy a presentar a mis papás", points: 5 }
    ]
  },
  {
    id: 5,
    question: "Algo que stalkeas antes de salir con alguien",
    answers: [
      { id: 1, text: "Destacadas de Instagram", points: 32 },
      { id: 2, text: "Compartidos de TikTok o IG", points: 25 },
      { id: 3, text: "Followers y a quién sigue", points: 19 },
      { id: 4, text: "Grupo de amigos", points: 13 },
      { id: 5, text: "Amigos en común", points: 7 }
    ]
  },
  {
    id: 6,
    question: "Red flag en redes sociales",
    answers: [
      { id: 1, text: "Seguir páginas explícitas", points: 35 },
      { id: 2, text: "Seguir demasiadas personas", points: 29 },
      { id: 3, text: "Indirectas al ex", points: 22 },
      { id: 4, text: "Seguir al ex", points: 16 },
      { id: 5, text: "Meterte a close friends rápido", points: 9 }
    ]
  },
  {
    id: 7,
    question: "Excusa para no subir la foto juntos",
    answers: [
      { id: 1, text: "Yo no subo nada", points: 28 },
      { id: 2, text: "Me da pena", points: 21 },
      { id: 3, text: "No quiero que nadie te siga", points: 15 },
      { id: 4, text: "Más tarde la subo", points: 10 },
      { id: 5, text: "La subo a close", points: 7 },
      { id: 6, text: "Mi familia ve mis historias", points: 4 }
    ]
  },
  {
    id: 8,
    question: "App que ha roto más corazones",
    answers: [
      { id: 1, text: "Instagram", points: 34 },
      { id: 2, text: "TikTok", points: 27 },
      { id: 3, text: "Galería", points: 21 },
      { id: 4, text: "WhatsApp", points: 16 },
      { id: 5, text: "Calculadora", points: 9 },
      { id: 6, text: "Tinder", points: 5 }
    ]
  },
  {
    id: 9,
    question: "Regalo de San Valentín versión estudiante",
    answers: [
      { id: 1, text: "Chocolate", points: 31 },
      { id: 2, text: "Flores", points: 26 },
      { id: 3, text: "Peluche", points: 19 },
      { id: 4, text: "Carta o notas", points: 14 },
      { id: 5, text: "Manualidades", points: 9 },
      { id: 6, text: "Accesorios o joyería", points: 5 }
    ]
  },
  {
    id: 10,
    question: "Ventaja de estar soltero",
    answers: [
      { id: 1, text: "Ahorro dinero", points: 33 },
      { id: 2, text: "Tiempo libre", points: 27 },
      { id: 3, text: "No hay discusiones", points: 20 },
      { id: 4, text: "No hay compromisos", points: 14 },
      { id: 5, text: "Tener de dónde elegir", points: 8 }
    ]
  },
  {
    id: 11,
    question: "Plan de soltero el 14 de febrero",
    answers: [
      { id: 1, text: "Salir con amigos", points: 30 },
      { id: 2, text: "Ir a bares o discotecas", points: 24 },
      { id: 3, text: "Jugar", points: 18 },
      { id: 4, text: "Dormir", points: 13 },
      { id: 5, text: "Sobrepensar o llorar", points: 7 }
    ]
  },
  {
    id: 12,
    question: "Red flag que NO se perdona aunque te guste",
    answers: [
      { id: 1, text: "Infiel", points: 35 },
      { id: 2, text: "Narcisista", points: 28 },
      { id: 3, text: "Manipulador", points: 22 },
      { id: 4, text: "Victimista", points: 16 },
      { id: 5, text: "Tacaño", points: 10 },
      { id: 6, text: "Mala ortografía", points: 5 }
    ]
  },
  {
    id: 13,
    question: "Frases o acciones que dicen 'amigos' sin decir 'amigos'",
    answers: [
      { id: 1, text: "Sos como un hermano", points: 34 },
      { id: 2, text: "Salgamos pero entre varios", points: 27 },
      { id: 3, text: "Habla de otras personas que le gustan", points: 20 },
      { id: 4, text: "Solo te busca cuando no tiene a nadie", points: 14 },
      { id: 5, text: "Te aprecio pero no así", points: 8 }
    ]
  },
  {
    id: 14,
    question: "Frase o excusa cuando ya no quieren nada",
    answers: [
      { id: 1, text: "No sos vos, soy yo", points: 33 },
      { id: 2, text: "Estoy enfocado en mí", points: 26 },
      { id: 3, text: "Ya no es lo mismo", points: 20 },
      { id: 4, text: "Démonos un tiempo", points: 14 },
      { id: 5, text: "No sé qué quiero", points: 8 }
    ]
  },
  {
    id: 15,
    question: "Excusa típica de alguien infiel",
    answers: [
      { id: 1, text: "No es nada serio", points: 35 },
      { id: 2, text: "Es solo una amiga", points: 28 },
      { id: 3, text: "No me das espacio", points: 22 },
      { id: 4, text: "Tú me descuidaste", points: 15 },
      { id: 5, text: "Es mi familiar", points: 9 },
      { id: 6, text: "Estaba borracho", points: 5 }
    ]
  },
  {
    id: 16,
    question: "Tipos de personas en San Valentín",
    answers: [
      { id: 1, text: "Los enamorados", points: 30 },
      { id: 2, text: "El despechado", points: 24 },
      { id: 3, text: "El fuckboy o bandida", points: 18 },
      { id: 4, text: "El intenso o tóxico", points: 12 },
      { id: 5, text: "El soltero", points: 6 }
    ]
  },
  {
    id: 17,
    question: "Lugar para las parejitas en la U",
    answers: [
      { id: 1, text: "Milo", points: 29 },
      { id: 2, text: "Abajo del C3", points: 23 },
      { id: 3, text: "K", points: 17 },
      { id: 4, text: "Bosque del J", points: 12 },
      { id: 5, text: "C2", points: 8 },
      { id: 6, text: "A1 y A2", points: 4 }
    ]
  },
  {
    id: 18,
    question: "Algo que puede arruinar una relación",
    answers: [
      { id: 1, text: "Toxicidad o celos", points: 35 },
      { id: 2, text: "Infidelidad", points: 29 },
      { id: 3, text: "Falta de comunicación", points: 22 },
      { id: 4, text: "Desinterés", points: 16 },
      { id: 5, text: "Manipulación", points: 10 },
      { id: 6, text: "Distancia", points: 6 }
    ]
  },
  {
    id: 19,
    question: "Algo que un estudiante hace cuando está enamorado",
    answers: [
      { id: 1, text: "Hace las tareas", points: 33 },
      { id: 2, text: "Invita a comer", points: 26 },
      { id: 3, text: "Ser el uber", points: 20 },
      { id: 4, text: "Acompañar por toda la U", points: 14 },
      { id: 5, text: "Gasta pasaje o regalos", points: 8 }
    ]
  },
  {
    id: 20,
    question: "Frases de migajero o migajera",
    answers: [
      { id: 1, text: "Yo sé que puedes cambiar", points: 35 },
      { id: 2, text: "Siempre te esperaré", points: 28 },
      { id: 3, text: "Al menos quedemos como amigos", points: 21 },
      { id: 4, text: "Mientras tú seas feliz yo soy feliz", points: 14 },
      { id: 5, text: "Solo quiero que me ames", points: 8 }
    ]
  },
  {
    id: 21,
    question: "Algo que alguien hace cuando ya no le interesa",
    answers: [
      { id: 1, text: "Deja en visto", points: 34 },
      { id: 2, text: "Responde tarde", points: 27 },
      { id: 3, text: "Da excusas", points: 20 },
      { id: 4, text: "Se vuelve seco", points: 14 },
      { id: 5, text: "Nunca tiene tiempo", points: 8 },
      { id: 6, text: "Habla de su ex", points: 4 }
    ]
  },
  {
    id: 22,
    question: "Algo que alguien dice cuando tarda horas en responder",
    answers: [
      { id: 1, text: "Me dormí", points: 30 },
      { id: 2, text: "Estaba ocupado", points: 24 },
      { id: 3, text: "Me quedé sin datos", points: 18 },
      { id: 4, text: "Se me descargó el teléfono", points: 12 },
      { id: 5, text: "No vi el mensaje", points: 6 }
    ]
  },
  {
    id: 23,
    question: "Algo que no debería pedirse en una relación",
    answers: [
      { id: 1, text: "Tiempo", points: 35 },
      { id: 2, text: "Interés", points: 28 },
      { id: 3, text: "Atención", points: 21 },
      { id: 4, text: "Fidelidad o respeto", points: 14 },
      { id: 5, text: "Honestidad", points: 8 },
      { id: 6, text: "Comunicación", points: 4 }
    ]
  },
  {
    id: 24,
    question: "Apps para parejas",
    answers: [
      { id: 1, text: "Life360", points: 32 },
      { id: 2, text: "Snapchat", points: 25 },
      { id: 3, text: "NoteIt", points: 18 },
      { id: 4, text: "BeReal", points: 12 },
      { id: 5, text: "Cuidar una mascota juntos", points: 6 }
    ]
  }
];

export default preguntas;
