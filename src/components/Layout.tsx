import { Component } from "solid-js";
import { Link, Meta, Title } from "solid-meta";
import { config } from "virtual:config";

import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { ChildrenProps, Container } from "./shared";

const { site } = config;

export const Layout: Component<ChildrenProps> = (props) => {
  return (
    <div class="min-h-screen bg-gray-700">
      {/* Meta tags */}
      <Title>{site.title}</Title>
      <Link rel="canonical" href="http://solidjs.com/" />
      <Meta name="description" content={site.description} />

      <Navbar />
      <Container class="pt-24 min-h-80vh">{props.children}</Container>
      <Footer />
    </div>
  );
};
