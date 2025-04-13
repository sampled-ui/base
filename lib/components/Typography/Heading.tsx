import { HeadingUnits } from "../../units";

import styles from "./Heading.module.scss";

export interface HeadingProps
  extends Omit<React.HTMLAttributes<HTMLHeadingElement>, "children"> {
  children: string;
  level: HeadingUnits;
  ref?: React.RefObject<HTMLHeadingElement | null>;
}

export const Heading: React.FC<HeadingProps> = ({
  level,
  children,
  className,
  ref,
  ...restProps
}) => {
  switch (level) {
    case 1:
      return (
        <h1
          className={`${styles.heading} ${className}`}
          ref={ref}
          {...restProps}
        >
          {children}
        </h1>
      );
    case 2:
      return (
        <h2
          className={`${styles.heading} ${className}`}
          ref={ref}
          {...restProps}
        >
          {children}
        </h2>
      );
    case 3:
      return (
        <h3
          className={`${styles.heading} ${className}`}
          ref={ref}
          {...restProps}
        >
          {children}
        </h3>
      );
    case 4:
      return (
        <h4
          className={`${styles.heading} ${className}`}
          ref={ref}
          {...restProps}
        >
          {children}
        </h4>
      );
    case 5:
      return (
        <h5
          className={`${styles.heading} ${className}`}
          ref={ref}
          {...restProps}
        >
          {children}
        </h5>
      );
  }
};
