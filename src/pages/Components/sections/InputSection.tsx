import React from "react";

import { Flex, Input } from "../../../../lib/main";
import { Section } from "../../../components/Section";

interface InputSectionProps {}

const InputExample = () => {
  return (
    <Flex direction="column" align="start" gap="md">
      <Input placeholder="Small size" size={"sm"} />
      <Input placeholder="Medium size" size={"md"} />
      <Input placeholder="Large size" size={"lg"} />
    </Flex>
  );
};

const InputSection: React.FC<InputSectionProps> = () => {
  return (
    <Section title="Input" id="input" divided codeExample={InputExample} />
  );
};

export default InputSection;
