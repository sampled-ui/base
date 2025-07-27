import { CSSProperties } from "react";

export const appleTheme = (dark: boolean) => {
  const light = {
    "--font-weight": 300,
    "--font-weight-bold": 400,

    "--border": "solid 0.5px var(--color-background-dim)",
    "--border-radius-xs": "0.6rem",
    "--border-radius-sm": "0.7rem",
    "--border-radius-md": "0.8rem",

    "--color-accent": "hsl(205, 100%, 54%)",
  } as CSSProperties;

  if (dark) {
    return {
      ...light,
    } as CSSProperties;
  }

  return light;
};
