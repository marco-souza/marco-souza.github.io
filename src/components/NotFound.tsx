import { ChildrenProps } from "./shared";

export default function NotFound(props: ChildrenProps) {
  return (
    <div class="text-center my-[15vh] text-gray-100 items-center justify-center flex flex-col gap-4">
      <h1 class="text-9xl font-extrabold text-white tracking-widest">404</h1>
      <h2 class="bg-pink-500 px-2 text-sm rounded rotate-12 absolute">
        Page Not Found
      </h2>
      {props.children}
    </div>
  );
}
