import styles from "./styles.module.scss";

interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  ref?: React.RefObject<HTMLDivElement | null>;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  className,
  ref,
  ...restProps
}) => {
  return (
    <div ref={ref} className={`${styles.layout} ${className}`} {...restProps}>
      {children}
    </div>
  );
};

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  ref?: React.RefObject<HTMLDivElement | null>;
}

export const Header: React.FC<HeaderProps> = ({
  children,
  className,
  ref,
  ...restProps
}) => {
  return (
    <div ref={ref} className={`${styles.header} ${className}`} {...restProps}>
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
