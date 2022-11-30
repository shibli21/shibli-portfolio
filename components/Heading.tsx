import React, { FC, PropsWithChildren } from "react";

const Heading: FC<PropsWithChildren> = ({ children }) => {
  return (
    <h1 className="text-2xl underline decoration-orange-600 decoration-4 md:text-4xl font-bold font-secondary text-center text-gray-900 dark:text-gray-100">
      {children}
    </h1>
  );
};

export default Heading;
