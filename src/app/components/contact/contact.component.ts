import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PortfolioStateService } from '../../services/portfolio-state.service';
import { PERSONAL_INFO } from '../../data/portfolio.data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="contacto" class="py-20 border-t border-slate-800/80 relative overflow-hidden">
      <!-- Glow effect -->
      <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[280px] sm:w-[500px] h-[180px] sm:h-[250px] bg-gradient-to-t from-cyan-500/10 via-indigo-500/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10"></div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Section Header -->
        <div class="text-left max-w-2xl mb-12 reveal-on-scroll">
          <div class="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider mb-2">
            <span>06. Canales de Comunicación</span>
            <span class="w-12 h-px bg-cyan-400/40"></span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Contacto
          </h2>
          <p class="text-slate-400 text-sm sm:text-base mt-2">
            ¿Tienes una propuesta laboral, proyecto o consulta técnica? Conversemos directamente.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <!-- Left Column: Direct Fast-Action Cards (5 cols) -->
          <div class="lg:col-span-5 space-y-4 reveal-on-scroll reveal-delay-1">
            
            <!-- Email Card with Copy button -->
            <div class="p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-1 backdrop-blur-sm transition-all duration-300 group overflow-hidden">
              <div class="flex items-center justify-between gap-2 sm:gap-4 min-w-0">
                <div class="flex items-center gap-2.5 sm:gap-3 min-w-0">
                  <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform shrink-0">
                    <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div class="min-w-0">
                    <div class="text-[11px] sm:text-xs font-mono text-slate-400">Correo Electrónico</div>
                    <a [href]="'mailto:' + info.email" class="text-xs sm:text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors truncate block">
                      {{ info.email }}
                    </a>
                  </div>
                </div>
                
                <button 
                  (click)="state.copyToClipboard(info.email, 'Email copiado: ' + info.email)"
                  title="Copiar email al portapapeles"
                  class="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer shrink-0">
                  <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>
            </div>

            <!-- WhatsApp Direct Card -->
            <a [href]="info.whatsappUrl" 
               target="_blank" 
               rel="noopener noreferrer"
               class="p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/10 hover:-translate-y-1 backdrop-blur-sm transition-all duration-300 flex items-center justify-between group block overflow-hidden min-w-0">
              <div class="flex items-center gap-2.5 sm:gap-3 min-w-0">
                <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform shrink-0">
                  <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z"/>
                  </svg>
                </div>
                <div class="min-w-0">
                  <div class="text-[11px] sm:text-xs font-mono text-slate-400">WhatsApp / Teléfono</div>
                  <div class="text-xs sm:text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors truncate">
                    {{ info.phone }}
                  </div>
                </div>
              </div>

              <span class="text-xs font-mono text-emerald-400 flex items-center gap-1 shrink-0 group-hover:translate-x-1 transition-transform">
                Chat →
              </span>
            </a>

            <!-- LinkedIn Card -->
            <a [href]="info.linkedinUrl" 
               target="_blank" 
               rel="noopener noreferrer"
               class="p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500/40 hover:shadow-lg hover:shadow-indigo-500/10 hover:-translate-y-1 backdrop-blur-sm transition-all duration-300 flex items-center justify-between group block overflow-hidden min-w-0">
              <div class="flex items-center gap-2.5 sm:gap-3 min-w-0">
                <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-105 transition-transform shrink-0">
                  <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
                <div class="min-w-0">
                  <div class="text-[11px] sm:text-xs font-mono text-slate-400">Perfil Profesional</div>
                  <div class="text-xs sm:text-sm font-semibold text-white group-hover:text-indigo-400 transition-colors truncate">
                    LinkedIn / jose-ampuero
                  </div>
                </div>
              </div>

              <span class="text-xs font-mono text-indigo-400 flex items-center gap-1 shrink-0 group-hover:translate-x-1 transition-transform">
                Conectar →
              </span>
            </a>

          </div>

          <!-- Right Column: Interactive Message Composer (7 cols) -->
          <div class="lg:col-span-7 w-full min-w-0 reveal-on-scroll reveal-delay-2">
            <div class="p-5 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 backdrop-blur-xl shadow-2xl space-y-5 overflow-hidden transition-all duration-300 hover:border-slate-700/80">
              
              <div class="border-b border-slate-800 pb-3">
                <h3 class="text-base sm:text-lg font-bold text-white font-mono flex items-center gap-2">
                  <span class="text-cyan-400">✉️</span>
                  <span>Escribir Mensaje Directo</span>
                </h3>
                <p class="text-xs text-slate-400 mt-1">
                  Completa los datos para iniciar conversación por correo o copiar el mensaje redactado.
                </p>
              </div>

              <div class="space-y-4">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <!-- Nombre -->
                  <div class="space-y-1">
                    <label class="text-xs font-mono text-slate-400">Tu Nombre / Empresa *</label>
                    <input 
                      type="text" 
                      [(ngModel)]="senderName"
                      placeholder="Ej. María Gómez / Tech Solutions" 
                      class="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors" />
                  </div>

                  <!-- Email -->
                  <div class="space-y-1">
                    <label class="text-xs font-mono text-slate-400">Tu Correo Electrónico *</label>
                    <input 
                      type="email" 
                      [(ngModel)]="senderEmail"
                      placeholder="tu-correo@empresa.com" 
                      class="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors" />
                  </div>
                </div>

                <!-- Asunto -->
                <div class="space-y-1">
                  <label class="text-xs font-mono text-slate-400">Asunto</label>
                  <input 
                    type="text" 
                    [(ngModel)]="subject"
                    placeholder="Ej. Oportunidad Laboral / Proyecto Angular" 
                    class="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors" />
                </div>

                <!-- Mensaje -->
                <div class="space-y-1">
                  <label class="text-xs font-mono text-slate-400">Mensaje *</label>
                  <textarea 
                    rows="4" 
                    [(ngModel)]="messageBody"
                    placeholder="Hola Jose, nos gustaría coordinar una entrevista sobre..."
                    class="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none"></textarea>
                </div>

                <!-- Action Buttons -->
                <div class="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 w-full">
                  <button 
                    (click)="copyFormattedMessage()"
                    class="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-mono text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-1.5 cursor-pointer">
                    <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <span>Copiar texto redactado</span>
                  </button>

                  <button 
                    (click)="sendEmail()"
                    class="shimmer-btn w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-mono shadow-lg shadow-cyan-500/25 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 cursor-pointer">
                    <span>Enviar a Jose Ampuero</span>
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  `
})
export class ContactComponent {
  readonly state = inject(PortfolioStateService);
  readonly info = PERSONAL_INFO;

  senderName = '';
  senderEmail = '';
  subject = 'Contacto desde el Portafolio Web';
  messageBody = '';

  sendEmail(): void {
    if (!this.senderName.trim() || !this.messageBody.trim()) {
      this.state.showToast('Por favor completa al menos tu nombre y el mensaje.');
      return;
    }

    const emailSubject = encodeURIComponent(this.subject || 'Oportunidad Laboral / Contacto');
    const fullBody = `Hola Jose,\n\nMi nombre es: ${this.senderName}\nCorreo de contacto: ${this.senderEmail || 'No especificado'}\n\nMensaje:\n${this.messageBody}\n\n---\nEnviado desde el Portafolio Web`;
    
    // Copy to clipboard as backup
    this.state.copyToClipboard(fullBody, 'Mensaje preparado y copiado al portapapeles');

    // Trigger mail client
    const mailtoUri = `mailto:${this.info.email}?subject=${emailSubject}&body=${encodeURIComponent(fullBody)}`;
    window.location.href = mailtoUri;

    this.state.showToast('✓ Abriendo tu cliente de correo (y mensaje copiado al portapapeles).');
  }

  copyFormattedMessage(): void {
    if (!this.messageBody.trim()) {
      this.state.showToast('Escribe un mensaje para poder copiarlo');
      return;
    }
    const fullBody = `De: ${this.senderName || 'Contacto'}\nEmail: ${this.senderEmail || 'No especificado'}\nAsunto: ${this.subject}\n\n${this.messageBody}`;
    this.state.copyToClipboard(fullBody, 'Mensaje redactado copiado al portapapeles');
  }
}
