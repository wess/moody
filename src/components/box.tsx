import React, { FC, HTMLAttributes } from "react";
import clsx from "clsx";

export interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  /** When true, apply flex display */
  flex?: boolean;
  /** Flex direction: 'row' or 'col' */
  direction?: "row" | "col";
  /** Horizontal alignment in flex container */
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
  /** Vertical alignment in flex container */
  align?: "start" | "center" | "end" | "stretch" | "baseline";
  /** Gap between children (matches Tailwind's spacing scale) */
  gap?: number;
}

export const Box: FC<BoxProps> = ({
  as: Component = "div",
  className,
  flex,
  direction = "row",
  justify,
  align,
  gap,
  children,
  ...rest
}) => {
  const classes = clsx(
    flex && "flex",
    flex && (direction === "col" ? "flex-col" : "flex-row"),
    justify && ({
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      between: "justify-between",
      around: "justify-around",
      evenly: "justify-evenly"
    }[justify]),
    align && ({
      start: "items-start",
      center: "items-center",
      end: "items-end",
      stretch: "items-stretch",
      baseline: "items-baseline"
    }[align]),
    gap !== undefined && `gap-${gap}`,
    className
  );

  return (
    <Component className={classes} {...rest}>
      {children}
    </Component>
  );
};

export const Row: FC<BoxProps> = (props) => (
  <Box flex direction="row" {...props} />
);

export const Column: FC<BoxProps> = (props) => (
  <Box flex direction="col" {...props} />
);