import { Component } from "solid-js";

import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { ChildrenProps, Container } from "./shared";

export const Layout: Component<ChildrenProps> = (props) => {
  return (
    <main class="min-h-screen bg-gray-700 relative">
      <Navbar />
      <Container class="pt-24 min-h-[80vh]">{props.children}</Container>
      <Footer />
    </main>
  );
};
