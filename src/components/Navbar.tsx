import { Component, createSignal } from "solid-js";
import { A } from "solid-start";
import { config } from "virtual:config";
import {
  GithubIcon,
  LinkedinIcon,
  StackOverflowIcon,
} from "~/components/icons";
import { Logo } from "~/components/Logo";
import { Container } from "~/components/shared";

const { links } = config;
const [menuIsOpen, setMenuIsOpen] = createSignal(false);

export const Navbar: Component = () => {
  return (
    <nav class="bg-gray-900 shadow-md fixed left-0 right-0 top-0 z-10 py-4">
      {/* Desktop View */}
      <Container class="hidden sm:flex items-center justify-between">
        <div class="flex justify-between">
          <span class="mr-4">
            <Logo />
          </span>
          <NavLinks />
        </div>

        <SocialLinks />
      </Container>

      {/* Mobile View */}
      <Container class="sm:hidden flex items-center justify-around">
        <MenuButton />
        <Logo />
      </Container>
      <Container class="sm:hidden text-center">
        <div class={`py-4 ${menuIsOpen() ? "inline-grid" : "hidden"} gap-8`}>
          <NavLinks />
          <SocialLinks />
        </div>
      </Container>
    </nav>
  );
};

const MenuButton: Component = () => {
  return (
    <button
      class="sm:hidden absolute left-0 mx-4 px-4 text-white"
      onClick={() => setMenuIsOpen((val) => !val)}
    >
      <svg fill="white" viewBox="0 0 100 80" width="32" height="32">
        <rect width="100" height="5"></rect>
        <rect y="30" width="100" height="5"></rect>
        <rect y="60" width="100" height="5"></rect>
      </svg>
    </button>
  );
};

const navigationLinks = [
  { link: "/resume", title: "Resume" },
  { link: "/blog", title: "Blog" },
];

const NavLinks: Component = () => {
  return (
    <ul class="flex gap-4 font-light text-gray-300 items-center">
      {navigationLinks.map((item) => (
        <li>
          <A class="rounded-lg p-2 py-1 hover:bg-gray-700" href={item.link}>
            {item.title}
          </A>
        </li>
      ))}
    </ul>
  );
};

const socialLinks = [
  { link: links.stackoverflow, component: StackOverflowIcon },
  { link: links.linkedin, component: LinkedinIcon },
  { link: links.github, component: GithubIcon },
];

const SocialLinks: Component = () => (
  <ul class="flex gap-4 text-gray-400 justify-center">
    {socialLinks.map((item) => (
      <li>
        <A
          class="rounded-lg hover:text-gray-200"
          target="_blank"
          href={item.link}
        >
          <item.component />
        </A>
      </li>
    ))}
  </ul>
);
