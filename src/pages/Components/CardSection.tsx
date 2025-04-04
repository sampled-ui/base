import React from "react";

import { Paragraph } from "../../../lib/components/Typography/Paragraph";
import { Card, Section } from "../../../lib/main";

interface CardSectionProps {}

const CardSection: React.FC<CardSectionProps> = () => {
  return (
    <Section title="Card" id="card" divided>
      <Card title="Card title">
        <Paragraph size="md">
          This is a card body text but you can really render anything you want
          in here.
        </Paragraph>
      </Card>
    </Section>
  );
};

export default CardSection;
