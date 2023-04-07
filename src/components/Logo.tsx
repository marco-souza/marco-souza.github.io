import { Component } from "solid-js";
import { A } from "solid-start";

export const Logo: Component = () => {
  return (
    <A
      href="/"
      class="font-serif rounded-lg text-white text-3xl font-bold hover:underline"
    >
      M.
    </A>
  );
};
