import type { Component } from "solid-js";
import { profile } from "virtual:github";
import { config } from "virtual:config";

import { ButtonLink } from "~/components/shared";
import { parseBioText } from "~/shared/formatters";

const { site } = config;

export const Home: Component = () => {
  return (
    <div class="grid grid-cols-1 items-center text-center text-gray-200">
      <img
        alt="It's Me"
        src={profile.avatar_url}
        class="my-10 h-40 mx-auto rounded-full"
      />

      <div class="text-3xl font-light">{profile.name}</div>

      <div
        class="opacity-70 font-extralight m-1 text-md text-gray-400 sm:px-20 md:px-40"
        innerHTML={parseBioText(profile.bio)}
      />

      <div class="grid gap-8 grid-cols-1 my-10 sm:mx-20 sm:grid-cols-2">
        <ButtonLink
          to={site.cta.primary.link}
          class={`text-pink-400 ${buttonAnimation}`}
        >
          {site.cta.primary.text}
        </ButtonLink>
        <ButtonLink
          to={site.cta.secondary.link}
          class={`text-gray-100 ${buttonAnimation} animate-delay-1s`}
        >
          {site.cta.secondary.text}
        </ButtonLink>
      </div>
    </div>
  );
};

export default Home;

// FIXME: animation is not working yet
const buttonAnimation = "animate-bounce-alt animate-count-1 animate-1s";
