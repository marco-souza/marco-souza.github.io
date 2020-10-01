import { useRouter as mockedUseRouter } from 'next/router';
import React from 'react';

import { setupComponentForTest } from 'helpers/testUtils';

import Content from './Content';

const setup = setupComponentForTest(
  <Content>
    <div data-testid="children" />
  </Content>,
);

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe(`Content tests`, () => {
  it('should render content with children', () => {
    (mockedUseRouter as jest.Mock).mockReturnValue({ pathname: '/a' });
    const { wrapper } = setup();

    expect(wrapper.getByTestId('content')).toBeTruthy();
    expect(wrapper.getByTestId('children')).toBeTruthy();
  });
});
