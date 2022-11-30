import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu2 } from "tabler-icons-react";

import Logo from "../Logo";
import SideNav from "./SideNav";
import { SocialContacts } from "./SocialContact";
import { DarkModeSwitch } from "../DarkModeSwitch";

export const NavBar = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => setOpenNav(false));
  }, []);

  return (
    <>
      <div className="backdrop-blur-xl sticky top-0 z-50">
        <nav className="flex    p-4 items-center justify-between text-lg lowercase container max-w-6xl mx-auto">
          <Logo />

          <div className="gap-6 lg:gap-10 hidden md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                className="text-lg font-medium transition duration-100 hover:text-rose-500"
                href={link.href}
                key={link.name}
                download={link.download}
                target={link.download ? "_blank" : undefined}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <DarkModeSwitch />
          </div>
          <button onClick={() => setOpenNav(!openNav)} className="focus:outline-none md:hidden ">
            <Menu2 strokeWidth={2} size={30} />
          </button>
        </nav>
      </div>
      <SideNav isOpen={openNav} setOpenNav={() => setOpenNav(!openNav)}>
        <div className="flex h-full flex-col  space-y-6 px-4">
          <div className="mt-4 flex justify-between items-center">
            <Logo />
            <DarkModeSwitch />
          </div>
          <div className="flex-1 flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <Link
                className="text-lg font-medium transition duration-100 hover:text-rose-500 "
                onClick={() => setOpenNav(false)}
                href={link.href}
                key={link.name}
                download={link.download}
                target={link.download ? "_blank" : undefined}
              >
                {link.name}
              </Link>
            ))}
            <div className="py-4 flex border-t mt-4 justify-center">
              <SocialContacts isSmall />
            </div>
          </div>
        </div>
      </SideNav>
    </>
  );
};

export const NAV_LINKS = [
  {
    name: "// about",
    href: "/#about",
  },
  {
    name: "// expertise",
    href: "/#expertise",
  },
  {
    name: "// work",
    href: "/#work",
  },

  {
    name: "// resume",
    href: "/pdf/Syed_Shibli_Mahmud_Resume.pdf",
    download: true,
  },
  {
    name: "// contact",
    href: "/#contact",
  },
];
