import React, { PropsWithChildren } from "react";

const Tag = ({ children }: PropsWithChildren) => {
  return (
    <div className="inline-block text-xs font-medium capitalize bg-zinc-200 dark:bg-zinc-700 px-2 py-0.5">
      {children}
    </div>
  );
};

export default Tag;
