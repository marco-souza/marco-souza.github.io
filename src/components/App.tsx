import type { Component } from "solid-js";
import { Home } from "~/components/Home";
import { Layout } from "~/components/Layout";

const App: Component = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
};

export default App;
