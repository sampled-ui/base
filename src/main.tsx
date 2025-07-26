import { StrictMode } from "react";

import { createRoot } from "react-dom/client";

import { ThemeProvider } from "../lib/main.ts";

import App from "./App.tsx";
import "./index.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);
