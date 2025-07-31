import classNames from "classnames";

import styles from "./styles.module.scss";

import "../../theme/theme.css";
import "../../theme/variables.css";

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
        ...(style ?? {}),
        gridColumn: `span ${span} / span ${span}`,
      }}
      {...restProps}
    >
      {children}
    </div>
  );
};
