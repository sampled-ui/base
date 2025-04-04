import React from "react";

import { Paragraph } from "../../../lib/components/Typography/Paragraph";
import { Flex, Input, Section } from "../../../lib/main";

interface InputSectionProps {}

const InputSection: React.FC<InputSectionProps> = () => {
  return (
    <Section title="Input" id="input" divided>
      <Paragraph>
        A simple input component with options for different sizes. It uses the
        same props as the regular HTML input element.
      </Paragraph>
      <Flex direction="column" align="start" gap="md">
        <Input placeholder="Small size" size={"sm"} />
        <Input placeholder="Medium size" size={"md"} />
        <Input placeholder="Large size" size={"lg"} />
      </Flex>
    </Section>
  );
};

export default InputSection;
