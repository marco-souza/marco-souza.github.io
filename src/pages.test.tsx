import { useRouter as mockedUseRouter } from 'next/router';
import React from 'react';

import { GithubProfileResponse } from 'api/types';
import { setupComponentForTest } from 'helpers/testUtils';

import Home from './pages';
import AppLayout from './pages/_app';
import Projects, {
  getStaticProps as getStaticProjects,
} from './pages/projects';
import Recipes, { getStaticProps as getStaticRecipes } from './pages/recipes';
import Resume, { getStaticProps as getStaticResume } from './pages/resume';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

jest.mock('devicon-react-svg', () => {
  return function DummyComponent() {
    return <div data-testid="icon" />;
  };
});
const fakeUser: GithubProfileResponse = {
  name: 'Joni Baez',
  avatar_url: '',
  id: 'a',
  login: '',
};

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

describe(`Projects tests`, () => {
  const setup = setupComponentForTest(<Projects profile={fakeUser} />);

  it('should render Projects', () => {
    const { wrapper } = setup();

    expect(wrapper).toBeTruthy();
  });
});

describe(`Recipies tests`, () => {
  const setup = setupComponentForTest(<Recipes profile={fakeUser} />);

  it('should render Recipies', () => {
    const { wrapper } = setup();

    expect(wrapper).toBeTruthy();
  });
});

describe(`Resume tests`, () => {
  const setup = setupComponentForTest(<Resume profile={fakeUser} />);

  it('should render Resume', () => {
    const { wrapper } = setup();

    expect(wrapper).toBeTruthy();
  });
});

describe(`StaticProps tests`, () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });
  afterEach(() => {
    (global.fetch as jest.Mock).mockClear();
  });

  it('should make static fetches', async () => {
    (global.fetch as jest.Mock).mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(fakeUser),
      } as Response),
    );
    await expect(getStaticProjects()).resolves.toStrictEqual({
      props: { profile: fakeUser },
    });
    await expect(getStaticRecipes()).resolves.toStrictEqual({
      props: { profile: fakeUser },
    });
    await expect(getStaticResume()).resolves.toStrictEqual({
      props: { profile: fakeUser },
    });
  });

  it('should throw error', async () => {
    await expect(getStaticProjects()).rejects.toThrow();
    await expect(getStaticRecipes()).rejects.toThrow();
    await expect(getStaticResume()).rejects.toThrow();
  });
});
