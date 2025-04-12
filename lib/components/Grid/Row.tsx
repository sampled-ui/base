import { HTMLAttributes } from "react";

import classNames from "classnames";

import styles from "./styles.module.scss";

interface RowProps extends HTMLAttributes<HTMLDivElement> {
  gap?: number | string;
  columns?: number;
  className?: string;
}

export const Row: React.FC<RowProps> = ({
  gap,
  columns,
  className,
  children,
  ...restProps
}) => {
  return (
    <div
      className={classNames(styles.row, className)}
      style={{
        gap,
        gridTemplateColumns: `repeat(${columns ?? 24}, 1fr)`,
        ...restProps.style,
      }}
      {...restProps}
    >
      {children}
    </div>
  );
};

export default Row;
