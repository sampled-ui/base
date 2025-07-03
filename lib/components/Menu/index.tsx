import { JSX, useEffect, useRef, useState } from "react";

import classNames from "classnames";

import { SizeUnits } from "../../units";
import { Flex } from "../Flex";
import { Typography } from "../Typography";

import styles from "./styles.module.scss";

type MenuAlignmentPosition =
  | "top"
  | "bottom"
  | "top left"
  | "top right"
  | "bottom left"
  | "bottom right";

type MenuTrigger = "hover" | "click";

export interface MenuItem {
  key: string;
  title: string;
  icon?: JSX.Element;
  onClick?: () => void;
  disabled?: boolean;
  danger?: boolean;
  ref: (node: HTMLDivElement | null) => void;
}

export interface MenuProps
  extends Omit<
    React.HTMLAttributes<HTMLDivElement>,
    "style" | "onSelect" | "children"
  > {
  items: MenuItem[];
  select?: boolean;
  onSelect?: (item: MenuItem) => void;
  defaultSelection?: string | string[];
  multiple?: boolean;
  trigger?: MenuTrigger;
  alignment?: MenuAlignmentPosition;
  size?: Omit<SizeUnits, "xs" | "xl" | "xxl">;
  children?:
    | JSX.Element
    | ((context: {
        selected: MenuItem | MenuItem[] | undefined;
        innerRef: React.RefObject<HTMLDivElement | null>;
      }) => JSX.Element);
  ref?: React.RefObject<HTMLDivElement | null>;
}

interface Position {
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
}

const defaultProps: Partial<MenuProps> = {
  alignment: "top",
  trigger: "hover",
};

const { Text } = Typography;

export const Menu: React.FC<MenuProps> = ({
  items,
  alignment,
  trigger,
  multiple,
  select = false,
  onSelect,
  defaultSelection,
  size = "md",
  className,
  children,
  ref,
  ...restProps
}) => {
  alignment = alignment || defaultProps.alignment;
  trigger = trigger || defaultProps.trigger;

  const [selected, setSelected] = useState<string | string[] | undefined>(
    multiple ? (defaultSelection ?? []) : (defaultSelection ?? undefined)
  );

  const [open, setOpen] = useState(false);
  const innerRef = useRef<HTMLDivElement>(null);
  const [innerRect, setInnerRect] = useState<DOMRect | undefined>();
  const [position, setPosition] = useState<Position | undefined>();

  useEffect(() => {
    const handleClick = () => {
      if (trigger === "click") {
        setOpen((prev) => !prev);
      }
    };

    const node = innerRef.current;

    if (node) {
      const rect = innerRef.current?.getBoundingClientRect();
      setInnerRect(rect);

      node.addEventListener("click", handleClick);
    }

    return () => {
      if (node) {
        node.removeEventListener("click", handleClick);
      }
    };
  }, [innerRef, trigger]);

  useEffect(() => {
    if (innerRect) {
      let position: Position = {};
      if (alignment?.includes("top")) {
        const bottom = innerRect.height + 8;
        position = { bottom };
      } else if (alignment?.includes("bottom")) {
        const top = innerRect.height + 8;
        position = { top };
      }
      if (alignment?.includes("left")) {
        position = { ...position, right: 0 };
      }

      setPosition(position);
    }
  }, [alignment, innerRect]);

  return (
    <div
      ref={ref}
      style={{ position: "relative" }}
      onMouseEnter={() => {
        if (trigger === "hover") {
          setOpen(true);
        }
      }}
      onMouseLeave={() => {
        if (trigger === "hover") {
          setOpen(false);
        }
      }}
      onBlur={() => {
        if (trigger === "click") {
          setOpen(() => false);
        }
      }}
    >
      <Flex
        direction="column"
        justify="start"
        align="stretch"
        gap="sm"
        className={classNames(styles.menu, { [styles.open]: open }, className)}
        style={{ ...position }}
        {...restProps}
      >
        {items.map((item) => (
          <div
            key={item.key}
            className={classNames(styles.item, {
              [styles.selected]:
                typeof selected === "string"
                  ? selected === item.key && select
                  : selected?.includes(item.key) && select,
              [styles.disabled]: item.disabled,
              [styles.danger]: item.danger,
              [styles.sm]: size === "sm",
              [styles.md]: size === "md",
              [styles.lg]: size === "lg",
            })}
            onClick={() => {
              if (onSelect) {
                onSelect(item);
              }
              if (item.onClick) {
                item.onClick();
              }
              if (!select) {
                setOpen(false);
              }
              if (!multiple && select) {
                setSelected(item.key);
                setOpen(false);
              } else if (select) {
                setSelected((prev) => {
                  if (Array.isArray(prev)) {
                    if (prev.includes(item.key)) {
                      return prev.filter((key) => key !== item.key);
                    } else {
                      return [...prev, item.key];
                    }
                  }
                  return [item.key];
                });
              }
            }}
          >
            {item.icon ?? null}
            <Text size={size}>{item.title}</Text>
          </div>
        ))}
      </Flex>
      <div ref={innerRef}>
        {typeof children === "function"
          ? children({
              selected:
                typeof selected === "string"
                  ? items.find(({ key }) => selected === key)
                  : items.filter(({ key }) => selected?.includes(key)),
              innerRef,
            })
          : children}
      </div>
    </div>
  );
};
