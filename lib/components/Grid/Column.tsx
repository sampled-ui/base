import classNames from "classnames";

import styles from "./styles.module.scss";

interface ColumnProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "style"> {
  span: number;
  ref?: React.RefObject<HTMLDivElement | null>;
}

export const Column: React.FC<ColumnProps> = ({
  span,
  className,
  children,
  ref,
  ...restProps
}) => {
  return (
    <div
      ref={ref}
      className={classNames(styles.column, className)}
      style={{
        gridColumn: `span ${span} / span ${span}`,
      }}
      {...restProps}
    >
      {children}
    </div>
  );
};
