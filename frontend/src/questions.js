const preguntas = [
  {
    id: 1,
    question: "Lenguaje de programación más utilizado",
    answers: [
      { id: 1, text: "Python", points: 30 },
      { id: 2, text: "Java", points: 20 },
      { id: 3, text: "Javascript", points: 18 },
      { id: 4, text: "C++", points: 14 },
      { id: 5, text: "C#", points: 10 },
      { id: 6, text: "PHP", points: 8 }
    ]
  },
  {
    id: 2,
    question: "¿Qué lleva un ingeniero a la universidad?",
    answers: [
      { id: 1, text: "Laptop", points: 30 },
      { id: 2, text: "Útiles", points: 20 },
      { id: 3, text: "Calculadora", points: 15 },
      { id: 4, text: "Bote de agua", points: 12 },
      { id: 5, text: "Materiales de dibujo", points: 8 },
      { id: 6, text: "Mochila", points: 15 }
    ]
  },
  {
    id: 3,
    question: "¿Qué hace un ingeniero cuando algo no funciona?",
    answers: [
      { id: 1, text: "Reiniciar", points: 40 },
      { id: 2, text: "Preguntarle a la IA", points: 30 },
      { id: 3, text: "Rendirse", points: 5 },
      { id: 4, text: "Pedir ayuda", points: 25 }
    ]
  },
  {
    id: 4,
    question: "¿Qué programas o software usa frecuentemente un ingeniero?",
    answers: [
      { id: 1, text: "VSCode", points: 25 },
      { id: 2, text: "Excel", points: 20 },
      { id: 3, text: "AutoCAD", points: 15 },
      { id: 4, text: "Wolfram Alpha", points: 10 },
      { id: 5, text: "IAs", points: 20 },
      { id: 6, text: "Teams", points: 10 }
    ]
  },
  {
    id: 5,
    question: "¿Qué hace un ingeniero cuando escucha trabajo en equipo?",
    answers: [
      { id: 1, text: "Quejarse", points: 30 },
      { id: 2, text: "Terminar todo el trabajo solo", points: 30 },
      { id: 3, text: "Asignarse lo más fácil", points: 20 },
      { id: 4, text: "Dejarlo todo a última hora", points: 20 }
    ]
  },
  {
    id: 6,
    question: "¿Qué bebida toma mucho un ingeniero?",
    answers: [
      { id: 1, text: "Alcohol", points: 5 },
      { id: 2, text: "Café", points: 40 },
      { id: 3, text: "Bebida energética", points: 25 },
      { id: 4, text: "Refresco", points: 15 },
      { id: 5, text: "Agua", points: 15 }
    ]
  },
  {
    id: 7,
    question: "¿Qué objeto representa más a un ingeniero?",
    answers: [
      { id: 1, text: "Calculadora científica", points: 20 },
      { id: 2, text: "Casco", points: 20 },
      { id: 3, text: "Computadora", points: 35 },
      { id: 4, text: "Burros", points: 10 },
      { id: 5, text: "Chaleco", points: 15 }
    ]
  },
  {
    id: 8,
    question: "Algo que un ingeniero casi nunca tiene tiempo de hacer",
    answers: [
      { id: 1, text: "Dormir", points: 35 },
      { id: 2, text: "Tener vida social", points: 20 },
      { id: 3, text: "Tener vida amorosa", points: 15 },
      { id: 4, text: "Hacer ejercicio", points: 10 },
      { id: 5, text: "Comer bien", points: 15 },
      { id: 6, text: "Trabajar", points: 5 }
    ]
  },
  {
    id: 9,
    question: "¿Qué cosas asustan a un estudiante de ingeniería?",
    answers: [
      { id: 1, text: "Mujeres", points: 15 },
      { id: 2, text: "Examen a libro abierto con internet", points: 25 },
      { id: 3, text: "Buscar empleo/Trabajar", points: 20 },
      { id: 4, text: "Exponer", points: 20 },
      { id: 5, text: "Gastar dinero", points: 10 },
      { id: 6, text: "Bañarse", points: 10 }
    ]
  },
  {
    id: 10,
    question: "¿Qué puede tener un laboratorio de ingeniería?",
    answers: [
      { id: 1, text: "Computadoras", points: 25 },
      { id: 2, text: "Datashow", points: 15 },
      { id: 3, text: "Aire acondicionado", points: 15 },
      { id: 4, text: "Cables", points: 15 },
      { id: 5, text: "Multímetro", points: 15 },
      { id: 6, text: "Cautín", points: 15 }
    ]
  },
  {
    id: 11,
    question: "Géneros de música que más le gustan a un ingeniero",
    answers: [
      { id: 1, text: "Rock", points: 25 },
      { id: 2, text: "LoFi", points: 25 },
      { id: 3, text: "Reggaeton", points: 20 },
      { id: 4, text: "Cumbia", points: 10 },
      { id: 5, text: "Rancheras", points: 8 },
      { id: 6, text: "Corridos", points: 12 }
    ]
  },
  {
    id: 12,
    question: "¿Qué IA usa frecuentemente un ingeniero?",
    answers: [
      { id: 1, text: "ChatGPT", points: 35 },
      { id: 2, text: "Gemini", points: 20 },
      { id: 3, text: "Claude", points: 15 },
      { id: 4, text: "Deepseek", points: 10 },
      { id: 5, text: "Antigravity", points: 5 },
      { id: 6, text: "Copilot", points: 15 }
    ]
  },
  {
    id: 13,
    question: "Nombra una tecnología, lenguaje o herramienta que muchos odian pero sigue existiendo en proyectos de las empresas.",
    answers: [
      { id: 1, text: "COBOL", points: 30 },
      { id: 2, text: "Assembly", points: 20 },
      { id: 3, text: "PHP", points: 25 },
      { id: 4, text: "Planos físicos", points: 10 },
      { id: 5, text: "Macros en Excel", points: 15 }
    ]
  },
  {
    id: 14,
    question: "¿Qué es lo primero que le dices a un familiar cuando te pide que le \"arregles\" la computadora o el internet?",
    answers: [
      { id: 1, text: "Soy ingeniero, no técnico", points: 30 },
      { id: 2, text: "Cobrarle dinero", points: 10 },
      { id: 3, text: "Preguntarle si ya intentó reiniciar", points: 50 },
      { id: 4, text: "Que compre otro dispositivo", points: 10 }
    ]
  },
  {
    id: 15,
    question: "Algo que buscas en Google porque nunca te memorizas cómo se hace",
    answers: [
      { id: 1, text: "Fórmulas de integrales, derivadas", points: 20 },
      { id: 2, text: "Fórmula cuadrática", points: 15 },
      { id: 3, text: "Conversiones de unidades", points: 10 },
      { id: 4, text: "Normas APA", points: 15 },
      { id: 5, text: "Sintaxis de lenguajes", points: 25 },
      { id: 6, text: "Fórmulas de Excel", points: 15 }
    ]
  },
  {
    id: 16,
    question: "Prenda de vestir típica de un ingeniero",
    answers: [
      { id: 1, text: "Jeans pegados", points: 15 },
      { id: 2, text: "Blusa cuadriculada", points: 20 },
      { id: 3, text: "Burros", points: 15 },
      { id: 4, text: "Skechers", points: 20 },
      { id: 5, text: "Camisetas con serigrafía", points: 20 },
      { id: 6, text: "Gorras", points: 10 }
    ]
  },
  {
    id: 17,
    question: "Además del IDE/Editor, la aplicación que siempre está abierta en tu PC",
    answers: [
      { id: 1, text: "Navegador", points: 35 },
      { id: 2, text: "Spotify", points: 15 },
      { id: 3, text: "Youtube", points: 20 },
      { id: 4, text: "Explorador de Archivos", points: 15 },
      { id: 5, text: "Redes sociales", points: 10 },
      { id: 6, text: "Discord", points: 5 }
    ]
  },
  {
    id: 18,
    question: "Lugares favoritos de un ingeniero",
    answers: [
      { id: 1, text: "Bares", points: 15 },
      { id: 2, text: "Biblioteca/Coworking", points: 20 },
      { id: 3, text: "Casa", points: 25 },
      { id: 4, text: "Cafetería", points: 15 },
      { id: 5, text: "Pollolandia", points: 15 },
      { id: 6, text: "Hollywood", points: 10 }
    ]
  },
  {
    id: 19,
    question: "Comida rápida que pide un ingeniero para sobrevivir",
    answers: [
      { id: 1, text: "Baleadas", points: 30 },
      { id: 2, text: "Nachos", points: 10 },
      { id: 3, text: "Comida china", points: 15 },
      { id: 4, text: "Pizza", points: 20 },
      { id: 5, text: "Hamburguesa", points: 15 },
      { id: 6, text: "Pollo", points: 10 }
    ]
  },
  {
    id: 20,
    question: "El mayor choque con la realidad de un ingeniero recién graduado",
    answers: [
      { id: 1, text: "Desempleo", points: 25 },
      { id: 2, text: "Explotación laboral", points: 20 },
      { id: 3, text: "Bajos salarios", points: 20 },
      { id: 4, text: "Requisitos imposibles", points: 20 },
      { id: 5, text: "Contactos para conseguir trabajo", points: 15 }
    ]
  }
];

export default preguntas;
