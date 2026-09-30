# 🚀 Portafolio Web Profesional – Jose Manuel Ampuero Villanueva

> **Software Engineer | Frontend & Backend Developer**  
> *Bachiller en Ingeniería de Sistemas – Universidad César Vallejo*

![Angular 22](https://img.shields.io/badge/Angular-22.2.0-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.1-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-24.18-339933?style=for-the-badge&logo=node.js&logoColor=white)
![License](https://img.shields.io/badge/Status-Production_Ready-success?style=for-the-badge)

---

## 🌟 Descripción General

Este repositorio contiene el código fuente del **portafolio profesional interactivo** de **Jose Manuel Ampuero Villanueva**, desarrollado íntegramente con la arquitectura moderna de **Angular 22**, el motor de estilos **Tailwind CSS v4** y un sistema reactivo basado en **Angular Signals** (`signal()` y `computed()`).

Diseñado bajo una estética tecnológica limpia, moderna y de alto rendimiento, el portafolio presenta una visión unificada de mis dos perfiles técnicos principales (**Frontend** y **Backend**), permitiendo a reclutadores, líderes técnicos y clientes explorar mi experiencia, formación y habilidades con un alto grado de interactividad funcional.

---

## 🧭 Estructura y Secciones del Portafolio

Cumpliendo con un enfoque directo, limpio y sin sobrecarga cognitiva (*Principio YAGNI*), el sitio se organiza en las 6 secciones esenciales:

1. **Sobre mí (`#sobre-mi`):**  
   Presentación profesional en formato Bento Grid. Destaca la formación como Bachiller en Ingeniería de Sistemas, la filosofía de código limpio (*Clean Code*, *SOLID*, componentes modulares) y la sinergia entre Frontend y Backend.
2. **Experiencia (`#experiencia`):**  
   Línea de tiempo interactiva con los roles profesionales en **Inversiones Madrisqui S.A.C.** y **ZonaTech Perú**. Incluye un filtro para visualizar logros con foco en Frontend o Backend.
3. **Proyectos (`#proyectos`):**  
   Exhibición estelar del proyecto insignia en Angular: **FinanZen – Sistema de Control de Finanzas Personales**. Incorpora un **simulador interactivo en vivo** programado con Angular Signals para probar en tiempo real la adición y cálculo de saldo.
4. **Educación (`#educacion`):**  
   Ficha académica detallando el grado de Bachiller en Ingeniería de Sistemas por la **Universidad César Vallejo (2020 – 2025)**, competencias de sistemas distribuidos, modelado relacional y aseguramiento de calidad.
5. **Skills (`#skills`):**  
   Matriz técnica interactiva con filtros por categoría (*Frontend & UI*, *Backend & APIs*, *Bases de Datos*, *Testing & QA*, *Herramientas*), niveles de dominio y contexto práctico de aplicación.
6. **Contacto (`#contacto`):**  
   Estación de contacto con accesos rápidos: copia directa de correo al portapapeles con 1 clic, enlace directo a chat de WhatsApp, conexión a LinkedIn y un formulario interactivo con validación reactiva.

---

## ⚡ Características Interactivas y Únicas

* 🎛️ **Selector de Perspectiva Dinámica (Dual Engine Switcher):**  
  Permite alternar entre **Modo Full Stack**, **Frontend Focus** y **Backend Focus**. Al cambiar de modo, el portafolio adapta dinámicamente los títulos del Hero, resalta las competencias asociadas y filtra los logros laborales.
* 🕹️ **Simulador Interactivo de FinanZen (In-Memory Signals Sandbox):**  
  Dentro de la sección de proyectos, los visitantes pueden interactuar directamente con un motor de finanzas en memoria. Al ingresar montos o conceptos, los Signals calculados (`computed()`) recalculan el saldo neto, total de ingresos y gastos de forma instantánea sin librerías de terceros.
* 💻 **Terminal / Inspector de Comandos Developer:**  
  Widget en el encabezado con pestañas interactivas que simulan la ejecución de comandos (`cat profile.json`, `git status`, `npm run test:all`).
* 📄 **Modal Selector de CV:**  
  Permite al visitante descargar la versión del CV que mejor se adapte a su proceso de selección:
  * *Versión Desarrollador Frontend* (React, Angular, Tailwind CSS, Playwright E2E).
  * *Versión Desarrollador Backend* (Node.js, Express, Python Flask, MySQL, Firestore).
  * *Previsualización directa en el navegador*.
* 🌓 **Modo Oscuro / Claro Persistente:**  
  Soporte completo con Tailwind CSS v4 y persistencia de elección en `localStorage`.
* 📋 **Feedback Reactivo (Toasts & Clipboard):**  
  Notificaciones flotantes automáticas al copiar el correo, teléfono o interactuar con el simulador.

---

## 🛠️ Stack Tecnológico

| Capa / Herramienta | Tecnología | Propósito |
| :--- | :--- | :--- |
| **Framework Web** | Angular 22 (Standalone Components) | Arquitectura moderna basada en componentes sin módulos NgModules pesados. |
| **Reactividad** | Angular Signals (`signal`, `computed`) | Reactividad granular de alto rendimiento y cero sobrecarga de re-renderizados. |
| **Estilos & Diseño** | Tailwind CSS v4 + PostCSS | Motor moderno `@import 'tailwindcss'` con variantes personalizadas de Dark Mode. |
| **Lenguaje** | TypeScript 6.0 | Tipado estricto de modelos, interfaces cliente-servidor y contratos de datos. |
| **Bundler & Build** | Vite (`@angular/build`) | Tiempos de compilación ultrarrápidos (< 3.2s) y tamaño de paquete optimizado (~79 kB). |
| **Testing Ready** | Playwright & Jest | Estructurado para pruebas unitarias y flujos de navegación automatizada. |

---

## 📁 Arquitectura del Código Fuente

```text
portfolio/
├── public/
│   ├── cv-jose-ampuero.pdf     # Documento CV disponible para descarga directa
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── about/          # Sección 01: Sobre Mí (Bento Grid)
│   │   │   ├── contact/        # Sección 06: Contacto & Formulario
│   │   │   ├── cv-modal/       # Modal interactivo de descarga de CV
│   │   │   ├── education/      # Sección 04: Educación (UCV Bachiller)
│   │   │   ├── experience/     # Sección 02: Experiencia laboral & Timeline
│   │   │   ├── footer/         # Pie de página y enlaces sociales
│   │   │   ├── hero/           # Hero, terminal interactivo & KPIs
│   │   │   ├── navbar/         # Barra de navegación fija con selector de perfil
│   │   │   ├── projects/       # Sección 03: FinanZen & Simulador Signals
│   │   │   ├── skills/         # Sección 05: Matriz de habilidades & filtros
│   │   │   └── toast/          # Notificaciones reactivas flotantes
│   │   ├── data/
│   │   │   └── portfolio.data.ts # Fuente de verdad tipada (CV, proyectos, habilidades)
│   │   ├── models/
│   │   │   └── portfolio.model.ts # Interfaces TypeScript estrictas
│   │   ├── services/
│   │   │   └── portfolio-state.service.ts # Servicio Singleton con Signals y estado global
│   │   ├── app.html            # Layout maestro que une las 6 secciones
│   │   ├── app.ts              # Componente raíz con Standalone imports
│   │   └── app.css
│   ├── index.html              # Metadatos, fuentes Google (Plus Jakarta Sans) y SEO
│   ├── main.ts                 # Bootstrap de la aplicación Angular
│   └── styles.css              # Importación de Tailwind v4 y estilos de tema
├── .postcssrc.json             # Configuración PostCSS para Tailwind v4
├── angular.json                # Configuración de compilación Angular CLI
├── package.json                # Dependencias y scripts del proyecto
└── README.md                   # Documentación oficial del repositorio
```

---

## 🚀 Instalación y Ejecución Local

### Prerrequisitos
* **Node.js**: Versión `v20.x` o superior (Recomendado `v22.x` / `v24.x`).
* **NPM**: Versión `10.x` o superior.

### Pasos

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/JoseAmpuero/portfolio.git
   cd portfolio
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Ejecutar servidor de desarrollo local:**
   ```bash
   npm start
   ```
   Abre tu navegador en `http://localhost:4200/` para ver la aplicación en vivo con recarga automática (*Hot Reload*).

4. **Compilar para producción:**
   ```bash
   npm run build
   ```
   Los artefactos optimizados y minificados se generarán en la carpeta `dist/portfolio/browser`.

---

## 🌐 Guía de Despliegue a Producción

### Opción 1: Despliegue en Vercel
1. Instala el CLI de Vercel: `npm i -g vercel` o conecta tu repositorio de GitHub directamente en [vercel.com](https://vercel.com).
2. Configuración en Vercel:
   * **Framework Preset:** `Angular`
   * **Build Command:** `npm run build`
   * **Output Directory:** `dist/portfolio/browser`

### Opción 2: Despliegue en GitHub Pages
1. Instala la utilidad oficial:
   ```bash
   npm install -g angular-cli-ghpages
   ```
2. Compila especificando la base href del repositorio:
   ```bash
   npx ng build --base-href "https://<tu-usuario>.github.io/<tu-repo>/"
   ```
3. Publica a la rama `gh-pages`:
   ```bash
   npx ngh --dir=dist/portfolio/browser
   ```

---

## 👤 Autor & Contacto

* **Nombre:** Jose Manuel Ampuero Villanueva
* **Ubicación:** Lima, Perú (Disponible para trabajo Remoto, Híbrido o Presencial)
* **Correo:** [ampuerovillanueva@gmail.com](mailto:ampuerovillanueva@gmail.com)
* **Teléfono / WhatsApp:** [+51 945 362 326](https://wa.me/51945362326)
* **LinkedIn:** [linkedin.com/in/jose-ampuero-b1aba7345/](https://www.linkedin.com/in/jose-ampuero-b1aba7345/)
* **GitHub:** [github.com/JoseAmpuero](https://github.com/JoseAmpuero)

---
*Hecho con dedicación, código limpio y arquitectura moderna en Angular 22 & Tailwind CSS v4.*
