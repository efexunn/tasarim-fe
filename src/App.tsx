import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import { Layout } from "./layout/Layout";
import Home from "./pages/home/Home";
import Uni from "./pages/uni/Uni";
import "./styles/global.scss";
import Menu from "./pages/menu/Menu";
import AdminPanel from "./pages/admin-panel/AdminPanel";
import ProtectedRoute from "./utilities/ProtectedRoute";
import Register from "./pages/register/Register";
import MyPage from "./pages/my-page/MyPage";
import SuccessRegister from "./pages/success-register/SuccessRegister";

function App() {
  const isAuthenticated = !!localStorage.getItem("auth_token");
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/success-page" element={<SuccessRegister />} />
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Menu />} />
            <Route path="/doctors" element={<Home />} />
            <Route path="/uni" element={<Uni />} />
            <Route path="/admin-panel" element={<AdminPanel />} />
            <Route path="/my-page" element={<MyPage />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
