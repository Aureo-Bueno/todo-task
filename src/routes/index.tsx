import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/home";
import { Kanban } from "../pages/kanban";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/kanban",
    element: <Kanban />,
  },
  {
    path: "*",
    element: <Home />,
  },
]);
