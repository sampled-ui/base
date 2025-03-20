import { Flex } from "../Flex";
import { Spacing } from "../Spacing";
import { Typography } from "../Typography";

import styles from "./styles.module.scss";

export interface NavigationItem {
  title: string;
  href?: string;
  onClick?: () => void;
}

interface NavigationProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  items: NavigationItem[];
}

const { Text } = Typography;

export const Navigation: React.FC<NavigationProps> = ({
  items,
  className,
  ...restProps
}) => {
  return (
    <Spacing className={`${styles.navigation} ${className}`} {...restProps}>
      <Flex direction="column" gap="sm">
        {items.map((item, index) => {
          return (
            <div className={styles.item}>
              <Text size="md" key={index}>
                {item.title}
              </Text>
            </div>
          );
        })}
      </Flex>
    </Spacing>
  );
};
