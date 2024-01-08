import { Footer, NavBar } from "@/components/layout";
import Particles from "@/components/particles";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
  icons: '/logos/logo.svg',
  metadataBase: new URL("http://localhost:3000"),
  title: "Syed Shibli Mahmud – SOFTWARE ENGINEER, FULL STACK & APP DEVELOPER",
  description: `Full-stack developer, JavaScript & C# enthusiast`,
  twitter: {
    site: "@shibli21",
    images: [
      {
        url: "/me/coverv2.png",
        width: 1200,
        height: 630,
        alt: "Syed Shibli Mahmud",
      },
    ],
    card: "summary_large_image",
    title: "Syed Shibli Mahmud – SOFTWARE ENGINEER, FULL STACK & APP DEVELOPER",
    description: `Full-stack developer, JavaScript & C# enthusiast`,
  },
  openGraph: {
    type: "website",
    url: "https://syedshiblimahmud.vercel.app",
    title: "Syed Shibli Mahmud – SOFTWARE ENGINEER, FULL STACK & APP DEVELOPER",
    description: `Full-stack developer, JavaScript & C# enthusiast`,
    siteName: "Syed Shibli Mahmud",
    images: [
      {
        url: "/me/coverv2.png",
        width: 1200,
        height: 630,
        alt: "Syed Shibli Mahmud",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="">
        <Providers>
          <Particles className="fixed top-0 h-screen w-screen -z-10 animate-fade-in" quantity={100} />

          <div className=" min-h-screen flex flex-col">
            <NavBar />
            <main className="container max-w-6xl mx-auto flex-1 px-4">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
