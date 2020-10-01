import React from 'react';

import { GithubProfileResponse } from 'api/types';

export interface HomeProps {
  profile: GithubProfileResponse;
}

export default function HomePage({ profile }: HomeProps): JSX.Element {
  return <code>{JSON.stringify(profile, null, 4)}</code>;
}

interface StaticProps {
  props: HomeProps;
}

export async function getStaticProps(): Promise<StaticProps> {
  const response = await fetch(
    `https://api.github.com/users/marco-souza/gists`,
  );
  const profile = await response.json();
  return { props: { profile } };
}
