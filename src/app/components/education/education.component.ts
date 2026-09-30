import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EDUCATION_DATA } from '../../data/portfolio.data';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="educacion" class="py-20 border-t border-slate-800/80 relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Section Header -->
        <div class="text-left max-w-2xl mb-12">
          <div class="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider mb-2">
            <span>04. Formación Académica</span>
            <span class="w-12 h-px bg-cyan-400/40"></span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Educación
          </h2>
          <p class="text-slate-400 text-sm sm:text-base mt-2">
            Fundamentos sólidos en ingeniería de software, algoritmia y sistemas de información.
          </p>
        </div>

        <!-- Main Education Card -->
        <div class="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl relative overflow-hidden">
          
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <!-- Left Column: Degree & Institution -->
            <div class="lg:col-span-5 space-y-4">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shadow-md">
                  <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
                <div>
                  <span class="inline-block px-2.5 py-0.5 rounded text-[11px] font-mono bg-emerald-950/80 text-emerald-400 border border-emerald-800/60 mb-1">
                    ✓ Grado Obtenido
                  </span>
                  <h3 class="text-xl sm:text-2xl font-bold text-white leading-tight">
                    {{ edu.degree }}
                  </h3>
                </div>
              </div>

              <div class="space-y-1.5 pl-1">
                <p class="text-base font-semibold text-indigo-300">
                  {{ edu.institution }}
                </p>
                <div class="flex items-center gap-3 text-xs font-mono text-slate-400">
                  <span class="flex items-center gap-1">
                    <svg class="w-3.5 h-3.5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {{ edu.period }}
                  </span>
                  <span>•</span>
                  <span class="flex items-center gap-1">
                    <svg class="w-3.5 h-3.5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {{ edu.location }}
                  </span>
                </div>
              </div>

              <p class="text-xs sm:text-sm text-slate-300 leading-relaxed pt-2">
                {{ edu.description }}
              </p>
            </div>

            <!-- Right Column: Academic Highlights & Core Competencies -->
            <div class="lg:col-span-7 space-y-4">
              <h4 class="text-xs font-mono uppercase tracking-wider text-slate-400">
                Competencias & Enfoque Académico:
              </h4>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div *ngFor="let item of edu.highlights"
                     class="p-4 rounded-xl bg-slate-950/70 border border-slate-800 flex items-start gap-3">
                  <span class="text-cyan-400 font-bold text-xs mt-0.5">▹</span>
                  <span class="text-xs text-slate-300 leading-relaxed">{{ item }}</span>
                </div>
              </div>

              <!-- Academic Trust Badge -->
              <div class="mt-4 p-4 rounded-xl bg-slate-950/40 border border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                <span class="flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span>Formación Universitaria Completa</span>
                </span>
                <span class="text-cyan-400 font-semibold">2020 – 2025</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  `
})
export class EducationComponent {
  readonly edu = EDUCATION_DATA;
}
