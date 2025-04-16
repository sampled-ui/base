import classNames from "classnames";

import { Flex } from "../Flex";
import { Typography } from "../Typography";

import styles from "./styles.module.scss";

interface TabItem {
  key: string;
  title: string;
  onClick?: () => void;
}

interface TabsProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onSelect"> {
  items: TabItem[];
  selected?: string;
  onSelect?: (item: TabItem) => void;
  ref?: React.RefObject<HTMLDivElement | null>;
}

export const Tabs: React.FC<TabsProps> = ({
  items,
  selected,
  onSelect,
  className,
  ref,
}) => {
  return (
    <Flex gap="md" className={classNames(styles.tabs, className)} ref={ref}>
      {items.map((item) => (
        <Typography.Text
          bold
          size="md"
          className={styles.tab}
          variant={item.key === selected ? "primary" : "secondary"}
          key={item.key}
          onClick={() => {
            item.onClick?.();
            onSelect?.(item);
          }}
        >
          {item.title}
        </Typography.Text>
      ))}
    </Flex>
  );
};
