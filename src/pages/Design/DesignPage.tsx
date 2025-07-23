import React from "react";

import { Flex, Layout, Spacing, Typography } from "../../../lib/main";

interface DesignPageProps {}

const { Heading, Paragraph, Text } = Typography;

const DesignPage: React.FC<DesignPageProps> = () => {
  return (
    <Layout
      style={{
        height: "calc(100% - 4rem)",
      }}
    >
      <Spacing gap="lg" style={{ width: "fit-content", margin: "2rem auto" }}>
        <Flex direction="column" gap="md">
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
