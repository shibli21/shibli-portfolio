import { FC, PropsWithChildren } from "react";
import { Footer } from "./Footer";
import { NavBar } from "./NavBar";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="container max-w-6xl mx-auto min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};
