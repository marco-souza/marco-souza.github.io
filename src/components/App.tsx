import { Router } from "solid-app-router";
import type { Component } from "solid-js";
import { MetaProvider } from "solid-meta";
import { Layout } from "~/components/Layout";
import RootRouter from "~/routes";

const App: Component = () => {
  return (
    <Router>
      <MetaProvider>
        <Layout>
          <RootRouter />
        </Layout>
      </MetaProvider>
    </Router>
  );
};

export default App;
