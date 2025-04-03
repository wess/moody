import React, { FC, HTMLAttributes } from "react";
import clsx from "clsx";

export const Container: FC<HTMLAttributes<HTMLDivElement>> = ({ className, children, ...rest }) => {
  const classes = clsx("mx-auto", "px-4", "max-w-7xl", className);
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};