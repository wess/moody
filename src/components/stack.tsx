import React, { FC, HTMLAttributes } from "react";
import clsx from "clsx";

interface StackProps extends HTMLAttributes<HTMLDivElement> {
  horizontal?: boolean;
  gap?: number;
}

export const Stack: FC<StackProps> = ({ horizontal = false, gap, className, children, ...rest }) => {
  const classes = clsx(
    "flex",
    horizontal ? "flex-row" : "flex-col",
    gap !== undefined && `gap-${gap}`,
    className
  );
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};