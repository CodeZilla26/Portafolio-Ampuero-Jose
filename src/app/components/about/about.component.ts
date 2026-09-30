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
        </div>

        <!-- Two Column Layout: Photo + Personal Story -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <!-- Photo Column -->
          <div class="lg:col-span-4 flex justify-center">
            <div class="relative group w-full max-w-xs sm:max-w-sm">
              <!-- Ambient Glow behind photo -->
              <div class="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-cyan-500/25 via-indigo-500/25 to-purple-500/20 blur-xl opacity-75 group-hover:opacity-100 transition duration-500"></div>
              
              <!-- Frame -->
              <div class="relative rounded-3xl bg-slate-900 border border-slate-800 overflow-hidden shadow-2xl">
                <img 
                  src="/Foto.jpg" 
                  alt="Jose Manuel Ampuero Villanueva" 
                  class="w-full h-[380px] sm:h-[430px] object-cover object-top filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-500" />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>

          <!-- Personal Story Card -->
          <div class="lg:col-span-8 p-6 sm:p-8 md:p-10 rounded-3xl bg-slate-900/70 border border-slate-800 backdrop-blur-sm relative overflow-hidden space-y-6">
            
            <div class="space-y-4">
              <div class="w-11 h-11 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shadow-md">
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>

              <h3 class="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Quién soy y qué me apasiona
              </h3>

              <p class="text-slate-300 text-sm sm:text-base leading-relaxed">
                Mi fascinación por la tecnología nació de una profunda curiosidad por entender cómo funcionan las cosas y del entusiasmo por crear herramientas que resuelvan necesidades reales. Para mí, programar es el punto de encuentro perfecto entre la lógica, la creatividad y la resolución práctica de problemas.
              </p>

              <p class="text-slate-300 text-sm sm:text-base leading-relaxed">
                Me considero una persona perseverante, observadora y con un compromiso genuino con el aprendizaje continuo. Disfruto dedicarle tiempo a los detalles, entender el fondo de cada desafío y buscar constantemente mejores formas de hacer las cosas.
              </p>

              <p class="text-slate-400 text-sm sm:text-base leading-relaxed">
                Creo firmemente en el valor de la empatía, la comunicación transparente y la colaboración en equipo. Más allá del código, me motiva saber que lo que construyo tiene un impacto positivo en las personas que lo utilizan día a día.
              </p>
            </div>

            <!-- Personal Facets (Clean and human) -->
            <div class="pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div class="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <span class="text-cyan-400 text-sm">💡</span>
                <span>Curiosidad constante</span>
              </div>
              <div class="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <span class="text-indigo-400 text-sm">🎯</span>
                <span>Atención al detalle</span>
              </div>
              <div class="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <span class="text-emerald-400 text-sm">🤝</span>
                <span>Trabajo en equipo</span>
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
