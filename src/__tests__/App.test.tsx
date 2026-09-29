import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import App from '../../App';

jest.mock(
  'react-native-safe-area-context',
  () => require('react-native-safe-area-context/jest/mock').default,
);

describe('App', () => {
  it('renders the dashboard screen with the demo button', async () => {
    const screen = await render(<App />);

    expect(screen.getByTestId('dashboard-demo-button')).toBeTruthy();
    expect(await screen.findByText('Tap to toggle')).toBeTruthy();
  });

  it('toggles the demo button text when pressed', async () => {
    const screen = await render(<App />);

    const button = screen.getByTestId('dashboard-demo-button');
    expect(await screen.findByText('Tap to toggle')).toBeTruthy();

    await fireEvent.press(button);

    expect(await screen.findByText('Toggled on')).toBeTruthy();
  });
});
