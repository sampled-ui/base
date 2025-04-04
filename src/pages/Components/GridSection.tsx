import React from "react";

import { Paragraph } from "../../../lib/components/Typography/Paragraph";
import { Column, Row, Section, Spacing, Typography } from "../../../lib/main";

interface GridSectionProps {}

const { Text } = Typography;

const GridSection: React.FC<GridSectionProps> = () => {
  return (
    <Section title="Grid" id="grid" divided>
      <Paragraph>
        Simple row and column components that allow you to create a grid layout.
      </Paragraph>
      <Row>
        <Column span={24}>
          <Spacing gap="sm" style={{ background: "gainsboro" }}>
            <Text
              style={{
                width: "100%",
                textAlign: "center",
              }}
            >
              24 columns wide
            </Text>
          </Spacing>
        </Column>
      </Row>
      <Row>
        <Column span={12}>
          <Spacing gap="sm" style={{ background: "gainsboro" }}>
            <Text
              style={{
                width: "100%",
                textAlign: "center",
              }}
            >
              12 columns wide
            </Text>
          </Spacing>
        </Column>
        <Column span={12}>
          <Spacing gap="sm" style={{ background: "whitesmoke" }}>
            <Text
              style={{
                width: "100%",
                textAlign: "center",
              }}
            >
              12 columns wide
            </Text>
          </Spacing>
        </Column>
      </Row>
      <Row>
        <Column span={8}>
          <Spacing gap="sm" style={{ background: "gainsboro" }}>
            <Text
              style={{
                width: "100%",
                textAlign: "center",
              }}
            >
              8 columns wide
            </Text>
          </Spacing>
        </Column>
        <Column span={8}>
          <Spacing gap="sm" style={{ background: "whitesmoke" }}>
            <Text
              style={{
                width: "100%",
                textAlign: "center",
              }}
            >
              8 columns wide
            </Text>
          </Spacing>
        </Column>
        <Column span={8}>
          <Spacing gap="sm" style={{ background: "gainsboro" }}>
            <Text
              style={{
                width: "100%",
                textAlign: "center",
              }}
            >
              8 columns wide
            </Text>
          </Spacing>
        </Column>
      </Row>
      <Paragraph style={{ marginTop: "1rem" }}>
        You can also specify a gap between the columns.
      </Paragraph>
      <Row gap={"1rem"}>
        <Column span={6}>
          <Spacing gap="sm" style={{ background: "gainsboro" }}>
            <Text
              style={{
                width: "100%",
                textAlign: "center",
              }}
            >
              6 columns
            </Text>
          </Spacing>
        </Column>
        <Column span={6}>
          <Spacing gap="sm" style={{ background: "whitesmoke" }}>
            <Text
              style={{
                width: "100%",
                textAlign: "center",
              }}
            >
              6 columns
            </Text>
          </Spacing>
        </Column>
        <Column span={6}>
          <Spacing gap="sm" style={{ background: "gainsboro" }}>
            <Text
              style={{
                width: "100%",
                textAlign: "center",
              }}
            >
              6 columns
            </Text>
          </Spacing>
        </Column>
        <Column span={6}>
          <Spacing gap="sm" style={{ background: "whitesmoke" }}>
            <Text
              style={{
                width: "100%",
                textAlign: "center",
              }}
            >
              6 columns
            </Text>
          </Spacing>
        </Column>
      </Row>
    </Section>
  );
};

export default GridSection;
