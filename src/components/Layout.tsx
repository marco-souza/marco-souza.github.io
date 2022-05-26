import { Component } from "solid-js";
import { Navbar } from "./Navbar";
import { ChildrenProps, Container } from "./shared";

export const Layout: Component<ChildrenProps> = (props) => {
  return (
    <div class="min-h-screen bg-gray-700">
      {/* TODO: add metatags */}
      <Navbar />
      <Container>{props.children}</Container>
    </div>
  );
};
