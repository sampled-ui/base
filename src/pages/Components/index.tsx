import { useMemo, useRef } from "react";

import { Location, useLocation, useNavigate } from "react-router";

import {
  Divider,
  Flex,
  Layout,
  Navigation,
  Section,
  Sidebar,
  Spacing,
  Typography,
} from "../../../lib/main";

import ButtonSection from "./ButtonSection";
import CardSection from "./CardSection";
import GridSection from "./GridSection";
import InputSection from "./InputSection";
import MenuSection from "./MenuSection";
import ShowcaseSection from "./ShowcaseSection";
import TagSection from "./TagSection";
import TypographySection from "./TypographySection";

const { Heading, Paragraph } = Typography;

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
  const innerLayoutRef = useRef<HTMLDivElement>(null);

  const navItems = [
    {
      key: "overview",
      title: "Overview",
      onClick: () => {
        navigate("#");
        innerLayoutRef.current?.scrollTo({ top: 0, behavior: "smooth" });
      },
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
    {
      key: "card",
      title: "Card",
      onClick: () => navigate("#card"),
    },
    {
      key: "tag",
      title: "Tag",
      onClick: () => navigate("#tag"),
    },
    {
      key: "showcase",
      title: "Showcase",
      onClick: () => navigate("#showcase"),
    },
  ];

  const selected = useGetSelectedNavItem(navItems, location);

  return (
    <Layout style={{ height: "calc(100% - 4rem)" }}>
      <Sidebar style={{ width: "20rem" }}>
        <Navigation selected={selected} items={navItems} />
      </Sidebar>
      <Layout ref={innerLayoutRef}>
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
          <ButtonSection />
          <InputSection />
          <TypographySection />
          <GridSection />
          <CardSection />
          <TagSection />
          <ShowcaseSection />
          <MenuSection />
        </Spacing>
      </Layout>
    </Layout>
  );
};
