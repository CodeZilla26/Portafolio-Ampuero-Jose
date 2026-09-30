import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PortfolioStateService } from '../../services/portfolio-state.service';
import { ANGULAR_STAR_PROJECT } from '../../data/portfolio.data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="proyectos" class="py-20 border-t border-slate-800/80 relative">
      <!-- Background Ambient Glow -->
      <div class="absolute top-1/2 right-1/4 w-[450px] h-[350px] bg-gradient-to-br from-indigo-600/10 via-cyan-500/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10"></div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Section Header -->
        <div class="text-left max-w-3xl mb-12">
          <div class="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider mb-2">
            <span>03. Proyecto Destacado en Angular</span>
            <span class="w-12 h-px bg-cyan-400/40"></span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight flex flex-wrap items-center gap-3">
            <span>{{ project.title }}</span>
            <span class="text-xs font-mono font-medium px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
              Angular 22 • Standalone & Signals
            </span>
          </h2>
          <p class="text-slate-400 text-sm sm:text-base mt-2">
            {{ project.tagline }}
          </p>
        </div>

        <!-- Main Showcase Project Card -->
        <div class="rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl overflow-hidden backdrop-blur-xl">
          
          <!-- Card Top Bar: Overview & Tech Tags -->
          <div class="p-6 sm:p-8 border-b border-slate-800 bg-slate-950/60">
            <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              
              <div class="space-y-3 max-w-3xl">
                <div class="flex flex-wrap items-center gap-2">
                  <span class="px-2.5 py-1 rounded-md text-[11px] font-mono bg-cyan-950/80 text-cyan-300 border border-cyan-800/60">
                    Frontend Star Project
                  </span>
                  <span class="px-2.5 py-1 rounded-md text-[11px] font-mono bg-indigo-950/80 text-indigo-300 border border-indigo-800/60">
                    Cloud Firestore Realtime
                  </span>
                  <span class="px-2.5 py-1 rounded-md text-[11px] font-mono bg-emerald-950/80 text-emerald-300 border border-emerald-800/60">
                    Tailwind CSS v4 Dark Mode
                  </span>
                </div>
                <p class="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {{ project.overview }}
                </p>
              </div>

              <!-- Action Links -->
              <div class="flex flex-wrap items-center gap-3">
                <a [href]="project.githubUrl" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   class="px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-slate-600 transition-all flex items-center gap-2">
                  <svg class="w-4 h-4 text-slate-300" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                  </svg>
                  <span>Repositorio GitHub</span>
                </a>

                <a href="#simulador-finanzen" 
                   (click)="state.activeProjectTab.set('simulator')"
                   class="px-4 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 shadow-md shadow-cyan-500/20 transition-all flex items-center gap-2">
                  <span>🕹️ Probar Simulador</span>
                </a>
              </div>

            </div>

            <!-- Tech Badges -->
            <div class="flex flex-wrap gap-1.5 mt-5">
              <span *ngFor="let t of project.technologies"
                    class="px-2.5 py-1 rounded text-xs font-mono bg-slate-900 text-slate-300 border border-slate-800">
                {{ t }}
              </span>
            </div>
          </div>

          <!-- Interactive Tab Controls -->
          <div class="flex border-b border-slate-800 bg-slate-950/80 px-4 sm:px-8 text-xs font-mono">
            <button 
              (click)="state.activeProjectTab.set('simulator')"
              [class.text-cyan-400]="state.activeProjectTab() === 'simulator'"
              [class.border-b-2]="state.activeProjectTab() === 'simulator'"
              [class.border-cyan-400]="state.activeProjectTab() === 'simulator'"
              [class.bg-slate-900/60]="state.activeProjectTab() === 'simulator'"
              [class.text-slate-400]="state.activeProjectTab() !== 'simulator'"
              class="py-3 px-4 font-semibold transition-colors flex items-center gap-2 cursor-pointer">
              <span>🕹️ Simulador Interactivo (Signals)</span>
            </button>
            <button 
              (click)="state.activeProjectTab.set('architecture')"
              [class.text-cyan-400]="state.activeProjectTab() === 'architecture'"
              [class.border-b-2]="state.activeProjectTab() === 'architecture'"
              [class.border-cyan-400]="state.activeProjectTab() === 'architecture'"
              [class.bg-slate-900/60]="state.activeProjectTab() === 'architecture'"
              [class.text-slate-400]="state.activeProjectTab() !== 'architecture'"
              class="py-3 px-4 font-semibold transition-colors flex items-center gap-2 cursor-pointer">
              <span>🏛️ Arquitectura & Decisiones UX</span>
            </button>
            <button 
              (click)="state.activeProjectTab.set('metrics')"
              [class.text-cyan-400]="state.activeProjectTab() === 'metrics'"
              [class.border-b-2]="state.activeProjectTab() === 'metrics'"
              [class.border-cyan-400]="state.activeProjectTab() === 'metrics'"
              [class.bg-slate-900/60]="state.activeProjectTab() === 'metrics'"
              [class.text-slate-400]="state.activeProjectTab() !== 'metrics'"
              class="py-3 px-4 font-semibold transition-colors flex items-center gap-2 cursor-pointer">
              <span>⚡ Métricas de Rendimiento</span>
            </button>
          </div>

          <!-- TAB 1: FINANZEN INTERACTIVE SIMULATOR (Live Angular Signals Sandbox) -->
          <div *ngIf="state.activeProjectTab() === 'simulator'" id="simulador-finanzen" class="p-6 sm:p-8 space-y-6">
            
            <!-- Explanatory Banner -->
            <div class="p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/60 flex items-start gap-3">
              <span class="text-xl">💡</span>
              <div class="text-xs text-cyan-200/90 leading-relaxed">
                <strong class="text-cyan-300 font-semibold">Simulador de Reactividad de Angular 22:</strong> 
                Este widget interactivo corre en memoria usando exactamente la misma arquitectura de Signals que <em>FinanZen</em> (<code class="bg-cyan-900/60 px-1 py-0.5 rounded text-cyan-200">signal()</code> y <code class="bg-cyan-900/60 px-1 py-0.5 rounded text-cyan-200">computed()</code>). Puedes agregar un ingreso o gasto abajo y comprobar cómo las métricas de saldo se recalculan al instante sin recargar la página.
              </div>
            </div>

            <!-- Real-time KPI Cards -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <!-- Balance Neto -->
              <div class="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 relative overflow-hidden">
                <div class="flex items-center justify-between text-xs text-slate-400 font-mono mb-1">
                  <span>SALDO NETO (computed)</span>
                  <span class="w-2 h-2 rounded-full" [class.bg-emerald-400]="state.currentBalance() >= 0" [class.bg-red-400]="state.currentBalance() < 0"></span>
                </div>
                <div class="text-2xl sm:text-3xl font-extrabold font-mono"
                     [class.text-emerald-400]="state.currentBalance() >= 0"
                     [class.text-red-400]="state.currentBalance() < 0">
                  S/ {{ state.currentBalance().toFixed(2) }}
                </div>
                <div class="text-[11px] text-slate-500 mt-1">
                  Cálculo reactivo en tiempo real
                </div>
              </div>

              <!-- Ingresos -->
              <div class="p-5 rounded-2xl bg-slate-950/80 border border-slate-800">
                <div class="flex items-center justify-between text-xs text-slate-400 font-mono mb-1">
                  <span>TOTAL INGRESOS</span>
                  <span class="text-emerald-400 font-bold">▲</span>
                </div>
                <div class="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">
                  S/ {{ state.totalIncome().toFixed(2) }}
                </div>
                <div class="text-[11px] text-slate-500 mt-1">
                  Entradas activas registradas
                </div>
              </div>

              <!-- Gastos -->
              <div class="p-5 rounded-2xl bg-slate-950/80 border border-slate-800">
                <div class="flex items-center justify-between text-xs text-slate-400 font-mono mb-1">
                  <span>TOTAL GASTOS</span>
                  <span class="text-rose-400 font-bold">▼</span>
                </div>
                <div class="text-2xl sm:text-3xl font-extrabold text-rose-400 font-mono">
                  S/ {{ state.totalExpense().toFixed(2) }}
                </div>
                <div class="text-[11px] text-slate-500 mt-1">
                  Egresos totales calculados
                </div>
              </div>
            </div>

            <!-- Movement Creator Form (Interactive Simulator) -->
            <div class="p-5 rounded-2xl bg-slate-950/90 border border-slate-800/80 space-y-4">
              <div class="flex items-center justify-between">
                <h4 class="text-sm font-bold text-white font-mono flex items-center gap-2">
                  <span class="text-cyan-400">+</span>
                  <span>Registrar Movimiento en el Simulador</span>
                </h4>
                <button 
                  (click)="state.resetSimulatedMovements()"
                  class="text-xs text-slate-400 hover:text-white transition-colors underline font-mono">
                  Reiniciar datos
                </button>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-12 gap-3 items-end">
                
                <!-- Concepto -->
                <div class="sm:col-span-4 space-y-1">
                  <label class="text-[11px] font-mono text-slate-400">Concepto / Descripción</label>
                  <input 
                    type="text" 
                    [(ngModel)]="newConcept" 
                    placeholder="Ej. Proyecto Angular 22"
                    class="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white focus:outline-none focus:border-cyan-500 transition-colors" />
                </div>

                <!-- Monto -->
                <div class="sm:col-span-2 space-y-1">
                  <label class="text-[11px] font-mono text-slate-400">Monto (S/)</label>
                  <input 
                    type="number" 
                    [(ngModel)]="newAmount" 
                    placeholder="500"
                    min="1"
                    class="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white focus:outline-none focus:border-cyan-500 transition-colors font-mono" />
                </div>

                <!-- Tipo -->
                <div class="sm:col-span-3 space-y-1">
                  <label class="text-[11px] font-mono text-slate-400">Tipo de Flujo</label>
                  <select 
                    [(ngModel)]="newType"
                    class="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white focus:outline-none focus:border-cyan-500 transition-colors">
                    <option value="income">▲ Ingreso (+)</option>
                    <option value="expense">▼ Gasto (-)</option>
                  </select>
                </div>

                <!-- Categoría -->
                <div class="sm:col-span-3 space-y-1">
                  <label class="text-[11px] font-mono text-slate-400">Categoría</label>
                  <select 
                    [(ngModel)]="newCategory"
                    class="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white focus:outline-none focus:border-cyan-500 transition-colors">
                    <option value="Salario">Salario / Nómina</option>
                    <option value="Freelance">Freelance / Contrato</option>
                    <option value="Servicios">Servicios & Cloud</option>
                    <option value="Herramientas">Software & Tools</option>
                    <option value="Alimentación">Alimentación</option>
                    <option value="Otros">Otros</option>
                  </select>
                </div>

              </div>

              <!-- Submit Button -->
              <div class="flex justify-end pt-1">
                <button 
                  (click)="handleCreateMovement()"
                  class="px-5 py-2 rounded-lg text-xs font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-mono shadow-md shadow-cyan-500/20 transition-all flex items-center gap-1.5 cursor-pointer">
                  <span>+ Agregar Movimiento a Signals</span>
                </button>
              </div>
            </div>

            <!-- List of Simulated Movements -->
            <div class="space-y-2">
              <div class="flex items-center justify-between text-xs text-slate-400 font-mono px-2">
                <span>Historial en Memoria ({{ state.simulatedMovements().length }} transacciones)</span>
                <span>Click en × para eliminar</span>
              </div>

              <div class="divide-y divide-slate-800/80 rounded-xl bg-slate-950 border border-slate-800 overflow-hidden">
                <div *ngFor="let item of state.simulatedMovements()" 
                     class="p-3.5 flex items-center justify-between gap-4 hover:bg-slate-900/50 transition-colors">
                  
                  <div class="flex items-center gap-3">
                    <div class="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs"
                         [class.bg-emerald-500/10]="item.type === 'income'"
                         [class.text-emerald-400]="item.type === 'income'"
                         [class.bg-rose-500/10]="item.type === 'expense'"
                         [class.text-rose-400]="item.type === 'expense'">
                      {{ item.type === 'income' ? '+' : '-' }}
                    </div>
                    <div>
                      <div class="text-xs sm:text-sm font-semibold text-white">
                        {{ item.title }}
                      </div>
                      <div class="text-[11px] font-mono text-slate-400 flex items-center gap-2">
                        <span>{{ item.category }}</span>
                        <span>•</span>
                        <span>{{ item.date }}</span>
                      </div>
                    </div>
                  </div>

                  <div class="flex items-center gap-3">
                    <span class="font-mono font-bold text-xs sm:text-sm"
                          [class.text-emerald-400]="item.type === 'income'"
                          [class.text-rose-400]="item.type === 'expense'">
                      {{ item.type === 'income' ? '+' : '-' }} S/ {{ item.amount.toFixed(2) }}
                    </span>
                    <button 
                      (click)="state.removeSimulatedMovement(item.id)"
                      aria-label="Eliminar transacción del simulador"
                      class="text-slate-500 hover:text-rose-400 p-1 rounded hover:bg-slate-800 transition-colors">
                      ✕
                    </button>
                  </div>

                </div>
              </div>
            </div>

          </div>

          <!-- TAB 2: ARCHITECTURE & TECHNICAL DECISIONS -->
          <div *ngIf="state.activeProjectTab() === 'architecture'" class="p-6 sm:p-8 space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div *ngFor="let point of project.architecturePoints" 
                   class="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2.5">
                <div class="inline-block px-2.5 py-0.5 rounded text-[11px] font-mono bg-cyan-950/60 text-cyan-300 border border-cyan-800/60">
                  {{ point.tag }}
                </div>
                <h4 class="text-base font-bold text-white">
                  {{ point.title }}
                </h4>
                <p class="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {{ point.description }}
                </p>
              </div>
            </div>

            <!-- Code Architecture Snippet -->
            <div class="p-5 rounded-2xl bg-slate-950 border border-slate-800 font-mono text-xs space-y-2">
              <div class="text-slate-400 text-[11px]">
                // Patrón de Signals en Angular 22 empleado en FinanZen
              </div>
              <pre class="text-cyan-300 overflow-x-auto text-[11.5px] leading-snug">
