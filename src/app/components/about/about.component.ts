import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioStateService } from '../../services/portfolio-state.service';
import { PERSONAL_INFO } from '../../data/portfolio.data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="sobre-mi" class="py-20 border-t border-slate-800/80 relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Section Header -->
        <div class="text-left max-w-2xl mb-12">
          <div class="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider mb-2">
            <span>01. Conóceme</span>
            <span class="w-12 h-px bg-cyan-400/40"></span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Sobre mí
          </h2>
          <p class="text-slate-400 text-sm sm:text-base mt-2">
            Ingeniería de software con mentalidad de producto: interfaces ágiles, código mantenible y servicios backend robustos.
          </p>
        </div>

        <!-- Bento Grid Layout -->
        <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          <!-- Card 1: Perfil Central & Filosofía (Large Card - 8 cols) -->
          <div class="md:col-span-8 p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800 backdrop-blur-sm relative overflow-hidden flex flex-col justify-between">
            <div class="space-y-4">
              <div class="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 class="text-xl sm:text-2xl font-bold text-white">
                Ingeniero de Sistemas con Visión Integral
              </h3>
              <p class="text-slate-300 text-sm sm:text-base leading-relaxed">
                Soy Bachiller en Ingeniería de Sistemas graduado de la Universidad César Vallejo. Mi enfoque como desarrollador une dos mundos complementarios: la sensibilidad visual y ergonomía del <strong class="text-cyan-300 font-medium">Frontend moderno</strong> con la rigurosidad, seguridad y modelado de datos del <strong class="text-indigo-300 font-medium">Backend profesional</strong>.
              </p>
              <p class="text-slate-400 text-sm leading-relaxed">
                Aplico principios fundamentales de ingeniería de software como <span class="text-slate-200 font-mono text-xs bg-slate-800 px-2 py-0.5 rounded">SOLID</span>, <span class="text-slate-200 font-mono text-xs bg-slate-800 px-2 py-0.5 rounded">Clean Architecture</span> y <span class="text-slate-200 font-mono text-xs bg-slate-800 px-2 py-0.5 rounded">YAGNI</span> (eliminar código y campos superfluos para favorecer la velocidad y la concentración del usuario).
              </p>
            </div>

            <!-- Bullet tags -->
            <div class="pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div class="flex items-center gap-2 text-xs text-slate-300">
                <span class="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                <span>Arquitectura Modular</span>
              </div>
              <div class="flex items-center gap-2 text-xs text-slate-300">
                <span class="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                <span>Tipado Estricto TypeScript</span>
              </div>
              <div class="flex items-center gap-2 text-xs text-slate-300">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>Automatización & Testing</span>
              </div>
            </div>
          </div>

          <!-- Card 2: Ubicación & Disponibilidad (4 cols) -->
          <div class="md:col-span-4 p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800 backdrop-blur-sm flex flex-col justify-between space-y-6">
            <div class="space-y-4">
              <div class="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 class="text-lg font-bold text-white">
                Ubicación & Modalidad
              </h3>
              <p class="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Resido en <strong class="text-white">Lima, Perú</strong>. Tengo plena disposición para integrarme en equipos con esquema de trabajo <strong class="text-cyan-400">remoto</strong>, <strong class="text-indigo-400">híbrido</strong> o <strong class="text-emerald-400">presencial</strong>.
              </p>
            </div>

            <div class="space-y-2 pt-4 border-t border-slate-800/80">
              <div class="flex items-center justify-between text-xs">
                <span class="text-slate-400">Zona horaria:</span>
                <span class="text-white font-mono">UTC-5 (Lima)</span>
              </div>
              <div class="flex items-center justify-between text-xs">
                <span class="text-slate-400">Idiomas:</span>
                <span class="text-white">Español (Nativo)</span>
              </div>
              <div class="flex items-center justify-between text-xs">
                <span class="text-slate-400">Estado laboral:</span>
                <span class="text-emerald-400 font-medium">Disponible</span>
              </div>
            </div>
          </div>

          <!-- Card 3: Dual Powerhouse - Frontend vs Backend (6 cols) -->
          <div class="md:col-span-6 p-6 sm:p-7 rounded-2xl bg-slate-900/70 border border-slate-800 backdrop-blur-sm space-y-4">
            <div class="flex items-center gap-3">
              <div class="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold text-sm">
                FE
              </div>
              <h4 class="text-base font-bold text-white">
                Lado Cliente (Frontend Mastery)
              </h4>
            </div>
            <p class="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Dominio de la reactividad moderna con <strong class="text-cyan-300">Angular 22 (Signals y Standalone)</strong>, React, Vite y Next.js. Creación de sistemas de diseño visual responsivo con Tailwind CSS v4, Dark Mode nativo y navegación fluida orientada a la experiencia de usuario (UX).
            </p>
            <div class="flex flex-wrap gap-1.5 pt-2">
              <span class="px-2 py-0.5 text-[11px] font-mono bg-cyan-950/60 border border-cyan-800/60 text-cyan-300 rounded">Angular Signals</span>
              <span class="px-2 py-0.5 text-[11px] font-mono bg-slate-800 text-slate-300 rounded">React</span>
              <span class="px-2 py-0.5 text-[11px] font-mono bg-slate-800 text-slate-300 rounded">Tailwind CSS v4</span>
              <span class="px-2 py-0.5 text-[11px] font-mono bg-slate-800 text-slate-300 rounded">Vite</span>
            </div>
          </div>

          <!-- Card 4: Backend & Calidad (6 cols) -->
          <div class="md:col-span-6 p-6 sm:p-7 rounded-2xl bg-slate-900/70 border border-slate-800 backdrop-blur-sm space-y-4">
            <div class="flex items-center gap-3">
              <div class="w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold text-sm">
                BE
              </div>
              <h4 class="text-base font-bold text-white">
                Lado Servidor & Testing (Backend & QA)
              </h4>
            </div>
            <p class="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Diseño de APIs RESTful escalables con <strong class="text-indigo-300">Node.js, Express y Python (Flask)</strong>. Modelado y optimización de bases de datos relacionales en MySQL, sincronización en tiempo real con Cloud Firestore y automatización de pruebas críticas con Playwright y Jest.
            </p>
            <div class="flex flex-wrap gap-1.5 pt-2">
              <span class="px-2 py-0.5 text-[11px] font-mono bg-indigo-950/60 border border-indigo-800/60 text-indigo-300 rounded">Node.js</span>
              <span class="px-2 py-0.5 text-[11px] font-mono bg-slate-800 text-slate-300 rounded">Python Flask</span>
              <span class="px-2 py-0.5 text-[11px] font-mono bg-slate-800 text-slate-300 rounded">MySQL</span>
              <span class="px-2 py-0.5 text-[11px] font-mono bg-slate-800 text-slate-300 rounded">Playwright E2E</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  `
})
export class AboutComponent {
  readonly state = inject(PortfolioStateService);
  readonly info = PERSONAL_INFO;
}
