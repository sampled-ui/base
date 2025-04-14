import React from "react";

import {
  Button,
  Column,
  Flex,
  Input,
  Menu,
  Row,
  Section,
  Typography,
} from "../../../lib/main";

interface MenuSectionProps {}

const menuItems = [
  { title: "Item 1", onClick: () => {} },
  { title: "Item 2", onClick: () => {} },
  { title: "Item 3", onClick: () => {}, icon: <span>🧪</span> },
];

const MenuSection: React.FC<MenuSectionProps> = () => {
  return (
    <Section title="Menu" id="menu">
      <Row>
        <Column span={8}>
          <Flex direction="column" align="start" gap="md">
            <Typography.Heading level={5}>Top Aligned</Typography.Heading>
            <Menu trigger="hover" items={menuItems}>
              <Button>Hover Me</Button>
            </Menu>
          </Flex>
        </Column>
        <Column span={8}>
          <Flex direction="column" align="start" gap="md">
            <Typography.Heading level={5}>Bottom Aligned</Typography.Heading>
            <Menu trigger="hover" alignment="bottom" items={menuItems}>
              <Button>Hover Me</Button>
            </Menu>
          </Flex>
        </Column>
        <Column span={8}>
          <Flex direction="column" align="start" gap="md">
            <Typography.Heading level={5}>Click Trigger</Typography.Heading>
            <Menu trigger="click" items={menuItems}>
              <Input placeholder="Click me" />
            </Menu>
          </Flex>
        </Column>
      </Row>
      <Row>
        <Column span={8}>
          <Flex direction="column" align="start" gap="md">
            <Typography.Heading level={5}>Right Aligned</Typography.Heading>
            <Menu trigger="click" alignment="top right" items={menuItems}>
              <Button>Click Me</Button>
            </Menu>
          </Flex>
        </Column>
        <Column span={8}>
          <Flex direction="column" align="start" gap="md">
            <Typography.Heading level={5}>Left Aligned</Typography.Heading>
            <Menu trigger="click" alignment="top left" items={menuItems}>
              <Button>Click Me</Button>
            </Menu>
          </Flex>
        </Column>
      </Row>
    </Section>
  );
};

export default MenuSection;
