import { BotMessageSquare, BatteryCharging, Fingerprint, ShieldHalf, PlugZap, GlobeLock } from "lucide-react";

import katie from "../assets/profile-pictures/katie.jpeg";
import alan from "../assets/profile-pictures/alan.png";
import jonathan from "../assets/profile-pictures/jona.jpeg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const APP_DATA_ENGLISH = {
  language: "ENG",
  navItems: [
    { label: "About", href: "#about" },
    { label: "Stack", href: "#stack" },
    { label: "Projects", href: "#projects" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ],

  main: {
    title: "Hi, my name is ",
    description:
      "I am an engineer with over 10 years of experience as a Full Stack developer, specializing in front-end and back-end development for desktop and mobile applications. \nSkilled in building JavaScript, Ruby on Rails (RoR), and HTML5 apps. Proficient in writing unit and integration tests using tools like Jest, React Testing Library, Cypress for E2E testing, DataDog E2E Synthetic Tests, and applying Test-Driven Development (TDD) practices to ensure code quality and reliability.",
    titleTech: "Programming languages",
    libraries: "Libraries/Frameworks",
    testimonialsTitle: "Testimonials",
    contactTitle: "Contact",
    portfolioTitle: "Projects",
    cv: "Download CV",
  },


  portfolio: {
    devadler: "alejandrodelarocha.com used to be Devadler.com a website for a company that provides web development services \n (2010)",
    // TODO: Add description for Red Fox in english
    redfox: "Red Fox Carriers, a website for a company that provides transportation services, it included a CRM system for managing clients \n (2015)",
    alejandro: "alejandrodlrocha.com, first version of this website. \n (2008)",
    siledoy: "SiLeDoy.com, a date matching website. \n (2014)",
    altfi: "AltFiConstructora.com, a website for a construction company. \n (2014)",
    compuPlus: "CompuPlus.com.mx, a website for a computer repair company. \n (2015)",
    uiHear: "UiHear.com, an accessibility application for people with hearing disabilities in the classroom. \n (2018)",
    ratachat: "Ratachat a chatbot for the Mexican youtuber NEGAS. \n (2018)",
    pinchimundo: "Pinchimundo, a podcast application for the Mexican youtuber NEGAS. \n (2018)",
    lifestance: "LifeStance Health, Full Stack development for a company that provides mental healthcare services. \n (2019-2025)",
    sap: "SAP, a website for a company that provides insurance solutions. \n (2015)",
    politicus: "Politicus, a prototype of a political analysis website. \n (2015)",
  },

  testimonials: [
    { user: "Katie Ott", company: "Technology Project Manager @ Reactivate", image: katie, text: "I've had the pleasure of working with Alejandro building tools for our clinicians and patients. Alejandro has always stood out with his mission-driven and egoless work ethic. I've had the opportunity to see him grow in his role over the past few years, and really step up by not being afraid to challenge himself and others in their work. He is always willing to try step in when needed to lend a hand or help problem solve. He emulates teamwork through his collaborative approach and welcoming attitude and leads by example whether that's by elevating team culture, creating camaraderie on the team, asking the hard questions, and always looking for ways he can improve himself in his work. Anyone who has had Alejandro on their team should consider themselves lucky!", href: "https://www.linkedin.com/in/ottkatherine/"},
    { user: "Alan Owens", company: "Senior Software Engineering Manager @ LifeStance Health", text: "An incredibly talented individual, with an exceptional work ethic. I've had the pleasure of being Alejandro's engineering manager for just shy of two and a half years.  His ability to juggle multiple projects, while never losing track of the 'nitty gritty' and details made a dramatic difference in the productivity of our team.  His willingness to roll up his sleeves and jump in to assist, whether a backend or frontend issue, feature or bug, was inspirational and a fine example to other team members and was noticed by stakeholders. An asset to any team, I consider it a privilege to have gotten to work with Alejandro the time that I have, and any team would be lucky to have Alejandro.", image: alan, href: "#"},
    { user: "Jonathan Ayala", company: "Senior Software Engineer @ EOG Resources", text: "I had the pleasure of working with Alejandro, and I can confidently say that he is an exceptional professional in the field of programming. His ability to solve complex problems with a logical and structured approach makes him a valuable asset to any team. Alejandro not only possesses deep technical knowledge but also has a great ability to analyze situations, find efficient solutions, and quickly adapt to new challenges. His critical thinking and creativity allow him to approach problems from different perspectives, achieving innovative and effective results. Furthermore, his clear communication skills and willingness to collaborate make working with him a truly enriching experience. He is a proactive, empathetic team player who is always eager to share knowledge, fostering a positive and productive work environment. I am confident that Alejandro will be an excellent addition to any team, and I highly recommend him without hesitation.", image: jonathan, href: "https://www.linkedin.com/in/yojona/"}
  ],


  phone: "Phone",
  email: "Email",
  social: "Social Media",

  footer: ['Feel free to reach out to me', 'Say hello!', 'Mon-Fri from 8am to 5pm.'],

  getInTouch: 'Get in touch',
};

