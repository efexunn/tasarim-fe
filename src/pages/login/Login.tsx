import { UserOutlined } from "@ant-design/icons";
import "./login.scss";
import { useState } from "react";

const Login = () => {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");

  let isValid = () => {
    if (username === "efe" && password === "123") {
      location.href = "/";
    } else {
      window.alert("Yanlış kullanıcı adı ve şifre");
    }
  };

  return (
    <div className="login">
      <div className="login-form">
        <div className="login-icon">
          <UserOutlined />
          <span className="login-header">GİRİŞ</span>
        </div>
        <div className="username">
          <span>Kullanıcı Adı</span>
          <input onChange={(e) => setUsername(e.target.value)} type="text" />
        </div>
        <div className="password">
          <span>Şifre</span>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </div>
        <button onClick={() => isValid()}>Giriş yap</button>
      </div>
      <div className="project-name"></div>
    </div>
  );
};

export default Login;
