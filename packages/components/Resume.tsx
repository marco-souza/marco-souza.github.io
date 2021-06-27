import { Box, Grid, GridItem, Heading, Text, Image } from "@chakra-ui/react";
import { useGithubProfile } from "@packages/features/github-profile";
import ReactMarkdown from "react-markdown";

// TODO: move text to configs
const coverLetterParagraphs: string[] = [
  "Hello, my name is **Marco Antônio**, and I’m building software for the web **more than 10 years**.",
  "Last 6 years I've been building frontend heavy apps, extensively working with **Node.JS**, **React**, and **TypeScript**. I've also experience working as **Cloud Architect** and **DevOps Engineer**, creating high availability services in great companies, *including Amazon*.",
  "*Thanks* for visiting my resume, and I hope we have a change to connect! 😁",
];

function Resume() {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={4}>
      <GridItem colSpan={{ md: 1, sm: 3 }} shadow="2xl">
        <Sidebar />
      </GridItem>

      <GridItem colSpan={{ md: 2, sm: 3 }}>
        <CoverLetter />
      </GridItem>
    </Grid>
  );
}

function Sidebar() {
  const { name, avatar, description } = useGithubProfile();
  return (
    <>
      <Box height="18rem">
        <Box backgroundColor="blue.300" height="60%" p={10}></Box>
        <Image
          src={avatar}
          alt="Profile foto"
          rounded="full"
          padding={1}
          width={200}
          margin="-100px auto"
        />
      </Box>

      <Box textAlign="center" m={1}>
        <Heading as="h2" size="md">
          {name}
        </Heading>
        <Text size="sm" color="gray.500">
          {/* // TODO: move text to configs */}
          Sr. Software Developer Engineer
        </Text>

        <Text margin="1rem 0.5rem">
          <ReactMarkdown>{description}</ReactMarkdown>
        </Text>
      </Box>

      {/* // TODO: add "download resume" button */}
      <Box backgroundColor="tomato" p="1" />
    </>
  );
}

function CoverLetter() {
  return (
    <>
      <Box shadow="dark-lg" p={2} fontSize="1rem">
        <Heading as="h3" size="md" margin="1rem 0">
          Cover Letter
        </Heading>

        <Box>
          {coverLetterParagraphs.map((text) => (
            <Text key={text} margin="0.5rem 0" fontSize="0.9rem">
              <ReactMarkdown>{text}</ReactMarkdown>
            </Text>
          ))}
        </Box>
      </Box>

      <Box backgroundColor="purple" p="1" />
    </>
  );
}

export default Resume;
