import MainLayout from "../layouts/MainLayout";
import BlankPage from "./BlankPage";
import Login from "./Login";
import NotFound from "./NotFound";

export const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "td-inprocess",
        element: <BlankPage />,
      },
      {
        path: "td-new",
        element: <BlankPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/*",
    element: <NotFound />,
  },
];
