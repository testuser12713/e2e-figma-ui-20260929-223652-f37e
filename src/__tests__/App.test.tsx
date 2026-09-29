import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import App from '../../App';

jest.mock(
  'react-native-safe-area-context',
  () => require('react-native-safe-area-context/jest/mock').default,
);

describe('App', () => {
  it('renders the dashboard screen', async () => {
    const screen = await render(<App />);

    expect(screen.getByTestId('dashboard-menu-button')).toBeTruthy();
    expect(await screen.findByText('Welcome')).toBeTruthy();
  });

  it('opens the dashboard menu from the header button', async () => {
    const screen = await render(<App />);

    await fireEvent.press(screen.getByTestId('dashboard-menu-button'));

    expect(await screen.findByText('Sophie Garnier')).toBeTruthy();
    expect(await screen.findByText('Account Settings')).toBeTruthy();
  });
});
