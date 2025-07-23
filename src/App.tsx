import { createBrowserRouter, RouterProvider } from "react-router";

import "./App.scss";
import { NotFoundPage } from "./pages/404Page";
import { ComponentsPage } from "./pages/Components";
import DesignPage from "./pages/Design/DesignPage";
import DevelopmentPage from "./pages/Development/DevelopmentPage";
import LandingPage from "./pages/Landing/LandingPage";
import { Page } from "./pages/Page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Page />,
    errorElement: <NotFoundPage />,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/design", element: <DesignPage /> },
      { path: "/development", element: <DevelopmentPage /> },
      { path: "/components", element: <ComponentsPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
