import React, { useState } from "react";

import {
  Button,
  Flex,
  Section,
  Select,
  ToastProvider,
  Typography,
  Variants,
  useToast,
} from "../../../lib/main";

interface ToastSectionProps {}

const ToastButton: React.FC<{ type: Variants; children: string }> = ({
  type,
  children,
}) => {
  const { toast } = useToast();
  const [counter, setCounter] = useState(1);
  return (
    <Button
      variant={type}
      onClick={() => {
        toast({ message: "✨ Sample UI Toast " + counter, type });
        setCounter(counter + 1);
      }}
    >
      {children}
    </Button>
  );
};

const ToastSection: React.FC<ToastSectionProps> = () => {
  const [verticalAlignment, setVerticalAlignment] = useState<"top" | "bottom">(
    "top"
  );
  const [horizontalAlignment, setHorizontalAlignment] = useState<
    "left" | "right" | "center"
  >("center");

  const toasterProps = { verticalAlignment, horizontalAlignment };

  return (
    <Section title="Toast" id="toast" divided>
      <Flex gap="md">
        <Flex direction="column" gap="sm" align="start">
          <Typography.Text bold>Vertical Alignment</Typography.Text>
          <Select
            size="sm"
            menu={{
              items: [
                { key: "top", title: "Top" },
                { key: "bottom", title: "Bottom" },
              ],
              defaultSelection: "top",
              onSelect: (item) => {
                setVerticalAlignment(item.key as "top" | "bottom");
              },
            }}
          />
        </Flex>
        <Flex direction="column" gap="sm" align="start">
          <Typography.Text bold>Horizontal Alignment</Typography.Text>
          <Select
            size="sm"
            menu={{
              items: [
                { key: "left", title: "Left" },
                { key: "right", title: "Right" },
                {
                  key: "center",
                  title: "Center",
                },
              ],
              defaultSelection: "center",
              onSelect: (item) => {
                setHorizontalAlignment(item.key as "left" | "right" | "center");
              },
            }}
          />
        </Flex>
      </Flex>
      <ToastProvider {...toasterProps}>
        <Flex gap="md">
          <ToastButton type="primary">Normal Toast</ToastButton>
          <ToastButton type="success">Success Toast</ToastButton>
        </Flex>
      </ToastProvider>
    </Section>
  );
};

export default ToastSection;
