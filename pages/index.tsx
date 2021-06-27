import Head from "next/head";
import { Container, Heading } from "@chakra-ui/react";
import NavigationMenu from "@packages/components/NavigationMenu";
import Resume from "@packages/components/Resume";
import { GithubProvider, RawGithubProfile } from "@packages/features/github-profile";

interface HomeProps {
  readonly github: RawGithubProfile;
}

export default function Home({ github }: HomeProps) {
  return (
    <GithubProvider githubData={github}>
      <Head>
        {/* TODO: add below texts to configs */}
        <title>Resume - Marco Antônio</title>
        <meta name="description" content="Code craftsman for a more scalable world" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavigationMenu />

      <Container maxW="container.lg" marginTop={2}>
        <main>
          <Heading marginBottom={2}> Resume </Heading>

          <Resume />
        </main>

        <footer>Footer</footer>
      </Container>
    </GithubProvider>
  );
}

interface StaticProps {
  readonly props: HomeProps;
}

export async function getStaticProps(): Promise<StaticProps> {
  const res = await fetch('https://api.github.com/users/marco-souza')
  const github = await res.json()
  return {
    props: { github }, // will be passed to the page component as props
  }
}
