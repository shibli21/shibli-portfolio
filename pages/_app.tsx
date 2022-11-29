import { AppProps } from "next/app";
import { GlobalStyle } from "../theme/global-style";

import "../styles/globals.css";
import { Layout } from "../components/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
export default MyApp;
