import { UserOutlined } from "@ant-design/icons";
import "./login.scss";
import { useState } from "react";
import AuthManager from "../../services/AuthManager";

const Login = () => {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let authService = new AuthManager();

  let LoginUser = () => {
    authService.LoginUser(username, password).then((response) => {
      console.log(response);
      if (response.data.authenticateResult) {
        localStorage.setItem("auth_token", `${response.data.authToken}`);
        localStorage.setItem("firstname", `${response.data.firstname}`);
        localStorage.setItem("lastname", `${response.data.lastname}`);
        localStorage.setItem("username", `${response.data.username}`);
        localStorage.setItem("user_id", `${response.data.id}`);
        location.href = "/";
      } else {
        window.alert("Kullanıcı bilgileri hatali");
      }
    });
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
        <button onClick={() => LoginUser()}>Giriş yap</button>
        <a href="/register">Kayıt Ol</a>
      </div>
      <div className="project-name"></div>
    </div>
  );
};

export default Login;
