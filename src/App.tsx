import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Login from "./pages/login/Login";
import { Layout } from "./layout/Layout";
import Home from "./pages/home/Home";
import Uni from "./pages/uni/Uni";
import "./styles/global.scss";
import Menu from "./pages/menu/Menu";
import AdminPanel from "./pages/admin-panel/AdminPanel";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Menu />} />
          <Route path="/doctors" element={<Home />} />
          <Route path="/uni" element={<Uni />} />
          <Route path="/admin-panel" element={<AdminPanel />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
