import { HTMLAttributes } from "react";

import classNames from "classnames";

import styles from "./styles.module.scss";

import "../../theme/theme.css";
import "../../theme/variables.css";

interface RowProps extends HTMLAttributes<HTMLDivElement> {
  gap?: number | string;
  columns?: number;
  className?: string;
  ref?: React.RefObject<HTMLDivElement | null>;
}

export const Row: React.FC<RowProps> = ({
  gap,
  columns,
  className,
  children,
  ref,
  ...restProps
}) => {
  const { style, ...rest } = restProps;
  return (
    <div
      ref={ref}
      className={classNames(styles.row, className)}
      style={{
        gap,
        gridTemplateColumns: `repeat(${columns ?? 24}, 1fr)`,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Row;
