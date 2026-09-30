import { EducationItem, ExperienceItem, ProjectShowcase, SkillItem } from '../models/portfolio.model';

export const PERSONAL_INFO = {
  fullName: 'Jose Manuel Ampuero Villanueva',
  preferredName: 'Jose Ampuero',
  title: 'Bachiller en Ingeniería de Sistemas | Software Engineer',
  roles: {
    fullstack: 'Full Stack Software Engineer',
    frontend: 'Frontend Developer & UI Specialist',
    backend: 'Backend Developer & API Architect'
  },
  location: 'Lima, Perú',
  email: 'ampuerovillanueva@gmail.com',
  phone: '+51 945 362 326',
  whatsappUrl: 'https://wa.me/51945362326?text=Hola%20Jose,%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20conversar',
  linkedinUrl: 'https://www.linkedin.com/in/jose-ampuero-b1aba7345/',
  githubUrl: 'https://github.com/CodeZilla26',
  bio: {
    fullstack: 'Bachiller en Ingeniería de Sistemas con sólida experiencia tanto en la construcción de interfaces web modernas y fluidas (Angular, React, Tailwind CSS) como en el diseño de arquitecturas backend robustas, APIs REST seguras (Node.js, Express, Python Flask) y automatización con Playwright. Enfoque riguroso en tipado seguro, calidad de código y rendimiento.',
    frontend: 'Especializado en diseñar e implementar experiencias digitales fluidas, optimizadas y responsivas. Dominio de Angular (Signals & Standalone), React, TypeScript y Tailwind CSS v4, con un fuerte estándar en arquitectura de componentes modulares, gestión de estado reactivo y pruebas de interfaz con Playwright y Jest.',
    backend: 'Orientado a la arquitectura de servicios backend escalables, diseño de APIs RESTful seguras, modelado eficiente de bases de datos relacionales (MySQL) y NoSQL (Cloud Firestore), y desarrollo de bots de automatización y scraping con Python, Selenium y Playwright.'
  }
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'madrisqui',
    company: 'Inversiones Madrisqui S.A.C.',
    role: 'Practicante de Desarrollo Frontend / Backend / Software',
    period: 'Marzo 2025 – Setiembre 2026',
    location: 'Lima, Perú',
    type: 'hybrid',
    category: 'fullstack',
    summary: 'Desarrollo integral de sistemas internos, combinando interfaces interactivas con consumo de APIs, flujos backend en Python/PHP, optimización de consultas SQL y automatización de pruebas críticas.',
    achievements: {
      frontend: [
        'Diseñé e implementé interfaces de usuario utilizando React, Vite y estilos modernos con Tailwind CSS, estructurando componentes modulares y optimizando la navegación en sistemas internos.',
        'Desarrollé la comunicación cliente-servidor mediante consumo de APIs REST, gestionando estados asíncronos, validación tipada de formularios y manejo dinámico de datos.',
        'Implementé pruebas y flujos automatizados de navegación con Playwright, validando flujos críticos como autenticación, gestión documental y consistencia visual.'
      ],
      backend: [
        'Diseñé y mantuve módulos backend utilizando Python (Flask) y PHP, implementando controladores y lógica de negocio para la gestión segura de datos en sistemas internos.',
        'Estructuré esquemas de datos relacionales y optimicé consultas complejas en MySQL, garantizando integridad de transacciones y rapidez en la generación de reportes.',
        'Desarrollé flujos automatizados con Python, Playwright y Selenium para procesamiento masivo de información, validación documental y tareas programadas.'
      ],
      general: [
        'Arquitectura modular con TypeScript garantizando cero discrepancias en los tipos de datos entre el cliente y el servidor.',
        'Automatización de pruebas end-to-end con Playwright para flujos de autenticación y carga de documentos sensibles.',
        'Control de versiones colaborativo con Git y GitHub mediante flujos de Pull Requests y resolución ágil de incidencias.'
      ]
    },
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Python (Flask)', 'PHP', 'MySQL', 'Playwright', 'Selenium', 'APIs REST', 'Git/GitHub']
  },
  {
    id: 'zonatech',
    company: 'ZonaTech Perú',
    role: 'Desarrollador Frontend React / Software Web',
    period: 'Enero – Diciembre 2024',
    location: 'Remoto',
    type: 'remote',
    category: 'frontend',
    summary: 'Construcción de interfaces responsivas de alto rendimiento, integración de servicios web y aseguramiento de calidad con pruebas unitarias en Jest.',
    achievements: {
      frontend: [
        'Construí interfaces web responsivas con React, TypeScript, JavaScript (ES6+), HTML5 y CSS3, asegurando fidelidad visual y adaptabilidad multidispositivo.',
        'Implementé el consumo centralizado de APIs REST utilizando Fetch y Axios, agilizando la presentación de información y reduciendo tiempos de carga.',
        'Diseñé e integré pruebas unitarias con Jest para verificar la estabilidad de componentes clave, colaborando bajo flujo de ramas en Git/GitHub.'
      ],
      backend: [
        'Desarrollé la comunicación entre clientes web y servicios backend mediante APIs REST, validando contratos de datos y payloads con tipado estricto en TypeScript.',
        'Implementé validaciones y manejo preventivo de errores HTTP para envíos sensibles, reduciendo discrepancias en las peticiones.',
        'Ejecuté pruebas funcionales con Jest para asegurar el cumplimiento de la lógica de negocio y excepciones.'
      ],
      general: [
        'Estructuración de componentes limpios y reutilizables siguiendo principios SOLID y Clean Code.',
        'Integración continua de servicios RESTful optimizando el ciclo de vida de peticiones asíncronas.',
        'Colaboración remota ágil en Git/GitHub con revisiones de código y control estricto de versiones.'
      ]
    },
    technologies: ['React', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'APIs REST', 'Axios / Fetch', 'Jest', 'Git/GitHub']
  }
];

