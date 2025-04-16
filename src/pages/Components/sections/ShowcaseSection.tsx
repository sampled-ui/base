import React from "react";

import Showcase from "../../../../lib/components/Showcase";
import { Tag } from "../../../../lib/components/Tag";
import { Section } from "../../../components/Section";

interface ShowcaseSectionProps {}

const ShowcaseExample = () => {
  return (
    <Showcase
      title="Sampled UI"
      subtitle={<Tag label="Design System" variant="filled" color="gray" />}
      image="./wordmark-logo.png"
      width="calc(100% - 3rem)"
    />
  );
};

const ShowcaseSection: React.FC<ShowcaseSectionProps> = () => {
  return (
    <Section
      title="Showcase"
      id="showcase"
      divided
      codeExample={ShowcaseExample}
    />
  );
};

export default ShowcaseSection;
