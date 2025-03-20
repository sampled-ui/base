import classNames from "classnames";
import { SizeUnits } from "../../units";
import styles from "./styles.module.scss";

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: Omit<SizeUnits, "xs" | "xl">;
}

const defaultProps: Partial<InputProps> = {
  size: "md",
};

export const Input: React.FC<InputProps> = ({
  className,
  size,
  ...restProps
}) => {
  size = size ?? defaultProps.size;
  return (
    <input
      className={`${className} ${classNames(styles.input, {
        [styles.size_sm]: size === "sm",
        [styles.size_md]: size === "md",
        [styles.size_lg]: size === "lg",
      })}`}
      {...restProps}
    />
  );
};
