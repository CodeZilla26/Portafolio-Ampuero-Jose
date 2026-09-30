import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioStateService } from '../../services/portfolio-state.service';
import { PERSONAL_INFO } from '../../data/portfolio.data';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      <!-- Glow ambient background -->
      <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-to-tr from-cyan-500/15 via-indigo-500/15 to-purple-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <!-- Left Column: Bio, Titles, and CTAs -->
          <div class="lg:col-span-7 space-y-6 text-left">
            
            <!-- Status Pill -->
            <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs text-slate-300 shadow-inner">
              <span class="relative flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span class="font-medium text-slate-300">Disponible para nuevos desafíos</span>
              <span class="text-slate-600">•</span>
              <span class="text-cyan-400 font-mono text-[11px]">Lima, Perú / Remoto</span>
            </div>

            <!-- Main Heading with Name and Accent -->
            <div class="space-y-2">
              <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Hola, soy <br class="hidden sm:inline" />
                <span class="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
                  Jose Ampuero
                </span>
              </h1>
              
              <!-- Direct Full Stack Role -->
              <div class="flex items-center gap-2 pt-1">
                <span class="text-xl sm:text-2xl font-bold text-slate-100 font-mono flex items-center gap-2">
                  <span class="text-cyan-400">&gt;</span>
                  <span>Full Stack Software Engineer</span>
                </span>
              </div>

              <!-- Degree Badge -->
              <p class="text-xs sm:text-sm font-mono text-cyan-400/90 flex items-center gap-2">
                <svg class="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
                Bachiller en Ingeniería de Sistemas • Universidad César Vallejo
              </p>
            </div>

            <!-- Full Stack Bio -->
            <p class="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              Desarrollador de software con visión de extremo a extremo: construyo interfaces web modernas, fluidas y responsivas con <strong class="text-cyan-300 font-medium">Angular 22 (Signals)</strong> y <strong class="text-cyan-300 font-medium">React</strong>, respaldadas por arquitecturas backend robustas en <strong class="text-indigo-300 font-medium">Node.js, Express y Python</strong>, persistencia en <strong class="text-emerald-300 font-medium">MySQL y Cloud Firestore</strong>, y aseguramiento de calidad con <strong class="text-purple-300 font-medium">Playwright y Jest</strong>.
            </p>

            <!-- Full Stack Architecture Core Pillars Strip -->
            <div class="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-3 max-w-xl backdrop-blur-sm">
              <div class="flex items-center justify-between text-xs text-slate-400">
                <span class="font-mono text-[11px] uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <svg class="w-3.5 h-3.5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  Pilares de Ingeniería Full Stack:
                </span>
                <span class="text-[11px] text-cyan-400 font-mono">
                  Extremo a Extremo
                </span>
              </div>

              <div class="grid grid-cols-2 gap-2 text-xs">
                <div class="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-1">
                  <div class="font-semibold text-cyan-300 flex items-center gap-1.5 text-xs">
                    <span>🎨</span>
                    <span>Frontend & UI</span>
                  </div>
                  <div class="text-[11px] text-slate-400 leading-snug">
                    Angular 22 Signals, React, Tailwind CSS v4, Vite
                  </div>
                </div>

                <div class="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-1">
                  <div class="font-semibold text-indigo-300 flex items-center gap-1.5 text-xs">
                    <span>⚙️</span>
                    <span>Backend & APIs</span>
                  </div>
                  <div class="text-[11px] text-slate-400 leading-snug">
                    Node.js, Express, Python Flask, APIs RESTful
                  </div>
                </div>

                <div class="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-1">
                  <div class="font-semibold text-emerald-300 flex items-center gap-1.5 text-xs">
                    <span>🗄️</span>
                    <span>Bases de Datos</span>
                  </div>
                  <div class="text-[11px] text-slate-400 leading-snug">
                    MySQL (Relacional), Cloud Firestore (Realtime)
                  </div>
                </div>

                <div class="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-1">
                  <div class="font-semibold text-purple-300 flex items-center gap-1.5 text-xs">
                    <span>🧪</span>
                    <span>Testing & Calidad</span>
                  </div>
                  <div class="text-[11px] text-slate-400 leading-snug">
                    Playwright (E2E & Scraping), Jest (Unit)
                  </div>
                </div>
              </div>
            </div>

            <!-- CTAs and Direct Actions -->
            <div class="flex flex-wrap items-center gap-3 pt-2">
              <a href="#proyectos" 
                 class="px-5 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-200 flex items-center gap-2 cursor-pointer">
                <span>Ver Proyecto en Angular</span>
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

              <a href="#contacto" 
                 class="px-5 py-3 rounded-xl font-semibold text-sm bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 hover:border-slate-700 transition-all duration-200 flex items-center gap-2 cursor-pointer">
                <span>Contactar</span>
              </a>

              <button 
                (click)="state.copyToClipboard(info.email, 'Email copiado: ' + info.email)"
                class="px-4 py-3 rounded-xl font-medium text-xs font-mono bg-slate-900/60 hover:bg-slate-900 text-cyan-400 border border-slate-800 transition-all flex items-center gap-2 cursor-pointer">
                <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span>{{ info.email }}</span>
              </button>
            </div>

          </div>

          <!-- Right Column: Interactive Developer Terminal / Inspector -->
          <div class="lg:col-span-5">
            <div class="rounded-2xl border border-slate-800 bg-slate-950/95 shadow-2xl overflow-hidden backdrop-blur-xl">
              
              <!-- Terminal Header -->
              <div class="px-4 py-3 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <div class="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div class="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div class="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span class="ml-2 font-mono text-xs text-slate-400 font-medium">ampuero&#64;fullstack:~</span>
                </div>
                <div class="flex items-center gap-1.5 text-[11px] font-mono text-cyan-400">
                  <span class="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                  <span>zsh • git:main</span>
                </div>
              </div>

              <!-- Interactive Terminal Nav Tabs -->
              <div class="flex border-b border-slate-800/80 bg-slate-900/40 text-[11px] font-mono">
                <button 
                  *ngFor="let tab of terminalTabs"
                  (click)="activeTerminalTab.set(tab.id)"
                  [class.text-cyan-400]="activeTerminalTab() === tab.id"
                  [class.border-b-2]="activeTerminalTab() === tab.id"
                  [class.border-cyan-400]="activeTerminalTab() === tab.id"
                  [class.bg-slate-900/80]="activeTerminalTab() === tab.id"
                  [class.text-slate-400]="activeTerminalTab() !== tab.id"
                  class="px-3 py-2 transition-colors flex items-center gap-1 cursor-pointer">
                  <span>{{ tab.label }}</span>
                </button>
              </div>

              <!-- Terminal Content Area -->
              <div class="p-4 sm:p-5 font-mono text-xs leading-relaxed overflow-x-auto min-h-[260px] text-slate-300">
                
                <!-- Tab: info.json -->
                <div *ngIf="activeTerminalTab() === 'info'" class="space-y-1.5">
                  <p class="text-slate-500">$ cat fullstack-profile.json</p>
                  <pre class="text-cyan-300 text-[11.5px] leading-snug">
