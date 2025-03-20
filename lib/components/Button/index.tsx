import classNames from "classnames";
import { Variants } from "../../units";
import styles from "./styles.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variants;
}

const defaultProps: Partial<ButtonProps> = {
  variant: "primary",
};

export const Button: React.FC<ButtonProps> = ({
  variant,
  className,
  ...restProps
}) => {
  variant = variant ?? defaultProps.variant;
  return (
    <button
      className={`${className} ${classNames(styles.button, {
        [styles.primary]: variant === "primary",
        [styles.secondary]: variant === "secondary",
      })}`}
      {...restProps}
    />
  );
};
