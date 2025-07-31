import { HTMLAttributes, RefObject } from "react";

import classNames from "classnames";

import styles from "./styles.module.scss";

import "../../theme/theme.css";
import "../../theme/variables.css";

interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  image?: string;
  hoverable?: boolean;
  ref?: RefObject<HTMLDivElement | null>;
}

export const Card: React.FC<CardProps> = ({
  image,
  className,
  children,
  ref,
  hoverable,
  ...restProps
}) => {
  const imageElement = image ? (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className={styles.image}
    />
  ) : null;

  return (
    <div
      className={classNames(styles.card, className, {
        [styles.hoverable]: hoverable,
      })}
      ref={ref}
      {...restProps}
    >
      {imageElement}
      {children}
    </div>
  );
};
