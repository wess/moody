import React, { FC, HTMLAttributes } from "react";
import clsx from "clsx";

interface GridProps extends HTMLAttributes<HTMLDivElement> {
  columns?: number;
  rows?: number;
  gap?: number;
}

const gridColsMapping: { [key: number]: string } = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
  5: "grid-cols-5",
  6: "grid-cols-6",
};

export const Grid: FC<GridProps> = ({
  columns,
  rows,
  gap,
  className,
  children,
  ...rest
}) => {
  const classes = clsx(
    "grid",
    columns && gridColsMapping[columns],
    rows && `grid-rows-${rows}`,
    gap !== undefined && `gap-${gap}`,
    className
  );
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

export const GridItem: FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <div className={clsx(className)} {...rest}>
      {children}
    </div>
  );
};