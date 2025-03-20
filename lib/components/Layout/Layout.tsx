import styles from "./Layout.module.scss";

interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children, className }) => {
  return <div className={`${styles.layout} ${className}`}>{children}</div>;
};
