import React, { ReactNode } from "react";
import Image from "next/image";
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Text,
  useDisclosure,
  useColorModeValue,
  Stack,
  createIcon,
  ComponentWithAs,
  IconProps,
  Divider,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";

import ToggleThemeButton from "./ToggleThemeButton";
import { GithubIcon, LinkedInIcon, StackOverflowIcon } from "@packages/icons";

const Links = ["Dashboard", "Projects", "Team"];

type SocialElement = [string, ComponentWithAs<"svg", IconProps>];

const socialElements: SocialElement[] = [
  ["https://stackoverflow.com/users/7988674/marco-antônio/", StackOverflowIcon],
  ["https://www.linkedin.com/in/masouzajunior/", LinkedInIcon],
  ["https://github.com/marco-souza/", GithubIcon],
];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function NavigationMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />

          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Text fontFamily="Times New Roman" fontSize="3xl">
                M.
              </Text>
            </Box>
            <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
            <Divider />
          </HStack>

          <Flex alignItems={"center"}>
            <Box display={{ sm: "none", md: "inherit" }}>
              {socialElements.map(([url, Icon]) => (
                <Link key={url} target="_blank" href={url} m="1rem">
                  <Icon />
                </Link>
              ))}
            </Box>

            <ToggleThemeButton />
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>

            <Flex justifyContent="center">
              {socialElements.map(([url, Icon]) => (
                <Link key={url} target="_blank" href={url} m="1rem">
                  <Icon />
                </Link>
              ))}
            </Flex>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
