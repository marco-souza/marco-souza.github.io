import { Link } from "@chakra-ui/react";
import ReactMarkdown, { ReactMarkdownOptions } from "react-markdown";
import { ReactMarkdownProps } from "react-markdown/src/ast-to-react";

interface Props {
  readonly children: string;
}

function Markdown(props: Props) {
  return <ReactMarkdown {...markdownConfig} {...props} />;
}

const markdownConfig: Partial<ReactMarkdownOptions> = {
  components: {
    a: MdLink,
  },
};

interface MdLinkProps extends ReactMarkdownProps {
  readonly href?: string;
}

function MdLink({ children, href }: MdLinkProps) {
  return (
    <Link color="pink.300" target="_blank" href={href}>
      {children}
    </Link>
  );
}

export default Markdown;
