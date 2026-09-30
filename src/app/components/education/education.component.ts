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

        <!-- Centered Academic Credential Plaque -->
        <div class="max-w-3xl mx-auto">
          <div class="relative rounded-3xl bg-slate-900/80 border border-slate-800 p-8 sm:p-12 backdrop-blur-xl shadow-2xl overflow-hidden text-center">
            
            <!-- Top Ambient Cyan Accent -->
            <div class="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
            
            <!-- Subtle Background Watermark -->
            <svg class="absolute -right-8 -bottom-8 w-56 h-56 text-slate-800/20 pointer-events-none transform -rotate-12 select-none" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/>
            </svg>

            <!-- Academic Emblem -->
            <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 mb-6 shadow-lg shadow-cyan-500/5">
              <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 14l9-5-9-5-9 5 9 5z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
            </div>

            <!-- Trust Badge: Formación Universitaria Completa -->
            <div class="mb-4">
              <span class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-emerald-950/80 text-emerald-400 border border-emerald-800/60 shadow-sm">
                <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Formación Universitaria Completa
              </span>
            </div>

            <!-- Degree Title -->
            <h3 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
              {{ edu.degree }}
            </h3>

            <!-- Institution Name -->
            <p class="text-lg sm:text-xl font-semibold text-cyan-400 mb-6">
              {{ edu.institution }}
            </p>

            <!-- Metadata Badges (Period & Location) -->
            <div class="flex flex-wrap items-center justify-center gap-3 text-xs font-mono text-slate-300 mb-8">
              <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950/60 border border-slate-800">
                <svg class="w-3.5 h-3.5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {{ edu.period }}
              </span>
              <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950/60 border border-slate-800">
                <svg class="w-3.5 h-3.5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {{ edu.location }}
              </span>
            </div>

            <!-- Core Academic Description -->
            <div class="relative max-w-2xl mx-auto p-5 sm:p-6 rounded-2xl bg-slate-950/70 border border-slate-800/90 shadow-inner">
              <p class="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
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
