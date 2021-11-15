import { Image, Heading, Code, Link } from '@chakra-ui/react';
import { MDXProvider, MDXProviderComponentsProp } from '@mdx-js/react';
import { ReactNode } from 'react';

// TODO: update markdown components
const components: MDXProviderComponentsProp = {
  img: Image,
  h1: Heading,
  a: Link,
  pre: Code,
  code: Code,
  inlineCode: Code,
};

interface Props {
  children: ReactNode;
}

export default function MdxProvider({ children }: Props) {
  return <MDXProvider components={components}>{children}</MDXProvider>;
}
