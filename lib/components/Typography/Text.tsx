import classNames from "classnames";

import styles from "./Text.module.scss";

export interface TextProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  children: string;
  type?: "secondary" | "success" | "warning" | "danger";
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
  type,
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
        [styles.secondary]: type === "secondary",
        [styles.success]: type === "success",
        [styles.warning]: type === "warning",
        [styles.danger]: type === "danger",
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
