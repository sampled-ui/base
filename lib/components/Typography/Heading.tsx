import { HeadingUnits } from "../../units";

import styles from "./Heading.module.scss";

export interface HeadingProps
  extends Omit<React.HTMLAttributes<HTMLHeadingElement>, "children"> {
  children: string;
  level: HeadingUnits;
}

export const Heading: React.FC<HeadingProps> = ({
  level,
  children,
  className,
  ...restProps
}) => {
  switch (level) {
    case 1:
      return (
        <h1 className={`${styles.heading} ${className}`} {...restProps}>
          {children}
        </h1>
      );
    case 2:
      return (
        <h2 className={`${styles.heading} ${className}`} {...restProps}>
          {children}
        </h2>
      );
    case 3:
      return (
        <h3 className={`${styles.heading} ${className}`} {...restProps}>
          {children}
        </h3>
      );
    case 4:
      return (
        <h4 className={`${styles.heading} ${className}`} {...restProps}>
          {children}
        </h4>
      );
    case 5:
      return (
        <h5 className={`${styles.heading} ${className}`} {...restProps}>
          {children}
        </h5>
      );
  }
};
