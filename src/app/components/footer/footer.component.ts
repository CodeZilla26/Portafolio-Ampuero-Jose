import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioStateService } from '../../services/portfolio-state.service';
import { PERSONAL_INFO } from '../../data/portfolio.data';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="py-12 border-t border-slate-800/80 bg-slate-950 text-slate-400 text-xs w-full max-w-full overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        <!-- Left: Branding & Role -->
        <div class="space-y-1 text-center sm:text-left">
          <div class="font-bold text-white text-sm">
            {{ info.fullName }}
          </div>
          <p class="text-slate-400">
            Ingeniero de Software
          </p>
        </div>

        <!-- Right: Links & Back to Top -->
        <div class="flex items-center gap-4 font-medium">
          <a [href]="info.linkedinUrl" target="_blank" rel="noopener noreferrer" class="hover:text-cyan-400 transition-colors">
            LinkedIn
          </a>
          <span class="text-slate-700">•</span>
          <a [href]="info.githubUrl" target="_blank" rel="noopener noreferrer" class="hover:text-cyan-400 transition-colors">
            GitHub
          </a>
          <span class="text-slate-700">•</span>
          <button (click)="scrollToTop()" class="hover:text-white transition-colors flex items-center gap-1 cursor-pointer">
            <span>Inicio</span>
            <span>↑</span>
          </button>
        </div>

      </div>
    </footer>
  `
})
export class FooterComponent {
  readonly state = inject(PortfolioStateService);
  readonly info = PERSONAL_INFO;

  scrollToTop(): void {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
