import { useRouter as mockedUseRouter } from 'next/router';
import React from 'react';

import { setupComponentForTest } from 'helpers/testUtils';

import Home, { getStaticProps } from './pages';
import AppLayout from './pages/_app';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

jest.mock('devicon-react-svg', () => {
  return function DummyComponent() {
    return <div data-testid="icon" />;
  };
});

describe(`Page tests`, () => {
  (mockedUseRouter as jest.Mock).mockReturnValue({
    pathname: '/',
  });

  const TestComponent = () => <p data-testid="test-component">test</p>;
  const setup = setupComponentForTest(
    <AppLayout Component={TestComponent} pageProps={{}} />,
  );

  it('should render _app', () => {
    const { wrapper } = setup();

    expect(wrapper).toBeTruthy();
  });

  it('should render without layout', () => {
    const { wrapper } = setup();

    expect(() => wrapper.getByTestId('layout')).toThrow();
  });

  it('should render with layout', () => {
    (mockedUseRouter as jest.Mock).mockReturnValueOnce({
      pathname: '/something/test',
    });
    const { wrapper } = setup();

    expect(wrapper.getByTestId('layout')).toBeTruthy();
  });
});

describe(`Home tests`, () => {
  const setup = setupComponentForTest(<Home />);

  it('should render Home', () => {
    const { wrapper } = setup();

    expect(wrapper).toBeTruthy();
    expect(wrapper.getByTestId('home')).toBeTruthy();
  });
});

describe(`StaticProps tests`, () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });
  afterEach(() => {
    (global.fetch as jest.Mock).mockClear();
  });

  it('should fetch data', async () => {
    const fakeUser = { name: 'Joni Baez' };
    (global.fetch as jest.Mock).mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(fakeUser),
      } as Response),
    );
    await expect(getStaticProps()).resolves.toStrictEqual({
      props: { profile: fakeUser },
    });
  });

  it('should throw error', async () => {
    await expect(getStaticProps()).rejects.toThrow();
  });
});
