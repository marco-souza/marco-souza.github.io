export interface Experience {
  readonly company: string;
  readonly job_title: string;
  readonly location: string;
  readonly dates_employed: string;
  readonly description: string;
  readonly tech_stack: readonly Array<string>;
}

export interface Education {
  readonly institution: string;
  readonly field_of_study: string;
  readonly period: string;
}

export interface Skill {
  readonly name: string;
  readonly rate: string;
  readonly icon?: string;
}

export interface Skills {
  readonly 'Programming Languages': Array<Skill>;
  readonly 'Development Tools': readonly Array<Skill>;
  readonly 'Frontend': readonly Array<Skill>;
  readonly 'Backend': readonly Array<Skill>;
  readonly 'Infra': readonly Array<Skill>;
}

export interface Social {
  readonly linkedin: string
  readonly stackoverflow: string
  readonly github: string
}

declare module "@packages/config/resume.yml" {
  export const cover_letter: string;
  export const title: string;
  export const resume_url: string;
  export const social: readonly Social;
  export const relevant_experiences: readonly Array<Experience>;
  export const education: readonly Array<Education>;
  export const skills: readonly Skills;
}
