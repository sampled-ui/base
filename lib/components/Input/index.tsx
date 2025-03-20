import classNames from "classnames";
import { SizeUnits } from "../../units";
import styles from "./styles.module.scss";

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: Omit<SizeUnits, "xs" | "xl">;
}

const defaultProps: Partial<InputProps> = {
  size: SizeUnits.md,
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
        [styles.size_sm]: size === SizeUnits.sm,
        [styles.size_md]: size === SizeUnits.md,
        [styles.size_lg]: size === SizeUnits.lg,
      })}`}
      {...restProps}
    />
  );
};
