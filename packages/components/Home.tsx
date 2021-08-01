import {
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Link,
  Text,
} from '@chakra-ui/react';
import { useGithubProfile } from '@packages/features/github-profile';
import { home } from '@packages/config/resume.yml';
import Markdown from './Markdown';

function Home() {
  const github = useGithubProfile();
  return (
    <Grid
      rowGap="2rem"
      alignItems="center"
      m={{ base: '3rem auto 1rem', sm: '5rem auto 1rem' }}
      flexDir="column"
      textAlign="center"
    >
      <Image src={github.avatar} alt="Me" w="10rem" m="0 auto" rounded="full" />
      <Heading>{github.name}</Heading>
      <Text
        as="h2"
        p={{ base: '0', sm: '0 3rem', md: '0 8rem', lg: '0 10rem' }}
      >
        <Markdown>{home.description}</Markdown>
      </Text>
      <Grid
        gap="1rem"
        m="0 auto"
        w={{ base: 'full', sm: '50%' }}
        gridTemplateColumns={{ base: 'auto', sm: 'auto auto' }}
      >
        <Button
          as={Link}
          href={home.email_link}
          variant="outline"
          color="pink.500"
          borderColor="pink.500"
          fontSize="0.8rem"
        >
          CONTACT ME
        </Button>
        <Button
          as={Link}
          href="/resume"
          variant="outline"
          fontSize="0.8rem"
          _hover={{ borderColor: 'gray.500' }}
        >
          RESUME
        </Button>
      </Grid>
    </Grid>
  );
}

export default Home;
