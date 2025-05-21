import classNames from "classnames";

import styles from "./styles.module.scss";

interface ColumnProps extends React.HTMLAttributes<HTMLDivElement> {
  span: number;
  ref?: React.RefObject<HTMLDivElement | null>;
}

export const Column: React.FC<ColumnProps> = ({
  span,
  className,
  children,
  ref,
  style,
  ...restProps
}) => {
  return (
    <div
      ref={ref}
      className={classNames(styles.column, className)}
      style={{
        gridColumn: `span ${span} / span ${span}`,
        ...(style ?? {}),
      }}
      {...restProps}
    >
      {children}
    </div>
  );
};
