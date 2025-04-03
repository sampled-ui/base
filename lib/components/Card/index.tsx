import { HTMLAttributes } from "react";

import classNames from "classnames";
import { Flex, FlexProps } from "../Flex";
import { Heading } from "../Typography/Heading";
import styles from "./styles.module.scss";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  innerProps?: FlexProps
}

export const Card: React.FC<CardProps> = ({
  title,
  innerProps,
  className,
  children,
  ...restProps
}) => {
  return (
    <div className={classNames(styles.card, className)} {...restProps}>
      <Flex gap="lg" direction="column" align="start" {...innerProps}>
        {title ? <Heading level={4}>{title}</Heading> : null}
        {children}
      </Flex>
    </div>
  );
};
