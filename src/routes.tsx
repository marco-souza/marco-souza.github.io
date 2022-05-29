import { Component, lazy } from "solid-js";
import { Route, Routes } from "solid-app-router";

const Home = lazy(() => import("@pages/Home"));
const Page404 = lazy(() => import("@pages/404"));

export const RootRouter: Component = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

export default RootRouter;
