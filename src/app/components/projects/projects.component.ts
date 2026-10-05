import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ANGULAR_STAR_PROJECT } from '../../data/portfolio.data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="proyectos" class="py-20 border-t border-slate-800/80 relative overflow-hidden">
      <!-- Background Ambient Glow with Pulse -->
      <div class="absolute top-1/2 right-0 sm:right-1/4 w-[280px] sm:w-[450px] h-[200px] sm:h-[350px] bg-gradient-to-br from-indigo-600/10 via-cyan-500/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-glow"></div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Section Header -->
        <div class="text-left max-w-2xl mb-12 reveal-on-scroll">
          <div class="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider mb-2">
            <span>03. Portafolio</span>
            <span class="w-12 h-px bg-cyan-400/40"></span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Proyectos
          </h2>
        </div>

        <!-- Project Gallery -->
        <div class="grid grid-cols-1 gap-8">
          
          <!-- FinanZen Project Card -->
          <div class="rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-1.5 shadow-2xl overflow-hidden backdrop-blur-xl transition-all duration-300 reveal-on-scroll reveal-delay-1">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
              
              <!-- Project Real Screenshot Image (6 cols) -->
              <div class="lg:col-span-6 p-4 sm:p-6 lg:p-8 bg-slate-950/60 flex items-center justify-center">
                <div class="relative rounded-2xl overflow-hidden border border-slate-800/90 shadow-2xl group w-full bg-slate-950">
                  <img 
                    src="/FinanZen.png" 
                    alt="FinanZen - Sistema de Control de Finanzas Personales" 
                    class="w-full h-auto max-h-[340px] object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out" />
                </div>
              </div>

              <!-- Project Info (6 cols) -->
              <div class="lg:col-span-6 p-6 sm:p-8 md:p-10 flex flex-col justify-between space-y-6">
                
                <div class="space-y-3">
                  <span class="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                    <span>Proyecto Angular</span>
                  </span>
                  <h3 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    FinanZen
                  </h3>
                  <p class="text-slate-300 text-sm sm:text-base leading-relaxed">
                    Sistema de control de finanzas personales diseñado para el registro ágil de ingresos y gastos, cálculo automatizado de balance y sincronización en tiempo real.
                  </p>
                </div>

                <!-- Technologies: Angular, TypeScript, Tailwind CSS, Firebase -->
                <div class="space-y-4">
                  <div class="flex flex-wrap gap-2">
                    <span *ngFor="let tech of project.technologies"
                          class="px-3 py-1 rounded-lg text-xs font-mono bg-slate-950 text-slate-300 border border-slate-800 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors cursor-default">
                      {{ tech }}
                    </span>
                  </div>

                  <!-- Button to GitHub -->
                  <div class="pt-2">
                    <a [href]="project.githubUrl" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       class="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer font-mono shimmer-btn">
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                      </svg>
                      <span>Ver en GitHub</span>
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
