import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SkillTech {
  name: string;
  icon: string;
}

interface SkillCategory {
  title: string;
  items: SkillTech[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="skills" class="py-20 border-t border-slate-800/80 relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Section Header -->
        <div class="text-left max-w-2xl mb-12 reveal-on-scroll">
          <div class="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider mb-2">
            <span>05. Stack Tecnológico</span>
            <span class="w-12 h-px bg-cyan-400/40"></span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Habilidades
          </h2>
        </div>

        <!-- Categorized Skills Grid (Direct Separation, No Filters) -->
        <div class="space-y-10">
          <div *ngFor="let cat of categories; let i = index" 
               class="space-y-4 reveal-on-scroll"
               [class.reveal-delay-1]="i % 2 === 1"
               [class.reveal-delay-2]="i % 2 === 0 && i > 0">
            
            <!-- Category Title Line -->
            <h3 class="text-xs font-mono uppercase tracking-wider text-cyan-400 flex items-center gap-3">
              <span class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                <span>{{ cat.title }}</span>
              </span>
              <span class="h-px flex-1 bg-slate-800"></span>
            </h3>

            <!-- Tech Items Grid (Only Icon + Name) -->
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-2.5 sm:gap-4">
              <div *ngFor="let tech of cat.items"
                   class="flex items-center gap-2.5 sm:gap-3.5 p-2.5 sm:p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/50 hover:bg-slate-800/80 hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-1.5 transition-all duration-300 group cursor-default min-w-0 overflow-hidden">
                
                <!-- Icon Box with Dynamic Rotation on Hover -->
                <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-slate-950/80 border border-slate-800 flex items-center justify-center p-1.5 sm:p-2 shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <ng-container [ngSwitch]="tech.icon">
                    
                    <!-- Angular -->
                    <svg *ngSwitchCase="'angular'" class="w-full h-full" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2.5L2.6 5.8 4 17.5 12 22l8-4.5 1.4-11.7L12 2.5z" fill="#E23237"/>
                      <path d="M12 2.5v19.5l8-4.5 1.4-11.7L12 2.5z" fill="#B52E31"/>
                      <path d="M12 5.7l-4.5 10.3h1.8l.9-2.3h3.6l.9 2.3h1.8L12 5.7zm1.3 6.6h-2.6l1.3-3.2 1.3 3.2z" fill="#FFF"/>
                    </svg>

                    <!-- React -->
                    <svg *ngSwitchCase="'react'" class="w-full h-full" viewBox="-11.5 -10.23174 23 20.46348">
                      <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
                      <g stroke="#61DAFB" stroke-width="1" fill="none">
                        <ellipse rx="11" ry="4.2"/>
                        <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
                        <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
                      </g>
                    </svg>

                    <!-- Next.js -->
                    <svg *ngSwitchCase="'nextjs'" class="w-full h-full text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.8 17.8L9.2 6.5h2.1l7.4 10.3c-.9.5-1.9.8-2.9 1zm-.8-3.4V6.5h1.9v9.7c-.7-.6-1.3-1.2-1.9-1.8zM6.5 6.5h1.9v11H6.5v-11z"/>
                    </svg>

                    <!-- TypeScript -->
                    <svg *ngSwitchCase="'typescript'" class="w-full h-full" viewBox="0 0 24 24">
                      <rect width="24" height="24" rx="4" fill="#3178C6"/>
                      <path fill="#FFF" d="M12.5 13.5v7h-2v-7H7.7v-1.7h7.6v1.7h-2.8zm8.1 1.7c-.5-.4-1.2-.6-2-.6-.7 0-1.2.2-1.5.5-.3.3-.4.7-.4 1.1 0 .4.1.7.4 1 .2.2.7.5 1.4.8 1.1.4 1.8.8 2.2 1.3.4.5.6 1.1.6 1.8 0 1-.4 1.8-1.1 2.4-.7.6-1.7.9-2.9.9-1 0-1.9-.2-2.7-.7l.6-1.7c.7.5 1.5.7 2.2.7.6 0 1.1-.1 1.4-.4.3-.3.5-.7.5-1.1 0-.4-.1-.7-.4-1-.3-.3-.8-.5-1.5-.8-1-.4-1.8-.8-2.2-1.3-.4-.5-.6-1.1-.6-1.8 0-.9.4-1.7 1.1-2.2.7-.6 1.6-.8 2.7-.8.9 0 1.6.2 2.2.5l-.5 1.7z"/>
                    </svg>

                    <!-- JavaScript -->
                    <svg *ngSwitchCase="'javascript'" class="w-full h-full" viewBox="0 0 24 24">
                      <rect width="24" height="24" rx="4" fill="#F7DF1E"/>
                      <path fill="#000" d="M7.5 18.5c.5.3 1 .5 1.6.5.9 0 1.5-.4 1.5-1.3V11h2v6.7c0 2-1.2 3-3.2 3-1 0-1.8-.3-2.4-.7l.5-1.5zm8.1.3c.6.4 1.3.6 2.1.6 1.1 0 1.8-.5 1.8-1.3 0-.7-.5-1.1-1.6-1.6-1.4-.6-2.3-1.4-2.3-2.6 0-1.5 1.2-2.6 3-2.6.9 0 1.7.2 2.3.6l-.6 1.6c-.5-.3-1.1-.5-1.7-.5-1 0-1.5.5-1.5 1.1 0 .7.5 1 1.7 1.5 1.5.6 2.3 1.4 2.3 2.7 0 1.6-1.2 2.7-3.3 2.7-1.1 0-2-.3-2.7-.8l.5-1.4z"/>
                    </svg>

                    <!-- Tailwind CSS -->
                    <svg *ngSwitchCase="'tailwind'" class="w-full h-full" viewBox="0 0 24 24" fill="#38BDF8">
                      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z"/>
                    </svg>

                    <!-- HTML5 -->
                    <svg *ngSwitchCase="'html5'" class="w-full h-full" viewBox="0 0 24 24">
                      <path fill="#E34F26" d="M3 2l1.9 17.5L12 22l7.1-2.5L21 2H3z"/>
                      <path fill="#EF652A" d="M12 3.8v16.4l5.5-1.9L19.1 3.8H12z"/>
                      <path fill="#EBEBEB" d="M12 7.7H7.7l.3 3.3H12v-3.3zm0 5.3H8.3l.3 3.3L12 17.2V13zm0-8.5v3.2h4.5l-.4 4.5H12v3.3l3.4-.9.2-2.4H12z"/>
                      <path fill="#FFF" d="M12 7.7h4.7l-.4 4.5H12v-4.5zm0 5.3v3.2l3.4-.9.4-4.5H12v2.2z"/>
                    </svg>

                    <!-- CSS3 -->
                    <svg *ngSwitchCase="'css3'" class="w-full h-full" viewBox="0 0 24 24">
                      <path fill="#1572B6" d="M3 2l1.9 17.5L12 22l7.1-2.5L21 2H3z"/>
                      <path fill="#33A9DC" d="M12 3.8v16.4l5.5-1.9L19.1 3.8H12z"/>
                      <path fill="#EBEBEB" d="M12 7.7H7.7l.3 3.3H12v-3.3zm0 5.3H8.3l.3 3.3L12 17.2V13z"/>
                      <path fill="#FFF" d="M12 7.7h4.7l-.4 4.5H12v-4.5zm0 5.3v3.2l3.4-.9.4-4.5H12v2.2z"/>
                    </svg>

                    <!-- Node.js -->
                    <svg *ngSwitchCase="'nodejs'" class="w-full h-full" viewBox="0 0 24 24" fill="#5FA04E">
                      <path d="M12 2l9 5.2v10.4l-9 5.2-9-5.2V7.2L12 2zm0 2.3L4.8 8.5v7l7.2 4.2 7.2-4.2v-7L12 4.3z"/>
                    </svg>

                    <!-- Express -->
                    <svg *ngSwitchCase="'express'" class="w-full h-full text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.8 6.5l-4.2 5.5 4.6 5.5h-2.6l-3.3-4.1-3.3 4.1H7.4l4.6-5.5-4.2-5.5h2.6l3 3.9 3-3.9h2.4z"/>
                    </svg>

                    <!-- Python -->
                    <svg *ngSwitchCase="'python'" class="w-full h-full" viewBox="0 0 24 24">
                      <path fill="#3776AB" d="M11.9 2c-3.1 0-5.1.7-5.1 2.6v2h5.2v.7H4.4C2.5 7.3 1 9 1 11.6c0 2.7 1.5 4.3 3.4 4.3h1.8v-2.3c0-2.2 1.9-4 4.1-4h5.2c1.7 0 3-1.3 3-3V4.6c0-1.9-2-2.6-6.6-2.6zm-1.8 1.6c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9z"/>
                      <path fill="#FFD43B" d="M12.1 22c3.1 0 5.1-.7 5.1-2.6v-2H12v-.7h7.6c1.9 0 3.4-1.7 3.4-4.3 0-2.7-1.5-4.3-3.4-4.3h-1.8v2.3c0 2.2-1.9 4-4.1 4H8.5c-1.7 0-3 1.3-3 3v2c0 1.9 2 2.6 6.6 2.6zm1.8-1.6c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9z"/>
                    </svg>

                    <!-- Flask -->
                    <svg *ngSwitchCase="'flask'" class="w-full h-full text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M10 2h4v2h-1v5.6l4.8 8.4c.8 1.4-.2 3-1.8 3H8c-1.6 0-2.6-1.6-1.8-3L11 9.6V4h-1V2zm2 10.5l-3.5 6.1c-.2.4.1.8.5.8h6c.4 0 .7-.4.5-.8L12 12.5z"/>
                    </svg>

                    <!-- PHP -->
                    <svg *ngSwitchCase="'php'" class="w-full h-full" viewBox="0 0 24 24" fill="#777BB4">
                      <path d="M12 3C6.5 3 2 7 2 12s4.5 9 10 9 10-4 10-9-4.5-9-10-9zm-5 11.5H5.5L7 8.5h2.5c1.4 0 2.3.8 2 2.2-.4 1.8-1.8 2.8-3.3 2.8H7.3l-.3 2zm8 0h-1.5l1.5-7h2.5c1.4 0 2.3.8 2 2.2-.4 1.8-1.8 2.8-3.3 2.8h-.9l-.3 2zm-3-1.5l.8-4h1.5l-.8 4h-1.5z"/>
                    </svg>

                    <!-- APIs REST -->
                    <svg *ngSwitchCase="'api'" class="w-full h-full text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>

                    <!-- MySQL -->
                    <svg *ngSwitchCase="'mysql'" class="w-full h-full" viewBox="0 0 24 24" fill="#00758F">
                      <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 14.5c-2.4 0-4.3-1.5-4.3-3.8 0-2 1.3-3.2 3-3.2 1.5 0 2.5.9 2.5 2.4 0 1.7-1.1 2.8-2.5 2.8-.7 0-1.2-.3-1.2-.9 0-.7.6-1.1 1.3-1.1.3 0 .6.1.8.3l.4-.7c-.3-.2-.8-.3-1.3-.3-1.1 0-2 .8-2 1.9 0 1.3.9 2 2 2 1.5 0 2.8-1.1 2.8-3.1 0-2.1-1.5-3.4-3.6-3.4-2.4 0-4.1 1.8-4.1 4.3 0 2.9 2.4 4.9 5.3 4.9 1.5 0 2.8-.5 3.7-1.4l-.9-1c-.7.7-1.7 1.1-2.8 1.1z"/>
                    </svg>

                    <!-- PostgreSQL -->
                    <svg *ngSwitchCase="'postgres'" class="w-full h-full" viewBox="0 0 24 24" fill="#336791">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15.5h-2v-7h2v7zm4 0h-2V7h2v10.5z"/>
                    </svg>

                    <!-- Firebase -->
                    <svg *ngSwitchCase="'firebase'" class="w-full h-full" viewBox="0 0 24 24">
                      <path fill="#FFCA28" d="M3.9 17.5L5.7 3.8c.1-.5.7-.7 1-.3l3.6 6.8L3.9 17.5z"/>
                      <path fill="#FFA000" d="M13.6 8.5l-2.4-4.5c-.3-.5-1-.5-1.3 0L3.9 17.5l9.7-9z"/>
                      <path fill="#F57C00" d="M12.6 21.6c.4.3.9.3 1.3 0l6.2-4.1L15.3 4.2c-.2-.6-.9-.7-1.3-.2L3.9 17.5l8.7 4.1z"/>
                    </svg>

                    <!-- Playwright -->
                    <svg *ngSwitchCase="'playwright'" class="w-full h-full" viewBox="0 0 24 24">
                      <path fill="#2EAD33" d="M16.5 4.5C14.6 4.5 13 6.1 13 8s1.6 3.5 3.5 3.5S20 9.9 20 8s-1.6-3.5-3.5-3.5zm0 5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z"/>
                      <path fill="#E23237" d="M8.5 8C6.6 8 5 9.6 5 11.5S6.6 15 8.5 15s3.5-1.6 3.5-3.5S10.4 8 8.5 8zm0 5c-.8 0-1.5-.7-1.5-1.5S7.7 10 8.5 10s1.5.7 1.5 1.5-.7 1.5-1.5 1.5z"/>
                      <circle cx="16.5" cy="16.5" r="3.5" fill="#45BA4B"/>
                    </svg>

                    <!-- Jest -->
                    <svg *ngSwitchCase="'jest'" class="w-full h-full" viewBox="0 0 24 24" fill="#C21325">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm2.5-5.5h-5V9h5v2z"/>
                    </svg>

                    <!-- Selenium -->
                    <svg *ngSwitchCase="'selenium'" class="w-full h-full" viewBox="0 0 24 24" fill="#43B02A">
                      <path d="M4 4h16v16H4V4zm3 3v10h10V7H7zm2 2h6v6H9V9z"/>
                    </svg>

                    <!-- Git -->
                    <svg *ngSwitchCase="'git'" class="w-full h-full" viewBox="0 0 24 24" fill="#F05032">
                      <path d="M21.6 10.9L13.1 2.4c-.6-.6-1.5-.6-2.1 0L9.4 4 12 6.6c.6-.2 1.3 0 1.8.4.5.5.6 1.2.4 1.8l2.6 2.6c.6-.2 1.3 0 1.8.4.7.7.7 1.9 0 2.6-.7.7-1.9.7-2.6 0-.6-.6-.7-1.4-.4-2.1l-2.4-2.4v5.3c.2.2.4.5.4.8 0 1-.8 1.8-1.8 1.8s-1.8-.8-1.8-1.8c0-.7.4-1.3 1-1.6V8.3c-.6-.3-1-.9-1-1.6 0-.4.1-.7.3-1L2.4 11c-.6.6-.6 1.5 0 2.1l8.5 8.5c.6.6 1.5.6 2.1 0l8.6-8.6c.6-.6.6-1.5 0-2.1z"/>
                    </svg>

                    <!-- GitHub -->
                    <svg *ngSwitchCase="'github'" class="w-full h-full text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                    </svg>

                    <!-- Postman -->
                    <svg *ngSwitchCase="'postman'" class="w-full h-full" viewBox="0 0 24 24" fill="#FF6C37">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.8 6.5l-3.2 2-3.2-2L12 6.5l3.8 2zm-7.6 1.5l3.2 2v3.8l-3.2-2V10zm7.6 3.8V10l3.2-2v3.8l-3.2 2z"/>
                    </svg>

                    <!-- Vite -->
                    <svg *ngSwitchCase="'vite'" class="w-full h-full" viewBox="0 0 24 24">
                      <path fill="#BD34FE" d="M19.7 3.5L12.5 18 11.2 12.2l-4.7-2.1L19.7 3.5z"/>
                      <path fill="#41D1FF" d="M4.3 3.5l7 6.6-1.5 5.5L4.3 3.5z"/>
                      <path fill="#FFD427" d="M12.9 8.2l-3.2 5.5 2.1.8-1.5 4.5 4.7-6.2-2.1-.6z"/>
                    </svg>

                    <!-- NPM -->
                    <svg *ngSwitchCase="'npm'" class="w-full h-full" viewBox="0 0 24 24" fill="#CB3837">
                      <path d="M1 4v16h22V4H1zm18 13.5h-3v-8h-3v8H4V6.5h15v11z"/>
                    </svg>

                  </ng-container>
                </div>

                <!-- Tech Name -->
                <span class="text-xs min-[400px]:text-sm sm:text-base font-semibold text-slate-200 group-hover:text-white transition-colors truncate min-w-0" [title]="tech.name">
                  {{ tech.name }}
                </span>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  `
})
export class SkillsComponent {
  readonly categories: SkillCategory[] = [
    {
      title: 'Frontend',
      items: [
        { name: 'Angular', icon: 'angular' },
        { name: 'React', icon: 'react' },
        { name: 'Next.js', icon: 'nextjs' },
        { name: 'TypeScript', icon: 'typescript' },
        { name: 'JavaScript', icon: 'javascript' },
        { name: 'Tailwind CSS', icon: 'tailwind' },
        { name: 'HTML5', icon: 'html5' },
        { name: 'CSS3', icon: 'css3' }
      ]
    },
    {
      title: 'Backend & APIs',
      items: [
        { name: 'Node.js', icon: 'nodejs' },
        { name: 'Express', icon: 'express' },
        { name: 'Python', icon: 'python' },
        { name: 'Flask', icon: 'flask' },
        { name: 'PHP', icon: 'php' },
        { name: 'APIs REST', icon: 'api' }
      ]
    },
    {
      title: 'Bases de Datos',
      items: [
        { name: 'MySQL', icon: 'mysql' },
        { name: 'PostgreSQL', icon: 'postgres' },
        { name: 'Firebase', icon: 'firebase' }
      ]
    },
    {
      title: 'Testing & Automatización',
      items: [
        { name: 'Playwright', icon: 'playwright' },
        { name: 'Jest', icon: 'jest' },
        { name: 'Selenium', icon: 'selenium' }
      ]
    },
    {
      title: 'Herramientas',
      items: [
        { name: 'Git', icon: 'git' },
        { name: 'GitHub', icon: 'github' },
        { name: 'Postman', icon: 'postman' },
        { name: 'Vite', icon: 'vite' },
        { name: 'NPM', icon: 'npm' }
      ]
    }
  ];
}
