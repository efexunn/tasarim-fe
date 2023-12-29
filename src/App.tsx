import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/login/Login";
import { Layout } from "./layout/Layout";
import Home from "./pages/home/Home";
import Uni from "./pages/uni/Uni";
import "./styles/global.scss";
import Menu  from "./pages/menu/Menu";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/doctors",
          element: <Home />,
        },
        {
          path: "/uni",
          element: <Uni />,
        },
        {
          path: "/",
          element: <Menu />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
