import { useParams } from "@solidjs/router";
import type { Component } from "solid-js";
import { getPostByName } from "virtual:posts";
import SolidMarkdown from "solid-markdown";
import { formatDistance } from "date-fns";
import NotFound from "~/components/NotFound";

export const Home: Component = () => {
  const params = useParams();
  const post = getPostByName(params.slug);

  const content =
    post == null ? (
      <>
        <NotFound>
          <SolidMarkdown
            components={{
              code: (props) => (
                <code
                  class="text-sm bg-gray-900 p-0.5 px-1 rounded-md"
                  {...props}
                />
              ),
            }}
          >
            {`The post \`/blog/${params.slug}\` does not exists`}
          </SolidMarkdown>
        </NotFound>
      </>
    ) : (
      <>
        <div class="py-8">
          <h1 class="text-3xl font-semibold">{post.title}</h1>
          <p class="font-extralight text-xs pt-4">
            {formatDistance(Date.parse(post.created_at), Date.now())}
          </p>
          <a
            class="font-extralight text-sm  hover:underline"
            target="_blank"
            href={post.author_url}
          >
            {post.author}
          </a>
        </div>
        <SolidMarkdown
          components={{
            p: (props) => <p class="my-4" {...props} />,
            img: (props) => (
              <img
                class="object-fill h-100 w-100% shadow-md shadow-dark-100"
                {...props}
              />
            ),
            a: (props) => (
              <a
                {...props}
                target="_blank"
                class="text-pink-300 hover:text-pink-400"
              />
            ),
          }}
        >
          {post.content}
        </SolidMarkdown>
      </>
    );

  return (
    <div class="grid grid-cols-1 text-left items-center text-gray-200">
      <a
        class="hover:underline text-gray-400 text-sm mt-8"
        href="/blog"
      >{`< back`}</a>
      {content}
    </div>
  );
};

export default Home;
