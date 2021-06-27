import type { AppProps } from "next/app";
import { ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }: AppProps) {
  return renderProviders(<Component {...pageProps} />);
}

// Inject all root providers
const providers = [ChakraProvider];

function renderProviders(children: ReactNode) {
  return providers.reduce(
    (aggregated, CurrentProvider) => (
      <CurrentProvider>{aggregated}</CurrentProvider>
    ),
    children
  );
}

export default MyApp;