&#64;Injectable(&#123; providedIn: 'root' &#125;)
export class FinanceService &#123;
  // Estado reactivo base
  readonly movements = signal&lt;Movement[]&gt;([]);

  // Señales calculadas de grano fino (Cero re-renders superfluos)
  readonly totalIncome = computed(() =&gt; 
    this.movements().filter(m =&gt; m.type === 'income').reduce((acc, c) =&gt; acc + c.amount, 0)
  );

  readonly totalExpense = computed(() =&gt; 
    this.movements().filter(m =&gt; m.type === 'expense').reduce((acc, c) =&gt; acc + c.amount, 0)
  );

  readonly currentBalance = computed(() =&gt; this.totalIncome() - this.totalExpense());
&#125;</pre>
            </div>
          </div>

          <!-- TAB 3: PERFORMANCE METRICS -->
          <div *ngIf="state.activeProjectTab() === 'metrics'" class="p-6 sm:p-8 space-y-6">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div *ngFor="let m of project.impactMetrics" 
                   class="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2 text-center">
                <div class="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono">
                  {{ m.value }}
                </div>
                <div class="text-xs font-semibold text-white">
                  {{ m.label }}
                </div>
                <div class="text-[11px] text-slate-400">
                  {{ m.detail }}
                </div>
              </div>
            </div>

            <div class="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 text-xs sm:text-sm text-slate-300 space-y-3">
              <h4 class="font-bold text-white text-base">
                ¿Por qué destaca FinanZen frente a portafolios convencionales?
              </h4>
              <p class="text-slate-400 leading-relaxed">
                A diferencia de aplicaciones que solo renderizan tablas estáticas de mockups, FinanZen incluye persistencia segura con variables <code class="text-cyan-300 bg-slate-900 px-1 py-0.5 rounded">.env</code> inyectadas en tiempo de compilación para Angular, sincronización bidireccional con <strong class="text-white">Cloud Firestore</strong> vía <code class="text-cyan-300 bg-slate-900 px-1 py-0.5 rounded">onSnapshot()</code>, y un diseño responsivo sin distracciones visuales.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  `
})
export class ProjectsComponent {
  readonly state = inject(PortfolioStateService);
  readonly project = ANGULAR_STAR_PROJECT;

  // Form fields for simulated movement
  newConcept = 'Consultoría Angular 22';
  newAmount = 750;
  newType: 'income' | 'expense' = 'income';
  newCategory = 'Freelance';

  handleCreateMovement(): void {
    if (!this.newConcept.trim() || !this.newAmount || this.newAmount <= 0) {
      this.state.showToast('Ingresa una descripción y monto válido');
      return;
    }
    this.state.addSimulatedMovement(
      this.newConcept,
      this.newAmount,
      this.newType,
      this.newCategory
    );
    this.newConcept = '';
    this.newAmount = 100;
  }
}
