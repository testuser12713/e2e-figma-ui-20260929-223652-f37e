import React from 'react';
import { render } from '@testing-library/react-native';

import { transactions } from '../data/transactions';
import MoneyScreen from '../screens/MoneyScreen';

jest.mock(
  'react-native-safe-area-context',
  () => require('react-native-safe-area-context/jest/mock').default,
);

describe('MoneyScreen', () => {
  it('renders a floating add button', async () => {
    const screen = await render(<MoneyScreen />);

    const fab = screen.getByTestId('add-transaction-button');
    expect(fab).toBeTruthy();
    expect(fab.props.accessibilityRole).toBe('button');
  });

  it('renders at least three sample transactions', async () => {
    const screen = await render(<MoneyScreen />);

    expect(transactions.length).toBeGreaterThanOrEqual(3);

    const rows = screen.getAllByTestId(/^transaction-/);
    expect(rows.length).toBeGreaterThanOrEqual(3);
  });

  it('formats the transaction amount with its currency', async () => {
    const screen = await render(<MoneyScreen />);

    expect(await screen.findByText('23.00€')).toBeTruthy();
    expect(await screen.findByText('Spend On Fun Mall Cinema')).toBeTruthy();
  });
});
