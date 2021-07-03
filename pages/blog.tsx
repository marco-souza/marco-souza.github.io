import Head from "next/head";
import { Heading, Text } from "@chakra-ui/react";

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>Blog - Marco Antônio</title>
      </Head>

      <main>
        <Heading marginBottom={2}> Blog </Heading>

        <Text>Coming soon...</Text>
      </main>
    </>
  );
}
