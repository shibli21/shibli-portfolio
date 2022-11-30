import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="scroll-smooth scroll-p-20 text-orange-600" lang="en">
      <Head>
        <link rel="icon" href="/logos/logo.svg" type="image/x-icon" />
        <meta charSet="utf-8" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
