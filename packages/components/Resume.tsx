import {
  Box,
  Grid,
  GridItem,
  Heading,
  Flex,
  Text,
  Image,
  SkeletonCircle,
  SkeletonText,
  BoxProps,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { useGithubProfile } from "@packages/features/github-profile";
import resume from "@packages/config/resume.yml";
import ReactMarkdown, { ReactNode } from "react-markdown";
import { LinkedInIcon } from "@packages/icons";

function Resume() {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={4}>
      <GridItem colSpan={{ md: 1, sm: 3 }}>
        <Sidebar />
      </GridItem>

      <GridItem colSpan={{ md: 2, sm: 3 }}>
        <Grid gap="1rem">
          <CoverLetter />
          <Experiences />
        </Grid>
      </GridItem>
    </Grid>
  );
}

function Sidebar() {
  const { name, avatar, description } = useGithubProfile();
  return (
    <Box shadow="2xl">
      <Box height="18rem">
        <Box backgroundColor="blue.300" height="60%" p={10}></Box>

        <Flex margin="-100px 0">
          <SkeletonCircle
            width="200"
            height="200"
            isLoaded={avatar !== ""}
            rounded="full"
            margin="0 auto"
          >
            <Image src={avatar} alt="Profile foto" padding={1} width={200} rounded="full" />
          </SkeletonCircle>
        </Flex>
      </Box>

      <Box textAlign="center" m={1}>
        <Heading as="h2" size="md">
          <SkeletonText isLoaded={name !== ""} noOfLines={1} margin={4}>
            {name}
          </SkeletonText>
        </Heading>
        <Text size="sm" color="gray.500">
          {resume.title}
        </Text>

        <Box margin="1rem 0.5rem">
          <SkeletonText isLoaded={description !== ""} noOfLines={3} margin={4}>
            {description}
          </SkeletonText>
        </Box>
      </Box>

      {/* // TODO: add "download resume" button */}
      <Box backgroundColor="tomato" p="1" />
    </Box>
  );
}

function CoverLetter() {
  return (
    <CardLayout backgroundColor="purple" title="Cover Letter">
      {resume.cover_letter.split("\n").map((text: string) => (
        <Box key={text} margin="0.5rem 0" fontSize="0.9rem">
          <ReactMarkdown>{text}</ReactMarkdown>
        </Box>
      ))}
    </CardLayout>
  );
}

function Experiences() {
  const employDateColor = useColorModeValue("gray.500", "gray.200");
  return (
    <CardLayout backgroundColor="green.300" title="Relevant Experiences">
      {resume.relevant_experiences.map((experience) => (
        <Box key={experience.company} m="2rem 0 1rem" fontSize="0.9rem">
          <Heading as="h4" fontSize="1rem">
            {experience.company}
          </Heading>
          <Text color={employDateColor} fontSize="0.8rem" mb="0.5rem">
            {experience.dates_employed}
            {/* TODO: calculate time worked using date-fns */}
          </Text>
          <Text>{experience.description}</Text>
          <Box>
            {experience.tech_stack.map((tech) => (
              <Text
                key={tech}
                as="span"
                color="blue.300"
                marginRight="0.5rem"
                _hover={{
                  color: "teal.500",
                  cursor: "pointer",
                }}
              >
                {`#${tech} `}
              </Text>
            ))}
          </Box>
        </Box>
      ))}

      <Box m="2rem 0 1rem" textAlign="center" fontSize="0.8rem">
        <Link border="1px solid" p="5px 10px" borderRadius="md" color="blue.300" href={resume.social.linkedin} target="_blank">
          See more experiences <LinkedInIcon />
        </Link>
      </Box>
    </CardLayout>
  );
}

interface CardLayoutProps extends Pick<BoxProps, "backgroundColor"> {
  readonly title: string;
  readonly children: ReactNode;
}

function CardLayout({ children, backgroundColor, title }: CardLayoutProps) {
  return (
    <Box shadow="2xl">
      <Box p={2} fontSize="1rem">
        <Heading as="h3" size="md" margin="1rem 0">
          {title}
        </Heading>

        <Box>{children}</Box>
      </Box>
      <Box backgroundColor={backgroundColor} p="1" />
    </Box>
  );
}

export default Resume;
