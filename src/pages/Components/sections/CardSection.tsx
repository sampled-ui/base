import React from "react";

import { Paragraph } from "../../../../lib/components/Typography/Paragraph";
import { Card, Flex, Spacing, Typography } from "../../../../lib/main";
import { Section } from "../../../components/Section";

interface CardSectionProps {}

const CardExample = () => {
  return (
    <>
      <Card>
        <Spacing gap="lg">
          <Flex gap="md" direction="column" align="start">
            <Typography.Heading level={4}>Card title</Typography.Heading>
            <Paragraph size="md">
              This is a card body text but you can really render anything you
              want in here.
            </Paragraph>
          </Flex>
        </Spacing>
      </Card>
      <Card image="https://picsum.photos/1000">
        <Spacing gap="lg">
          <Flex gap="md" direction="column" align="start">
            <Typography.Heading level={4}>Card title</Typography.Heading>
            <Paragraph size="md">
              This is a card body text but you can really render anything you
              want in here.
            </Paragraph>
          </Flex>
        </Spacing>
      </Card>
    </>
  );
};

const CardSection: React.FC<CardSectionProps> = () => {
  return <Section title="Card" id="card" divided codeExample={CardExample} />;
};

export default CardSection;
