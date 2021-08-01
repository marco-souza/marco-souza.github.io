import Head from "next/head";
import { Container, Box, useColorModeValue } from "@chakra-ui/react";
import NavigationMenu from "@packages/components/NavigationMenu";
import Footer from "@packages/components/Footer";
import { ReactNode } from "react-markdown";

interface HomeProps {
  readonly children: ReactNode;
}

export default function Layout({ children }: HomeProps) {
  const containerBgCollor = useColorModeValue("gray.100", "gray.700");

  return (
    <Box backgroundColor={containerBgCollor} minH="calc(100vh - 64px)">
      <Head>
        <meta
          name="description"
          content="Code craftsman for a more scalable world"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavigationMenu />

      <Container maxW="container.lg" p={5} mt="60px" minH="85vh">
        {children}
      </Container>

      <Footer />
    </Box>
  );
}
