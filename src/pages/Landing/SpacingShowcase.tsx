import React from "react";

import { Card, Flex, Spacing, Typography } from "../../../lib/main";

interface SpacingShowcaseProps {}

const SpacingShowcase: React.FC<SpacingShowcaseProps> = () => {
  return (
    <Flex direction="column" align="start" gap="md" style={{ width: "60rem" }}>
      <Spacing gap="xl" />
      <Spacing gap="xl" />
      <Typography.Heading level={2} bold>
        📐 Simple layouting
      </Typography.Heading>
      <Typography.Paragraph style={{ maxWidth: "30rem" }}>
        Never use margin or padding again! Sampled UI provides flexible and
        accessible components for spacing, flexbox layouts, and columns that can
        be customized to fit your needs.
      </Typography.Paragraph>
      <Spacing gap="lg" />
      <Flex align="stretch" gap="md">
        <Card style={{ maxWidth: "100%" }}>
          <Spacing gap="md">
            <Flex direction="column" gap="sm" align="start">
              <Typography.Heading level={4}>Spacing</Typography.Heading>
              <Typography.Paragraph style={{ maxWidth: "20rem" }}>
                The Spacing component allows you to add consistent spacing
                between elements.
              </Typography.Paragraph>
              <Typography.Text code>{`<Spacing gap="md" />`}</Typography.Text>
            </Flex>
          </Spacing>
        </Card>
        <Card style={{ maxWidth: "100%" }}>
          <Spacing gap="md">
            <Flex direction="column" gap="sm" align="start">
              <Typography.Heading level={4}>Flex</Typography.Heading>
              <Typography.Paragraph style={{ maxWidth: "20rem" }}>
                The Flex component allows you to create a flexible layout with
                consistent spacing.
              </Typography.Paragraph>
              <Typography.Text
                code
                // eslint-disable-next-line max-len
              >{`<Flex gap="md" direction="column" align="start">\n  <Text>Item 1</Text>\n  <Text>Item 2</Text>\n</Flex>`}</Typography.Text>
            </Flex>
          </Spacing>
        </Card>
        <Card style={{ maxWidth: "100%" }}>
          <Spacing gap="md">
            <Flex direction="column" gap="sm" align="start">
              <Typography.Heading level={4}>Column</Typography.Heading>
              <Typography.Paragraph style={{ maxWidth: "20rem" }}>
                The Column component allows you to create a vertical layout with
                consistent spacing.
              </Typography.Paragraph>
              <Typography.Text
                code
              >{`<Row>\n  <Column span={12} />\n  <Column span={12} />\n</Row>`}</Typography.Text>
            </Flex>
          </Spacing>
        </Card>
      </Flex>
      <Spacing gap="xl" />
      <Spacing gap="xl" />
    </Flex>
  );
};

export default SpacingShowcase;
