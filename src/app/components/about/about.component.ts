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
        
        <!-- Section Header (Clean without extra text) -->
        <div class="text-left max-w-2xl mb-12">
          <div class="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider mb-2">
            <span>01. Conóceme</span>
            <span class="w-12 h-px bg-cyan-400/40"></span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Sobre mí
          </h2>
        </div>

        <!-- Two Column Layout: Photo + Ingeniero con Visión Integral -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <!-- Photo Column -->
          <div class="lg:col-span-4 flex justify-center">
            <div class="relative group w-full max-w-xs sm:max-w-sm">
              <!-- Glow behind photo -->
              <div class="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-cyan-500/25 via-indigo-500/25 to-purple-500/20 blur-xl opacity-75 group-hover:opacity-100 transition duration-500"></div>
              
              <!-- Frame -->
              <div class="relative rounded-3xl bg-slate-900 border border-slate-800 overflow-hidden shadow-2xl">
                <img 
                  src="/Foto.jpg" 
                  alt="Jose Manuel Ampuero Villanueva - Ingeniero de Software" 
                  class="w-full h-[380px] sm:h-[430px] object-cover object-top filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-500" />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>

          <!-- Card: Ingeniero de Sistemas con Visión Integral -->
          <div class="lg:col-span-8 p-6 sm:p-8 md:p-10 rounded-3xl bg-slate-900/70 border border-slate-800 backdrop-blur-sm relative overflow-hidden flex flex-col justify-between space-y-6">
            
            <div class="space-y-4">
              <div class="w-11 h-11 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shadow-md">
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>

              <h3 class="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Ingeniero de Sistemas con Visión Integral
              </h3>

              <p class="text-slate-300 text-sm sm:text-base leading-relaxed">
                Soy Bachiller en Ingeniería de Sistemas graduado de la Universidad César Vallejo. Mi enfoque como desarrollador une dos mundos complementarios: la sensibilidad visual y ergonomía del <strong class="text-cyan-300 font-medium">Frontend moderno</strong> con la rigurosidad, seguridad y modelado de datos del <strong class="text-indigo-300 font-medium">Backend profesional</strong>.
              </p>

              <p class="text-slate-400 text-sm sm:text-base leading-relaxed">
                Aplico principios fundamentales de ingeniería de software como <span class="text-slate-200 font-mono text-xs bg-slate-800 px-2 py-0.5 rounded">SOLID</span>, <span class="text-slate-200 font-mono text-xs bg-slate-800 px-2 py-0.5 rounded">Clean Architecture</span> y <span class="text-slate-200 font-mono text-xs bg-slate-800 px-2 py-0.5 rounded">YAGNI</span> (eliminar código y campos superfluos para favorecer la velocidad y la concentración del usuario).
              </p>
            </div>

            <!-- Bullet tags -->
            <div class="pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div class="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <span class="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                <span>Arquitectura Modular</span>
              </div>
              <div class="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <span class="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                <span>Tipado Estricto TypeScript</span>
              </div>
              <div class="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>Automatización & Testing</span>
              </div>
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
