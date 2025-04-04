import React from "react";

import { Button, Flex, Section, Typography } from "../../../lib/main";

interface ButtonSectionProps {}

const { Heading, Paragraph } = Typography;

const ButtonSection: React.FC<ButtonSectionProps> = () => {
  return (
    <Section title="Button" id="button" divided>
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
    </Section>
  );
};

export default ButtonSection;
