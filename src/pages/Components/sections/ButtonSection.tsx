import React from "react";

import { Button, Flex, Typography } from "../../../../lib/main";
import { Section } from "../../../components/Section";

interface ButtonSectionProps {}

const { Heading } = Typography;

const ButtonExample = () => {
  return (
    <>
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
        <Button size="xs">Extra Small</Button>
      </Flex>
    </>
  );
};

const ButtonSection: React.FC<ButtonSectionProps> = () => {
  return <Section title="Button" id="button" codeExample={ButtonExample} />;
};

export default ButtonSection;
