import classNames from "classnames";
import React, { HTMLAttributes } from "react";
import styles from "./styles.module.scss";

interface RowProps extends Omit<HTMLAttributes<HTMLDivElement>, "style"> {
  gap?: number | string;
  className?: string;
}

export const Row: React.FC<RowProps> = ({
  gap,
  className,
  children,
  ...restProps
}) => {
  return (
    <div
      className={classNames(styles.row, className)}
      style={{ gap }}
      {...restProps}
    >
      {children}
    </div>
  );
};

export default Row;
