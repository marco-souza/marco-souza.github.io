import Head from 'next/head';
import Link from 'next/link';
import { Heading, Text } from '@chakra-ui/react';
import { getAllPosts, Post } from '@packages/features/posts';

export async function getStaticProps() {
  const files = getAllPosts();
  return {
    props: { files },
  };
}

interface BlogPageProps {
  files: Post[];
}

export default function BlogPage(props: BlogPageProps) {
  return (
    <>
      <Head>
        <title>Blog - Marco Antônio</title>
      </Head>

      <main>
        <Heading marginBottom={2}>Blog Posts</Heading>

        <Text>Coming soon...</Text>
        {props.files.map((file) => (
          <Link href={file.path} key={file.path}>
            {file.slug}
          </Link>
        ))}
      </main>
    </>
  );
}
