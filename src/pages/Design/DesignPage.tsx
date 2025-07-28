import React from "react";

import { Flex, Layout, Spacing, Typography } from "../../../lib/main";

interface DesignPageProps {}

const { Heading, Paragraph, Text } = Typography;

const DesignPage: React.FC<DesignPageProps> = () => {
  return (
    <Layout>
      <Spacing gap="lg">
        <Flex direction="column" gap="md">
          <Spacing gap="lg"/>
          <Heading level={1}>🎨 Design Resources</Heading>
          <Text italic size="lg" variant="secondary">
            Coming Soon
          </Text>
          <Paragraph size="md" style={{ marginTop: "1rem" }}>
            The Sampled UI component library will be released as a Figma file
            soon. It will be available for free for everyone to use and
            customize.
            <Text size="md">Stay tuned for updates!</Text>
          </Paragraph>
        </Flex>
      </Spacing>
    </Layout>
  );
};

export default DesignPage;
