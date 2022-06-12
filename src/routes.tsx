import { Component, lazy } from "solid-js";
import { Route, Routes } from "solid-app-router";

const Home = lazy(() => import("~/pages/Home"));
const Resume = lazy(() => import("~/pages/Resume"));
const Blog = lazy(() => import("~/pages/Blog"));
const PostDetails = lazy(() => import("~/pages/PostDetails"));
const Page404 = lazy(() => import("~/pages/404"));

export const RootRouter: Component = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:filename" element={<PostDetails />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

export default RootRouter;
