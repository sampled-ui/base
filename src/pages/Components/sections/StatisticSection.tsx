import { ArrowDownRight, ArrowUpRight } from "lucide-react";

import { Statistic } from "../../../../lib/components/Statistic";
import { Flex } from "../../../../lib/main";
import { Section } from "../../../components/Section";

const StatisticExample = () => {
  return (
    <Flex gap="md">
      <Statistic label="Subscribers" value={203} />
      <Statistic
        label="Subscribers"
        variant="success"
        icon={<ArrowUpRight color="var(--color-success)" size={24} />}
        value={324}
      />
      <Statistic
        label="Subscribers"
        variant="danger"
        icon={<ArrowDownRight color="var(--color-error)" size={24} />}
        value={125}
      />
    </Flex>
  );
};

export const StatisticSection: React.FC = () => {
  return (
    <Section
      title="Statistic"
      id="statistic"
      divided
      codeExample={StatisticExample}
    />
  );
};
