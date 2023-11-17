import Navbar from "../components/navbar/Navbar";
import { Footer } from "../components/footer/Footer";
import { Outlet } from "react-router-dom";
import "./layout.scss";

export const Layout = () => {
  return (
    <>
      <div className="main">
        <Navbar />
        <div className="content">
          <div className="container">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
