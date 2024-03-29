import type { Component } from "solid-js";
import SolidMarkdown from "solid-markdown";
import { profile } from "virtual:github";
import { config } from "virtual:config";
import { parseBioText } from "~/shared/formatters";
import { ButtonLink, ChildrenProps } from "~/components/shared";
import { LinkedinIcon } from "~/components/icons";

const { links, cover_letter, relevant_experiences, education, skills } = config;

export const Resume: Component = () => {
  return (
    <div class="grid gap-4 sm:grid-cols-[1fr_2fr] text-gray-200">
      <div class="print:grid print:grid-cols-2">
        <Sidebar />
        <Skills />
      </div>
      <div>
        <CoverLetter />
        <Experiences />
        <Education />
      </div>
    </div>
  );
};

const Sidebar: Component = () => {
  return (
    <div class="shadown mb-4 grid gap-1 bg-gray-900 h-[inherit] text-center border-bottom border-b-10 border-pink-500">
      <div class="text-gray-900 relative h-[16rem]">
        <div class="bg-blue-400 h-[60%] p-2"></div>
        <img
          class="h-[180px] w-[180px] rounded-full mt-[-100px] border-gray-900 mx-auto"
          alt="Profile logo"
          src={profile.avatar_url}
        />
      </div>

      <div class="info grid gap-4 p-6 pt-0">
        <h2 class="text-2xl font-semibold">{profile.name}</h2>
        <p innerHTML={parseBioText(profile.bio)} />

        <ButtonLink
          class="text-pink-400 w-full mx-auto print:hidden"
          to={config.resume_url}
          target="blank"
        >
          Resume
        </ButtonLink>
      </div>
    </div>
  );
};

export default Resume;

const CoverLetter: Component = () => {
  return (
    <CardLayout title="Cover Letter" class="print:break-after-page">
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

const Experiences: Component = () => {
  return (
    <CardLayout title="Relevant Experiences">
      <div class="grid gap-6 my4">
        {relevant_experiences.map((exp) => (
          <div class="text-md grid gap-1">
            <h4 class="text-base fw500">{exp.job_title}</h4>
            <p class="text-gray-300 text-sm fw100">
              {exp.company}, {exp.dates_employed}
            </p>
            <p class="mt2 text-sm">{exp.description}</p>
            <div>
              {exp.tech_stack.map((tech) => (
                <span class="mr1 text-sm text-blue-300 hover:text-blue-200 hover:cursor-pointer">{`#${tech} `}</span>
              ))}
            </div>
          </div>
        ))}
        <div class="text-center">
          <ButtonLink
            target="blank"
            to={links.linkedin}
            class="mx-auto gap-2 text-xs inline-flex items-end py-1 text-blue-400 hover:underline"
          >
            <span>See more experiences</span>
            <span>
              <LinkedinIcon />
            </span>
          </ButtonLink>
        </div>
      </div>
    </CardLayout>
  );
};

const Education: Component = () => {
  return (
    <CardLayout title="Education">
      {education.map((exp) => (
        <div class="my-2 text-sm grid gap-1 mb-6">
          <h4 class="text-base fw500">{exp.institution}</h4>

          <p class="fw200">
            <span class="text-gray-500">{exp.period} - </span>
            {exp.field_of_study}
          </p>
        </div>
      ))}
    </CardLayout>
  );
};

const Skills: Component = () => {
  return (
    <CardLayout title="Skills">
      {Object.entries(skills).map(([key, skills]: [string, Skill[]]) => (
        <div class="my-2 text-sm grid gap-1">
          <h4 class="text-base font-medium">{key}</h4>
          <div class="grid m-2 grid-cols-6 gap-2">
            {skills.map((skill) => (
              <img
                data-tooltip-target={skill.name + skill.rate}
                src={skill.icon}
                alt={skill.name}
                class="w-[20px] h-[20px]"
                title={`${skill.name} - ${Array(skill.rate)
                  .fill("☆")
                  .join("")}`}
              />
            ))}
          </div>
        </div>
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
      class={`mb-4 p-4 bg-gray-800 border-bottom border-b-10 border-blue-300 ${props.class}`}
    >
      <h3 class="text-lg font-semibold py-2">{props.title}</h3>

      <div>{props.children}</div>
    </div>
  );
};
