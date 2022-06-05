import type { Component } from "solid-js";
import { profile } from "virtual:github";
import { config } from "virtual:config";
import { parseBioText } from "~/shared/formatters";
import { ButtonLink } from "~/components/shared";

const { site, links } = config;

export const Resume: Component = () => {
  return (
    <div class="grid gap-4 sm:grid-cols-[1fr_2fr] text-gray-200">
      <div class="grid gap-4">
        <Sidebar />
        <Sidebar />
      </div>
    </div>
  );
};

const Sidebar: Component = () => {
  return (
    <div class="">
      <div class="shadown grid gap-1 bg-gray-900 grid gap-1 text-center border-bottom border-b-10 border-pink-500">
        <div class="text-gray-900 relative h-[16rem]">
          <div class="bg-blue-400 h-[60%] p-2"></div>
          <img
            class="h-[180px] w-[180px] rounded-full mt-[-100px] border-gray-900 mxauto"
            alt="Profile logo"
            src={profile.avatar_url}
          />
        </div>

        <div class="info grid gap-4 p4">
          <h2 class="text-2xl fw600">{profile.name}</h2>
          <p innerHTML={parseBioText(profile.bio)} />

          <ButtonLink class="text-pink-400 mw100 mxauto" to={config.resume_url}>
            Resume
          </ButtonLink>
        </div>
      </div>
    </div>
  );
};

export default Resume;
