import { AppProps } from "next/app";
import { GlobalStyle } from "../theme/global-style";
import { ThemeProvider } from "next-themes";

import { Layout } from "../components/layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
export default MyApp;
