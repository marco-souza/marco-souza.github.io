import type { Component } from "solid-js";
import { posts } from "virtual:posts";
import { formatDistance } from "date-fns";

export const Blog: Component = () => {
  return (
    <div class="grid grid-cols-1 items-center text-center text-gray-200">
      <h1 class="text-3xl fw600 text-left py8">Blog</h1>
      {posts.map((post) => (
        <a href={post.url}>
          <div class="grid gap4 sm:grid-cols-[14rem_auto] text-left border-y-1 border-gray-500 py8 hover:underline">
            <p class="text-sm hidden sm:block fw200">
              {formatDistance(Date.parse(post.created_at), Date.now())}
            </p>
            <div>
              <h2 class="fw600">{post.title}</h2>
              <h3 class="fw300 text-sm py2">{post.summary}</h3>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Blog;
