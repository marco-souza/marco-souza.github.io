import type { Component } from "solid-js";
import { profile } from "virtual:github";
import { config } from "virtual:config";

import { ButtonLink } from "~/components/shared";
import { parseBioText } from "~/shared/formatters";

const { site } = config;

export const Home: Component = () => {
  return (
    <div class="grid gap-10 my-8 xl:my-16 2xl:my-32 items-center text-center text-gray-200">
      <div class="gap-2 flex flex-col">
        <img
          alt="It's Me"
          src={profile.avatar_url}
          class="h-40 mx-auto rounded-full"
        />

        <div class="text-3xl font-light">{profile.name}</div>
      </div>

      <div
        class="opacity-70 font-extralight text-md text-gray-400 sm:px-20 md:px-40"
        innerHTML={parseBioText(profile.bio)}
      />

      <div class="grid gap-8 grid-cols-1 sm:mx-20 sm:grid-cols-2">
        <ButtonLink
          to={site.cta.primary.link}
          class="text-pink-400 animate-bounce repeat-[2]"
        >
          {site.cta.primary.text}
        </ButtonLink>
        <ButtonLink
          to={site.cta.secondary.link}
          class="text-gray-100 animate-bounce repeat-[2] delay-200"
        >
          {site.cta.secondary.text}
        </ButtonLink>
      </div>
    </div>
  );
};

export default Home;
