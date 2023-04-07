import { useParams } from "@solidjs/router";
import type { Component } from "solid-js";
import { getPostByName } from "virtual:posts";
import { formatDistance } from "date-fns";
import NotFound from "~/components/NotFound";
import Markdown from "~/components/Markdown";
import { A } from "solid-start";

export const Home: Component = () => {
  const params = useParams();
  const post = getPostByName(params.slug);

  const content =
    post == null ? (
      <>
        <NotFound>
          <Markdown
            text={`The post \`/blog/${params.slug}\` does not exists`}
          />
        </NotFound>
      </>
    ) : (
      <>
        <div class="py-8">
          <h1 class="text-3xl font-semibold">{post.title}</h1>
          <p class="font-extralight text-xs pt-4">
            {formatDistance(Date.parse(post.created_at), Date.now())}
          </p>
          <A
            class="font-extralight text-sm  hover:underline"
            target="_blank"
            href={post.author_url}
          >
            {post.author}
          </A>
        </div>
        <Markdown text={post.content} />
      </>
    );

  return (
    <div class="grid grid-cols-1 text-left items-center text-gray-200">
      <A
        class="hover:underline text-gray-400 text-sm mt-8"
        href="/blog"
      >{`< back`}</A>
      {content}
    </div>
  );
};

export default Home;
