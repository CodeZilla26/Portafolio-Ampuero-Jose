import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioStateService } from '../../services/portfolio-state.service';
import { SKILLS_LIST } from '../../data/portfolio.data';
import { SkillItem } from '../../models/portfolio.model';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="skills" class="py-20 border-t border-slate-800/80 relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Section Header -->
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div class="text-left max-w-2xl">
            <div class="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider mb-2">
              <span>05. Competencias Técnicas</span>
              <span class="w-12 h-px bg-cyan-400/40"></span>
            </div>
            <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Habilidades & Stack Tecnológico
            </h2>
            <p class="text-slate-400 text-sm sm:text-base mt-2">
              Tecnologías y herramientas aplicadas en producción con altos estándares de calidad y rendimiento.
            </p>
          </div>

          <!-- Category Filter Tabs -->
          <div class="flex flex-wrap gap-1.5 bg-slate-900 border border-slate-800 p-1 rounded-xl text-xs self-start md:self-end">
            <button 
              *ngFor="let tab of filterTabs"
              (click)="state.activeSkillFilter.set(tab.key)"
              [class.bg-gradient-to-r]="state.activeSkillFilter() === tab.key"
              [class.from-cyan-600]="state.activeSkillFilter() === tab.key"
              [class.to-indigo-600]="state.activeSkillFilter() === tab.key"
              [class.text-white]="state.activeSkillFilter() === tab.key"
              [class.shadow-md]="state.activeSkillFilter() === tab.key"
              [class.text-slate-400]="state.activeSkillFilter() !== tab.key"
              class="px-3 py-1.5 rounded-lg font-medium transition-all">
              {{ tab.label }}
            </button>
          </div>
        </div>

        <!-- Skills Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div *ngFor="let skill of filteredSkills()" 
               class="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 backdrop-blur-sm transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
            
            <div class="space-y-3">
              <!-- Card Header: Title & Level Badge -->
              <div class="flex items-center justify-between gap-2">
                <h3 class="text-base font-bold text-white group-hover:text-cyan-400 transition-colors flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full bg-cyan-400"></span>
                  <span>{{ skill.name }}</span>
                </h3>
                <span class="px-2 py-0.5 rounded text-[10px] font-mono"
                      [class.bg-cyan-950]="skill.level === 'Avanzado'"
                      [class.text-cyan-300]="skill.level === 'Avanzado'"
                      [class.border]="skill.level === 'Avanzado'"
                      [class.border-cyan-800]="skill.level === 'Avanzado'"
                      [class.bg-purple-950]="skill.level === 'Especializado'"
                      [class.text-purple-300]="skill.level === 'Especializado'"
                      [class.border-purple-800]="skill.level === 'Especializado'"
                      [class.bg-slate-800]="skill.level === 'Intermedio'"
                      [class.text-slate-300]="skill.level === 'Intermedio'">
                  {{ skill.level }}
                </span>
              </div>

              <!-- Practical Description -->
              <p class="text-xs text-slate-300 leading-relaxed">
                {{ skill.description }}
              </p>
            </div>

            <!-- Tags -->
            <div class="mt-4 pt-3 border-t border-slate-800/80 flex flex-wrap gap-1.5">
              <span *ngFor="let tag of skill.tags" 
                    class="px-2 py-0.5 rounded text-[10.5px] font-mono bg-slate-950 text-slate-400 border border-slate-800/80">
                #{{ tag }}
              </span>
            </div>

          </div>
        </div>

        <!-- Skills Summary Footer Banner -->
        <div class="mt-12 p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div class="flex items-center gap-2">
            <span class="text-cyan-400">ℹ️</span>
            <span>Stack principal tipado de extremo a extremo con <strong>TypeScript</strong> y validado con <strong>Playwright</strong>.</span>
          </div>
          <a href="#contacto" class="text-cyan-400 hover:text-cyan-300 font-semibold underline underline-offset-4">
            ¿Buscas una competencia específica? Conversemos →
          </a>
        </div>

      </div>
    </section>
  `
})
export class SkillsComponent {
  readonly state = inject(PortfolioStateService);
  readonly allSkills = SKILLS_LIST;

  readonly filterTabs = [
    { key: 'all' as const, label: 'Todas' },
    { key: 'frontend' as const, label: 'Frontend & UI' },
    { key: 'backend' as const, label: 'Backend & APIs' },
    { key: 'database' as const, label: 'Bases de Datos' },
    { key: 'testing' as const, label: 'Testing & QA' },
    { key: 'tools' as const, label: 'Herramientas' }
  ];

  readonly filteredSkills = computed(() => {
    const filter = this.state.activeSkillFilter();
    if (filter === 'all') return this.allSkills;
    return this.allSkills.filter((s) => s.category === filter);
  });
}
