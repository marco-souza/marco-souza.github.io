import { Component, JSX } from "solid-js";

export interface ChildrenProps {
  children: JSX.Element;
}

export interface ContainerProps extends ChildrenProps {
  class?: string;
}

export interface ButtonProps extends ContainerProps {
  to?: string;
  target?: string;
}

export const Container: Component<ContainerProps> = ({
  children,
  class: className = "",
}) => {
  const composedStyle = `max-w-4xl px-8 mx-auto ${className}`;
  return <div class={composedStyle}>{children}</div>;
};

export function ButtonLink({
  children,
  target,
  to = "#",
  class: className = "",
}: ButtonProps) {
  const composedStyle = `
    uppercase inline-block px-8 py-2 text-sm font-medium transition border border-current
    rounded hover:scale-110 hover:shadow-xl active:opacity-50
    focus:outline-none focus:ring ${className}
  `;
  return (
    <a class={composedStyle} href={to} target={target}>
      {children}
    </a>
  );
}
