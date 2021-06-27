import { createContext, ReactNode, useContext } from "react";

export interface GithubProfile {
  readonly description: string;
  readonly avatar: string;
  readonly name: string;
}

export interface RawGithubProfile {
  readonly avatar_url: string;
  readonly name: string;
  readonly login: string;
  readonly bio: string;
}

const GithubProfileCtx = createContext<GithubProfile | null>(null)

export function useGithubProfile() {
  const ctx = useContext(GithubProfileCtx)
  if (ctx == null)
    throw new TypeError('Context not found, expected GithubProvider upwards!')
  return ctx
}

interface Props {
  readonly children: ReactNode;
  readonly githubData: RawGithubProfile;
}

export function GithubProvider({ children, githubData }: Props) {
  console.log({ githubData })
  return (
    <GithubProfileCtx.Provider value={processGithubProfile(githubData)}>
      {children}
    </GithubProfileCtx.Provider>
  )
}


function processGithubProfile(rawGithubData: RawGithubProfile): GithubProfile {
  const {
    name,
    avatar_url: avatar,
    bio: description,
  } = rawGithubData
  return { avatar, name, description }
}
