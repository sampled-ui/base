import classNames from "classnames";

import { Variants } from "../../units";
import styles from "./Text.module.scss";

export interface TextProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  children: string;
  variant?: Omit<Variants, "primary">;
  disabled?: boolean;
  underline?: boolean;
  deleted?: boolean;
  italic?: boolean;
  bold?: boolean;
  mark?: boolean;
  code?: boolean;
  keyboard?: boolean;
}

export const Text: React.FC<TextProps> = ({
  children,
  variant,
  disabled,
  underline,
  deleted,
  italic,
  bold,
  mark,
  code,
  keyboard,
  className,
  ...restProps
}) => {
  return (
    <div
      className={`${classNames(styles.container, {
        [styles.secondary]: variant === "secondary",
        [styles.success]: variant === "success",
        [styles.warning]: variant === "warning",
        [styles.danger]: variant === "danger",
        [styles.disabled]: disabled,
        [styles.underline]: underline,
        [styles.deleted]: deleted,
        [styles.italic]: italic,
        [styles.bold]: bold,
        [styles.mark]: mark,
        [styles.code]: code,
        [styles.keyboard]: keyboard,
      })} ${className}`}
      {...restProps}
    >
      {children}
    </div>
  );
};
