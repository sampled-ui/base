import classNames from "classnames";

import styles from "./styles.module.scss";

interface ColumnProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "style"> {
  span: number;
  className?: string;
}

export const Column: React.FC<ColumnProps> = ({
  span,
  className,
  children,
  ...restProps
}) => {
  return (
    <div
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
