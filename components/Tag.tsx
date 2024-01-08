import React, { PropsWithChildren } from "react";

const Tag = ({ children }: PropsWithChildren) => {
  return (
    <div className="inline-block rounded text-xs font-medium capitalize bg-zinc-200 dark:bg-zinc-700/50 px-2 py-0.5">
      {children}
    </div>
  );
};

export default Tag;
