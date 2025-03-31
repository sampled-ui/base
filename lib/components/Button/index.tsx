import classNames from "classnames";
import { SizeUnits, Variants } from "../../units";
import styles from "./styles.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variants;
  ghost?: boolean;
  size?: Omit<SizeUnits, "xs" | "xxl">;
}

const defaultProps: Partial<ButtonProps> = {
  variant: "primary",
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
        [styles.sm]: size === "sm",
        [styles.md]: size === "md",
        [styles.lg]: size === "lg",
        [styles.xl]: size === "xl",
        [styles.ghost]: ghost,
      })}`}
      {...restProps}
    />
  );
};
