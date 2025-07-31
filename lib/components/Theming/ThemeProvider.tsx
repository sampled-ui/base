import { CSSProperties, useState } from "react";

import { ThemeContext, useThemeContext } from "./hooks";

import "../../theme/theme.css";
import "../../theme/variables.css";

const WithTheme: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { theme } = useThemeContext();
  return <div style={theme} id="theme">{children}</div>;
};

export const ThemeProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [theme, setTheme] = useState<CSSProperties | undefined>();
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <WithTheme>{children}</WithTheme>
    </ThemeContext.Provider>
  );
};
