import MainLayout from "../layouts/MainLayout";
import ContentLayout from "../layouts/ContentLayout";

import BlankPage from "./BlankPage";
import Login from "./Login";
import NotFound from "./NotFound";
import ManagerTypeBuilding from "./ManagerTypeBuilding";
import ManagerUser from "./ManagerUser";
import AdminWarning from "./AdminWarning";
export const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <ContentLayout header="Tổng quan" />,
        children: [
          {
            path: "",
            element: <BlankPage />,
          },
        ],
      },
      {
        path: "admin",
        element: <ContentLayout header="Quản lý Admin" />,
        children: [
          {
            path: "typebuilding",
            element: <ManagerTypeBuilding />,
          },
          {
            path: "user",
            element: <ManagerUser />,
          },
          {
            path: "notallow",
            element: <AdminWarning />,
          },
        ],
      },
      {
        path: "design",
        element: <ContentLayout header="Hồ sơ thẩm duyệt" />,
        children: [
          {
            path: "new",
            element: <BlankPage />,
          },
          {
            path: "add",
            element: <ManagerUser />,
          },
          {
            path: "inprocess",
            element: <ManagerUser />,
          },
          {
            path: "finish",
            element: <ManagerUser />,
          },
        ],
      },
      {
        path: "checkup",
        element: <ContentLayout header="Hồ sơ nghiệm thu" />,
        children: [
          {
            path: "new",
            element: <BlankPage />,
          },
          {
            path: "add",
            element: <ManagerUser />,
          },
          {
            path: "inprocess",
            element: <ManagerUser />,
          },
          {
            path: "finish",
            element: <ManagerUser />,
          },
        ],
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
