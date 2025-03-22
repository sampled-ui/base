import { createBrowserRouter, RouterProvider } from "react-router";

import "./App.scss";
import { NotFoundPage } from "./pages/404Page";
import { ComponentsPage } from "./pages/Components";
import { Page } from "./pages/Page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Page />,
    errorElement: <NotFoundPage />,
    children: [{ path: "/components", element: <ComponentsPage /> }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
