import Head from 'next/head';
import { GetStaticPropsContext } from 'next';
import { Heading, Box } from '@chakra-ui/react';
import {
  getAllPosts,
  getPostBySlug,
  PostDetails,
} from '@packages/features/posts';

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const slug = params?.slug as string;
  const postDetails = await getPostBySlug(slug);

  return {
    props: { postDetails },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts();
  return {
    paths: posts.map((post) => ({
      params: { slug: post.slug },
    })),
    fallback: false,
  };
}

interface PostPage {
  postDetails: PostDetails;
}

export default function PostPage({ postDetails }: PostPage) {
  return (
    <>
      <Head>
        <title>Blog - Marco Antônio</title>
      </Head>

      <main>
        <Box py={5}>
          <Heading mb={2}> {postDetails.meta.title} </Heading>

          <Box dangerouslySetInnerHTML={{ __html: postDetails.content }} />
        </Box>
      </main>
    </>
  );
}
