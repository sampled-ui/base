import { JSX } from "react";

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
}

export const Showcase: React.FC<ShowcaseProps> = ({
  title,
  subtitle,
  image,
  backgroundSize,
  className,
  width,
  ...restProps
}) => {
  return (
    <div
      className={classNames(styles.showcase, className)}
      style={{
        height: "50vh",
        background: `linear-gradient(rgba(0,0,0,0) 0,rgba(0,0,0,0.5) 50% 50%, rgb(0,0,0) 90% 100%), url(${image})`,
        ...(backgroundSize ? { backgroundSize } : {}),
        ...(width ? { width } : {}),
        ...restProps.style,
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
