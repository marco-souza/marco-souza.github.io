import { Component } from "solid-js";
import { links } from "~/settings";
import {
  GithubIcon,
  LinkedinIcon,
  StackOverflowIcon,
} from "~/components/icons";
import { Logo } from "~/components/Logo";
import { Container } from "~/components/shared";

export const Navbar: Component = () => {
  return (
    <nav class="bg-gray-900 absolute left-0 right-0 top-0 z-10 py4">
      <Container class="flex items-center justify-between">
        <div class="flex justify-between">
          <span class="mr-4">
            <Logo />
          </span>
          <NavLinks />
        </div>

        <SocialLinks />
      </Container>
    </nav>
  );
};

const navigationLinks = [
  { link: "/resume", title: "Resume" },
  { link: "/blog", title: "Blog" },
];

const NavLinks: Component = () => (
  <ul
    class={`grid gap-4 grid-cols-${navigationLinks.length} items-center font-light text-gray-300`}
  >
    {navigationLinks.map((item) => (
      <li>
        <a class="rounded-lg p-2 py-1 hover:bg-gray-700" href={item.link}>
          {item.title}
        </a>
      </li>
    ))}
  </ul>
);

const socialLinks = [
  { link: links.stackoverflow, component: <StackOverflowIcon /> },
  { link: links.linkedin, component: <LinkedinIcon /> },
  { link: links.github, component: <GithubIcon /> },
];

const SocialLinks: Component = () => (
  <ul class={`grid gap-4 grid-cols-${socialLinks.length} text-gray-400`}>
    {socialLinks.map((item) => (
      <li>
        <a
          class="rounded-lg hover:text-gray-200"
          target="_blank"
          href={item.link}
        >
          {item.component}
        </a>
      </li>
    ))}
  </ul>
);
