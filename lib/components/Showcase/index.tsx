import classNames from "classnames";
import { JSX } from "react";

import { Typography } from "../Typography";
import styles from "./styles.module.scss";

interface ShowcaseProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle: string | JSX.Element | JSX.Element[];
  image: string;
  backgroundSize?: string;
}

export const Showcase: React.FC<ShowcaseProps> = ({
  title,
  subtitle,
  image,
  backgroundSize,
  className,
}) => {
  return (
    <div
      className={classNames(styles.showcase, className)}
      style={{
        background: `linear-gradient(whitesmoke, #333), url(${image})`,
        ...(backgroundSize ? { backgroundSize } : {}),
      }}
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
