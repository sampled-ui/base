import classNames from "classnames";

import { SizeUnits } from "../../units";
import styles from "./styles.module.scss";

interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: "row" | "column";
  gap?: SizeUnits;
  justify?: "center" | "start" | "end" | "between" | "around";
  align?: "center" | "start" | "end" | "stretch";
}

const defaultProps: Partial<FlexProps> = {
  direction: "row",
  gap: SizeUnits.md,
  justify: "start",
  align: "center",
};

export const Flex: React.FC<FlexProps> = ({
  className,
  children,
  direction,
  gap,
  justify,
  align,
  ...restProps
}) => {
  direction = direction ?? defaultProps.direction;
  gap = gap ?? defaultProps.gap;
  justify = justify ?? defaultProps.justify;
  align = align ?? defaultProps.align;

  return (
    <div
      className={`${classNames(styles.container, {
        [styles.row]: direction === "row",
        [styles.column]: direction === "column",
        [styles.gap_xs]: gap === SizeUnits.xs,
        [styles.gap_sm]: gap === SizeUnits.sm,
        [styles.gap_md]: gap === SizeUnits.md,
        [styles.gap_lg]: gap === SizeUnits.lg,
        [styles.gap_xl]: gap === SizeUnits.xl,
        [styles.justify_center]: justify === "center",
        [styles.justify_start]: justify === "start",
        [styles.justify_end]: justify === "end",
        [styles.justify_between]: justify === "between",
        [styles.justify_around]: justify === "around",
        [styles.align_center]: align === "center",
        [styles.align_start]: align === "start",
        [styles.align_end]: align === "end",
        [styles.align_stretch]: align === "stretch",
      })} ${className}`}
      {...restProps}
    >
      {children}
    </div>
  );
};
