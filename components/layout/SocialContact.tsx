import Link from "next/link";
import React from "react";
import { BrandFacebook, BrandGithub, BrandInstagram, BrandLinkedin, BrandTwitter } from "tabler-icons-react";

type Props = {
  isSmall?: boolean;
};

export const SocialContacts = ({ isSmall }: Props) => {
  const size = isSmall ? "24px" : "30px";

  return (
    <div className="space-x-2 flex items-center">
      <Link target="_blank" href="https://github.com/shibli21" aria-label="Github">
        <BrandGithub size={size} className="hover:text-rose-500 transition" />
      </Link>
      <Link target="_blank" href="https://twitter.com/shibli21" aria-label="Twitter">
        <BrandTwitter size={size} className="hover:text-rose-500 transition" />
      </Link>
      <Link target="_blank" href="https://www.instagram.com/__shelbyy____/" aria-label="Instagram">
        <BrandInstagram size={size} className="hover:text-rose-500 transition" />
      </Link>
      <Link target="_blank" href="https://www.linkedin.com/in/shibli21/" aria-label="Linkedin">
        <BrandLinkedin size={size} className="hover:text-rose-500 transition" />
      </Link>
      <Link target="_blank" href="https://www.facebook.com/shibli21" aria-label="Facebook">
        <BrandFacebook size={size} className="hover:text-rose-500 transition" />
      </Link>
    </div>
  );
};
