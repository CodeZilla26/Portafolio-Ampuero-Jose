import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioStateService } from '../../services/portfolio-state.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="sticky top-0 z-40 w-full backdrop-blur-md bg-slate-950/80 dark:bg-slate-950/80 border-b border-slate-800/80 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        
        <!-- Brand Logo -->
        <a href="#" class="flex items-center gap-2.5 group cursor-pointer focus:outline-none">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-600 via-indigo-600 to-purple-600 p-[1.5px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all duration-300">
            <div class="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-mono font-bold text-cyan-400 group-hover:text-white transition-colors text-sm">
              &lt;JA/&gt;
            </div>
          </div>
          <div class="flex flex-col">
            <span class="font-bold text-sm tracking-tight text-white group-hover:text-cyan-400 transition-colors">
              Jose Ampuero
            </span>
            <span class="text-[10.5px] font-mono text-cyan-400/90 font-medium">
              Full Stack Engineer
            </span>
          </div>
        </a>

        <!-- Desktop Navigation Links -->
        <nav class="hidden md:flex items-center gap-1 lg:gap-2">
          <a *ngFor="let link of navLinks" 
             [href]="link.href"
             class="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-900/60 rounded-lg transition-all duration-200">
            {{ link.label }}
          </a>
        </nav>

        <!-- Right Side Actions: Dark/Light, CV Modal Button -->
        <div class="flex items-center gap-2 sm:gap-3">
          
          <!-- Theme Toggle Button -->
          <button 
            (click)="state.toggleTheme()"
            aria-label="Alternar tema claro y oscuro"
            class="p-2 rounded-lg text-slate-400 hover:text-yellow-400 hover:bg-slate-900 border border-transparent hover:border-slate-800 transition-all duration-200 cursor-pointer">
            <svg *ngIf="state.isDarkMode()" class="w-4 h-4 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 9h-1m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <svg *ngIf="!state.isDarkMode()" class="w-4 h-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </button>

          <!-- Download CV Button -->
          <button 
            (click)="state.openCvModal()"
            class="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-cyan-500/15 to-indigo-500/15 text-cyan-300 hover:from-cyan-500 hover:to-indigo-600 hover:text-slate-950 border border-cyan-500/30 transition-all duration-200 shadow-sm shadow-cyan-500/10 cursor-pointer">
            <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>Descargar CV</span>
          </button>

          <!-- Mobile Menu Button -->
          <button 
            (click)="mobileMenuOpen.set(!mobileMenuOpen())"
            aria-label="Menú móvil"
            class="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 border border-slate-800 cursor-pointer">
            <svg *ngIf="!mobileMenuOpen()" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
            <svg *ngIf="mobileMenuOpen()" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

        </div>
      </div>

      <!-- Mobile Dropdown Menu -->
      <div *ngIf="mobileMenuOpen()" class="md:hidden px-4 pt-3 pb-6 bg-slate-950 border-b border-slate-800 space-y-4">
        <!-- Links Mobile -->
        <div class="space-y-1">
          <a *ngFor="let link of navLinks" 
             [href]="link.href"
             (click)="mobileMenuOpen.set(false)"
             class="block px-3 py-2 text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-900 rounded-md">
            {{ link.label }}
          </a>
        </div>

        <!-- Mobile CV CTA -->
        <button 
          (click)="state.openCvModal(); mobileMenuOpen.set(false)"
          class="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-sm font-semibold bg-gradient-to-r from-cyan-600 to-indigo-600 text-white shadow-md">
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Descargar CV (Frontend / Backend)
        </button>
      </div>
    </header>
  `
})
export class NavbarComponent {
  readonly state = inject(PortfolioStateService);
  readonly mobileMenuOpen = signal<boolean>(false);

  readonly navLinks = [
    { label: 'Sobre mí', href: '#sobre-mi' },
    { label: 'Experiencia', href: '#experiencia' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Educación', href: '#educacion' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contacto', href: '#contacto' }
  ];
}
