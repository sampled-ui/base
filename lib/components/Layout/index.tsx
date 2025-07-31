import classNames from "classnames";

import styles from "./styles.module.scss";

import "../../theme/theme.css";
import "../../theme/variables.css";

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

interface BreakpointProps extends React.HTMLAttributes<HTMLDivElement> {
  breakpoint?: "md" | "lg" | "xl";
  ref?: React.RefObject<HTMLDivElement | null>;
}
export const Breakpoint: React.FC<BreakpointProps> = ({
  children,
  className,
  breakpoint = "lg",
  ...restProps
}) => {
  return (
    <div
      // eslint-disable-next-line max-len
      className={`${classNames(styles.breakpoint, { [styles.md]: breakpoint === "md", [styles.lg]: breakpoint === "lg", [styles.xl]: breakpoint === "xl" })} ${className}`}
      {...restProps}
    >
      <div className={styles.breakpointInner}>{children}</div>
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
