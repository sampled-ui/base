import React from "react";

import {
  Button,
  Column,
  Flex,
  Input,
  Menu,
  Row,
  Typography,
} from "../../../../lib/main";
import { Section } from "../../../components/Section";

interface MenuSectionProps {}

const menuItems = [
  { title: "Item 1", key: "1" },
  { title: "Item 2", key: "2" },
  { title: "Item Danger", danger: true, key: "3" },
  {
    title: "Item Disabled",
    disabled: true,
    key: "4",
  },
  { title: "Item Icon", icon: <span>🧪</span>, key: "5" },
];

const MenuExample = () => {
  return (
    <>
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
    </>
  );
};

const MenuSection: React.FC<MenuSectionProps> = () => {
  return <Section title="Menu" id="menu" divided codeExample={MenuExample} />;
};

export default MenuSection;
