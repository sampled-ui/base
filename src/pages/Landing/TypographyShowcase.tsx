import React from "react";

import { Column, Flex, Row, Spacing, Typography } from "../../../lib/main";

const { Heading, Paragraph, Text } = Typography;

interface TypographyShowcaseProps {}

const TypographyShowcase: React.FC<TypographyShowcaseProps> = () => {
  return (
    <Flex
      direction="column"
      align="start"
      gap="lg"
      style={{ marginTop: "4rem" }}
    >
      <Spacing gap="xl" />
      <Heading level={2} bold>✍️ Simple typography</Heading>
      <Paragraph size="md">
        Sampled UI provides flexible and accessible typography components for
        headings, paragraphs, and text that can be tweaked to your liking.
      </Paragraph>
      <Spacing gap="xl" />
      <Row gap="2rem">
        <Column span={8}>
          <Flex direction="column" gap="sm" align="start">
            <Heading level={1}>Heading 1</Heading>
            <Heading level={2}>Heading 2</Heading>
            <Heading level={3}>Heading 3</Heading>
            <Heading level={4}>Heading 4</Heading>
            <Heading level={5}>Heading 5</Heading>
          </Flex>
        </Column>
        <Column span={8}>
          <Flex direction="column" gap="sm" align="start">
            <Paragraph size="lg">This is a large paragraph.</Paragraph>
            <Paragraph size="md">This is a medium paragraph.</Paragraph>
            <Paragraph size="sm">This is a small paragraph.</Paragraph>
          </Flex>
        </Column>
        <Column span={8}>
          <Flex direction="column" gap="sm" align="start">
            <Text size="xl" bold>
              Extra Large Bold Text
            </Text>
            <Text size="lg" italic>
              Large Italic Text
            </Text>
            <Text underline>Underlined Text</Text>
            <Text deleted>Deleted Text</Text>
            <Text code>console.log("Hello World!")</Text>
            <Text keyboard>Ctrl + S</Text>
            <Text mark>Highlighted Text</Text>
            <Text variant="success">Success Text</Text>
            <Text variant="warning">Warning Text</Text>
            <Text variant="danger">Danger Text</Text>
          </Flex>
        </Column>
      </Row>
    </Flex>
  );
};

export default TypographyShowcase;
