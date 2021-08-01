import Head from 'next/head';
import {
  GithubProvider,
  RawGithubProfile,
} from '@packages/features/github-profile';
import Resume from '@packages/components/Resume';

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
        <Resume />
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
