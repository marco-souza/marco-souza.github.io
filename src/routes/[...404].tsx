import type { Component } from "solid-js";
import { Title } from "solid-start";
import { config } from "virtual:config";
import { ButtonLink } from "~/components/shared";

const { site } = config;

export const Page404: Component = () => {
  return (
    <>
      <Title>{site.title} - Not found</Title>

      <div class="text-center my-[15vh] text-gray-100 items-center justify-center flex flex-col gap-4">
        <h1 class="text-9xl font-extrabold text-white tracking-widest">404</h1>
        <h2 class="bg-pink-500 px-2 text-sm rounded rotate-12 absolute">
          Page Not Found
        </h2>
        <ButtonLink to="/" class="border-pink-500 text-pink-500">
          Go Home
        </ButtonLink>
      </div>
    </>
  );
};

export default Page404;
