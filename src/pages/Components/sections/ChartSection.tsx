import React from "react";

import {
  BarChart,
  Column,
  Flex,
  HorizontalBarChart,
  Row,
  Typography,
} from "../../../../lib/main";
import { Section } from "../../../components/Section";

const ChartExample = () => {
  const data = [
    { label: "Netflix", value: 10 },
    { label: "Apple Music", value: 20 },
    { label: "Amazon Prime", value: 15 },
    { label: "Spotify", value: 25 },
    { label: "HBO Max", value: 5 },
    { label: "Disney+", value: 30 },
    { label: "YouTube", value: 12 },
    { label: "Hulu", value: 18 },
    { label: "Paramount+", value: 8 },
    { label: "Peacock", value: 22 },
    { label: "Discovery+", value: 14 },
    { label: "Apple TV+", value: 16 },
  ];
  return (
    <Flex style={{ width: "100%" }} direction="column" gap="md" align="start">
      <Row gap="1rem">
        <Column span={12}>
          <Flex direction="column" gap="md" align="start">
            <Typography.Heading level={5}>Horizontal</Typography.Heading>
            <HorizontalBarChart axis={data} unit="$" />
          </Flex>
        </Column>
        <Column span={12}>
          <Flex direction="column" gap="md" align="start">
            <Typography.Heading level={5}>Vertical</Typography.Heading>
            <BarChart axis={data} unit="$" />
          </Flex>
        </Column>
      </Row>
    </Flex>
  );
};

const ChartSection: React.FC = () => {
  return (
    <Section title="Chart" id="chart" divided codeExample={ChartExample} />
  );
};

export default ChartSection;
