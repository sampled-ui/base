import classNames from "classnames";

import { SizeUnits } from "../../utils/units";

import styles from "./styles.module.scss";

export interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: "row" | "column";
  gap?: SizeUnits;
  justify?: "center" | "start" | "end" | "between" | "around";
  align?: "center" | "start" | "end" | "stretch";
  ref?: React.RefObject<HTMLDivElement | null>;
}

const defaultProps: Partial<FlexProps> = {
  direction: "row",
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
  ref,
  ...restProps
}) => {
  direction = direction ?? defaultProps.direction;
  justify = justify ?? defaultProps.justify;
  align = align ?? defaultProps.align;

  return (
    <div
      ref={ref}
      className={`${classNames(styles.container, {
        [styles.row]: direction === "row",
        [styles.column]: direction === "column",
        [styles.gap_xs]: gap === "xs",
        [styles.gap_sm]: gap === "sm",
        [styles.gap_md]: gap === "md",
        [styles.gap_lg]: gap === "lg",
        [styles.gap_xl]: gap === "xl",
        [styles.gap_xxl]: gap === "xxl",
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
