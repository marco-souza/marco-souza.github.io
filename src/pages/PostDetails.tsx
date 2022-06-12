import { useParams } from "solid-app-router";
import type { Component } from "solid-js";
import { getPostByName } from "virtual:posts";
import SolidMarkdown from "solid-markdown";
import { formatDistance } from "date-fns";

export const Home: Component = () => {
  const params = useParams();
  const filename = params.filename;
  const post = getPostByName(filename);

  const content =
    post == null ? (
      <>
        <h1 class="text-center text-2xl py8">Oops, nothing here</h1>
        <p class="text-center text-md fw200">
          The post "{filename}" does not exists
        </p>
      </>
    ) : (
      <>
        <div class="py8">
          <h1 class="text-3xl fw600">{post.title}</h1>
          <p class="fw200 text-xs pt-4">
            {formatDistance(Date.parse(post.created_at), Date.now())}
          </p>
          <a
            class="fw200 text-sm  hover:underline"
            target="_blank"
            href={post.author_url}
          >
            {post.author}
          </a>
        </div>
        <SolidMarkdown
          components={{
            p: (props) => <p class="my4" {...props} />,
            img: (props) => (
              <img
                class="object-fill w-100% shadow-md shadow-dark-100"
                {...props}
              />
            ),
            a: (props) => (
              <a
                target="_blank"
                class="text-pink-300 hover:text-pink-400"
                {...props}
              />
            ),
          }}
        >
          {post.content}
        </SolidMarkdown>
      </>
    );

  return (
    <div class="grid grid-cols-1 text-left items-center text-center text-gray-200">
      <a
        class="hover:underline text-gray-400 text-sm mt8"
        href="/blog"
      >{`< back`}</a>
      {content}
    </div>
  );
};

export default Home;
