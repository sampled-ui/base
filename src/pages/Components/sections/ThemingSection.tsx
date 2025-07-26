import React, { CSSProperties, useCallback, useEffect, useState } from "react";

import { Select, useThemeContext } from "../../../../lib/main";
import { Section } from "../../../components/Section";
import { appleTheme } from "../themes/apple";
import { gumTheme } from "../themes/gum";
import { htmlTheme } from "../themes/html";

function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(
    () => window.matchMedia(query).matches
  );

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const listener = (event: MediaQueryListEvent) => setMatches(event.matches);
    mediaQueryList.addEventListener("change", listener);
    setMatches(mediaQueryList.matches);
    return () => mediaQueryList.removeEventListener("change", listener);
  }, [query]);

  return matches;
}

interface ThemingSectionProps {}

export const ThemingSection: React.FC<ThemingSectionProps> = () => {
  const { setTheme } = useThemeContext();
  const [theme, setThemeKey] = useState<string>("classic");
  const isDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const changeTo = useCallback(
    (themeCallback: (dark: boolean) => CSSProperties) => {
      setTheme?.(themeCallback(isDarkMode));
    },
    [isDarkMode, setTheme]
  );
  useEffect(() => {
    if (theme === "classic") {
      setTheme?.({});
    } else if (theme === "html") {
      changeTo(htmlTheme);
    } else if (theme === "gum") {
      changeTo(gumTheme);
    } else if (theme === "apple") {
      changeTo(appleTheme);
    }
    return () => {
      setTheme?.({});
    };
  }, [changeTo, isDarkMode, setTheme, theme]);

  return (
    <Section title="Theming" id="theming" divided>
      <Select
        placeholder="Select a theme"
        menu={{
          alignment: "bottom",
          select: true,
          defaultSelection: "classic",
          items: [
            {
              title: "Classic",
              key: "classic",
              onClick: () => setThemeKey("classic"),
            },
            {
              title: "HTML",
              key: "html",
              onClick: () => setThemeKey("html"),
            },
            {
              title: "Apple",
              key: "apple",
              onClick: () => setThemeKey("apple"),
            },
            {
              title: "Gum",
              key: "gum",
              onClick: () => setThemeKey("gum"),
            },
          ],
        }}
      />
    </Section>
  );
};
