import classNames from "classnames";

import { SizeUnits } from "../../utils/units";
import { Typography } from "../Typography";

import styles from "./styles.module.scss";

type TagVariant = "outlined" | "filled";

interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  size?: Omit<SizeUnits, "xxl" | "xl" | "xs">;
  variant?: TagVariant;
  color?: string;
  ref?: React.RefObject<HTMLDivElement | null>;
}

const defaultProps = {
  size: "sm",
  variant: "outlined",
};

export const Tag: React.FC<TagProps> = ({
  label,
  size,
  variant,
  color,
  className,
  ref,
  ...restProps
}) => {
  size = size ?? defaultProps.size;
  variant = variant ?? (defaultProps.variant as TagVariant);
  return (
    <Typography.Text
      ref={ref}
      className={classNames(styles.tag, className, {
        [styles.outlined]: variant === "outlined",
        [styles.filled]: variant === "filled",
        [styles.sm]: size === "sm",
        [styles.md]: size === "md",
        [styles.lg]: size === "lg",
      })}
      style={{
        color: variant === "outlined" ? (color ?? "gray") : "white",
        backgroundColor: variant === "outlined" ? "transparent" : color,
        borderColor: variant === "outlined" ? (color ?? "gray") : "initial",
      }}
      {...restProps}
    >
      {label}
    </Typography.Text>
  );
};
