import { useEffect } from "react";
import { Flex } from "../Flex";
import { Typography } from "../Typography";

import { Divider } from "../Divider";
import styles from "./styles.module.scss";

const { Heading } = Typography;

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  id: string;
  divided?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  title,
  id,
  divided,
  children,
  className,
  ...restProps
}) => {
  const { hash } = window.location;
  useEffect(() => {
    if (hash === `#${id}`) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [id, hash]);

  return (
    <Flex
      id={id}
      direction="column"
      align="start"
      gap="md"
      className={`${styles.section} ${className}`}
      {...restProps}
    >
      <Heading level={3} className={styles.title}>
        {title}
      </Heading>
      {children}
      {divided ? <Divider className={styles.divider} /> : null}
    </Flex>
  );
};
