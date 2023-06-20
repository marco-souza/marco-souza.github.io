import { Component } from "solid-js";
import { Body } from "solid-start";

import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { ChildrenProps, Container } from "./shared";

export const Layout: Component<ChildrenProps> = (props) => {
  return (
    <Body class="bg-gray-700">
      <main class="min-h-screen relative">
        <Navbar />
        <Container class="pt-24 min-h-[80vh]">{props.children}</Container>
        <Footer />
      </main>
    </Body>
  );
};
