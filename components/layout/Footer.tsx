import Link from "next/link";
import { NAV_LINKS } from "./NavBar";
import { SocialContacts } from "./SocialContact";

export const Footer = () => {
  return (
    <div className="border-t border-gray-500">
      <div className="flex items-center  flex-col  space-y-4 max-w-6xl mx-auto py-4">
        <h1>Syed Shibli Mahmud</h1>
        <div className="space-x-6 flex flex-wrap items-center justify-center">
          {NAV_LINKS.map((link) => (
            <Link key={link.name} href={link.href} passHref className="transition  hover:text-orange-500 ">
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-500">
        <div className="container max-w-6xl mx-auto py-4 flex flex-col gap-2 md:flex-row items-center justify-between">
          <p className="text-center">
            <span className="text-2xl mr-1">©</span>
            2022 Shibli. All rights reserved
          </p>
          <SocialContacts isSmall />
        </div>
      </div>
    </div>
  );
};
