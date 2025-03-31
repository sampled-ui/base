import classNames from "classnames";
import styles from "./Paragraph.module.scss";

export interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  size?: "sm" | "md" | "lg";
}

const defaultProps: Partial<ParagraphProps> = {
  size: "sm",
};

export const Paragraph: React.FC<ParagraphProps> = ({
  size,
  className,
  children,
  ...restProps
}) => {
  size = size || defaultProps.size;

  return (
    <p
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
