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
        </div>

        <!-- Clean Modern Education Card -->
        <div class="max-w-4xl mx-auto">
          <div class="relative rounded-2xl bg-slate-900/60 border border-slate-800 p-6 sm:p-8 hover:border-slate-700/80 transition-all backdrop-blur-sm">
            
            <!-- Subtle Left Accent Indicator -->
            <div class="absolute top-6 bottom-6 left-0 w-1 bg-gradient-to-b from-cyan-400 via-indigo-500 to-transparent rounded-r"></div>

            <div class="pl-2 sm:pl-4 space-y-4">
              <!-- Status & Meta Row -->
              <div class="flex flex-wrap items-center justify-between gap-3">
                <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-950/80 text-emerald-400 border border-emerald-800/60">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  Formación Universitaria Completa
                </span>
                
                <div class="flex items-center gap-3 text-xs font-mono text-slate-400">
                  <span class="flex items-center gap-1.5">
                    <svg class="w-3.5 h-3.5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {{ edu.period }}
                  </span>
                  <span>•</span>
                  <span class="flex items-center gap-1.5">
                    <svg class="w-3.5 h-3.5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {{ edu.location }}
                  </span>
                </div>
              </div>

              <!-- Degree & Institution -->
              <div>
                <h3 class="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {{ edu.degree }}
                </h3>
                <p class="text-cyan-400 font-semibold text-base sm:text-lg mt-1">
                  {{ edu.institution }}
                </p>
              </div>

              <!-- Academic Description -->
              <p class="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl pt-1">
                {{ edu.description }}
              </p>
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
