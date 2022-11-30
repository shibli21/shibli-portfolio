import Head from "next/head";
import { useRouter } from "next/router";
import { FC, PropsWithChildren } from "react";
import { Footer } from "./Footer";
import { NavBar } from "./NavBar";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();

  const meta = {
    title: "Syed Shibli Mahmud – SOFTWARE ENGINEER, FULL STACK & APP DEVELOPER",
    description: `Full-stack developer, JavaScript & Flutter enthusiast`,
    image: "/me/coverv2.png",
    type: "website",
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://syedshiblimahmud.vercel.app${router.asPath}`} />
        <link rel="canonical" href={`https://syedshiblimahmud.vercel.app${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Syed Shibli Mahmud" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:site" content="@shibli21" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>

      <div className=" min-h-screen flex flex-col">
        <NavBar />
        <main className="container max-w-6xl mx-auto flex-1 px-4">{children}</main>
        <Footer />
      </div>
    </>
  );
};
