import { ReactNode, RefObject, useState } from "react";

import classNames from "classnames";

import { Flex } from "../Flex";
import { Typography } from "../Typography";

import styles from "./styles.module.scss";

interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  items: {
    key: string;
    title: string;
    icon?: ReactNode | string;
    onClick?: () => void;
    content?: ReactNode;
  }[];
  defaultSelection?: string | string[];
  ref?: RefObject<HTMLDivElement | null>;
}

const Accordion: React.FC<AccordionProps> = ({
  items,
  defaultSelection,
  className,
  ref,
  ...restProps
}) => {
  const [selection, setSelection] = useState<string[]>(
    defaultSelection
      ? Array.isArray(defaultSelection)
        ? defaultSelection
        : [defaultSelection]
      : []
  );

  return (
    <Flex
      direction="column"
      align="start"
      className={classNames(styles.accordion, className)}
      {...restProps}
      ref={ref}
    >
      {items.map((item) => (
        <div
          key={item.key}
          className={classNames(styles.item, {
            [styles.selected]: selection.includes(item.key),
          })}
          onClick={() => {
            item.onClick?.();
            if (selection.includes(item.key)) {
              setSelection(selection.filter((key) => key !== item.key));
            } else {
              setSelection([...selection, item.key]);
            }
          }}
        >
          <Flex direction="column" align="start">
            <Flex gap="sm" className={styles.title}>
              {item.icon ?? null}
              <Typography.Text size="sm">{item.title}</Typography.Text>
            </Flex>
            <div
              className={classNames(styles.content, {
                [styles.selected]: selection.includes(item.key),
              })}
            >
              {item.content}
            </div>
          </Flex>
        </div>
      ))}
    </Flex>
  );
};

export default Accordion;
