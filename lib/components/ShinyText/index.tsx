import styles from "./index.module.scss";

interface ShinyTextProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ShinyText: React.FC<ShinyTextProps> = ({ children }) => {
  return <div className={styles.shiny}>{children}</div>;
};
