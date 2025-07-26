import classNames from "classnames";

import { SizeUnits, Variants } from "../../units";

import styles from "./Text.module.scss";

export interface TextProps
  extends React.HTMLAttributes<HTMLDivElement | HTMLPreElement> {
  variant?: Omit<Variants, "primary">;
  size?: Omit<SizeUnits, "xxl">;
  disabled?: boolean;
  underline?: boolean;
  deleted?: boolean;
  italic?: boolean;
  bold?: boolean;
  mark?: boolean;
  code?: boolean;
  keyboard?: boolean;
  ref?: React.RefObject<HTMLDivElement | null>;
}

const defaultProps: Partial<TextProps> = {
  size: "sm",
};

export const Text: React.FC<TextProps> = ({
  children,
  variant,
  size,
  disabled,
  underline,
  deleted,
  italic,
  bold,
  mark,
  code,
  keyboard,
  className,
  ref,
  ...restProps
}) => {
  size = size || defaultProps.size;
  const cn = `${classNames(styles.container, {
    [styles.secondary]: variant === "secondary",
    [styles.success]: variant === "success",
    [styles.warning]: variant === "warning",
    [styles.danger]: variant === "danger",
    [styles.xs]: size === "xs",
    [styles.sm]: size === "sm",
    [styles.md]: size === "md",
    [styles.lg]: size === "lg",
    [styles.xl]: size === "xl",
    [styles.disabled]: disabled,
    [styles.underline]: underline,
    [styles.deleted]: deleted,
    [styles.italic]: italic,
    [styles.bold]: bold,
    [styles.mark]: mark,
    [styles.code]: code || keyboard,
    [styles.keyboard]: keyboard,
  })} ${className}`;

  if (code) {
    return (
      <pre
        {...restProps}
        ref={ref as unknown as React.RefObject<HTMLPreElement>}
        className={cn}
        style={{ margin: "initial" }}
        onClick={() => {
          navigator.clipboard.writeText(children as string);
        }}
      >
        {children}
      </pre>
    );
  }

  return (
    <div ref={ref} className={cn} {...restProps}>
      {children}
    </div>
  );
};
