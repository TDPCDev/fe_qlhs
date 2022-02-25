import "./App.css";
import { MainStyled } from "./components/components.styled/Sidebar/MainStyled";
import { BrowserRouter, Routes, Route, useRoutes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { routes } from "./pages/configRoute";
import BlankPage from "./pages/BlankPage";

function App() {
  const rootRoutes = useRoutes(routes);
  return rootRoutes;
}

export default App;
