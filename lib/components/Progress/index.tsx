import { RefObject } from "react";

import classNames from "classnames";

import styles from "./styles.module.scss";

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  ref?: RefObject<HTMLDivElement | null>;
  loading?: boolean;
  done?: boolean;
}

export const Progress: React.FC<ProgressProps> = ({
  loading,
  done,
  className,
  ...restProps
}) => {
  return (
    <div
      className={classNames(styles.progress, className, {
        [styles.loading]: loading,
        [styles.done]: done,
      })}
      {...restProps}
    />
  );
};
