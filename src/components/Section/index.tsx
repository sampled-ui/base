import { JSX, RefObject, useEffect } from "react";

import { FileCode, Github } from "lucide-react";

import Accordion from "../../../lib/components/Accordion";
import { Divider } from "../../../lib/components/Divider";
import { Flex } from "../../../lib/components/Flex";
import { Typography } from "../../../lib/components/Typography";
import { Intros } from "../../text/en";

import { CodeSection } from "./CodeSection";
import styles from "./styles.module.scss";

const { Heading } = Typography;

interface SectionProps<T = {}> extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  id: string;
  divided?: boolean;
  codeExample?: (args?: T) => JSX.Element;
  codeExampleProps?: T;
  ref?: RefObject<HTMLDivElement | null>;
}

export function Section<T>({
  title,
  id,
  divided,
  children,
  className,
  codeExample,
  codeExampleProps,
  ref,
  ...restProps
}: SectionProps<T>) {
  const { hash } = window.location;
  useEffect(() => {
    const element = document.getElementById(id);
    if (hash === `#${id}`) {
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [id, hash]);

  const intro = Intros[id as keyof typeof Intros];

  return (
    <Flex
      ref={ref}
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
      <Typography.Paragraph size="md" style={{ margin: "initial" }}>
        {intro}
      </Typography.Paragraph>
      {children}
      {codeExample ? codeExample(codeExampleProps) : null}
      {codeExample ? (
        <Accordion
          style={{ width: "100%" }}
          items={[
            {
              key: "code",
              title: "View example code",
              icon: <FileCode size={20} />,
              content: <CodeSection code={codeExample} />,
            },
            {
              key: "source",
              title: "View source code",
              icon: <Github size={20} />,
              onClick: () => {
                window.open("https://github.com/sampled-ui/base", "_blank");
              },
            },
          ]}
        />
      ) : null}
      {}
      {divided ? <Divider className={styles.divider} /> : null}
    </Flex>
  );
}
