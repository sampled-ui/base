import classNames from "classnames";

import { SizeUnits } from "../../units";

import styles from "./styles.module.scss";

interface SpacingProps extends React.HTMLAttributes<HTMLDivElement> {
  gap?: SizeUnits;
}

const defaultProps: Partial<SpacingProps> = {
  gap: "md",
};

export const Spacing: React.FC<SpacingProps> = ({
  className,
  gap,
  children,
  ...restProps
}) => {
  gap = gap ?? defaultProps.gap;
  return (
    <div
      className={`${classNames({
        [styles.gap_xs]: gap === "xs",
        [styles.gap_sm]: gap === "sm",
        [styles.gap_md]: gap === "md",
        [styles.gap_lg]: gap === "lg",
        [styles.gap_xl]: gap === "xl",
        [styles.gap_xxl]: gap === "xxl",
      })} ${className}`}
      {...restProps}
    >
      {children}
    </div>
  );
};
