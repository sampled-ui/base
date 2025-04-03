import { HTMLAttributes } from "react";

import classNames from "classnames";
import { Flex } from "../Flex";
import { Heading } from "../Typography/Heading";
import styles from "./styles.module.scss";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
}

export const Card: React.FC<CardProps> = ({
  title,
  className,
  children,
  ...restProps
}) => {
  return (
    <div className={classNames(styles.card, className)} {...restProps}>
      <Flex gap="lg" direction="column" align="start">
        {title ? <Heading level={4}>{title}</Heading> : null}
        {children}
      </Flex>
    </div>
  );
};
