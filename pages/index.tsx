import Head from "next/head";
import { Heading } from "@chakra-ui/react";
import Resume from "@packages/components/Resume";
import {
  GithubProvider,
  RawGithubProfile,
} from "@packages/features/github-profile";

interface HomeProps {
  readonly github: RawGithubProfile;
}

export default function Home({ github }: HomeProps) {
  return (
    <GithubProvider githubData={github}>
      <Head>
        <title>Resume - Marco Antônio</title>
      </Head>

      <main>
        <Heading marginBottom={2}> Resume </Heading>

        <Resume />
      </main>
    </GithubProvider>
  );
}

interface StaticProps {
  readonly props: HomeProps;
}

export async function getStaticProps(): Promise<StaticProps> {
  const res = await fetch("https://api.github.com/users/marco-souza");
  const github = await res.json();
  return {
    props: { github }, // will be passed to the page component as props
  };
}
