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

        <!-- Centered Academic Credential Card -->
        <div class="max-w-3xl mx-auto relative group">
          <!-- Subtle Glow Effect -->
          <div class="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/20 via-indigo-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition duration-500"></div>

          <!-- Certificate Container -->
          <div class="relative rounded-3xl bg-slate-900/90 border border-slate-800 p-8 sm:p-12 text-center backdrop-blur-xl shadow-2xl overflow-hidden">
            
            <!-- Ambient Corner Gradients -->
            <div class="absolute -top-12 -right-12 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
            <div class="absolute -bottom-12 -left-12 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <!-- Verification Status Pill -->
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/70 border border-emerald-500/30 text-emerald-300 font-mono text-xs mb-8 shadow-sm">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Formación Universitaria Completa</span>
            </div>

            <!-- Academic Seal / Graduation Cap Icon -->
            <div class="w-20 h-20 rounded-2xl bg-gradient-to-b from-cyan-500/10 to-slate-900 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-cyan-500/5">
              <svg class="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 14l9-5-9-5-9 5 9 5z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 14v7" />
              </svg>
            </div>

            <!-- Degree Title -->
            <h3 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
              {{ edu.degree }}
            </h3>

            <!-- University Name -->
            <p class="text-lg sm:text-xl font-semibold text-cyan-300/90 mb-6">
              {{ edu.institution }}
            </p>

            <!-- Subtle Decorative Divider -->
            <div class="w-24 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mx-auto mb-8"></div>

            <!-- Academic Metadata Pills -->
            <div class="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs font-mono text-slate-300">
              <div class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950/60 border border-slate-800">
                <svg class="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Periodo: <strong class="text-white">{{ edu.period }}</strong></span>
              </div>

              <div class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950/60 border border-slate-800">
                <svg class="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Ubicación: <strong class="text-white">{{ edu.location }}</strong></span>
              </div>

              <div class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950/60 border border-slate-800">
                <svg class="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Grado: <strong class="text-white">Bachiller</strong></span>
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
