import React from 'react';

import { setupComponentForTest } from 'helpers/testUtils';

import Social from './Social';

const setup = setupComponentForTest(<Social />);

jest.mock('devicon-react-svg', () => {
  return function DummyComponent() {
    return <div data-testid="icon" />;
  };
});

describe(`Social tests`, () => {
  it('should render icons', () => {
    const { wrapper } = setup();

    expect(wrapper.getAllByTestId('icon')).toHaveLength(3);
  });
});
