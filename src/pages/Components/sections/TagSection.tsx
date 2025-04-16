import React from "react";

import { Flex, Tag } from "../../../../lib/main";
import { Section } from "../../../components/Section";

interface TagSectionProps {}

const TagExample = () => {
  return (
    <Flex gap="md" align="center">
      <Tag label="Tag" size="sm" />
      <Tag label="Tag" size="md" />
      <Tag label="Tag" size="lg" />
      <Tag label="Tag" size="lg" variant="filled" />
      <Tag label="Tag" size="lg" variant="outlined" color="orange" />
      <Tag label="Tag" size="lg" variant="filled" color="orange" />
    </Flex>
  );
};

const TagSection: React.FC<TagSectionProps> = () => {
  return <Section title="Tag" id="tag" divided codeExample={TagExample} />;
};

export default TagSection;
