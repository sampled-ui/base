import { useState } from "react";

import classNames from "classnames";

import { Flex } from "../Flex";
import { Typography } from "../Typography";

import styles from "./styles.module.scss";

interface TabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onSelect"> {
  items: {
    key: string;
    title: string;
    onClick?: () => void;
  }[];
  defaultSelection?: string;
  onSelect?: (key: string) => void;
  ref?: React.RefObject<HTMLDivElement | null>;
}

export const Tabs: React.FC<TabsProps> = ({ items, defaultSelection, onSelect, className, ref }) => {
  const [selected, setSelected] = useState<string | undefined>(
    defaultSelection
  );
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
            setSelected(item.key);
            item.onClick?.();
            onSelect?.(item.key);
          }}
        >
          {item.title}
        </Typography.Text>
      ))}
    </Flex>
  );
};