&#123;
  "name": "{{ info.fullName }}",
  "role": "Full Stack Software Engineer",
  "degree": "Bachiller en Ingeniería de Sistemas",
  "university": "Universidad César Vallejo",
  "location": "Lima, Perú",
  "stack": &#123;
    "frontend": ["Angular 22 Signals", "React", "Next.js", "Tailwind CSS v4"],
    "backend": ["Node.js", "Express", "Python Flask", "PHP", "APIs REST"],
    "databases": ["MySQL", "Cloud Firestore"],
    "testing": ["Playwright (E2E & Scraping)", "Jest (Unit)"]
  &#125;,
  "open_to_work": true
&#125;</pre>
                </div>

                <!-- Tab: git status -->
                <div *ngIf="activeTerminalTab() === 'git'" class="space-y-2">
                  <p class="text-slate-500">$ git status --short --branch</p>
                  <p class="text-emerald-400">## main...origin/main [up to date]</p>
                  <p class="text-slate-400"># Arquitectura unificada Full Stack:</p>
                  <p class="text-indigo-300"> M src/app/projects/finanzen.component.ts</p>
                  <p class="text-cyan-300"> M src/app/signals/reactive-state.ts</p>
                  <p class="text-yellow-300"> A src/app/testing/e2e-playwright.spec.ts</p>
                  <p class="text-slate-400 pt-2">nothing to commit, working tree clean</p>
                  <p class="text-slate-500 pt-2">$ git log -1 --pretty=format:"%h - %s (%cr)"</p>
                  <p class="text-purple-300">8f21bc9 - feat: unify Full Stack architecture & Angular Signals (today)</p>
                </div>

                <!-- Tab: npm test -->
                <div *ngIf="activeTerminalTab() === 'tests'" class="space-y-2">
                  <p class="text-slate-500">$ npm run test:all</p>
                  <div class="space-y-1 text-slate-300">
                    <p class="text-emerald-400 flex items-center gap-1.5">
                      <span>✓</span> PASS src/services/finance.service.spec.ts (Signals & Balance calculation)
                    </p>
                    <p class="text-emerald-400 flex items-center gap-1.5">
                      <span>✓</span> PASS src/components/movement-list.spec.ts (Reactive Filters)
                    </p>
                    <p class="text-emerald-400 flex items-center gap-1.5">
                      <span>✓</span> PASS e2e/auth-and-document.spec.ts (Playwright Navigation E2E)
                    </p>
                    <p class="text-emerald-400 flex items-center gap-1.5">
                      <span>✓</span> PASS e2e/api-contract-validation.spec.ts (TypeScript Payloads)
                    </p>
                  </div>
                  <div class="mt-3 pt-2 border-t border-slate-800 text-[11px] text-slate-400 flex justify-between">
                    <span class="text-emerald-400 font-semibold">Test Suites: 4 passed, 4 total</span>
                    <span class="text-slate-300">Time: 1.482s</span>
                  </div>
                </div>

              </div>

              <!-- Terminal Footer Quick Action -->
              <div class="px-4 py-2.5 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between text-xs">
                <span class="text-slate-400 font-mono text-[11px]">¿Deseas descargar el CV?</span>
                <button 
                  (click)="state.openCvModal()"
                  class="font-mono text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1 text-[11px] cursor-pointer">
                  <span>$ download-cv --select</span>
                  <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

            </div>
          </div>

        </div>

        <!-- Bottom Feature Highlights Strip -->
        <div class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
            <div class="text-2xl font-extrabold text-cyan-400 font-mono">+2 Años</div>
            <div class="text-xs text-slate-400 mt-1">Experiencia Práctica en Desarrollo</div>
          </div>
          <div class="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
            <div class="text-2xl font-extrabold text-indigo-400 font-mono">Bachiller</div>
            <div class="text-xs text-slate-400 mt-1">Ingeniería de Sistemas (UCV)</div>
          </div>
          <div class="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
            <div class="text-2xl font-extrabold text-emerald-400 font-mono">100%</div>
            <div class="text-xs text-slate-400 mt-1">TypeScript Tipado & Código Limpio</div>
          </div>
          <div class="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
            <div class="text-2xl font-extrabold text-purple-400 font-mono">E2E + Unit</div>
            <div class="text-xs text-slate-400 mt-1">Playwright & Jest Automation</div>
          </div>
        </div>

      </div>
    </section>
  `
})
export class HeroComponent {
  readonly state = inject(PortfolioStateService);
  readonly info = PERSONAL_INFO;

  readonly activeTerminalTab = signal<'info' | 'git' | 'tests'>('info');

  readonly terminalTabs = [
    { id: 'info' as const, label: 'profile.json' },
    { id: 'git' as const, label: 'git-status.sh' },
    { id: 'tests' as const, label: 'test-suite.ts' }
  ];
}
