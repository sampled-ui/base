import { createContext, CSSProperties, useContext } from "react";

export const ThemeContext = createContext<{
  theme?: CSSProperties;
  setTheme?: React.Dispatch<React.SetStateAction<CSSProperties | undefined>>;
} | null>(null);

export const useThemeContext = () => {
  const { theme, setTheme } = useContext(ThemeContext) ?? {};

  return { theme, setTheme };
};
