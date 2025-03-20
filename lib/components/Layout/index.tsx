import styles from "./styles.module.scss";

export const Layout: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...restProps
}) => {
  return (
    <div className={`${styles.layout} ${className}`} {...restProps}>
      {children}
    </div>
  );
};

export const Header: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...restProps
}) => {
  return (
    <div className={`${styles.header} ${className}`} {...restProps}>
      {children}
    </div>
  );
};

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  collapsible?: boolean;
  collapsed?: boolean;
  onCollapse?: () => void;
  onExpand?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  children,
  className,
  ...restProps
}) => {
  return (
    <div className={`${styles.sidebar} ${className}`} {...restProps}>
      {children}
    </div>
  );
};
