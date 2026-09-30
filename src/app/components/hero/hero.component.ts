import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioStateService } from '../../services/portfolio-state.service';
import { PERSONAL_INFO } from '../../data/portfolio.data';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 py-12">
      <!-- Glow ambient background -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-500/15 via-indigo-500/15 to-purple-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      
      <div class="max-w-4xl w-full text-center space-y-8 my-auto">
        
        <!-- Main Heading with Name -->
        <div class="space-y-4">
          <h1 class="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-tight">
            Hola, soy <br />
            <span class="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
              Jose Ampuero
            </span>
          </h1>
          
          <!-- Role Subtitle: Ingeniero de Software -->
          <div class="flex items-center justify-center gap-2 pt-2">
            <span class="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-200 font-mono flex items-center gap-2">
              <span class="text-cyan-400">&gt;</span>
              <span>Ingeniero de Software</span>
            </span>
          </div>
        </div>

        <!-- Direct Links: Descargar CV, GitHub y LinkedIn -->
        <div class="flex flex-wrap items-center justify-center gap-4 pt-2">
          
          <!-- Descargar CV CTA -->
          <button 
            (click)="state.openCvModal()"
            class="px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-200 flex items-center gap-2.5 cursor-pointer">
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>Descargar CV</span>
          </button>

          <!-- GitHub Link -->
          <a [href]="info.githubUrl" 
             target="_blank" 
             rel="noopener noreferrer"
             class="px-5 py-3.5 rounded-xl font-semibold text-sm bg-slate-900 hover:bg-slate-800 text-slate-100 border border-slate-800 hover:border-slate-700 transition-all duration-200 flex items-center gap-2.5 cursor-pointer shadow-sm">
            <svg class="w-4 h-4 text-slate-200" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
            <span>GitHub</span>
          </a>

          <!-- LinkedIn Link -->
          <a [href]="info.linkedinUrl" 
             target="_blank" 
             rel="noopener noreferrer"
             class="px-5 py-3.5 rounded-xl font-semibold text-sm bg-slate-900 hover:bg-slate-800 text-slate-100 border border-slate-800 hover:border-slate-700 transition-all duration-200 flex items-center gap-2.5 cursor-pointer shadow-sm">
            <svg class="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            <span>LinkedIn</span>
          </a>

        </div>

      </div>
    </section>
  `
})
export class HeroComponent {
  readonly state = inject(PortfolioStateService);
  readonly info = PERSONAL_INFO;
}
