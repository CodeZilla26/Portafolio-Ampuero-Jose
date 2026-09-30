import { Injectable, computed, signal } from '@angular/core';
import { ProfileMode } from '../models/portfolio.model';
import { PERSONAL_INFO } from '../data/portfolio.data';

export interface SimulatedMovement {
  id: string;
  title: string;
  amount: number;
  type: 'income' | 'expense';
  category: string;
  date: string;
}

@Injectable({
  providedIn: 'root'
})
export class PortfolioStateService {
  // Mode switcher: 'fullstack' | 'frontend' | 'backend'
  readonly activeMode = signal<ProfileMode>('fullstack');

  // Dark/Light theme state
  readonly isDarkMode = signal<boolean>(true);

  // Toast notifications
  readonly toastMessage = signal<string | null>(null);
  private toastTimeout: ReturnType<typeof setTimeout> | null = null;

  // CV Download modal state
  readonly isCvModalOpen = signal<boolean>(false);

  // Active filter for skills
  readonly activeSkillFilter = signal<'all' | 'frontend' | 'backend' | 'database' | 'testing' | 'tools'>('all');

  // Project architecture tabs
  readonly activeProjectTab = signal<'simulator' | 'architecture' | 'metrics'>('simulator');

  // FinanZen Interactive Simulator in-memory reactive state
  readonly simulatedMovements = signal<SimulatedMovement[]>([
    {
      id: '1',
      title: 'Desarrollo Frontend React/Tailwind',
      amount: 2800,
      type: 'income',
      category: 'Salario',
      date: 'Hoy, 09:30 AM'
    },
    {
      id: '2',
      title: 'Hosting & Servidor Cloud VPS',
      amount: 145,
      type: 'expense',
      category: 'Servicios',
      date: 'Ayer, 04:15 PM'
    },
    {
      id: '3',
      title: 'Proyecto Freelance API Node.js',
      amount: 1650,
      type: 'income',
      category: 'Freelance',
      date: '28 Set, 11:00 AM'
    },
    {
      id: '4',
      title: 'Licencia Software & Dominios',
      amount: 89,
      type: 'expense',
      category: 'Herramientas',
      date: '27 Set, 02:40 PM'
    }
  ]);

  // Reactive computed signals for the simulator
  readonly totalIncome = computed(() =>
    this.simulatedMovements()
      .filter((m) => m.type === 'income')
      .reduce((acc, curr) => acc + curr.amount, 0)
  );

  readonly totalExpense = computed(() =>
    this.simulatedMovements()
      .filter((m) => m.type === 'expense')
      .reduce((acc, curr) => acc + curr.amount, 0)
  );

  readonly currentBalance = computed(() => this.totalIncome() - this.totalExpense());

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

  // --- Profile Mode Switching ---
  setProfileMode(mode: ProfileMode): void {
    this.activeMode.set(mode);
    const modeNames = {
      fullstack: 'Modo Full Stack activado (Visión completa)',
      frontend: 'Modo Frontend activado (Foco en UI/UX & Angular)',
      backend: 'Modo Backend activado (Foco en APIs & Bases de Datos)'
    };
    this.showToast(modeNames[mode], 2500);

    // Synchronize skill filter if helpful
    if (mode === 'frontend') {
      this.activeSkillFilter.set('frontend');
    } else if (mode === 'backend') {
      this.activeSkillFilter.set('backend');
    } else {
      this.activeSkillFilter.set('all');
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
        // Fallback
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

  // --- FinanZen Mini-Simulator Actions ---
  addSimulatedMovement(title: string, amount: number, type: 'income' | 'expense', category: string): void {
    if (!title.trim() || amount <= 0) {
      this.showToast('Por favor ingresa un concepto y monto válido mayor a 0');
      return;
    }

    const newMovement: SimulatedMovement = {
      id: Date.now().toString(),
      title: title.trim(),
      amount: Math.round(amount * 100) / 100,
      type,
      category,
      date: 'Recién agregado'
    };

    this.simulatedMovements.update((prev) => [newMovement, ...prev]);
    this.showToast(`✓ Movimiento registrado: S/ ${newMovement.amount.toFixed(2)} (${newMovement.type === 'income' ? 'Ingreso' : 'Gasto'})`);
  }

  removeSimulatedMovement(id: string): void {
    this.simulatedMovements.update((prev) => prev.filter((m) => m.id !== id));
    this.showToast('Movimiento eliminado del simulador');
  }

  resetSimulatedMovements(): void {
    this.simulatedMovements.set([
      {
        id: '1',
        title: 'Desarrollo Frontend React/Tailwind',
        amount: 2800,
        type: 'income',
        category: 'Salario',
        date: 'Hoy, 09:30 AM'
      },
      {
        id: '2',
        title: 'Hosting & Servidor Cloud VPS',
        amount: 145,
        type: 'expense',
        category: 'Servicios',
        date: 'Ayer, 04:15 PM'
      },
      {
        id: '3',
        title: 'Proyecto Freelance API Node.js',
        amount: 1650,
        type: 'income',
        category: 'Freelance',
        date: '28 Set, 11:00 AM'
      }
    ]);
    this.showToast('Simulador reiniciado con datos de demostración');
  }
}
