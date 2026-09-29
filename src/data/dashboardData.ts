import { DashboardData } from '../types';

export const dashboardData: DashboardData = {
  greeting: 'Welcome',
  kpis: [
    { label: 'Since 21. Dec', value: '20', trend: 'Days' },
    { label: 'Top Run', value: '20', trend: 'Days' },
    { label: 'Restarts', value: '4', trend: 'Total' },
  ],
  stats: [
    { label: 'Top Run', value: '20 Days' },
    { label: 'Restarts', value: '4' },
  ],
};
