import React, { FC, HTMLAttributes } from "react";
import clsx from "clsx";

interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  vertical?: boolean;
  thickness?: number; // Use Tailwind's spacing scale (e.g., 1 for 1px if using a custom scale)
}

export const Divider: FC<DividerProps> = ({ vertical = false, thickness = 1, className, ...rest }) => {
  const classes = clsx(
    vertical ? `w-${thickness}` : `h-${thickness}`,
    vertical ? "bg-gray-300" : "bg-gray-300",
    vertical ? "mx-2" : "my-2",
    className
  );
  return <div className={classes} {...rest} />;
};