export const APP_DATA_SPANISH = {
  language: "ESP",
  navItems: [
    { label: "Acerca de", href: "#about" },
    { label: "Stack", href: "#stack" },
    { label: "Proyectos", href: "#projects" },
    { label: "Testimonios", href: "#testimonials" },
    { label: "Contacto", href: "#contact" },
  ],

  main: {
    title: "Hola, mi nombre es ",
    description:"Soy un ingeniero con más de 10 años de experiencia como desarrollador Full Stack, especializado en el desarrollo front-end y back-end para aplicaciones de escritorio y móviles. \nHábil en la creación de aplicaciones en JavaScript, Ruby on Rails (RoR) y HTML5. Dominio en la escritura de pruebas unitarias e integración utilizando herramientas como Jest, React Testing Library, Cypress para pruebas E2E, pruebas sintéticas de DataDog E2E, y en la aplicación de prácticas de Desarrollo Dirigido por Pruebas (TDD) para garantizar la calidad y fiabilidad del código",
    titleTech: "Lenguajes de programación",
    libraries: "Frameworks/Librerías",
    testimonialsTitle: "Testimonios",
    contactTitle: "Contacto",
    portfolioTitle: "Proyectos",
    cv: "Descargar CV",
  },

  portfolio: {
    devadler: "alejandrodelarocha.com era Devadler.com, un sitio web para una empresa que proporcionaba servicios de desarrollo web \n (2010)",
    redfox: "Red Fox Carriers, un sitio web para una empresa que proporciona servicios de transporte, cuenta con un sistema CRM para la gestión de sus clientes\n (2015)",
    alejandro: "alejandrodlrocha.com, la primera version de este sitio web. \n (2008)",
    siledoy: "SiLeDoy.com, un sitio web de citas. \n (2014)" ,
    altfi: "AltFiConstructora.com, un sitio web para una empresa de construcción. \n (2014)" ,
    compuPlus: "CompuPlus.com.mx, un sitio web para una empresa de reparación de computadoras. \n (2015)",
    uiHear: "UiHear.com, una aplicación de accesibilidad para personas con discapacidad auditiva en el aula. \n (2018)",
    ratachat: "Ratachat, un chatbot para el youtuber mexicano NEGAS. \n (2018)",
    pinchimundo: "Pinchimundo, una aplicación de podcast para el youtuber mexicano NEGAS. \n (2018)",
    lifestance: "LifeStance Health, desarrollo Full Stack para una empresa que proporciona servicios de salud mental. \n (2019-2025)",
    sap: "SAP, un sitio web para una empresa que proporciona soluciones de seguros. \n (2015)",
    politicus: "Politicus, un prototipo de sitio web para análisis político. \n (2015)",
  },

  testimonials: [
    { user: "Katie Ott", company: "Technology Project Manager @ Reactivate", image: katie, text: "He tenido el placer de trabajar con Alejandro en la construcción de herramientas para nuestros médicos y pacientes. Alejandro siempre se ha destacado por su ética de trabajo enfocada en la misión y libre de ego. He tenido la oportunidad de verlo crecer en su rol durante los últimos años y realmente dar un paso adelante, sin miedo a desafiarse a sí mismo y a los demás en su trabajo.Siempre está dispuesto a intervenir cuando se necesita, ya sea para ayudar o para resolver problemas. Demuestra un verdadero espíritu de trabajo en equipo a través de su enfoque colaborativo y su actitud acogedora, y lidera con el ejemplo, ya sea elevando la cultura del equipo, fomentando la camaradería, haciendo las preguntas difíciles o buscando constantemente maneras de mejorar en su trabajo. ¡Cualquiera que haya tenido a Alejandro en su equipo debería considerarse afortunado!", href: "https://www.linkedin.com/in/ottkatherine/" },
    { user: "Alan Owens", company: "Senior Software Engineering Manager @ LifeStance Health", text: "Una persona increíblemente talentosa, con una ética de trabajo excepcional. He tenido el placer de ser el gerente de ingeniería de Alejandro durante casi dos años y medio. Su capacidad para manejar múltiples proyectos sin perder de vista los detalles hizo una diferencia significativa en la productividad de nuestro equipo. Su disposición para arremangarse y ayudar, ya sea en un problema de backend o frontend, en una nueva función o en la solución de un error, fue inspiradora y un gran ejemplo para otros miembros del equipo, además de ser reconocida por los stakeholders. Es un activo para cualquier equipo, considero un privilegio haber trabajado con Alejandro el tiempo que lo hice, y cualquier equipo tendría suerte de tenerlo.", image: alan, href: "#"},
    { user: "Jonathan Ayala", company: "Senior Software Engineer @ EOG Resources", text: "Tuve el placer de trabajar con Alejandro y puedo decir con certeza que es un profesional excepcional en el ámbito de la programación. Su capacidad para resolver problemas complejos con un enfoque lógico y estructurado lo convierte en un activo valioso para cualquier equipo. Alejandro no solo posee un profundo conocimiento técnico, sino que también tiene una gran habilidad para analizar situaciones, encontrar soluciones eficientes y adaptarse a nuevos desafíos con rapidez. Su pensamiento crítico y su creatividad le permiten abordar problemas desde diferentes perspectivas, logrando resultados innovadores y efectivos. Además, su habilidad para comunicarse de manera clara y su disposición para colaborar hacen que trabajar con él sea una experiencia enriquecedora. Es un compañero de equipo proactivo, empático y siempre dispuesto a compartir conocimientos, lo que fomenta un ambiente de trabajo positivo y productivo. Estoy seguro de que Alejandro será una excelente incorporación para cualquier equipo y no dudo en recomendarlo ampliamente.Jonathan es un ingeniero de software excepcionalmente talentoso y dedicado. Su habilidad para resolver problemas complejos y su enfoque en la simplicidad y la eficiencia son evidentes en todo su trabajo. Jonathan es un miembro valioso de nuestro equipo y contribuye significativamente a nuestro éxito.", image: jonathan, href: "#"}
  ],
  

  phone: "Teléfono",
  email: "Email",
  social: "Redes Sociales",

  
  footer: ['Pongamos en contacto!', 'Saludémonos!', 'Lun-Vie from 8am to 5pm.'],

  getInTouch: 'Contáctame!',
};
