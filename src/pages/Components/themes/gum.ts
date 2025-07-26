import { CSSProperties } from "react";

export const gumTheme = (dark: boolean) => {
  const light = {
    "--font-primary": "Trebuchet MS, sans-serif",
    "--font-weight": 500,
    "--font-weight-bold": "bold",

    "--border-radius-xs": "0.6rem",
    "--border-radius-sm": "0.7rem",
    "--border-radius-md": "0.8rem",

    "--border": "solid 1px var(--color-background-dim)",

    "--color-secondary": "#3f0064ff",
    "--color-accent": "#bc40ffff",
    "--color-success": "green",
    "--color-warning": "orange",
    "--color-error": "red",

    "--color-background": "#fdf7ffff",
    "--color-background-dim": "#e9c1ffff",

    "--color-shadow-accent": "#e3afffff",

    "--shadow-accent-sm": "var(--color-shadow-accent) 0px 1px 8px",
  } as CSSProperties;

  if (dark) {
    return {
      ...light,
      "--color-background": "#1f0030ff",
      "--color-background-dim": "#6b00a4ff",

      "--color-secondary": "white",
      "--color-accent": "#a600ffff",

      "--color-shadow-accent": "#7a00bcff",
    } as CSSProperties;
  }

  return light;
};
