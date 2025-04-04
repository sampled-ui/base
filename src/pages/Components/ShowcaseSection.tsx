import React from "react";

import Showcase from "../../../lib/components/Showcase";
import Tag from "../../../lib/components/Tag";
import { Section } from "../../../lib/main";

interface ShowcaseSectionProps {}

const ShowcaseSection: React.FC<ShowcaseSectionProps> = () => {
  return (
    <Section title="Showcase" id="showcase" divided>
      <Showcase
        title="Sampled UI"
        subtitle={<Tag label="Design System" variant="filled" color="gray" />}
        image="./wordmark-logo.png"
        width="calc(100% - 3rem)"
      />
    </Section>
  );
};

export default ShowcaseSection;
