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
