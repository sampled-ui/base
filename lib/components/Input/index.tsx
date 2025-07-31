import classNames from "classnames";

import { SizeUnits } from "../../utils/units";

import styles from "./styles.module.scss";

import "../../theme/theme.css";
import "../../theme/variables.css";

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: Omit<SizeUnits, "xs" | "xl">;
  ref?: React.RefObject<HTMLInputElement | null>;
}

const defaultProps: Partial<InputProps> = {
  size: "md",
};

export const Input: React.FC<InputProps> = ({
  className,
  size,
  ref,
  ...restProps
}) => {
  size = size ?? defaultProps.size;
  return (
    <input
      ref={ref}
      className={`${className} ${classNames(styles.input, {
        [styles.sm]: size === "sm",
        [styles.md]: size === "md",
        [styles.lg]: size === "lg",
      })}`}
      {...restProps}
    />
  );
};
