import { Component } from "solid-js";
import { Route, Routes } from "solid-app-router";
import { Home } from "~/components/Home";

export const RootRouter: Component = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="*"
        element={
          <div class="text-center my-2 text-gray-100">
            <h1 class="text-2xl py-2">404</h1>
            <h2 class="text-lg ">Opps, this page doesn't exists:(</h2>{" "}
          </div>
        }
      />
    </Routes>
  );
};

export default RootRouter;
