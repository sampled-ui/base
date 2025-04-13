import { HTMLAttributes, RefObject } from "react";

import classNames from "classnames";

import { Flex, FlexProps } from "../Flex";
import { Spacing } from "../Spacing";
import { Heading } from "../Typography/Heading";

import styles from "./styles.module.scss";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  image?: string;
  innerProps?: FlexProps;
  ref?: RefObject<HTMLDivElement | null>;
}

export const Card: React.FC<CardProps> = ({
  title,
  image,
  innerProps,
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
      <Spacing gap="xl">
        <Flex gap="lg" direction="column" align="start" {...innerProps}>
          {title ? <Heading level={4}>{title}</Heading> : null}
          {children}
        </Flex>
      </Spacing>
    </div>
  );
};
