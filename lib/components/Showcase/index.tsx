import { CSSProperties, JSX } from "react";

import classNames from "classnames";

import { Typography } from "../Typography";

import styles from "./styles.module.scss";

interface ShowcaseProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  title: string | JSX.Element;
  subtitle: string | JSX.Element | JSX.Element[];
  image: string;
  backgroundSize?: string;
  width?: string;
  ref?: React.RefObject<HTMLDivElement | null>;
  style?: CSSProperties
}

export const Showcase: React.FC<ShowcaseProps> = ({
  title,
  subtitle,
  image,
  backgroundSize,
  className,
  width,
  ref,
  style,
  ...restProps
}) => {
  return (
    <div
      ref={ref}
      className={classNames(styles.showcase, className)}
      style={{
        height: "50vh",
        background: `var(--color-gradient), url(${image})`,
        ...(backgroundSize ? { backgroundSize } : {}),
        ...(width ? { width } : {}),
        ...style,
      }}
      {...restProps}
    >
      {typeof title === "string" ? (
        <Typography.Heading level={3} className={styles.title}>
          {title}
        </Typography.Heading>
      ) : (
        title
      )}
      {typeof subtitle === "string" ? (
        <Typography.Text bold size="md">
          {subtitle}
        </Typography.Text>
      ) : (
        subtitle
      )}
    </div>
  );
};

export default Showcase;
