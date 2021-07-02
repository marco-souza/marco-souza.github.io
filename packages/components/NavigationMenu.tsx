import React, { ReactNode } from "react";
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
  ComponentWithAs,
  IconProps,
  Divider,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

import ToggleThemeButton from "./ToggleThemeButton";
import { GithubIcon, LinkedInIcon, StackOverflowIcon } from "@packages/icons";
import { social } from "@packages/config/resume.yml";

const Links = ["Dashboard", "Projects", "Team"];

type SocialElement = [string, ComponentWithAs<"svg", IconProps>];

const socialElements: SocialElement[] = [
  [social.linkedin, StackOverflowIcon],
  [social.stackoverflow, LinkedInIcon],
  [social.github, GithubIcon],
];

interface NavLinkProps {
  readonly children: ReactNode;
  readonly href?: string;
  readonly target?: string;
}

const NavLink = ({ children, target, href = "#" }: NavLinkProps) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    target={target}
    href={href}
  >
    {children}
  </Link>
);

export default function NavigationMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const socialIcons = socialElements.map(([url, Icon]) => (
    <NavLink key={url} href={url} target="_blank">
      <Icon />
    </NavLink>
  ));

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4} position="fixed" w="100%" top={0} shadow="base">
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
              <Text fontWeight="bold" fontFamily="Times New Roman" fontSize="3xl">
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
            <Box display={{ sm: "none", md: "inherit" }}>{socialIcons}</Box>

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

            <Flex justifyContent="center">{socialIcons}</Flex>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
