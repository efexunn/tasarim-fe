import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import Login from "../pages/login/Login";
import { Spin } from "antd";

interface ProtectedRouteProps {
  isAuthenticated: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ isAuthenticated }) => {
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthorization = async () => {
      if (isAuthenticated) {
        await axios
          .get("/api/Auth/IsLogged", {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
            },
          })
          .then((response) => {
            if (response.data) {
              setIsAuthorized(true);
            }
          })
          .catch((e) => {
            setIsAuthorized(false);
          });
      } else {
        setIsAuthorized(false);
      }
    };

    checkAuthorization();
  }, [isAuthenticated]);

  useEffect(() => {
    if (isAuthorized === false) {
      navigate("/login");
    }
  }, [isAuthorized, navigate]);

  if (isAuthorized === null) {
    return <Spin />; // Yükleniyor ekranı
  }

  return isAuthorized ? <Outlet /> : <Login />;
};

export default ProtectedRoute;
