import classNames from "classnames";

import styles from "./Link.module.scss";
import { Text, TextProps } from "./Text";

import "../../theme/theme.css";
import "../../theme/variables.css";

export interface LinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  size?: "sm" | "md" | "lg";
  textProps?: TextProps;
  ref?: React.RefObject<HTMLAnchorElement | null>;
}

const defaultProps: Partial<LinkProps> = {
  size: "sm",
};

export const Link: React.FC<LinkProps> = ({
  size,
  textProps,
  className,
  children,
  ref,
  ...restProps
}) => {
  size = size ?? defaultProps.size;
  return (
    <a ref={ref} className={classNames(styles.link, className)} {...restProps}>
      <Text {...{ ...textProps, size }}>{children}</Text>
    </a>
  );
};
