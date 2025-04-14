import { JSX, useEffect, useRef, useState } from "react";

import classNames from "classnames";

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

interface MenuProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "style"> {
  items: {
    title: string;
    icon?: JSX.Element;
    onClick: () => void;
  }[];
  trigger?: MenuTrigger;
  alignment?: MenuAlignmentPosition;
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
  className,
  children,
  ref,
  ...restProps
}) => {
  alignment = alignment || defaultProps.alignment;
  trigger = trigger || defaultProps.trigger;

  const [open, setOpen] = useState(false);
  const innerRef = useRef<HTMLDivElement>(null);
  const [innerRect, setInnerRect] = useState<DOMRect | undefined>();
  const [position, setPosition] = useState<Position | undefined>();

  useEffect(() => {
    if (innerRef.current) {
      const rect = innerRef.current?.getBoundingClientRect();
      setInnerRect(rect);
    }
  }, [innerRef]);

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
      onClick={() => {
        if (trigger === "click") {
          setOpen((prev) => !prev);
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
          <div className={styles.item} key={item.title} onClick={item.onClick}>
            {item.icon ?? null}
            <Text size="md">{item.title}</Text>
          </div>
        ))}
      </Flex>
      <div ref={innerRef}>{children}</div>
    </div>
  );
};
