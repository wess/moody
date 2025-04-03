import React, { FC, HTMLAttributes } from "react";
import clsx from "clsx";

export const Center: FC<HTMLAttributes<HTMLDivElement>> = ({ className, children, ...rest }) => {
  const classes = clsx("flex", "items-center", "justify-center", className);
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};