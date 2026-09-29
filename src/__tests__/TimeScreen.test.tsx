import React from 'react';
import { render } from '@testing-library/react-native';

import TimeScreen from '../screens/TimeScreen';

jest.mock(
  'react-native-safe-area-context',
  () => require('react-native-safe-area-context/jest/mock').default,
);

describe('TimeScreen', () => {
  it('renders at least three time entries', async () => {
    const screen = await render(<TimeScreen />);

    expect(await screen.findByText('Dentist - Clara Odding')).toBeTruthy();
    expect(await screen.findByText('Cardiologist - Steven Pauliner')).toBeTruthy();
    expect(await screen.findByText('Dermatologist - Noemi Shinte')).toBeTruthy();

    expect(screen.getByTestId('time-entries-list')).toBeTruthy();
  });

  it('shows the primary action buttons', async () => {
    const screen = await render(<TimeScreen />);

    expect(screen.getByTestId('time-add-appointment')).toBeTruthy();
    expect(screen.getByTestId('time-overview')).toBeTruthy();
    expect(await screen.findByText('Add a new appointment')).toBeTruthy();
    expect(await screen.findByText('Overview')).toBeTruthy();
  });
});