export const ANGULAR_STAR_PROJECT: ProjectShowcase = {
  id: 'finanzen',
  title: 'FinanZen',
  tagline: 'Sistema de Control de Finanzas Personales & Dashboard Reactivo',
  role: 'Frontend & Full Stack Software Engineer',
  featured: true,
  version: 'Angular 22 + Firebase Realtime',
  overview: 'Aplicación web progresiva diseñada para el control financiero ágil, balance patrimonial y categorización de movimientos en tiempo real. Construida desde cero aplicando la nueva era de Angular (Signals, Standalone Components, inject()), Tailwind CSS v4 con Dark Mode persistente y persistencia en Cloud Firestore.',
  impactMetrics: [
    { label: 'Tiempo de Carga', value: '< 0.8s', detail: 'Vite build optimizado con ESM' },
    { label: 'Reactividad', value: '100% Signals', detail: 'Sin sobrecarga de Change Detection tradicional' },
    { label: 'Sincronización', value: 'Realtime', detail: 'Cloud Firestore con onSnapshot() & .env seguro' },
    { label: 'Diseño UX', value: 'YAGNI / Zero Noise', detail: 'Interfaz limpia centrada en métricas financieras' }
  ],
  architecturePoints: [
    {
      title: 'Angular Signals Reactivos',
      description: 'Gestión de estado de grano fino con signal() y computed(). Las tarjetas de balance, ingresos, gastos y filtros se actualizan de forma instantánea sin disparar re-renderizados innecesarios del DOM.',
      tag: 'Angular 22 Signals'
    },
    {
      title: 'Cloud Firestore en Tiempo Real',
      description: 'Suscripción directa mediante onSnapshot(), permitiendo reflejar movimientos instantáneamente en múltiples dispositivos, con aislamiento seguro de credenciales mediante variables de entorno (.env).',
      tag: 'Cloud Firestore'
    },
    {
      title: 'Tailwind CSS v4 & Dark Mode Nativo',
      description: 'Estilos modernos con @import "tailwindcss" y directiva @custom-variant dark. Selector de tema claro/oscuro con detección de preferencias del SO y persistencia en localStorage.',
      tag: 'Tailwind CSS v4'
    },
    {
      title: 'Arquitectura Limpia & Principio YAGNI',
      description: 'Eliminación sistemática de redundancias: botón de acción único ("Single Source of Action"), sin formularios sobrecargados ni footers innecesarios, logrando un dashboard ágil de nivel profesional.',
      tag: 'Clean UI Architecture'
    }
  ],
  technologies: ['Angular 22', 'TypeScript', 'Tailwind CSS v4', 'Cloud Firestore', 'Signals', 'Standalone API', 'RxJS', 'Vite / @angular/build'],
  githubUrl: 'https://github.com/CodeZilla26/finanzen-app',
  demoUrl: '#simulador-finanzen',
  docsUrl: 'FinanZen.md'
};

