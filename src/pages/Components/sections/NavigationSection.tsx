import React, { useState } from "react";

import { Navigation, NavigationItem } from "../../../../lib/main";
import { Section } from "../../../components/Section";

interface NavigationSectionProps {}

const NavigationExample = (
  selected: string,
  setSelected: (key: string) => void
) => {
  const navigationItems: NavigationItem[] = [
    {
      key: "overview",
      title: "Overview",
    },
    {
      key: "getting-started",
      title: "Getting Started",
      children: [
        {
          key: "installation",
          title: "Installation",
        },
        {
          key: "quickstart",
          title: "Quick Start",
        },
      ],
    },
    {
      key: "components",
      title: "Components",
      children: [
        {
          key: "forms",
          title: "Forms",
          children: [
            {
              key: "button",
              title: "Button",
            },
            {
              key: "input",
              title: "Input",
            },
          ],
        },
        {
          key: "layout",
          title: "Layout",
          children: [
            {
              key: "grid",
              title: "Grid",
            },
            {
              key: "card",
              title: "Card",
            },
          ],
        },
      ],
    },
    {
      key: "guides",
      title: "Guides",
    },
  ];

  return (
    <div
      style={{
        border: "1px solid var(--color-border)",
        borderRadius: "8px",
        width: "200px",
      }}
    >
      <Navigation
        items={navigationItems}
        onClick={(item) => setSelected(item.key)}
        selected={selected}
        size="sm"
      />
    </div>
  );
};

const NavigationSection: React.FC<NavigationSectionProps> = () => {
  const [selected, setSelected] = useState("overview");

  return (
    <Section
      title="Navigation"
      id="navigation"
      divided
      codeExample={() => NavigationExample(selected, setSelected)}
    />
  );
};

export default NavigationSection;
