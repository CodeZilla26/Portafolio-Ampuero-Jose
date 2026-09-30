import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioStateService } from '../../services/portfolio-state.service';
import { PERSONAL_INFO } from '../../data/portfolio.data';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden">
      <!-- Glow ambient background -->
      <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-to-tr from-cyan-500/15 via-indigo-500/15 to-purple-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <!-- Left Column: Name, Title & Direct Links (GitHub, LinkedIn, Descargar CV) -->
          <div class="lg:col-span-7 space-y-6 text-left">
            
            <!-- Main Heading with Name -->
            <div class="space-y-3">
              <h1 class="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
                Hola, soy <br />
                <span class="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
                  Jose Ampuero
                </span>
              </h1>
              
              <!-- Role Subtitle: Ingeniero de Software -->
              <div class="flex items-center gap-2 pt-1">
                <span class="text-2xl sm:text-3xl font-bold text-slate-100 font-mono flex items-center gap-2">
                  <span class="text-cyan-400">&gt;</span>
                  <span>Ingeniero de Software</span>
                </span>
              </div>

              <!-- Degree Badge -->
              <p class="text-xs sm:text-sm font-mono text-cyan-400/90 flex items-center gap-2 pt-1">
                <svg class="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
                Bachiller en Ingeniería de Sistemas • Universidad César Vallejo
              </p>
            </div>

            <!-- Direct Links: GitHub, LinkedIn y Descargar CV -->
            <div class="flex flex-wrap items-center gap-3.5 pt-4">
              
              <!-- Descargar CV CTA -->
              <button 
                (click)="state.openCvModal()"
                class="px-5 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-200 flex items-center gap-2 cursor-pointer">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Descargar CV</span>
              </button>

              <!-- GitHub Link -->
              <a [href]="info.githubUrl" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 class="px-5 py-3 rounded-xl font-semibold text-sm bg-slate-900 hover:bg-slate-800 text-slate-100 border border-slate-800 hover:border-slate-700 transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-sm">
                <svg class="w-4 h-4 text-slate-200" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
                <span>GitHub</span>
              </a>

              <!-- LinkedIn Link -->
              <a [href]="info.linkedinUrl" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 class="px-5 py-3 rounded-xl font-semibold text-sm bg-slate-900 hover:bg-slate-800 text-slate-100 border border-slate-800 hover:border-slate-700 transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-sm">
                <svg class="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span>LinkedIn</span>
              </a>

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
                  <span class="ml-2 font-mono text-xs text-slate-400 font-medium">ampuero&#64;developer:~</span>
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
                  <p class="text-slate-500">$ cat profile.json</p>
                  <pre class="text-cyan-300 text-[11.5px] leading-snug">
&#123;
  "name": "{{ info.fullName }}",
  "role": "Ingeniero de Software",
  "degree": "Bachiller en Ingeniería de Sistemas",
  "university": "Universidad César Vallejo",
  "location": "Lima, Perú",
  "stack": [
    "Angular (Signals, Standalone)",
    "React / Next.js",
    "TypeScript",
    "Node.js & Express",
    "Python (Flask)",
    "MySQL & Cloud Firestore"
  ],
  "testing": "Playwright (E2E) & Jest (Unit)",
  "open_to_work": true
&#125;</pre>
                </div>

                <!-- Tab: git status -->
                <div *ngIf="activeTerminalTab() === 'git'" class="space-y-2">
                  <p class="text-slate-500">$ git status --short --branch</p>
                  <p class="text-emerald-400">## main...origin/main [up to date]</p>
                  <p class="text-slate-400"># Arquitectura de software:</p>
                  <p class="text-indigo-300"> M src/app/projects/finanzen.component.ts</p>
                  <p class="text-cyan-300"> M src/app/signals/reactive-state.ts</p>
                  <p class="text-yellow-300"> A src/app/testing/e2e-playwright.spec.ts</p>
                  <p class="text-slate-400 pt-2">nothing to commit, working tree clean</p>
                  <p class="text-slate-500 pt-2">$ git log -1 --pretty=format:"%h - %s (%cr)"</p>
                  <p class="text-purple-300">8f21bc9 - feat: Angular Signals architecture & Dark Mode v4 (today)</p>
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
