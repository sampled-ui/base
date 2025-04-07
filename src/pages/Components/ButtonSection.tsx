import React from "react";

import { Button, Flex, Typography } from "../../../lib/main";
import CodeSection from "../../CodeSection";

interface ButtonSectionProps {}

const { Heading, Paragraph } = Typography;

const ButtonSection: React.FC<ButtonSectionProps> = () => {
  return (
    <CodeSection title="Button" id="button">
      <Paragraph>
        A simple button component with basic variants. It uses the same props as
        the regular HTML button element.
      </Paragraph>
      <Flex gap="md">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="success">Success</Button>
        <Button variant="warning">Warning</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="disabled">Disabled</Button>
        <Button ghost>Ghost</Button>
      </Flex>
      <Heading level={4}>Sizes</Heading>
      <Flex gap="md">
        <Button size="xl">Extra Large</Button>
        <Button size="lg">Large</Button>
        <Button size="md">Medium</Button>
      </Flex>
    </CodeSection>
  );
};

export default ButtonSection;
