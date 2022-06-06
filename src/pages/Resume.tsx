import type { Component } from "solid-js";
import SolidMarkdown from "solid-markdown";
import { profile } from "virtual:github";
import { config } from "virtual:config";
import { parseBioText } from "~/shared/formatters";
import { ButtonLink, ChildrenProps } from "~/components/shared";

const { cover_letter } = config;

export const Resume: Component = () => {
  return (
    <div class="grid gap-4 sm:grid-cols-[1fr_2fr] text-gray-200">
      <div>
        <Sidebar />
      </div>
      <div>
        <CoverLetter />
      </div>
    </div>
  );
};

const Sidebar: Component = () => {
  return (
    <div class="shadown mb4 grid gap-1 bg-gray-900 inline-grid h-[inherit] gap-1 text-center border-bottom border-b-10 border-pink-500">
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
  );
};

export default Resume;

const CoverLetter: Component = () => {
  return (
    <CardLayout title="Cover Letter">
      {cover_letter.split("\n").map((text) => (
        <p class="my1 mx0 text-sm">
          <SolidMarkdown
            components={{
              p: (props) => <p class="my4" {...props} />,
              a: (props) => (
                <a class="text-pink-300 hover:text-pink-400" {...props} />
              ),
            }}
          >
            {text}
          </SolidMarkdown>
        </p>
      ))}
    </CardLayout>
  );
};

interface CardLayoutProps extends ChildrenProps {
  title: string;
  class?: string;
}

const CardLayout: Component<CardLayoutProps> = (props) => {
  return (
    <div
      class={`mb4 px4 py2 bg-gray-800 border-bottom border-b-10 border-blue-300 ${props.class}`}
    >
      <h3 class="text-lg fw600 py2">{props.title}</h3>

      <div>{props.children}</div>
    </div>
  );
};
