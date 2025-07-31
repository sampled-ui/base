import classNames from "classnames";

import { HeadingUnits } from "../../utils/units";

import styles from "./Heading.module.scss";

import "../../theme/theme.css";
import "../../theme/variables.css";

export interface HeadingProps
  extends Omit<React.HTMLAttributes<HTMLHeadingElement>, "children"> {
  children: string;
  level: HeadingUnits;
  bold?: boolean;
  bolder?: boolean;
  ref?: React.RefObject<HTMLHeadingElement | null>;
}

export const Heading: React.FC<HeadingProps> = ({
  level,
  children,
  className,
  bold = false,
  bolder = false,
  ref,
  ...restProps
}) => {
  switch (level) {
    case 1:
      return (
        <h1
          className={classNames(`${styles.heading} ${className}`, {
            [styles.bold]: bold,
            [styles.bolder]: bolder,
          })}
          ref={ref}
          {...restProps}
        >
          {children}
        </h1>
      );
    case 2:
      return (
        <h2
          className={classNames(`${styles.heading} ${className}`, {
            [styles.bold]: bold,
            [styles.bolder]: bolder,
          })}
          ref={ref}
          {...restProps}
        >
          {children}
        </h2>
      );
    case 3:
      return (
        <h3
          className={classNames(`${styles.heading} ${className}`, {
            [styles.bold]: bold,
            [styles.bolder]: bolder,
          })}
          ref={ref}
          {...restProps}
        >
          {children}
        </h3>
      );
    case 4:
      return (
        <h4
          className={classNames(`${styles.heading} ${className}`, {
            [styles.bold]: bold,
            [styles.bolder]: bolder,
          })}
          ref={ref}
          {...restProps}
        >
          {children}
        </h4>
      );
    case 5:
      return (
        <h5
          className={classNames(`${styles.heading} ${className}`, {
            [styles.bold]: bold,
            [styles.bolder]: bolder,
          })}
          ref={ref}
          {...restProps}
        >
          {children}
        </h5>
      );
  }
};
