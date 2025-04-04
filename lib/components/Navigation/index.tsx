import classNames from "classnames";
import { Flex } from "../Flex";
import { Spacing } from "../Spacing";
import { Typography } from "../Typography";

import styles from "./styles.module.scss";

export interface NavigationItem {
  key: string;
  title: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

interface NavigationProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  items: NavigationItem[];
  selected?: string;
}

const { Text } = Typography;

export const Navigation: React.FC<NavigationProps> = ({
  items,
  selected,
  className,
  ...restProps
}) => {
  return (
    <Spacing className={`${styles.navigation} ${className}`} {...restProps}>
      <Flex direction="column" gap="sm">
        {items.map((item, index) => {
          return (
            <Flex
              gap="md"
              align="center"
              key={index}
              className={classNames(styles.item, {
                [styles.selected]: item.key === selected,
              })}
              onClick={item.onClick}
            >
              {item.icon ?? null}
              <Text size="md" key={index}>
                {item.title}
              </Text>
            </Flex>
          );
        })}
      </Flex>
    </Spacing>
  );
};
