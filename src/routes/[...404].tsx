import type { Component } from "solid-js";
import { Title } from "solid-start";
import { config } from "virtual:config";
import NotFound from "~/components/NotFound";
import { ButtonLink } from "~/components/shared";

const { site } = config;

export const Page404: Component = () => {
  return (
    <>
      <Title>{site.title} - Not found</Title>

      <NotFound>
        <ButtonLink to="/" class="border-pink-500 text-pink-500">
          Go Home
        </ButtonLink>
      </NotFound>
    </>
  );
};

export default Page404;
