import React from "react";

import { Flex, Layout, Spacing, Typography } from "../../../lib/main";

const { Heading, Paragraph, Text } = Typography;

export const DevelopmentPage: React.FC = () => {
  return (
    <Layout>
      <Spacing gap="lg">
        <Flex direction="column" align="start" gap="md">
          <Spacing gap="lg"/>
          <Heading level={1} bolder>🛠️ Installation</Heading>
          <Text italic size="lg" variant="secondary">
            Get started quickly
          </Text>
          <Flex
            direction="column"
            align="start"
            gap="md"
            style={{ marginTop: "1rem" }}
          >
            <Spacing gap="md" />
            <Heading level={4}>Installing</Heading>
            <Text size="md">Using npm:</Text>
            <Text code>npm install @sampled-ui/base</Text>
            <Text size="md">Using yarn:</Text>
            <Text code>yarn add @sampled-ui/base</Text>
            <Spacing gap="md" />
            <Heading level={4}>Components</Heading>
            <Paragraph size="md">Import components in your project:</Paragraph>
            <Text
              code
              style={{ width: "fit-content" }}
            >{`import { Button, Card, Typography } from '@sampled-ui/base';`}</Text>
            <Spacing gap="sm" />
            <Paragraph size="md">
              For more details and usage examples, visit the Components page.
            </Paragraph>
            <Spacing gap="md" />
            <Heading level={4}>Theming</Heading>
            <Paragraph size="md">
              Wrap your app in the ThemeProvider component to apply theme
              changes:
            </Paragraph>
            <Text
              code
              style={{ width: "fit-content" }}
              // eslint-disable-next-line max-len
            >{`createRoot(document.getElementById('root')!).render(\n  <ThemeProvider>\n    <App/>\n  </ThemeProvider>\n);`}</Text>
            <Spacing gap="sm" />
            <Paragraph size="md">
              And use the theme hook to change themes dynamically:
            </Paragraph>
            <Text
              code
              style={{ width: "fit-content" }}
              // eslint-disable-next-line max-len
            >{`import { useThemeContext } from '@sampled-ui/base';\n\nexport const useTheme = () => {\n  const { setTheme } = useThemeContext();\n  setTheme({ "--color-accent": "green" });\n};`}</Text>
          </Flex>
        </Flex>
      </Spacing>
    </Layout>
  );
};

export default DevelopmentPage;
