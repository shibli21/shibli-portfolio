import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/">
      <h1 className="text-2xl font-bold flex font-secondary gap-2 items-end">
        Shibli
        <div className="w-3.5 h-3.5 bg-rose-500 rounded-full mb-1.5"></div>
      </h1>
    </Link>
  );
};

export default Logo;
