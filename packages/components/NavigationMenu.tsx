import NextLink from 'next/link';
import { ReactNode } from 'react';
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
  Container,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

import ToggleThemeButton from './ToggleThemeButton';
import { GithubIcon, LinkedInIcon, StackOverflowIcon } from '@packages/icons';
import { social } from '@packages/config/resume.yml';

const navLinks = [
  { label: 'Resume', src: '/resume' },
  { label: 'Blog', src: '/blog' },
];

type SocialElement = [string, ComponentWithAs<'svg', IconProps>];

const socialElements: SocialElement[] = [
  [social.stackoverflow, StackOverflowIcon],
  [social.linkedin, LinkedInIcon],
  [social.github, GithubIcon],
];

interface NavLinkProps {
  readonly children: ReactNode;
  readonly href?: string;
  readonly target?: string;
}

const NavLink = ({ children, target, href = '#' }: NavLinkProps) => (
  <NextLink href={href}>
    <Link
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      target={target}
    >
      {children}
    </Link>
  </NextLink>
);

export default function NavigationMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const socialIcons = socialElements.map(([url, Icon]) => (
    <NavLink key={url} href={url} target="_blank">
      <Icon />
    </NavLink>
  ));

  const menuItems = navLinks.map((link) => (
    <NavLink key={link.label} href={link.src}>
      {link.label}
    </NavLink>
  ));

  return (
    <>
      <Box
        bg={useColorModeValue('whitesmoke', 'gray.900')}
        px={4}
        position="fixed"
        w="100%"
        top={0}
        shadow="base"
        zIndex={2}
      >
        <Container maxW="container.lg">
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <IconButton
              size={'md'}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={'Open Menu'}
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
            />

            <HStack spacing={8} alignItems={'center'}>
              <Link href="/">
                <Text
                  fontWeight="bold"
                  fontFamily="Times New Roman"
                  fontSize="3xl"
                >
                  M.
                </Text>
              </Link>
              <HStack
                as={'nav'}
                spacing={4}
                display={{ base: 'none', md: 'flex' }}
              >
                {menuItems}
              </HStack>
              <Divider />
            </HStack>

            <Flex alignItems={'center'}>
              <Box display={{ base: 'none', md: 'inherit' }}>{socialIcons}</Box>

              <ToggleThemeButton />
            </Flex>
          </Flex>

          {isOpen ? (
            <Box pb={4} display={{ md: 'none' }}>
              <Stack as={'nav'} spacing={4}>
                {menuItems}
              </Stack>

              <Flex justifyContent="center">{socialIcons}</Flex>
            </Box>
          ) : null}
        </Container>
      </Box>
    </>
  );
}
