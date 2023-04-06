import { Router } from "@solidjs/router";
import type { Component } from "solid-js";
import { MetaProvider } from "solid-meta";
import { Layout } from "~/components/Layout";
import RootRouter from "~/routes";

const App: Component = () => {
  return (
    <MetaProvider>
      <Router>
        <Layout>
          <RootRouter />
        </Layout>
      </Router>
    </MetaProvider>
  );
};

export default App;
