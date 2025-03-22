import classNames from "classnames";
import styles from "./Link.module.scss";

interface LinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  size?: "sm" | "md" | "lg";
}

const defaultProps: Partial<LinkProps> = {
  size: "sm",
};

export const Link: React.FC<LinkProps> = ({
  size,
  className,
  children,
  ...restProps
}) => {
  size = size ?? defaultProps.size;
  return (
    <a
      className={`${classNames(styles.link, {
        [styles.sm]: size === "sm",
        [styles.md]: size === "md",
        [styles.lg]: size === "lg",
      })} ${className}`}
      {...restProps}
    >
      {children}
    </a>
  );
};
