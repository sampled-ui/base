import { useState } from "react";

import classNames from "classnames";
import { ChevronRight } from "lucide-react";

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
  children?: NavigationItem[];
}

interface NavigationProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children" | "onClick"> {
  items: NavigationItem[];
  selected?: string | string[];
  size?: SizeUnits;
  onClick?: (item: NavigationItem) => void;
  ref?: React.RefObject<HTMLDivElement | null>;
}

const { Text } = Typography;

// Helper function to check if an item is a direct child of the selected item
const isDirectChildOfSelected = (
  item: NavigationItem,
  selectedKey?: string | string[],
  allItems: NavigationItem[] = []
): boolean => {
  if (!selectedKey) return false;

  // Find the selected item in the tree
  const findSelectedItem = (items: NavigationItem[]): NavigationItem | null => {
    for (const currentItem of items) {
      if (
        Array.isArray(selectedKey)
          ? selectedKey.includes(currentItem.key)
          : currentItem.key === selectedKey
      ) {
        return currentItem;
      }
      if (currentItem.children) {
        const found = findSelectedItem(currentItem.children);
        if (found) return found;
      }
    }
    return null;
  };

  const selectedItem = findSelectedItem(allItems);
  if (!selectedItem || !selectedItem.children) return false;

  // Check if current item is a direct child of selected item
  return selectedItem.children.some((child) => child.key === item.key);
};

export const Navigation: React.FC<NavigationProps> = ({
  items,
  selected,
  size = "md",
  className,
  onClick,
  ref,
  ...restProps
}) => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleExpanded = (key: string) => {
    setExpandedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(key)) {
        newSet.delete(key);
      } else {
        newSet.add(key);
      }
      return newSet;
    });
  };

  const renderNavigationItem = (
    item: NavigationItem,
    level: number = 0,
    allItems: NavigationItem[] = []
  ): React.ReactNode => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedItems.has(item.key);
    const isSelected = Array.isArray(selected)
      ? selected.includes(item.key)
      : item.key === selected;
    const isChildOfSelected = isDirectChildOfSelected(item, selected, allItems);

    return (
      <div key={item.key} style={{ width: "100%" }}>
        <Flex
          gap={size}
          className={classNames(styles.item, {
            [styles.selected]: isSelected,
            [styles.childAccent]: isChildOfSelected,
            [styles.nestedGray]:
              level > 0 && level % 2 === 1 && !isSelected && !isChildOfSelected,
          })}
          style={{
            paddingLeft: `calc(${level} * 2rem + var(--spacing-md))`,
          }}
          onClick={() => {
            if (item.onClick) {
              item.onClick();
            } else {
              if (onClick) {
                onClick(item);
              }
            }
            if (hasChildren) {
              console.debug("Expanding item");
              toggleExpanded(item.key);
            }
          }}
        >
          {hasChildren && (
            <ChevronRight
              size={16}
              style={{
                transform: isExpanded ? "rotate(90deg)" : "rotate(0deg)",
                transition: "transform 0.2s ease",
              }}
            />
          )}
          {item.icon ?? null}
          <Text size={size}>{item.title}</Text>
        </Flex>
        {hasChildren && isExpanded && (
          <div className={styles.childrenContainer}>
            {item.children!.map((child) =>
              renderNavigationItem(child, level + 1, allItems)
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <Spacing
      gap={size}
      className={`${styles.navigation} ${className}`}
      ref={ref}
      {...restProps}
    >
      <Flex
        direction="column"
        align="stretch"
        gap={size === "sm" ? undefined : "sm"}
      >
        {items.map((item) => renderNavigationItem(item, 0, items))}
      </Flex>
    </Spacing>
  );
};
