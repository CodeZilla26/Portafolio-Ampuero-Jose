import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioStateService } from '../../services/portfolio-state.service';
import { EXPERIENCES } from '../../data/portfolio.data';
import { ExperienceItem } from '../../models/portfolio.model';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="experiencia" class="py-20 border-t border-slate-800/80 relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Section Header -->
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div class="text-left max-w-2xl">
            <div class="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider mb-2">
              <span>02. Trayectoria Laboral</span>
              <span class="w-12 h-px bg-cyan-400/40"></span>
            </div>
            <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Experiencia Profesional
            </h2>
            <p class="text-slate-400 text-sm sm:text-base mt-2">
              Impacto directo en desarrollo de software, interfaces reactivas, optimización de endpoints y automatización.
            </p>
          </div>

          <!-- View Filter for Experience Achievements -->
          <div class="flex items-center bg-slate-900 border border-slate-800 rounded-xl p-1 text-xs self-start md:self-end">
            <button 
              *ngFor="let filter of achievementFilters"
              (click)="activeExperienceFilter.set(filter.key)"
              [class.bg-cyan-600]="activeExperienceFilter() === filter.key"
              [class.text-white]="activeExperienceFilter() === filter.key"
              [class.shadow-sm]="activeExperienceFilter() === filter.key"
              [class.text-slate-400]="activeExperienceFilter() !== filter.key"
              class="px-3 py-1.5 rounded-lg font-medium transition-all">
              {{ filter.label }}
            </button>
          </div>
        </div>

        <!-- Experience Timeline -->
        <div class="space-y-8 relative before:absolute before:inset-0 before:left-3 md:before:left-1/2 before:w-0.5 before:bg-gradient-to-b before:from-cyan-500 before:via-indigo-500 before:to-transparent before:-translate-x-1/2">
          
          <div *ngFor="let exp of experiences; let i = index" 
               class="relative flex flex-col md:flex-row items-start gap-6 md:gap-12"
               [class.md:flex-row-reverse]="i % 2 !== 0">
            
            <!-- Timeline Center Marker / Node -->
            <div class="absolute left-3 md:left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-500/30 z-10">
              <span class="w-2 h-2 rounded-full bg-cyan-400"></span>
            </div>

            <!-- Experience Card -->
            <div class="ml-8 md:ml-0 md:w-1/2">
              <div class="p-6 sm:p-7 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 backdrop-blur-sm transition-all duration-300 shadow-xl group">
                
                <!-- Period & Location Badges -->
                <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {{ exp.period }}
                  </span>

                  <span class="inline-flex items-center gap-1 text-xs text-slate-400 font-mono">
                    <svg class="w-3.5 h-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {{ exp.location }}
                  </span>
                </div>

                <!-- Company & Role Title -->
                <h3 class="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {{ exp.company }}
                </h3>
                <p class="text-sm font-medium text-indigo-300 mb-3">
                  {{ exp.role }}
                </p>

                <p class="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                  {{ exp.summary }}
                </p>

                <!-- Bullet Points of Achievements -->
                <div class="space-y-2.5 pt-2 border-t border-slate-800">
                  <div *ngFor="let item of getFilteredAchievements(exp)" 
                       class="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <span class="text-cyan-400 font-bold mt-1 text-xs">▹</span>
                    <span>{{ item }}</span>
                  </div>
                </div>

                <!-- Technologies Used -->
                <div class="mt-5 pt-4 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                  <span *ngFor="let tech of exp.technologies"
                        class="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-950 text-slate-300 border border-slate-800">
                    {{ tech }}
                  </span>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  `
})
export class ExperienceComponent {
  readonly state = inject(PortfolioStateService);
  readonly experiences = EXPERIENCES;

  readonly activeExperienceFilter = signal<'all' | 'frontend' | 'backend'>('all');

  readonly achievementFilters = [
    { key: 'all' as const, label: 'Visión Global' },
    { key: 'frontend' as const, label: 'Logros Frontend' },
    { key: 'backend' as const, label: 'Logros Backend' }
  ];

  getFilteredAchievements(exp: ExperienceItem): string[] {
    const filter = this.activeExperienceFilter();

    if (filter === 'frontend' && exp.achievements.frontend) {
      return exp.achievements.frontend;
    }
    if (filter === 'backend' && exp.achievements.backend) {
      return exp.achievements.backend;
    }

    // Default: Return frontend + backend combined highlights
    const list: string[] = [];
    if (exp.achievements.frontend) {
      list.push(...exp.achievements.frontend.slice(0, 2));
    }
    if (exp.achievements.backend) {
      list.push(...exp.achievements.backend.slice(0, 2));
    }
    return list.length > 0 ? list : exp.achievements.general;
  }
}
