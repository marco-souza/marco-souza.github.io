declare module "virtual:github" {
  export const profile: GithubProfile;
}

interface GithubProfile {
  readonly bio: string;
  readonly blog: string;
  readonly company: string;
  readonly id: string;
  readonly location: string;
  readonly login: string;
  readonly name: string;
  readonly twitter_username: string;
  // github api url
  readonly url: string;
  // github profile url
  readonly html_url: string;
  /** github profile avatar */
  readonly avatar_url: string;
}

// Virtual config types

declare module "virtual:config" {
  export const config: Config;
}

interface Config {
  readonly cover_letter: string;
  readonly job_title: string;
  readonly resume_url: string;
  readonly site: Site;
  readonly links: Links;
  readonly skills: Skills;
  readonly relevant_experiences: readonly Experience[];
  readonly education: readonly Education[];
}

interface Site {
  readonly title: string;
  readonly description: string;
  readonly cta: Record<
    "primary" | "secondary",
    {
      readonly text: string;
      readonly link: string;
    }
  >;
}

interface Experience {
  readonly company: string;
  readonly job_title: string;
  readonly location: string;
  readonly dates_employed: string;
  readonly description: string;
  readonly tech_stack: readonly string[];
}

interface Education {
  readonly institution: string;
  readonly field_of_study: string;
  readonly period: string;
}

interface Skill {
  readonly name: string;
  readonly rate: string;
  readonly icon?: string;
}

interface Skills {
  readonly "Programming Languages": readonly Skill[];
  readonly "Development Tools": readonly Skill[];
  readonly Frontend: readonly Skill[];
  readonly Backend: readonly Skill[];
  readonly Infra: readonly Skill[];
}

interface Links {
  readonly linkedin: string;
  readonly stackoverflow: string;
  readonly github: string;
  readonly podcodar: string;
  readonly paradigm: string;
}
