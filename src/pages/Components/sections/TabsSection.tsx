import React, { useState } from "react";

import { Tabs } from "../../../../lib/main";
import { Section } from "../../../components/Section";

interface TabsSectionProps {}

const TabsExample = (
  props:
    | {
        selected: string;
        onSelect: (item: { key: string }) => void;
      }
    | undefined
) => {
  return (
    <Tabs
      items={[
        { key: "tab1", title: "Tab 1" },
        { key: "tab2", title: "Tab 2" },
        { key: "tab3", title: "Tab 3" },
      ]}
      {...props}
    />
  );
};

const TabsSection: React.FC<TabsSectionProps> = () => {
  const [selected, setSelected] = useState("tab1");

  return (
    <Section
      title="Tabs"
      id="tabs"
      divided
      codeExample={TabsExample}
      codeExampleProps={{ selected, onSelect: (item) => setSelected(item.key) }}
    />
  );
};

export default TabsSection;
