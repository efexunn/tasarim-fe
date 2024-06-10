import React from "react";
import "./menu.scss";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu">
      <span onClick={() => (location.href = "/doctors")}>Doktorlar</span>
      <span>Akademisyenler</span>
      <span onClick={() => (location.href = "/my-page")}>Benim Sayfam</span>
      {localStorage.getItem("username") === "efe" ||
      localStorage.getItem("username") === "cato" ? (
        <span onClick={() => (location.href = "/admin-panel")}>
          Admin Panel
        </span>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Menu;
