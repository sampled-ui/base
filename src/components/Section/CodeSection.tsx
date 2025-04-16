import React, { JSX, useEffect, useState } from "react";

import { javascript } from "@codemirror/lang-javascript";
import CodeMirror from "@uiw/react-codemirror";
import prettierBabel from "prettier/plugins/babel";
import prettierEsTree from "prettier/plugins/estree";
import prettierTypescript from "prettier/plugins/typescript";
import prettier from "prettier/standalone";
import jsxToString from "react-element-to-jsx-string";

interface CodeSectionProps {
  code: () => JSX.Element | JSX.Element[];
  src?: string;
}

const useCodeExample = (code: () => JSX.Element | JSX.Element[]) => {
  const [formattedCode, setFormattedCode] = useState("");

  useEffect(() => {
    // Format the code using Prettier
    prettier
      .format(jsxToString(code()), {
        parser: "babel-ts",
        plugins: [prettierBabel, prettierTypescript, prettierEsTree],
        singleQuote: true,
        trailingComma: "all",
      })
      .then((code) => {
        setFormattedCode(code);
      });
  }, [code]);

  return formattedCode;
};

export const CodeSection: React.FC<CodeSectionProps> = ({ code }) => {
  const print = useCodeExample(code);

  return (
    <CodeMirror
      editable={false}
      theme={"dark"}
      value={print}
      style={{
        height: "auto",
        width: "100%",
      }}
      extensions={[javascript({ jsx: true })]}
    />
  );
};
