import { useCallback } from "react";

import classNames from "classnames";

import { SizeUnits } from "../../units";
import { Menu, MenuItem, MenuProps } from "../Menu";
import { Typography } from "../Typography";

import styles from "./styles.module.scss";

interface SelectProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  menu: Omit<MenuProps, "size" | "ref">;
  placeholder?: string;
  size?: Omit<SizeUnits, "xs" | "xl">;
  ref?: React.RefObject<HTMLDivElement | null>;
}

const defaultProps: Partial<SelectProps> = {
  size: "md",
};

export const Select: React.FC<SelectProps> = ({
  size,
  placeholder,
  menu,
  className,
  ref,
  ...restProps
}) => {
  size = size ?? defaultProps.size;

  const renderSelected = useCallback((selected: MenuItem | MenuItem[]) => {
    if (!selected) return null;
    if (Array.isArray(selected)) {
      return (
        <Typography.Text>
          {(selected as MenuItem[])?.map((item) => item.title)?.join(", ")}
        </Typography.Text>
      );
    }
    return <Typography.Text>{(selected as MenuItem).title}</Typography.Text>;
  }, []);

  return (
    <Menu size={size} ref={ref} select {...menu}>
      {({ selected, innerRef }) => (
        <div
          ref={innerRef}
          className={`${className} ${classNames(styles.select, {
            [styles.sm]: size === "sm",
            [styles.md]: size === "md",
            [styles.lg]: size === "lg",
          })}`}
          {...restProps}
        >
          {selected ? (
            renderSelected(selected)
          ) : (
            <Typography.Text disabled>{placeholder}</Typography.Text>
          )}
        </div>
      )}
    </Menu>
  );
};
