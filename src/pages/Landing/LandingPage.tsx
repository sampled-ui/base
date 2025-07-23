import React from "react";

import {
  Atom,
  Code,
  Heart,
  Layers,
  MonitorSmartphone,
  Palette,
  Sparkles,
  Zap,
} from "lucide-react";
import { useNavigate } from "react-router";

import {
  Button,
  Card,
  Flex,
  Layout,
  Spacing,
  Typography,
} from "../../../lib/main";

const { Heading, Paragraph, Text } = Typography;

const features = [
  {
    icon: <Sparkles size={32} color="var(--color-accent)" />,
    title: "Modern UI",
    description:
      "Beautiful, accessible, and responsive components for modern web apps.",
  },
  {
    icon: <Layers size={32} color="var(--color-accent)" />,
    title: "Composable",
    description: "Effortlessly build complex layouts by mixing components.",
  },
  {
    icon: <Zap size={32} color="var(--color-accent)" />,
    title: "Fast & Lightweight",
    description: "Optimized for performance and minimal footprint.",
  },
  {
    icon: <Code size={32} color="var(--color-accent)" />,
    title: "Developer Friendly",
    description: "Uses Typescript and simple React JSX APIs.",
  },
  {
    icon: <Palette size={32} color="var(--color-accent)" />,
    title: "Theming",
    description:
      "Easily customize colors, fonts, and styles to match the vibe.",
  },
  {
    icon: <Heart size={32} color="var(--color-accent)" />,
    title: "Vibe Components",
    description:
      "Use code generation to easily create or customize components.",
  },
  {
    icon: <MonitorSmartphone size={32} color="var(--color-accent)" />,
    title: "Responsiveness",
    description: "Responsive by default, works seamlessly on any device.",
  },
  {
    icon: <Atom size={32} color="var(--color-accent)" />,
    title: "React",
    description: "Built for React, using modern hooks and patterns.",
  },
];

export const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Layout style={{ height: "calc(100% - 4rem)" }}>
      <Spacing gap="xl" style={{ margin: "auto" }}>
        <Flex direction="column">
          <Flex direction="column" justify="start">
            <Flex
              direction="column"
              align="center"
              gap="lg"
              style={{ marginTop: "5rem" }}
            >
              <Heading level={1}>Sampled UI Design System</Heading>
              <Text size="lg" style={{ textAlign: "center" }}>
                A modern, flexible, and easy-to-use design system for building
                beautiful web applications.
              </Text>
              <Button size="lg" onClick={() => navigate("/components")}>
                Explore Components
              </Button>
            </Flex>
            <Flex
              gap="lg"
              justify="center"
              align="stretch"
              style={{ marginTop: "4rem", maxWidth: "58rem", flexWrap: "wrap" }}
            >
              {features.map((feature) => (
                <Card
                  key={feature.title}
                  style={{ maxWidth: "12rem", textAlign: "center" }}
                >
                  <Spacing gap="lg">
                    <Flex direction="column" align="center" gap="md">
                      {feature.icon}
                      <Text bold size="md">
                        {feature.title}
                      </Text>
                      <Paragraph size="sm">{feature.description}</Paragraph>
                    </Flex>
                  </Spacing>
                </Card>
              ))}
            </Flex>
          </Flex>
          {/* Agent Section */}
          <Flex
            direction="column"
            align="center"
            gap="lg"
            style={{ marginTop: "4rem" }}
          >
            <Heading level={3}>✨ Component generation</Heading>
            <Paragraph size="md">
              Want something unique? Use our AI-powered agent to generate custom
              components tailored to your needs. Simply describe your theme and
              what you want, and our agent will create ready-to-use code for
              your project.
            </Paragraph>
            <Button size="md" onClick={() => navigate("/agent")}>
              Try the Agent
            </Button>
          </Flex>
        </Flex>
      </Spacing>
    </Layout>
  );
};

export default LandingPage;
