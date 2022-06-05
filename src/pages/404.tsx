import type { Component } from "solid-js";
import { Title } from "solid-meta";
import { config } from "virtual:config";

const { site } = config;

export const Page404: Component = () => {
  return (
    <div class="text-center my-2 text-gray-100">
      <Title>{site.title} - Not found</Title>

      <h1 class="text-2xl py-2">Ooops</h1>
      <h2 class="text-lg ">This page doesn't exists</h2>
    </div>
  );
};

export default Page404;
