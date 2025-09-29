import { useRef, useState } from "react";

import { useNavigate } from "react-router";

import { Breakpoint } from "../../../lib/components/Layout";
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
import ChartSection from "./sections/ChartSection";
import GridSection from "./sections/GridSection";
import InputSection from "./sections/InputSection";
import MenuSection from "./sections/MenuSection";
import NavigationSection from "./sections/NavigationSection";
import ProgressSection from "./sections/ProgressSection";
import ShinyTextSection from "./sections/ShinyTextSection";
import ShowcaseSection from "./sections/ShowcaseSection";
import SkeletonSection from "./sections/SkeletonSection";
import { StatisticSection } from "./sections/StatisticSection";
import TabsSection from "./sections/TabsSection";
import TagSection from "./sections/TagSection";
import { ThemingSection } from "./sections/ThemingSection";
import ToastSection from "./sections/ToastSection";
import TypographySection from "./sections/TypographySection";

const { Heading } = Typography;

export const ComponentsPage: React.FC = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("overview");
  const innerLayoutRef = useRef<HTMLDivElement>(null);

  const navItems = [
    {
      key: "overview",
      title: "Overview",
      onClick: () => {
        navigate("#overview");
        setSelected("overview");
        if (innerLayoutRef.current) {
          innerLayoutRef.current.scrollTo({ top: 0, behavior: "smooth" });
        }
      },
    },
    {
      key: "theming",
      title: "Theming",
    },
    {
      key: "components",
      title: "Components",
      children: [
        {
          key: "button",
          title: "Button",
        },
        {
          key: "input",
          title: "Input",
        },
        {
          key: "typography",
          title: "Typography",
        },
        {
          key: "card",
          title: "Card",
        },
        {
          key: "showcase",
          title: "Showcase",
        },
        {
          key: "tag",
          title: "Tag",
        },
        {
          key: "skeleton",
          title: "Skeleton",
        },
        {
          key: "progress",
          title: "Progress",
        },
        {
          key: "statistic",
          title: "Statistic",
        },
        {
          key: "shiny-text",
          title: "Shiny Text",
        },
        {
          key: "chart",
          title: "Chart",
        },
        {
          key: "menu",
          title: "Menu",
        },
        {
          key: "tabs",
          title: "Tabs",
        },
        {
          key: "toast",
          title: "Toast",
        },
      ],
    },
    {
      key: "layout",
      title: "Layout",
      children: [
        {
          key: "navigation",
          title: "Navigation",
        },
        {
          key: "grid",
          title: "Grid",
        },
      ],
    },
  ];

  return (
    <Layout>
      <Breakpoint breakpoint="md">
        <Sidebar>
          <Navigation
            size="sm"
            selected={selected}
            items={navItems}
            onClick={(item) => {
              if (item.key === "overview") {
                navigate("#");
                setSelected("overview");
              } else {
                navigate("#" + item.key);
                setSelected(item.key);
              }
            }}
          />
        </Sidebar>
        <Spacing gap="lg" ref={innerLayoutRef}>
          <Flex direction="column" align="start" gap="md">
            <Spacing gap="lg" />
            <Heading level={1} bolder>
              📦 Components
            </Heading>
            <Divider style={{ marginBottom: "initial" }} />
          </Flex>
          <Section title="Overview" id="overview" divided />
          <ThemingSection />
          <ButtonSection />
          <InputSection />
          <TypographySection />
          <GridSection />
          <CardSection />
          <TagSection />
          <ShowcaseSection />
          <NavigationSection />
          <MenuSection />
          <ToastSection />
          <TabsSection />
          <SkeletonSection />
          <ProgressSection />
          <StatisticSection />
          <ChartSection />
          <ShinyTextSection />
        </Spacing>
      </Breakpoint>
    </Layout>
  );
};
