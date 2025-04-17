import React, { CSSProperties, RefObject } from "react";

import classNames from "classnames";

import styles from "./styles.module.scss";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  height?: CSSProperties["height"];
  width?: CSSProperties["width"];
  ref?: RefObject<HTMLDivElement | null>;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  height,
  width,
  style,
  className,
  ref,
  ...restProps
}) => {
  return (
    <div
      className={classNames(styles.skeleton, className)}
      style={{ height, width, ...(style ?? {}) }}
      ref={ref}
      {...restProps}
    />
  );
};
