import React from "react";

import { Tag } from "../../../lib/components/Tag";
import { Flex, Section } from "../../../lib/main";

interface TagSectionProps {}

const TagSection: React.FC<TagSectionProps> = () => {
  return (
    <Section title="Tag" id="tag" divided>
      <Flex gap="md" align="center">
        <Tag label="Tag" size="sm" />
        <Tag label="Tag" size="md" />
        <Tag label="Tag" size="lg" />
        <Tag label="Tag" size="lg" variant="filled" />
        <Tag label="Tag" size="lg" variant="outlined" color="orange" />
        <Tag label="Tag" size="lg" variant="filled" color="orange" />
      </Flex>
    </Section>
  );
};

export default TagSection;
