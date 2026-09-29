import type { Transaction } from '../types';

export const transactions: Transaction[] = [
  {
    id: 'txn-1',
    title: 'Spend On Fun Mall Cinema',
    category: 'Movie',
    amount: 23.0,
    currency: '€',
    date: '02- Monday',
  },
  {
    id: 'txn-2',
    title: 'Spend On Starbucks',
    category: 'Coffee',
    amount: 13.0,
    currency: '€',
    date: '02- Monday',
  },
  {
    id: 'txn-3',
    title: 'Spend On Super Market',
    category: 'Shop',
    amount: 43.0,
    currency: '€',
    date: '01- Sunday',
  },
  {
    id: 'txn-4',
    title: 'Spend On Super Market',
    category: 'Shop',
    amount: 25.0,
    currency: '€',
    date: '01- Sunday',
  },
];
