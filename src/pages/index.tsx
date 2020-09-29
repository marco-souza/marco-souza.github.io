import React from 'react';

import { GithubProfileResponse } from 'api/types';
import Home from 'components/Home';

export interface HomeProps {
  profile: GithubProfileResponse;
}

export default function HomePage(): JSX.Element {
  // return <code>{JSON.stringify(profile)}</code>;
  return <Home />;
}

interface StaticProps {
  props: HomeProps;
}

export async function getStaticProps(): Promise<StaticProps> {
  const response = await fetch(`https://api.github.com/users/marco-souza`);
  const profile = await response.json();
  return { props: { profile } };
}
