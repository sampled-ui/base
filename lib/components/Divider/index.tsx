import styles from "./styles.module.scss";

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
