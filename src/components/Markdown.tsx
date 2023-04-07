import { A } from "@solidjs/router";
import SolidMarkdown from "solid-markdown";

const components: Parameters<typeof SolidMarkdown>[0]["components"] = {
  a: (props) => <A class="text-pink-400" {...props} />,
  p: (props) => <p class="py-1" {...props} />,
  li: (props) => <li class="ml-8 list-disc" {...props} />,
  h1: (props) => <h1 class="pt-4 text-2xl" {...props} />,
  h2: (props) => <h2 class="pt-4 py-2 text-xl text-gray-300" {...props} />,
  h3: (props) => <h3 class="pt-2 text-md text-gray-300" {...props} />,
  blockquote: (props) => (
    <blockquote class="pl-4 text-gray-500 text-sm" {...props} />
  ),
  code: (props) => (
    <code class="text-sm bg-gray-900 p-0.5 px-1 rounded-md" {...props} />
  ),
};

export default function Markdown({ text }: { text: string }) {
  return <SolidMarkdown components={components}>{text}</SolidMarkdown>;
}
