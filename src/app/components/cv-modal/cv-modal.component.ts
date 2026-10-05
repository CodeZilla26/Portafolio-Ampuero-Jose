import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioStateService } from '../../services/portfolio-state.service';
import { PERSONAL_INFO } from '../../data/portfolio.data';

@Component({
  selector: 'app-cv-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="state.isCvModalOpen()" 
         class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 dark:bg-slate-950/80 backdrop-blur-md animate-fade-in">
      
      <!-- Backdrop click to close -->
      <div (click)="state.closeCvModal()" class="absolute inset-0"></div>

      <!-- Modal Card -->
      <div class="relative w-full max-w-lg rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8 space-y-6 z-10 text-left">
        
        <!-- Header -->
        <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <span class="text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-wider font-semibold">Documentación de Carrera</span>
            <h3 class="text-xl font-bold text-slate-900 dark:text-white">Selecciona la versión del CV</h3>
          </div>
          <button 
            (click)="state.closeCvModal()"
            aria-label="Cerrar modal"
            class="p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            ✕
          </button>
        </div>

        <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Para adaptarme exactamente a los requisitos de tu vacante, he preparado dos versiones especializadas según mi trayectoria:
        </p>

        <!-- CV Choices -->
        <div class="space-y-3">
          
          <!-- Option 1: Frontend Developer CV -->
          <a href="/cv-jose-ampuero.pdf" 
             target="_blank" 
             download="CV_Jose_Ampuero_Frontend_Developer.pdf"
             (click)="state.showToast('Descargando CV Versión Frontend...'); state.closeCvModal()"
             class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/60 hover:bg-slate-100 dark:hover:bg-slate-950/80 transition-all flex items-center justify-between group block shadow-sm">
            <div class="flex items-center gap-3.5">
              <div class="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-600 dark:text-cyan-400 group-hover:scale-105 transition-transform">
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <div class="text-sm font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  Versión Frontend Developer
                </div>
                <div class="text-xs text-slate-500 dark:text-slate-400 font-mono">
                  Angular 22 • React • Tailwind CSS • Playwright E2E
                </div>
              </div>
            </div>
            <span class="text-xs font-mono text-cyan-600 dark:text-cyan-400 flex items-center gap-1 font-semibold">
              Descargar ↓
            </span>
          </a>

          <!-- Option 2: Backend Developer CV -->
          <a href="/cv-jose-ampuero.pdf" 
             target="_blank" 
             download="CV_Jose_Ampuero_Backend_Developer.pdf"
             (click)="state.showToast('Descargando CV Versión Backend...'); state.closeCvModal()"
             class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/60 hover:bg-slate-100 dark:hover:bg-slate-950/80 transition-all flex items-center justify-between group block shadow-sm">
            <div class="flex items-center gap-3.5">
              <div class="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:scale-105 transition-transform">
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <div>
                <div class="text-sm font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  Versión Backend Developer
                </div>
                <div class="text-xs text-slate-500 dark:text-slate-400 font-mono">
                  Node.js • Express • Python Flask • MySQL • APIs REST
                </div>
              </div>
            </div>
            <span class="text-xs font-mono text-indigo-600 dark:text-indigo-400 flex items-center gap-1 font-semibold">
              Descargar ↓
            </span>
          </a>

          <!-- Option 3: View in Browser -->
          <a href="/cv-jose-ampuero.pdf" 
             target="_blank" 
             rel="noopener noreferrer"
             (click)="state.closeCvModal()"
             class="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all flex items-center justify-center gap-2 text-xs text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white font-mono block text-center shadow-sm">
            <svg class="w-4 h-4 text-slate-500 dark:text-slate-400 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            <span>Abrir y previsualizar PDF directamente en el navegador</span>
          </a>

        </div>

        <!-- Footer -->
        <div class="flex items-center justify-between pt-2 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500 font-mono">
          <span>Actualizado: 2026</span>
          <button (click)="state.closeCvModal()" class="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
            Cerrar ventana
          </button>
        </div>

      </div>
    </div>
  `
})
export class CvModalComponent {
  readonly state = inject(PortfolioStateService);
  readonly info = PERSONAL_INFO;
}
