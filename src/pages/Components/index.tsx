import { useMemo, useRef } from "react";

import { Location, useLocation, useNavigate } from "react-router";

import {
  Divider,
  Flex,
  Layout,
  Navigation,
  Sidebar,
  Spacing,
  Typography,
} from "../../../lib/main";
import { Section } from "../../components/Section";

import ButtonSection from "./sections/ButtonSection";
import CardSection from "./sections/CardSection";
import GridSection from "./sections/GridSection";
import InputSection from "./sections/InputSection";
import MenuSection from "./sections/MenuSection";
import ShowcaseSection from "./sections/ShowcaseSection";
import TabsSection from "./sections/TabsSection";
import TagSection from "./sections/TagSection";
import ToastSection from "./sections/ToastSection";
import TypographySection from "./sections/TypographySection";

const { Heading } = Typography;

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
    {
      key: "menu",
      title: "Menu",
      onClick: () => navigate("#menu"),
    },
    {
      key: "toast",
      title: "Toast",
      onClick: () => navigate("#toast"),
    },
    {
      key: "tabs",
      title: "Tabs",
      onClick: () => navigate("#tabs"),
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
          <Section title="Overview" id="overview" divided />
          <ButtonSection />
          <InputSection />
          <TypographySection />
          <GridSection />
          <CardSection />
          <TagSection />
          <ShowcaseSection />
          <MenuSection />
          <ToastSection />
          <TabsSection />
        </Spacing>
      </Layout>
    </Layout>
  );
};
