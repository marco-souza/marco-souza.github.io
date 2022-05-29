import { Component } from "solid-js";
import { Link, Meta, Title } from "solid-meta";
import { site } from "~/settings";
import { Navbar } from "./Navbar";
import { ChildrenProps, Container } from "./shared";

export const Layout: Component<ChildrenProps> = (props) => {
  return (
    <div class="min-h-screen bg-gray-700">
      {/* Meta tags */}
      <Title>{site.title}</Title>
      <Link rel="canonical" href="http://solidjs.com/" />
      <Meta name="description" content={site.description} />

      <Navbar />
      <Container>{props.children}</Container>
    </div>
  );
};
