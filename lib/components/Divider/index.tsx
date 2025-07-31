import styles from "./styles.module.scss";

import "../../theme/theme.css";
import "../../theme/variables.css";

interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  ref?: React.RefObject<HTMLHRElement | null>;
}

export const Divider: React.FC<DividerProps> = ({
  className,
  ref,
  ...restProps
}) => {
  return (
    <hr className={`${styles.hr} ${className}`} ref={ref} {...restProps} />
  );
};
