import classNames from "classnames";

import { SizeUnits, Variants } from "../../units";

import styles from "./styles.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variants;
  ghost?: boolean;
  size?: Omit<SizeUnits, "xxl">;
  ref?: React.RefObject<HTMLButtonElement | null>;
}

const defaultProps: Partial<ButtonProps> = {
  variant: "primary",
  size: "sm",
};

export const Button: React.FC<ButtonProps> = ({
  variant,
  ghost,
  size,
  className,
  ...restProps
}) => {
  variant = variant ?? defaultProps.variant;
  return (
    <button
      className={`${className} ${classNames(styles.button, {
        [styles.primary]: variant === "primary",
        [styles.secondary]: variant === "secondary",
        [styles.danger]: variant === "danger",
        [styles.success]: variant === "success",
        [styles.warning]: variant === "warning",
        [styles.disabled]: variant === "disabled",
        [styles.xs]: size === "xs",
        [styles.md]: size === "md",
        [styles.lg]: size === "lg",
        [styles.xl]: size === "xl",
        [styles.ghost]: ghost,
      })}`}
      {...restProps}
    />
  );
};
