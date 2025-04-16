import React, { useState } from "react";

import {
  Button,
  Flex,
  Select,
  ToastProvider,
  Typography,
  Variants,
  useToast,
} from "../../../../lib/main";
import { Section } from "../../../components/Section";

interface ToastSectionProps {}

const ToastButton: React.FC<{ type: Variants; children: string }> = ({
  type,
  children,
}) => {
  const { toast } = useToast();
  const [counter, setCounter] = useState(1);
  const message = ((type: Omit<Variants, "success" | "warning" | "danger">) => {
    switch (type) {
      case "success":
        return "Success Toast " + counter;
      case "warning":
        return "Warning Toast " + counter;
      case "danger":
        return "Danger Toast " + counter;
      default:
        return "Sample UI Toast " + counter;
    }
  })(type);

  return (
    <Button
      variant={type}
      onClick={() => {
        toast({ message, type });
        setCounter(counter + 1);
      }}
    >
      {children}
    </Button>
  );
};

const ToastExample = (
  toasterProps:
    | {
        verticalAlignment: "top" | "bottom";
        horizontalAlignment: "left" | "right" | "center";
      }
    | undefined
) => {
  return (
    <ToastProvider
      {...toasterProps}
      icons={{
        success: <div>✅</div>,
        danger: <div>❌</div>,
        warning: <div>⚠️</div>,
      }}
    >
      <Flex gap="md">
        <ToastButton type="primary">Normal Toast</ToastButton>
        <ToastButton type="success">Success Toast</ToastButton>
        <ToastButton type="danger">Danger Toast</ToastButton>
        <ToastButton type="warning">Warning Toast</ToastButton>
      </Flex>
    </ToastProvider>
  );
};

const ToastSection: React.FC<ToastSectionProps> = () => {
  const [verticalAlignment, setVerticalAlignment] = useState<"top" | "bottom">(
    "top"
  );
  const [horizontalAlignment, setHorizontalAlignment] = useState<
    "left" | "right" | "center"
  >("center");

  return (
    <Section
      title="Toast"
      id="toast"
      divided
      codeExample={ToastExample}
      codeExampleProps={{ verticalAlignment, horizontalAlignment }}
    >
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
    </Section>
  );
};

export default ToastSection;
