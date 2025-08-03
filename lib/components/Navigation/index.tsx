import classNames from "classnames";

import { SizeUnits } from "../../utils/units";
import { Flex } from "../Flex";
import { Spacing } from "../Spacing";
import { Typography } from "../Typography";

import styles from "./styles.module.scss";

import "../../theme/theme.css";
import "../../theme/variables.css";

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
  size?: SizeUnits;
  ref?: React.RefObject<HTMLDivElement | null>;
}

const { Text } = Typography;

export const Navigation: React.FC<NavigationProps> = ({
  items,
  selected,
  size = "md",
  className,
  ref,
  ...restProps
}) => {
  return (
    <Spacing
      gap={size}
      className={`${styles.navigation} ${className}`}
      ref={ref}
      {...restProps}
    >
      <Flex direction="column" gap={size === "sm" ? undefined : "sm"}>
        {items.map((item, index) => {
          return (
            <Flex
              gap={size}
              align="center"
              key={index}
              className={classNames(styles.item, {
                [styles.selected]: item.key === selected,
              })}
              onClick={item.onClick}
            >
              {item.icon ?? null}
              <Text size={size} key={index}>
                {item.title}
              </Text>
            </Flex>
          );
        })}
      </Flex>
    </Spacing>
  );
};
