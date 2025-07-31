import classNames from "classnames";

import styles from "./Paragraph.module.scss";

import "../../theme/theme.css";
import "../../theme/variables.css";

export interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  size?: "sm" | "md" | "lg";
  ref?: React.RefObject<HTMLParagraphElement | null>;
}

const defaultProps: Partial<ParagraphProps> = {
  size: "sm",
};

export const Paragraph: React.FC<ParagraphProps> = ({
  size,
  className,
  children,
  ref,
  ...restProps
}) => {
  size = size || defaultProps.size;

  return (
    <p
      ref={ref}
      className={classNames(styles.paragraph, className, {
        [styles.sm]: size === "sm",
        [styles.md]: size === "md",
        [styles.lg]: size === "lg",
      })}
      {...restProps}
    >
      {children}
    </p>
  );
};
