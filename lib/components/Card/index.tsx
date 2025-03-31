import { HTMLAttributes } from "react";

import classNames from "classnames";
import { Flex } from "../Flex";
import { Heading } from "../Typography/Heading";
import styles from "./index.module.scss";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
}

export const Card: React.FC<CardProps> = ({ title, className, children }) => {
  return (
    <div className={classNames(styles.card, className)}>
      <Flex gap="lg" direction="column" align="start">
        <Heading level={4}>{title}</Heading>
        {children}
      </Flex>
    </div>
  );
};
