import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioStateService } from '../../services/portfolio-state.service';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="state.toastMessage()" 
         class="fixed bottom-6 right-6 z-50 max-w-sm px-4 py-3 rounded-2xl bg-slate-900/95 border border-cyan-500/40 text-white text-xs font-mono shadow-2xl backdrop-blur-md flex items-center gap-3 transition-all duration-300">
      <span class="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
      <span class="flex-1">{{ state.toastMessage() }}</span>
      <button 
        (click)="state.showToast('')" 
        class="text-slate-400 hover:text-white p-0.5 rounded transition-colors">
        ✕
      </button>
    </div>
  `
})
export class ToastComponent {
  readonly state = inject(PortfolioStateService);
}
