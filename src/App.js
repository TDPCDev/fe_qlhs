import "./App.css";
import { useRoutes } from "react-router-dom";
import { routes } from "./pages/configRoute";

function App() {
  const rootRoutes = useRoutes(routes);
  return rootRoutes;
}

export default App;
