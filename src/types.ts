export interface Transaction {
  id: string;
  title: string;
  category: string;
  amount: number;
  currency: string;
  date: string;
}

export interface TimeEntry {
  id: string;
  title: string;
  project: string;
  duration: string;
  date: string;
}

export interface Kpi {
  label: string;
  value: string;
  trend: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface DashboardData {
  greeting: string;
  kpis: Kpi[];
  stats: Stat[];
}
