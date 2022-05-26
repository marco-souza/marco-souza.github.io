import { Component } from "solid-js";
import { links } from "~/settings";
import {
  GithubIcon,
  LinkedinIcon,
  StackOverflowIcon,
} from "~/components/icons";
import { Logo } from "~/components/Logo";
import { Container } from "~/components/shared";

const socialLinks = [
  { link: links.stackoverflow, component: <StackOverflowIcon /> },
  { link: links.linkedin, component: <LinkedinIcon /> },
  { link: links.github, component: <GithubIcon /> },
];

const navigationLinks = [
  { link: "/resume", title: "Resume" },
  { link: "/blog", title: "Blog" },
];

export const Navbar: Component = () => {
  return (
    <nav class="bg-gray-900">
      <Container class="flex items-center justify-between">
        <div class="flex justify-between">
          <a href="/">
            <Logo />
          </a>

          <ul
            class={`grid gap-4 grid-cols-${navigationLinks.length} ml-8 items-center font-light text-gray-300`}
          >
            {navigationLinks.map((item) => (
              <li>
                <a
                  class="rounded-lg p-2 py-1 hover:bg-gray-700"
                  href={item.link}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <ul
          class={`grid gap-4 grid-cols-${socialLinks.length} py-4 text-gray-400`}
        >
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
      </Container>
    </nav>
  );
};
