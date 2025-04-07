import { useEffect, useRef, useState } from "react";

import classNames from "classnames";

import { Flex } from "../Flex";
import { Typography } from "../Typography";

import styles from "./styles.module.scss";

type MenuAlignmentPosition = "top" | "bottom";

type MenuTrigger = "hover" | "click";

interface MenuProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "style"> {
  items: {
    label: string;
    icon?: string;
    onClick: () => void;
  }[];
  trigger?: MenuTrigger;
  alignment?: MenuAlignmentPosition;
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
  ...restProps
}) => {
  alignment = alignment || defaultProps.alignment;
  trigger = trigger || defaultProps.trigger;

  const [open, setOpen] = useState(false);
  const innerRef = useRef<HTMLDivElement>(null);
  const [innerRect, setInnerRect] = useState<DOMRect | undefined>();
  const [position, setPosition] = useState<
    { left: number; bottom?: number; top?: number } | undefined
  >();

  useEffect(() => {
    if (innerRef.current) {
      const rect = innerRef.current?.getBoundingClientRect();
      setInnerRect(rect);
    }
  }, [innerRef]);

  useEffect(() => {
    if (innerRect) {
      const left = innerRect.x;
      if (alignment === "top") {
        const bottom = innerRect.height + 8;
        setPosition({ left, bottom });
      } else if (alignment === "bottom") {
        const top = innerRect.height + 8;
        setPosition({ left, top });
      }
    }
  }, [alignment, innerRect]);

  return (
    <div
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
        style={{ bottom: position?.bottom, top: position?.top, left: 0 }}
        {...restProps}
      >
        {items.map((item) => (
          <div className={styles.item} key={item.label}>
            <Text size="md">{item.label}</Text>
          </div>
        ))}
      </Flex>
      <div ref={innerRef}>{children}</div>
    </div>
  );
};
