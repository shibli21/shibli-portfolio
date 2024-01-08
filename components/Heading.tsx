import React, { FC, PropsWithChildren } from "react";

const Heading: FC<PropsWithChildren> = ({ children }) => {
  return (
    <h1 className="text-2xl md:mt-10 mt-4  underline decoration-rose-500 decoration-4 md:text-4xl font-black font-mono  text-center text-gray-900 dark:text-gray-100">
      {children}
    </h1>
  );
};

export default Heading;
