import { useMemo } from "react";
import { Location, useLocation, useNavigate } from "react-router";
import {
  Button,
  Column,
  Divider,
  Flex,
  HeadingUnits,
  Input,
  Layout,
  Navigation,
  Row,
  Section,
  Sidebar,
  Spacing,
  Typography,
} from "../../../lib/main";

const { Text, Heading, Paragraph } = Typography;

const useGetSelectedNavItem = (
  navItems: { key: string; title: string; onClick: () => void }[],
  location: Location
) => {
  return useMemo(() => {
    const path = location.pathname + location.hash;
    const selected = navItems.find((item) => path.includes(item.key));
    return selected?.key || "overview";
  }, [navItems, location]);
};

export const ComponentsPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    {
      key: "overview",
      title: "Overview",
      onClick: () => navigate("/components#overview"),
    },
    {
      key: "button",
      title: "Button",
      onClick: () => navigate("#button"),
    },
    { key: "input", title: "Input", onClick: () => navigate("#input") },
    {
      key: "typography",
      title: "Typography",
      onClick: () => navigate("#typography"),
    },
    {
      key: "grid",
      title: "Grid",
      onClick: () => navigate("#grid"),
    },
  ];

  const selected = useGetSelectedNavItem(navItems, location);

  return (
    <Layout style={{ height: "calc(100% - 4rem)" }}>
      <Sidebar style={{ width: "20rem" }}>
        <Navigation selected={selected} items={navItems} />
      </Sidebar>
      <Layout>
        <Spacing gap="xl">
          <Flex direction="column" align="start">
            <Heading level={1}>🧪 Components</Heading>
            <Divider style={{ marginBottom: "initial" }} />
          </Flex>
          <Section title="Overview" id="overview" divided>
            <Paragraph>
              This page showcases the different components that are available
              for use in the Sampled UI library. The components are built using
              the simplest implementation possible to ensure that they are easy
              to customize and use.
            </Paragraph>
          </Section>
          <Section title="Button" id="button" divided>
            <Paragraph>
              A simple button component with basic variants. It uses the same
              props as the regular HTML button element.
            </Paragraph>
            <Flex gap="md">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="success">Success</Button>
              <Button variant="warning">Warning</Button>
              <Button variant="danger">Danger</Button>
              <Button variant="disabled">Disabled</Button>
              <Button ghost>Ghost</Button>
            </Flex>
          </Section>
          <Section title="Input" id="input" divided>
            <Paragraph>
              A simple input component with options for different sizes. It uses
              the same props as the regular HTML input element.
            </Paragraph>
            <Flex direction="column" align="start" gap="md">
              <Input placeholder="Small size" size={"sm"} />
              <Input placeholder="Medium size" size={"md"} />
              <Input placeholder="Large size" size={"lg"} />
            </Flex>
          </Section>
          <Section title="Typography" id="typography" divided>
            <Paragraph>
              A collection of simple typography components with different
              variants.
            </Paragraph>
            <Flex align="start" justify="start" gap="xl">
              <Flex direction="column" align="start" gap="md">
                <Heading level={4}>Text</Heading>
                <Flex direction="column" align="start" gap="sm">
                  <Text>Sampled UI small</Text>
                  <Text size="md">Sampled UI medium</Text>
                  <Text size="lg">Sampled UI large</Text>
                  <Text variant="secondary">Sampled UI (secondary)</Text>
                  <Text variant="success">Sampled UI (success)</Text>
                  <Text variant="warning">Sampled UI (warning)</Text>
                  <Text variant="danger">Sampled UI (danger)</Text>
                  <Text disabled>Sampled UI (disabled)</Text>
                  <Text mark>Sampled UI (mark)</Text>
                  <Text code>Sampled UI (code)</Text>
                  <Text keyboard>Sampled UI (keyboard)</Text>
                  <Text underline>Sampled UI (underline)</Text>
                  <Text deleted>Sampled UI (delete)</Text>
                  <Text bold>Sampled UI (bold)</Text>
                  <Text italic>Sampled UI (italic)</Text>
                </Flex>
              </Flex>
              <Flex direction="column" align="start" gap="md">
                <Heading level={4}>Heading</Heading>
                <Flex direction="column" align="start">
                  {Object.values([1, 2, 3, 4, 5]).map((level) => {
                    return (
                      <Heading
                        key={`heading-${level}`}
                        level={level as HeadingUnits}
                      >
                        {"Heading " + String(level)}
                      </Heading>
                    );
                  })}
                </Flex>
              </Flex>
              <Flex direction="column" align="start" gap="md">
                <Heading level={4}>Paragraph</Heading>
                <Paragraph>
                  This is an example for a 'Sampled UI' paragraph component that
                  has a maximum width of 70 characters that, when exceeded, will
                  break the text into a new line. This is an example for a
                  'Sampled UI' paragraph component that has a maximum width of
                  70 characters that, when exceeded, will break the text into a
                  new line.
                </Paragraph>
              </Flex>
            </Flex>
          </Section>
          <Section title="Grid" id="grid" divided>
            <Paragraph>
              Simple row and column components that allow you to create a grid
              layout.
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
        </Spacing>
      </Layout>
    </Layout>
  );
};
