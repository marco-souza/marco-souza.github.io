import type { Component } from "solid-js";
import { site } from "../../settings";

import { ButtonLink } from "../shared";

export const Home: Component = () => {
  return (
    <div class="my10 grid grid-cols-1 items-center text-center text-gray-200">
      <img
        alt="It's Me"
        src={site.avatarUrl}
        class="my10 h-40 mx-auto rounded-full"
      />

      <div class="text-3xl fw100">{site.title}</div>

      <div class="op70 fw300 m1 text-md text-gray-400">{site.subtitle}</div>

      <div class="grid gap-8 grid-cols-1 my-10 md:mx-20 md:grid-cols-2">
        <ButtonLink
          to={site.cta.primary.link}
          class={`text-pink-400 ${buttonAnimation}`}
        >
          {site.cta.primary.text}
        </ButtonLink>
        <ButtonLink
          to={site.cta.primary.link}
          class={`text-gray-100 ${buttonAnimation} animate-delay-1s`}
        >
          {site.cta.secondary.text}
        </ButtonLink>
      </div>
    </div>
  );
};

export default Home;

const buttonAnimation = "animate-bounce-alt animate-count-1 animate-1s";
