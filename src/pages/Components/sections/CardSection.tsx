import React from "react";

import { Paragraph } from "../../../../lib/components/Typography/Paragraph";
import { Card } from "../../../../lib/main";
import { Section } from "../../../components/Section";

interface CardSectionProps {}

const CardExample = () => {
  return (
    <>
      <Card title="Card title">
        <Paragraph size="md">
          This is a card body text but you can really render anything you want
          in here.
        </Paragraph>
      </Card>
      <Card title="Card title" image="https://picsum.photos/1000">
        <Paragraph size="md">
          This is a card body text but you can really render anything you want
          in here.
        </Paragraph>
      </Card>
    </>
  );
};

const CardSection: React.FC<CardSectionProps> = () => {
  return <Section title="Card" id="card" divided codeExample={CardExample} />;
};

export default CardSection;
