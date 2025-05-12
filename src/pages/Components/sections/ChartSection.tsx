import React from "react";

import { BarChart, HorizontalBarChart } from "../../../../lib/components/Chart";
import { Flex, Typography } from "../../../../lib/main";
import { Section } from "../../../components/Section";

const ChartExample = () => {
  return (
    <Flex style={{ width: "100%" }} direction="column" gap="md" align="start">
      <Typography.Heading level={5}>Horizontal</Typography.Heading>
      <HorizontalBarChart
        axis={[
          { label: "Netflix", value: 10 },
          { label: "Apple Music", value: 20 },
          { label: "Amazon Prime", value: 15 },
          { label: "Spotify", value: 25 },
          { label: "HBO Max", value: 5 },
          { label: "Disney+", value: 30 },
          { label: "YouTube Premium", value: 12 },
          { label: "Hulu", value: 8 },
          { label: "Paramount+", value: 18 },
          { label: "Peacock", value: 7 },
        ]}
        unit="$"
      />
      <BarChart
        axis={[
          { label: "Netflix", value: 10 },
          { label: "Apple Music", value: 20 },
          { label: "Amazon Prime", value: 15 },
          { label: "Spotify", value: 25 },
          { label: "HBO Max", value: 5 },
          { label: "Disney+", value: 30 },
          { label: "YouTube Premium", value: 12 },
          { label: "Hulu", value: 8 },
          { label: "Paramount+", value: 18 },
          { label: "Peacock", value: 7 },
        ]}
        unit="$"
      />
    </Flex>
  );
};

const ChartSection: React.FC = () => {
  return (
    <Section title="Chart" id="chart" divided codeExample={ChartExample} />
  );
};

export default ChartSection;
