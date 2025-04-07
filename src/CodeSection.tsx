import React, { useEffect, useState } from "react";

import { javascript } from "@codemirror/lang-javascript";
import CodeMirror from "@uiw/react-codemirror";
import prettierBabel from "prettier/plugins/babel";
import prettierEsTree from "prettier/plugins/estree";
import prettierTypescript from "prettier/plugins/typescript";
import prettier from "prettier/standalone";
import jsxToString from "react-element-to-jsx-string";

import { Section } from "../lib/main";

interface CodeSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  id: string;
  src?: string;
}

const Example: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
}) => {
  return <>{children}</>;
};

const CodeSection: React.FC<CodeSectionProps> = ({
  title,
  id,
  src,
  children,
}) => {
  const [formattedCode, setFormattedCode] = useState("");

  useEffect(() => {
    // Format the code using Prettier
    prettier
      .format(jsxToString(<Example>{children}</Example>), {
        parser: "babel-ts",
        plugins: [prettierBabel, prettierTypescript, prettierEsTree],
        singleQuote: true,
        trailingComma: "all",
      })
      .then((code) => {
        setFormattedCode(code);
      });
  }, [children]);

  return (
    <Section title={title} id={id} divided>
      {children}
      {/* <Typography.Link onClick={() => window.open(src, "_blank")}>
        View Source
      </Typography.Link> */}
      <CodeMirror
        theme={"dark"}
        value={formattedCode}
        style={{
          height: "auto",
          width: "100%",
        }}
        extensions={[javascript({ jsx: true })]}
      />
    </Section>
  );
};

export default CodeSection;
