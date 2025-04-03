import classNames from "classnames";
import styles from "./Link.module.scss";
import { Text, TextProps } from "./Text";

export interface LinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  size?: "sm" | "md" | "lg";
  textProps?: TextProps;
}

const defaultProps: Partial<LinkProps> = {
  size: "sm",
};

export const Link: React.FC<LinkProps> = ({
  size,
  textProps,
  className,
  children,
  ...restProps
}) => {
  size = size ?? defaultProps.size;
  return (
    <a className={classNames(styles.link, className)} {...restProps}>
      <Text {...{ ...textProps, size }}>{children}</Text>
    </a>
  );
};
