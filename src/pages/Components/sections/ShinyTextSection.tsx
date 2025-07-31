import React from "react";

import { ShinyText, Typography } from "../../../../lib/main";
import { Section } from "../../../components/Section";

interface ShinyTextSectionProps {}

const ShinyTextSectionExample = () => (
  <ShinyText>
    <Typography.Text size="xl">
      Sampled UI
    </Typography.Text>
  </ShinyText>
);

const ShinyTextSection: React.FC<ShinyTextSectionProps> = () => {
  return (
    <Section
      id="shiny-text"
      title="Shiny Text"
      codeExample={ShinyTextSectionExample}
    />
  );
};

export default ShinyTextSection;
