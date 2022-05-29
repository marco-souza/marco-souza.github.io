import { Router } from "solid-app-router";
import type { Component } from "solid-js";
import { Layout } from "~/components/Layout";
import RootRouter from "~/routes";

const App: Component = () => {
  return (
    <Router>
      <Layout>
        <RootRouter />
      </Layout>
    </Router>
  );
};

export default App;
