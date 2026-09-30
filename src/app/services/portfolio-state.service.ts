import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioStateService {
  // Dark/Light theme state
  readonly isDarkMode = signal<boolean>(true);

  // Toast notifications
  readonly toastMessage = signal<string | null>(null);
  private toastTimeout: ReturnType<typeof setTimeout> | null = null;

  // CV Download modal state
  readonly isCvModalOpen = signal<boolean>(false);

  // Active filter for skills
  readonly activeSkillFilter = signal<'all' | 'frontend' | 'backend' | 'database' | 'testing' | 'tools'>('all');

  constructor() {
    this.initializeTheme();
  }

  // --- Theme Management ---
  private initializeTheme(): void {
    if (typeof window === 'undefined') return;

    const savedTheme = localStorage.getItem('jose-portfolio-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = savedTheme ? savedTheme === 'dark' : prefersDark;

    this.isDarkMode.set(isDark);
    this.applyThemeClass(isDark);
  }

  toggleTheme(): void {
    const newTheme = !this.isDarkMode();
    this.isDarkMode.set(newTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('jose-portfolio-theme', newTheme ? 'dark' : 'light');
      this.applyThemeClass(newTheme);
    }
    this.showToast(newTheme ? 'Tema Oscuro activado' : 'Tema Claro activado', 2000);
  }

  private applyThemeClass(isDark: boolean): void {
    if (typeof document === 'undefined') return;
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }

  // --- Toast Notifications ---
  showToast(message: string, duration = 3000): void {
    if (this.toastTimeout) {
      clearTimeout(this.toastTimeout);
    }
    this.toastMessage.set(message);
    this.toastTimeout = setTimeout(() => {
      this.toastMessage.set(null);
    }, duration);
  }

  // --- Clipboard Helper ---
  async copyToClipboard(text: string, customMessage = '¡Copiado al portapapeles!'): Promise<void> {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(text);
        this.showToast(`✓ ${customMessage}`);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        this.showToast(`✓ ${customMessage}`);
      }
    } catch {
      this.showToast('No se pudo copiar automáticamente. Puedes seleccionarlo manualmente.');
    }
  }

  // --- CV Modal Control ---
  openCvModal(): void {
    this.isCvModalOpen.set(true);
  }

  closeCvModal(): void {
    this.isCvModalOpen.set(false);
  }
}
