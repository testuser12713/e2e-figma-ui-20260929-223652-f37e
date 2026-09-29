import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import DashboardScreen from '../screens/DashboardScreen';

jest.mock(
  'react-native-safe-area-context',
  () => require('react-native-safe-area-context/jest/mock').default,
);

describe('DashboardScreen', () => {
  it('renders the greeting, KPIs and statistics from the static data', async () => {
    const screen = await render(<DashboardScreen />);

    expect(await screen.findByText('Welcome')).toBeTruthy();
    expect(await screen.findByText('Since 21. Dec')).toBeTruthy();
    expect((await screen.findAllByText('Top Run')).length).toBeGreaterThan(0);
    expect((await screen.findAllByText('Restarts')).length).toBeGreaterThan(0);
    expect(await screen.findByText('20 Days')).toBeTruthy();
  });

  it('opens the menu overlay when the menu button is pressed', async () => {
    const screen = await render(<DashboardScreen />);

    expect(screen.queryByText('Sophie Garnier')).toBeNull();

    await fireEvent.press(screen.getByTestId('dashboard-menu-button'));

    expect(await screen.findByText('Sophie Garnier')).toBeTruthy();
    expect(await screen.findByText('Luxembourg')).toBeTruthy();
    expect(await screen.findByText('Statistics')).toBeTruthy();
    expect(await screen.findByText('Account Settings')).toBeTruthy();
    expect(await screen.findByText('Help')).toBeTruthy();
    expect(await screen.findByText('Logout')).toBeTruthy();
  });

  it('closes the menu overlay when the close button is pressed', async () => {
    const screen = await render(<DashboardScreen />);

    await fireEvent.press(screen.getByTestId('dashboard-menu-button'));
    expect(await screen.findByText('Sophie Garnier')).toBeTruthy();

    await fireEvent.press(screen.getByTestId('dashboard-menu-close'));

    expect(screen.queryByText('Sophie Garnier')).toBeNull();
  });
});
