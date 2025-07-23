import React from "react";

import { useNavigate } from "react-router";

import { Link } from "../../../lib/components/Typography/Link";
import { Flex, Layout, Spacing, Typography } from "../../../lib/main";

const { Heading, Paragraph, Text } = Typography;

export const DevelopmentPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Layout style={{ height: "calc(100% - 4rem)" }}>
      <Spacing
        gap="lg"
        style={{
          width: "fit-content",
          margin: "2rem auto",
        }}
      >
        <Flex direction="column" justify="start" gap="md">
          <Heading level={1}>🛠️ Installation</Heading>
          <Text italic size="lg" variant="secondary">
            Get started quickly
          </Text>
          <Flex
            direction="column"
            align="start"
            gap="md"
            style={{ marginTop: "1rem" }}
          >
            <Text size="md">Using npm:</Text>
            <Text code>npm install sampled-ui-base</Text>
            <Text size="md">Using yarn:</Text>
            <Text code>yarn add sampled-ui-base</Text>
            <Paragraph size="md" style={{ marginTop: "2rem" }}>
              After installing, import components in your project:
            </Paragraph>
            <Text
              code
              style={{ width: "fit-content" }}
            >{`import { Button, Card, Typography } from '@sampled-ui/base';`}</Text>
            <Paragraph size="md" style={{ marginTop: "2rem" }}>
              For more details and usage examples, visit the{" "}
              <Text underline style={{ width: "fit-content" }}>
                <Link size="md" onClick={() => navigate("/components")}>
                  Components
                </Link>
              </Text>
              page.
            </Paragraph>
          </Flex>
        </Flex>
      </Spacing>
    </Layout>
  );
};

export default DevelopmentPage;
