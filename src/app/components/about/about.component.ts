import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioStateService } from '../../services/portfolio-state.service';
import { PERSONAL_INFO } from '../../data/portfolio.data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="sobre-mi" class="py-24 border-t border-slate-800/80 relative overflow-hidden">
      <!-- Ambient Glow in background with breathing light -->
      <div class="absolute top-1/2 left-0 w-[500px] h-[400px] bg-gradient-to-r from-cyan-500/10 via-indigo-500/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-glow"></div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Section Header -->
        <div class="text-left max-w-2xl mb-14 reveal-on-scroll">
          <div class="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider mb-2">
            <span>01. Conóceme</span>
            <span class="w-12 h-px bg-cyan-400/40"></span>
          </div>
          <h2 class="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Sobre mí
          </h2>
        </div>

        <!-- Two Column Layout: Styled Photo Frame + Dual Glass Story Cards -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          <!-- Photo Column with Tech Offset & Glass ID Overlay -->
          <div class="lg:col-span-5 flex justify-center reveal-on-scroll reveal-delay-1">
            <div class="relative group w-full max-w-sm">
              
              <!-- Layered decorative offset frame with dynamic glow -->
              <div class="absolute -inset-2 rounded-[2rem] bg-gradient-to-tr from-cyan-500/30 via-indigo-500/20 to-purple-500/30 blur-xl opacity-75 group-hover:opacity-100 group-hover:blur-2xl transition-all duration-500"></div>
              <div class="absolute -inset-1.5 rounded-[2rem] border border-cyan-500/30 -rotate-1 group-hover:rotate-0 transition-transform duration-500 pointer-events-none"></div>

              <!-- Main Photo Card -->
              <div class="relative rounded-[1.75rem] bg-slate-900 border border-slate-800 overflow-hidden shadow-2xl transition-all duration-500 group-hover:-translate-y-1">
                <img 
                  src="/Foto.jpg" 
                  alt="Jose Manuel Ampuero Villanueva" 
                  class="w-full h-[400px] sm:h-[460px] object-cover object-top filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out" />
                
                <!-- Dark vignette gradient overlay -->
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none"></div>

                <!-- Sleek Minimalist Glass ID Bar at bottom of photo -->
                <div class="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-slate-950/85 backdrop-blur-md border border-slate-800/90 flex items-center justify-between shadow-xl transition-transform duration-300 group-hover:translate-y-[-2px]">
                  <div class="flex items-center gap-2.5">
                    <span class="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
                    <span class="font-bold text-xs sm:text-sm text-white tracking-tight">Jose Ampuero</span>
                  </div>
                  <span class="text-[11px] font-mono text-cyan-300 font-medium px-2.5 py-0.5 rounded-md bg-cyan-950/60 border border-cyan-800/60">
                    Ingeniero
                  </span>
                </div>
              </div>

            </div>
          </div>

          <!-- Content Column: Two Elevated Glass Panels -->
          <div class="lg:col-span-7 space-y-6">
            
            <!-- Panel 1: El origen de mi pasión -->
            <div class="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-slate-950/90 border border-slate-800 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-1.5 backdrop-blur-xl transition-all duration-300 shadow-xl relative overflow-hidden group reveal-on-scroll reveal-delay-2">
              <!-- Decorative quote watermark in background -->
              <div class="absolute -right-2 -bottom-6 text-8xl font-serif text-slate-800/20 select-none pointer-events-none group-hover:text-cyan-500/15 group-hover:scale-110 transition-all duration-300">
                ”
              </div>

              <!-- Top Micro Accent -->
              <div class="flex items-center gap-2 mb-4 text-[11px] font-mono text-cyan-400 uppercase tracking-widest">
                <span class="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                <span>El Origen de mi Pasión</span>
              </div>

              <p class="text-slate-200 text-base sm:text-lg leading-relaxed relative z-10 font-normal">
                Mi fascinación por la tecnología nació de una profunda curiosidad por entender cómo funcionan las cosas y del entusiasmo por crear herramientas que resuelvan necesidades reales. Para mí, programar es el punto de encuentro perfecto entre la <span class="text-cyan-300 font-semibold">lógica, la creatividad y la resolución práctica</span> de problemas.
              </p>
            </div>

            <!-- Panel 2: Mentalidad & Enfoque -->
            <div class="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-slate-950/90 border border-slate-800 hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1.5 backdrop-blur-xl transition-all duration-300 shadow-xl relative overflow-hidden group reveal-on-scroll reveal-delay-3">
              <!-- Decorative quote watermark in background -->
              <div class="absolute -right-2 -bottom-6 text-8xl font-serif text-slate-800/20 select-none pointer-events-none group-hover:text-indigo-500/15 group-hover:scale-110 transition-all duration-300">
                ”
              </div>

              <!-- Top Micro Accent -->
              <div class="flex items-center gap-2 mb-4 text-[11px] font-mono text-indigo-400 uppercase tracking-widest">
                <span class="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
                <span>Mentalidad & Enfoque</span>
              </div>

              <p class="text-slate-200 text-base sm:text-lg leading-relaxed relative z-10 font-normal">
                Me considero una persona <span class="text-indigo-300 font-semibold">perseverante y observadora</span>, con un compromiso genuino con el <span class="text-white font-medium">aprendizaje continuo</span>. Disfruto dedicarle tiempo a los detalles, entender el fondo de cada desafío y buscar constantemente mejores formas de hacer las cosas.
              </p>
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
