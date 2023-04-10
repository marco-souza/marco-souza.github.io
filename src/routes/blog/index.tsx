import type { Component } from "solid-js";
import { posts } from "virtual:posts";
import { formatDistance } from "date-fns";
import { A } from "solid-start";

export const Blog: Component = () => {
  return (
    <div class="grid grid-cols-1 items-center text-center text-gray-200">
      <h1 class="text-3xl font-semibold text-left py-8">Blog</h1>
      {posts
        .sort((p1, p2) => Date.parse(p2.created_at) - Date.parse(p1.created_at))
        .map((post) => (
          <A href={post.url}>
            <div class="grid gap-4 sm:grid-cols-[14rem_auto] text-left border-dashed border-y-1 border-gray-200 py-8 hover:underline">
              <p class="text-sm hidden sm:block font-light">
                {formatDistance(Date.parse(post.created_at), Date.now())}
              </p>
              <div>
                <h2 class="font-semibold">{post.title}</h2>
                <h3 class="font-light text-sm py-2">{post.summary}</h3>
              </div>
            </div>
          </A>
        ))}
    </div>
  );
};

export default Blog;
