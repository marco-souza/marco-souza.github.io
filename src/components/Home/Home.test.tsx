import React from 'react';

import { setupComponentForTest } from 'helpers/testUtils';

import Home from './Home';

const setup = setupComponentForTest(<Home />);

jest.mock('components/Social', () => {
  return function Dummy() {
    return <div data-testid="social" />;
  };
});

describe(`Home tests`, () => {
  it('should render title and social', () => {
    const { wrapper } = setup();

    expect(wrapper.getByTestId('header')).toBeTruthy();
    expect(wrapper.getByTestId('social')).toBeTruthy();
  });
});
