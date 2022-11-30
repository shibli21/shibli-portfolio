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
      <nav className="flex p-4 items-center justify-between text-lg lowercase">
        <Logo />

        <ul className="gap-6 lg:gap-10 hidden md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              className="text-lg font-medium transition duration-100 hover:text-orange-500 "
              href={link.href}
              key={link.name}
              passHref
            >
              {link.name}
            </Link>
          ))}
        </ul>

        <div className="hidden md:block">
          <DarkModeSwitch />
        </div>
        <button onClick={() => setOpenNav(!openNav)} className="focus:outline-none md:hidden ">
          <Menu2 strokeWidth={2} size={30} />
        </button>
      </nav>

      <SideNav isOpen={openNav} setOpenNav={() => setOpenNav(!openNav)}>
        <div className="flex h-full flex-col  space-y-6 px-4">
          <div className="mt-4 flex justify-between items-center">
            <Logo />
            <DarkModeSwitch />
          </div>
          <div className="flex-1 flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <Link
                onClick={() => setOpenNav(false)}
                href={link.href}
                key={link.name}
                passHref
                className="text-lg font-medium transition duration-100 hover:text-orange-500 "
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="py-4">
            <SocialContacts isSmall />
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
    href: "/#resume",
  },
  {
    name: "// contact",
    href: "/#contact",
  },
];
