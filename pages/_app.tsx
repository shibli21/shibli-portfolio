import { AppProps } from "next/app";
import { GlobalStyle } from "../theme/global-style";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />;
    </>
  );
}
export default MyApp;
