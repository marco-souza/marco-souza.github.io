import Head from 'next/head';
import Home from '@packages/components/Home';
import {
  GithubProvider,
  RawGithubProfile,
} from '@packages/features/github-profile';

interface HomeProps {
  readonly github: RawGithubProfile;
}

export default function HomePage({ github }: HomeProps) {
  return (
    <GithubProvider githubData={github}>
      <Head>
        <title>Marco Antônio</title>
      </Head>

      <main>
        <Home />
      </main>
    </GithubProvider>
  );
}

interface StaticProps {
  readonly props: HomeProps;
}

export async function getStaticProps(): Promise<StaticProps> {
  const res = await fetch('https://api.github.com/users/marco-souza');
  const github = await res.json();
  return {
    props: { github }, // will be passed to the page component as props
  };
}
