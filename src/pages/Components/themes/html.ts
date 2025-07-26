import { CSSProperties } from "react";

export const htmlTheme = (dark: boolean) => {
  const light = {
    "--font-primary": "initial",
    "--font-mono": "initial",
    "--font-weight-bold": "bold",

    "--font-size-xs": "inherit",
    "--font-size-sm": "inherit",
    "--font-size-md": "inherit",
    "--font-size-lg": "inherit",
    "--font-size-xl": "inherit",

    "--heading-size-xs": "inherit",
    "--heading-size-sm": "inherit",
    "--heading-size-md": "inherit",
    "--heading-size-lg": "inherit",
    "--heading-size-xl": "inherit",

    "--line-height-xs": "inherit",
    "--line-height-sm": "inherit",
    "--line-height-md": "inherit",
    "--line-height-lg": "inherit",
    "--line-height-xl": "inherit",

    "--heading-line-height-xs": "inherit",
    "--heading-line-height-sm": "inherit",
    "--heading-line-height-md": "inherit",
    "--heading-line-height-lg": "inherit",
    "--heading-line-height-xl": "inherit",

    "--border-radius-xs": "initial",
    "--border-radius-sm": "initial",
    "--border-radius-md": "initial",

    "--border": "solid 1px black",

    "--color-primary": "white",
    "--color-secondary": "black",
    "--color-tertiary": "gray",
    "--color-accent": "blue",
    "--color-success": "green",
    "--color-warning": "orange",
    "--color-error": "red",
  } as CSSProperties;

  if (dark) {
    return {
      ...light,
      "--color-primary": "hsl(0, 0%, 10%)",
      "--color-secondary": "white",
      "--color-accent": "blue",

      "--border": "solid 1px gray",
    };
  }

  return light;
};
