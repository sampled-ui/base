import classNames from "classnames";

import { SizeUnits } from "../../units";
import styles from "./styles.module.scss";

interface SpacingProps extends React.HTMLAttributes<HTMLDivElement> {
  gap?: Omit<SizeUnits, "xl">;
}

const defaultProps: Partial<SpacingProps> = {
  gap: SizeUnits.md,
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
        [styles.gap_xs]: gap === SizeUnits.xs,
        [styles.gap_sm]: gap === SizeUnits.sm,
        [styles.gap_md]: gap === SizeUnits.md,
        [styles.gap_lg]: gap === SizeUnits.lg,
        [styles.gap_xl]: gap === SizeUnits.xl,
      })} ${className}`}
      {...restProps}
    >
      {children}
    </div>
  );
};
