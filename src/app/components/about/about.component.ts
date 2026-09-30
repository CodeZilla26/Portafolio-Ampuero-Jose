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

        <!-- Two Column Layout: Photo + Clean Personal Text -->
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

          <!-- Clean Personal Card without icons or tags -->
          <div class="lg:col-span-8 p-6 sm:p-8 md:p-10 rounded-3xl bg-slate-900/70 border border-slate-800 backdrop-blur-sm relative overflow-hidden flex flex-col justify-center space-y-6">
            <p class="text-slate-300 text-base sm:text-lg leading-relaxed">
              Mi fascinación por la tecnología nació de una profunda curiosidad por entender cómo funcionan las cosas y del entusiasmo por crear herramientas que resuelvan necesidades reales. Para mí, programar es el punto de encuentro perfecto entre la lógica, la creatividad y la resolución práctica de problemas.
            </p>

            <p class="text-slate-300 text-base sm:text-lg leading-relaxed">
              Me considero una persona perseverante, observadora y con un compromiso genuino con el aprendizaje continuo. Disfruto dedicarle tiempo a los detalles, entender el fondo de cada desafío y buscar constantemente mejores formas de hacer las cosas.
            </p>
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
