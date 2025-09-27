import { useMemo, useRef } from "react";

import { Location, useLocation, useNavigate } from "react-router";

import { Breakpoint } from "../../../lib/components/Layout";
import {
  Divider,
  Flex,
  Layout,
  Navigation,
  NavigationItem,
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

const useGetSelectedNavItem = (
  navItems: NavigationItem[],
  location: Location
) => {
  return useMemo(() => {
    const path = location.pathname + location.hash;

    const findSelected = (items: NavigationItem[]): string | undefined => {
      for (const item of items) {
        if (path.includes(item.key)) {
          return item.key;
        }
        if (item.children) {
          const childSelected = findSelected(item.children);
          if (childSelected) {
            return childSelected;
          }
        }
      }
      return undefined;
    };

    return findSelected(navItems) || "overview";
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
        if (innerLayoutRef.current) {
          innerLayoutRef.current.scrollTo({ top: 0, behavior: "smooth" });
        }
      },
    },
    {
      key: "theming",
      title: "Theming",
      onClick: () => navigate("#theming"),
    },
    {
      key: "components",
      title: "Components",
      children: [
        {
          key: "button",
          title: "Button",
          onClick: () => navigate("#button"),
        },
        {
          key: "input",
          title: "Input",
          onClick: () => navigate("#input"),
        },
        {
          key: "typography",
          title: "Typography",
          onClick: () => navigate("#typography"),
        },
        {
          key: "card",
          title: "Card",
          onClick: () => navigate("#card"),
        },
        {
          key: "showcase",
          title: "Showcase",
          onClick: () => navigate("#showcase"),
        },
        {
          key: "tag",
          title: "Tag",
          onClick: () => navigate("#tag"),
        },
        {
          key: "skeleton",
          title: "Skeleton",
          onClick: () => navigate("#skeleton"),
        },
        {
          key: "progress",
          title: "Progress",
          onClick: () => navigate("#progress"),
        },
        {
          key: "statistic",
          title: "Statistic",
          onClick: () => navigate("#statistic"),
        },
        {
          key: "shiny-text",
          title: "Shiny Text",
          onClick: () => navigate("#shiny-text"),
        },
        {
          key: "chart",
          title: "Chart",
          onClick: () => navigate("#chart"),
        },
        {
          key: "menu",
          title: "Menu",
          onClick: () => navigate("#menu"),
        },
        {
          key: "tabs",
          title: "Tabs",
          onClick: () => navigate("#tabs"),
        },
        {
          key: "toast",
          title: "Toast",
          onClick: () => navigate("#toast"),
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
          onClick: () => navigate("#navigation"),
        },
        {
          key: "grid",
          title: "Grid",
          onClick: () => navigate("#grid"),
        },
      ],
    },
  ];

  const selected = useGetSelectedNavItem(navItems, location);

  return (
    <Layout>
      <Breakpoint breakpoint="md">
        <Sidebar>
          <Navigation size="sm" selected={selected} items={navItems} />
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
