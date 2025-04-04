import { JSX } from "react";

import classNames from "classnames";

import { Typography } from "../Typography";

import styles from "./styles.module.scss";

interface ShowcaseProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "style"> {
  title: string;
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
        background: `linear-gradient(whitesmoke, #333), url(${image})`,
        ...(backgroundSize ? { backgroundSize } : {}),
        ...(width ? { width } : {}),
      }}
      {...restProps}
    >
      <Typography.Heading level={3} className={styles.title}>
        {title}
      </Typography.Heading>
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
