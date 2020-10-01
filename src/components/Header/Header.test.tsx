import { useRouter as mockedUseRouter } from 'next/router';
import React from 'react';

import { setupComponentForTest } from 'helpers/testUtils';

import Header from './Header';

const setup = setupComponentForTest(<Header />);

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

jest.mock('devicon-react-svg', () => {
  return function DummyComponent() {
    return <div data-testid="icon" />;
  };
});

describe(`Header tests`, () => {
  it('should render logo', () => {
    const expectedValue = 'test';
    (mockedUseRouter as jest.Mock).mockReturnValue({
      pathname: `/${expectedValue}`,
    });
    const { wrapper } = setup();

    expect(wrapper.getByTestId('logo').innerHTML.toLocaleLowerCase()).toBe(
      expectedValue,
    );
  });
});
