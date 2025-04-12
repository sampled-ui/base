import React from "react";

import { Flex, HeadingUnits, Section, Typography } from "../../../lib/main";

interface TypographySectionProps {}

const { Text, Heading, Paragraph } = Typography;

const TypographySection: React.FC<TypographySectionProps> = () => {
  return (
    <Section title="Typography" id="typography" divided>
      <Paragraph>
        A collection of simple typography components with different variants.
      </Paragraph>
      <Flex align="start" justify="start" gap="xl">
        <Flex direction="column" align="start" gap="md">
          <Heading level={4}>Text</Heading>
          <Flex direction="column" align="start" gap="sm">
            <Text size="xs">Sampled UI extra small</Text>
            <Text>Sampled UI small (default)</Text>
            <Text size="md">Sampled UI medium</Text>
            <Text size="lg">Sampled UI large</Text>
            <Text variant="secondary">Sampled UI (secondary)</Text>
            <Text variant="success">Sampled UI (success)</Text>
            <Text variant="warning">Sampled UI (warning)</Text>
            <Text variant="danger">Sampled UI (danger)</Text>
            <Text disabled>Sampled UI (disabled)</Text>
            <Text mark>Sampled UI (mark)</Text>
            <Text code>Sampled UI (code)</Text>
            <Text keyboard>Sampled UI (keyboard)</Text>
            <Text underline>Sampled UI (underline)</Text>
            <Text deleted>Sampled UI (delete)</Text>
            <Text bold>Sampled UI (bold)</Text>
            <Text italic>Sampled UI (italic)</Text>
          </Flex>
        </Flex>
        <Flex direction="column" align="start" gap="md">
          <Heading level={4}>Heading</Heading>
          <Flex direction="column" align="start">
            {Object.values([1, 2, 3, 4, 5]).map((level) => {
              return (
                <Heading key={`heading-${level}`} level={level as HeadingUnits}>
                  {"Heading " + String(level)}
                </Heading>
              );
            })}
          </Flex>
        </Flex>
        <Flex
          direction="column"
          align="start"
          gap="md"
          style={{ maxWidth: "50%" }}
        >
          <Heading level={4}>Paragraph</Heading>
          <Heading level={5}>Small (default)</Heading>
          <Paragraph>
            This is an example for a 'Sampled UI' paragraph component that has a
            maximum width of 70 characters that, when exceeded, will break the
            text into a new line. This is an example for a 'Sampled UI'
            paragraph component that has a maximum width of 70 characters that,
            when exceeded, will break the text into a new line.
          </Paragraph>
          <Heading level={5}>Medium</Heading>
          <Paragraph size="md">
            This is an example for a 'Sampled UI' paragraph component that has a
            maximum width of 70 characters that, when exceeded, will break the
            text into a new line. This is an example for a 'Sampled UI'
            paragraph component that has a maximum width of 70 characters that,
            when exceeded, will break the text into a new line.
          </Paragraph>
          <Heading level={5}>Large</Heading>
          <Paragraph size="lg">
            This is an example for a 'Sampled UI' paragraph component that has a
            maximum width of 70 characters that, when exceeded, will break the
            text into a new line. This is an example for a 'Sampled UI'
            paragraph component that has a maximum width of 70 characters that,
            when exceeded, will break the text into a new line.
          </Paragraph>
        </Flex>
      </Flex>
    </Section>
  );
};

export default TypographySection;
