import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ANGULAR_STAR_PROJECT } from '../../data/portfolio.data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="proyectos" class="py-20 border-t border-slate-800/80 relative">
      <!-- Background Ambient Glow -->
      <div class="absolute top-1/2 right-1/4 w-[450px] h-[350px] bg-gradient-to-br from-indigo-600/10 via-cyan-500/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10"></div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Section Header -->
        <div class="text-left max-w-2xl mb-12">
          <div class="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider mb-2">
            <span>03. Portafolio</span>
            <span class="w-12 h-px bg-cyan-400/40"></span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Proyectos
          </h2>
        </div>

        <!-- Project Gallery Container -->
        <div class="grid grid-cols-1 gap-8">
          
          <!-- FinanZen Project Card -->
          <div class="rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 shadow-2xl overflow-hidden backdrop-blur-xl transition-all duration-300">
            
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-0">
              
              <!-- Left Visual Mockup / Interface Preview (5 cols) -->
              <div class="lg:col-span-5 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-slate-800 flex flex-col justify-between relative overflow-hidden">
                
                <!-- Glow accent -->
                <div class="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none"></div>

                <!-- Window Top Header -->
                <div class="space-y-4">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2">
                      <div class="w-3 h-3 rounded-full bg-rose-500/80"></div>
                      <div class="w-3 h-3 rounded-full bg-amber-500/80"></div>
                      <div class="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                    </div>
                    <span class="text-[11px] font-mono text-slate-400">finanzen-app • Angular 22</span>
                  </div>

                  <!-- Mini Dashboard Mockup UI Preview -->
                  <div class="rounded-2xl bg-slate-950/90 border border-slate-800/80 p-5 space-y-4 shadow-xl">
                    <div class="flex items-center justify-between text-xs font-mono">
                      <span class="text-slate-400">SALDO TOTAL</span>
                      <span class="px-2 py-0.5 rounded text-[10px] bg-emerald-500/10 text-emerald-400 font-semibold border border-emerald-500/20">En Línea</span>
                    </div>

                    <div class="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">
                      S/ 4,305.00
                    </div>

                    <div class="grid grid-cols-2 gap-2.5 pt-2 border-t border-slate-800/80 text-xs">
                      <div class="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
                        <div class="text-[10px] text-slate-400 font-mono">INGRESOS</div>
                        <div class="text-emerald-400 font-bold font-mono">▲ S/ 4,450.00</div>
                      </div>
                      <div class="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
                        <div class="text-[10px] text-slate-400 font-mono">GASTOS</div>
                        <div class="text-rose-400 font-bold font-mono">▼ S/ 145.00</div>
                      </div>
                    </div>

                    <!-- Category Pills inside mockup -->
                    <div class="pt-1 flex flex-wrap gap-1.5 text-[10.5px] font-mono">
                      <span class="px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800">Salario</span>
                      <span class="px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800">Freelance</span>
                      <span class="px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800">Cloud VPS</span>
                    </div>
                  </div>
                </div>

                <!-- Bottom Status -->
                <div class="pt-6 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span class="flex items-center gap-1.5">
                    <span class="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                    <span>Cloud Firestore Sync</span>
                  </span>
                  <span class="text-cyan-400">Signals v22</span>
                </div>

              </div>

              <!-- Right Project Info & Details (7 cols) -->
              <div class="lg:col-span-7 p-6 sm:p-8 md:p-10 flex flex-col justify-between space-y-6">
                
                <div class="space-y-4">
                  <!-- Category & Version Badges -->
                  <div class="flex flex-wrap items-center gap-2">
                    <span class="px-2.5 py-1 rounded-md text-[11px] font-mono bg-cyan-950/80 text-cyan-300 border border-cyan-800/60">
                      Proyecto Estrella en Angular
                    </span>
                    <span class="px-2.5 py-1 rounded-md text-[11px] font-mono bg-indigo-950/80 text-indigo-300 border border-indigo-800/60">
                      Signals & Standalone
                    </span>
                  </div>

                  <!-- Title & Tagline -->
                  <div>
                    <h3 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                      {{ project.title }}
                    </h3>
                    <p class="text-sm font-medium text-cyan-400 mt-1">
                      {{ project.tagline }}
                    </p>
                  </div>

                  <!-- Summary Description -->
                  <p class="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {{ project.overview }}
                  </p>

                  <!-- Key Features Bullet Points -->
                  <div class="space-y-2 pt-2">
                    <div class="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <span class="text-cyan-400 font-bold mt-0.5 text-xs">▹</span>
                      <span>Arquitectura reactiva de grano fino basada en <strong>Angular Signals</strong> (<code class="text-cyan-300 font-mono text-xs">signal()</code> y <code class="text-cyan-300 font-mono text-xs">computed()</code>), sin re-renderizados innecesarios del DOM.</span>
                    </div>
                    <div class="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <span class="text-cyan-400 font-bold mt-0.5 text-xs">▹</span>
                      <span>Sincronización multi-dispositivo en tiempo real con <strong>Cloud Firestore</strong> y aislamiento de credenciales mediante variables de entorno.</span>
                    </div>
                    <div class="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <span class="text-cyan-400 font-bold mt-0.5 text-xs">▹</span>
                      <span>Diseño responsivo moderno y minimalista con <strong>Tailwind CSS v4</strong> y selector de Modo Oscuro nativo con persistencia local.</span>
                    </div>
                  </div>
                </div>

                <!-- Technologies & GitHub Action Link -->
                <div class="pt-6 border-t border-slate-800/80 space-y-4">
                  <div class="flex flex-wrap gap-1.5">
                    <span *ngFor="let t of project.technologies"
                          class="px-2.5 py-1 rounded text-xs font-mono bg-slate-950 text-slate-300 border border-slate-800">
                      {{ t }}
                    </span>
                  </div>

                  <!-- Button to open GitHub link -->
                  <div class="pt-2 flex items-center gap-3">
                    <a [href]="project.githubUrl" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       class="px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all duration-200 flex items-center gap-2 cursor-pointer font-mono">
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                      </svg>
                      <span>Ver Código en GitHub</span>
                      <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  `
})
export class ProjectsComponent {
  readonly project = ANGULAR_STAR_PROJECT;
}
