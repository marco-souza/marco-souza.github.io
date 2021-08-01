import { Button, Flex, Grid, Heading, Image, Link, Text } from "@chakra-ui/react";
import { useGithubProfile } from "@packages/features/github-profile";
import { home } from "@packages/config/resume.yml";
import Markdown from "./Markdown";

function Home() {
  const github = useGithubProfile();
  return (
    <Grid rowGap="2rem" alignItems="center" w="60%" m="5rem auto" flexDir="column" textAlign="center">
      <Image src={github.avatar} alt="Me" w="10rem" m="0 auto" rounded="full" />
      <Heading>{github.name}</Heading>
      <Text as="h2">
        <Markdown>{home.description}</Markdown>
      </Text>
      <Grid gap="1rem" m="0 auto" gridTemplateColumns="repeat(2, auto)" p="0 5rem">
        <Button
          as={Link}
          href={home.email_link}
          variant="outline"
          color="pink.500"
          fontSize="0.8rem"
        >
          CONTACT ME
        </Button>
        <Button as={Link} href="/resume" variant="outline" fontSize="0.8rem">
          RESUME
        </Button>
      </Grid>
    </Grid>
  );
}

export default Home;
