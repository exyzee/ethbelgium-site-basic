import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, Text } from "@chakra-ui/react";
import theme from "../styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
