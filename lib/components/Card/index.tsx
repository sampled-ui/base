import { HTMLAttributes, RefObject } from "react";

import classNames from "classnames";

import styles from "./styles.module.scss";

interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  image?: string;
  ref?: RefObject<HTMLDivElement | null>;
}

export const Card: React.FC<CardProps> = ({
  image,
  className,
  children,
  ref,
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
      className={classNames(styles.card, className)}
      ref={ref}
      {...restProps}
    >
      {imageElement}
      {children}
    </div>
  );
};
