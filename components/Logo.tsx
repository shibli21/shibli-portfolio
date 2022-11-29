import React from "react";

type Props = {};

const Logo = (props: Props) => {
  return (
    <h1 className="text-2xl font-bold flex font-secondary gap-2 items-end">
      Shibli
      <div className="w-3.5 h-3.5 bg-orange-500 rounded-full mb-1.5"></div>
    </h1>
  );
};

export default Logo;
