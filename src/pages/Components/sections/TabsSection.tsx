import React from "react";

import { Tabs } from "../../../../lib/main";
import { Section } from "../../../components/Section";

interface TabsSectionProps {}

const TabsExample = () => {
  return (
    <Tabs
      items={[
        { key: "tab1", title: "Tab 1" },
        { key: "tab2", title: "Tab 2" },
        { key: "tab3", title: "Tab 3" },
      ]}
      defaultSelection="tab1"
      onSelect={(key) => console.log(`Selected tab: ${key}`)}
    />
  );
};

const TabsSection: React.FC<TabsSectionProps> = () => {
  return <Section title="Tabs" id="tabs" divided codeExample={TabsExample} />;
};

export default TabsSection;
