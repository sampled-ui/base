import styles from "./styles.module.scss";

export const Divider: React.FC<React.HTMLAttributes<HTMLHRElement>> = ({
  className,
  ...restProps
}) => {
  return <hr className={`${styles.hr} ${className}`} {...restProps} />;
};
