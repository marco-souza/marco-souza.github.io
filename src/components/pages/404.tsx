import type { Component } from "solid-js";
import { site } from "../../settings";

import { ButtonLink } from "../shared";

export const Page404: Component = () => {
  return (
    <div class="text-center my-2 text-gray-100">
      <h1 class="text-2xl py-2">Ooops</h1>
      <h2 class="text-lg ">This page doesn't exists</h2>
    </div>
  );
};

export default Page404;
