import React from "react";

import { Skeleton } from "../../../../lib/main";
import { Section } from "../../../components/Section";

const SkeletonExample = () => {
  return (
    <>
      <Skeleton />
      <Skeleton width={600} height={80}/>
      <Skeleton height={80} width="100%" />
    </>
  );
};

const SkeletonSection: React.FC = () => {
  return (
    <Section
      title="Skeleton"
      id="skeleton"
      divided
      codeExample={SkeletonExample}
    />
  );
};

export default SkeletonSection;