export const EDUCATION_DATA: EducationItem = {
  institution: 'Universidad César Vallejo',
  degree: 'Bachiller en Ingeniería de Sistemas',
  period: '2020 – 2025',
  location: 'Lima, Perú',
  description: 'Formación académica rigurosa en ingeniería de software, arquitectura de sistemas, diseño y optimización de bases de datos relacionales, algoritmos avanzados, redes y aseguramiento de la calidad de software.',
  highlights: [
    'Especialización en Desarrollo de Software y Arquitectura de Sistemas Distribuidos.',
    'Modelado conceptual, lógico y físico de bases de datos relacionales complejas (MySQL, PostgreSQL).',
    'Metodologías ágiles de ingeniería de software (Scrum, Kanban) y control de calidad (Testing E2E, Unitario).',
    'Culminación académica satisfactoria obteniendo el grado de Bachiller en Ingeniería de Sistemas.'
  ]
};

export const SKILLS_LIST: SkillItem[] = [
  // Frontend
  {
    name: 'Angular (v17/v19/v22)',
    category: 'frontend',
    level: 'Avanzado',
    icon: 'angular',
    description: 'Signals reactivos, Standalone Components, inject(), Router, Services Singleton y arquitectura moderna.',
    tags: ['Signals', 'Standalone', 'Services', 'Computed'],
    highlightIn: ['frontend', 'fullstack']
  },
  {
    name: 'React & Next.js',
    category: 'frontend',
    level: 'Avanzado',
    icon: 'react',
    description: 'Componentes funcionales, Hooks personalizados, Next.js App Router, SSR/CSR y gestión de estado.',
    tags: ['Hooks', 'Next.js', 'Vite', 'State Management'],
    highlightIn: ['frontend', 'fullstack']
  },
  {
    name: 'TypeScript & JavaScript (ES6+)',
    category: 'frontend',
    level: 'Avanzado',
    icon: 'typescript',
    description: 'Tipado estricto, interfaces, generics, async/await, contratos cliente-servidor y código limpio.',
    tags: ['Tipado Estricto', 'Generics', 'ES6+', 'Async'],
    highlightIn: ['frontend', 'backend', 'fullstack']
  },
  {
    name: 'Tailwind CSS (v3 / v4)',
    category: 'frontend',
    level: 'Avanzado',
    icon: 'tailwind',
    description: 'Diseño responsivo móvil-primero, microanimaciones, dark mode persistente y diseño UI moderno.',
    tags: ['v4 Engine', 'Dark Mode', 'Responsive', 'Glassmorphism'],
    highlightIn: ['frontend', 'fullstack']
  },
  {
    name: 'HTML5 & CSS3 Avanzado',
    category: 'frontend',
    level: 'Avanzado',
    icon: 'htmlcss',
    description: 'Semántica web accesible (a11y), Flexbox, CSS Grid, variables CSS y transiciones fluidas.',
    tags: ['Semántica', 'Flexbox', 'CSS Grid', 'A11y'],
    highlightIn: ['frontend', 'fullstack']
  },

  // Backend
  {
    name: 'Node.js & Express',
    category: 'backend',
    level: 'Avanzado',
    icon: 'nodejs',
    description: 'Desarrollo de servicios backend, middlewares personalizados, arquitectura modular y controladores RESTful.',
    tags: ['Express', 'APIs REST', 'Middleware', 'JWT'],
    highlightIn: ['backend', 'fullstack']
  },
  {
    name: 'Python (Flask & Scripting)',
    category: 'backend',
    level: 'Intermedio',
    icon: 'python',
    description: 'Endpoints REST con Flask, automatización de tareas, extracción de datos y scripts de procesamiento.',
    tags: ['Flask', 'Automation', 'Endpoints', 'Scripting'],
    highlightIn: ['backend', 'fullstack']
  },
  {
    name: 'PHP & Arquitectura Web',
    category: 'backend',
    level: 'Intermedio',
    icon: 'php',
    description: 'Lógica backend para sistemas internos, validación de formularios y conexión a bases de datos relacionales.',
    tags: ['MVC', 'Backend Logic', 'CRUD', 'Servicios'],
    highlightIn: ['backend']
  },
  {
    name: 'APIs RESTful & Consumo HTTP',
    category: 'backend',
    level: 'Avanzado',
    icon: 'api',
    description: 'Diseño de endpoints, códigos de estado HTTP, autenticación segura, manejo de errores y consumo con Axios/Fetch.',
    tags: ['REST', 'Axios', 'Fetch API', 'Status Codes'],
    highlightIn: ['frontend', 'backend', 'fullstack']
  },

  // Bases de Datos
  {
    name: 'MySQL (SQL Relacional)',
    category: 'database',
    level: 'Avanzado',
    icon: 'mysql',
    description: 'Modelado relacional DDL/DML, normalización, optimización de consultas complejas e integridad transaccional.',
    tags: ['Queries Complejas', 'Modelado', 'Índices', 'Transacciones'],
    highlightIn: ['backend', 'fullstack']
  },
  {
    name: 'Cloud Firestore & Firebase',
    category: 'database',
    level: 'Avanzado',
    icon: 'firebase',
    description: 'Persistencia NoSQL en tiempo real, listeners con onSnapshot, reglas de seguridad y variables seguras.',
    tags: ['NoSQL', 'Realtime', 'Security Rules', 'Auth'],
    highlightIn: ['frontend', 'backend', 'fullstack']
  },

  // Testing & Automatización
  {
    name: 'Playwright (E2E & Scraping)',
    category: 'testing',
    level: 'Especializado',
    icon: 'playwright',
    description: 'Automatización de flujos de navegación crítica (login, formularios, PDFs) y web scraping masivo con Python/JS.',
    tags: ['E2E Testing', 'Web Scraping', 'Regresión Visual', 'CI'],
    highlightIn: ['frontend', 'backend', 'fullstack']
  },
  {
    name: 'Jest (Pruebas Unitarias)',
    category: 'testing',
    level: 'Avanzado',
    icon: 'jest',
    description: 'Pruebas de componentes, lógica de negocio, aserciones y cobertura de código en frontend y backend.',
    tags: ['Unit Testing', 'Mocks', 'Assertions', 'Coverage'],
    highlightIn: ['frontend', 'backend', 'fullstack']
  },
  {
    name: 'Selenium WebDriver',
    category: 'testing',
    level: 'Intermedio',
    icon: 'selenium',
    description: 'Automatización de navegación web en Python, extracción de reportes y pruebas de compatibilidad.',
    tags: ['Automation', 'Python', 'Web Drivers', 'Scraping'],
    highlightIn: ['backend']
  },

  // Herramientas & DevOps
  {
    name: 'Git & GitHub',
    category: 'tools',
    level: 'Avanzado',
    icon: 'git',
    description: 'Flujo de ramas (GitFlow / Trunk), Pull Requests estructurados, resolución de conflictos y versionado.',
    tags: ['Branching', 'Pull Requests', 'CI/CD Basics', 'Colaboración'],
    highlightIn: ['frontend', 'backend', 'fullstack']
  },
  {
    name: 'Postman & API Testing',
    category: 'tools',
    level: 'Avanzado',
    icon: 'postman',
    description: 'Documentación y pruebas de endpoints REST, variables de entorno, colecciones y pruebas automatizadas.',
    tags: ['Collections', 'Environments', 'Endpoint Testing'],
    highlightIn: ['backend', 'fullstack']
  },
  {
    name: 'NPM & Vite Tooling',
    category: 'tools',
    level: 'Avanzado',
    icon: 'npm',
    description: 'Gestión de dependencias, scripts de entorno (.env automáticos), optimización de bundles y compilación rápida.',
    tags: ['Scripts', 'Bundling', 'Node Packages', 'Builds'],
    highlightIn: ['frontend', 'backend', 'fullstack']
  }
];
