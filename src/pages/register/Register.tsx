import { useState } from "react";
import "./register.scss";
import AuthManager from "../../services/AuthManager";

const Register = () => {
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");
  let [password, setPassword] = useState("");

  let authService = new AuthManager();

  let registerUser = () => {
    authService
      .RegisterUser(firstName, lastName, username, password, email, phone)
      .then((response) => {
        if (response.data) {
          setTimeout((location.href = "/success-page"), 1500);
        }
      })
      .catch((e) => {
        window.alert("Kayıt İşlemi Başarısız Bilgileri Tekrar Kontrol Ediniz");
      });
  };

  return (
    <>
      <div className="register">
        <div className="register-form">
          <div className="register-header">
            <span>KAYIT OL</span>
          </div>
          <div className="register-inputs">
            <span>Adı</span>
            <input
              type="text"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </div>
          <div className="register-inputs">
            <span>Soyadı</span>
            <input
              type="text"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>
          <div className="register-inputs">
            <span>Kullanıcı Adı</span>
            <input
              type="text"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <div className="register-inputs">
            <span>Email</span>
            <input
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="register-inputs">
            <span>Telefon</span>
            <input
              type="text"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </div>
          <div className="register-inputs">
            <span>Şifre</span>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="register-button">
            <button onClick={() => registerUser()}>Kayıt Ol</button>
          </div>
          <div className="go-login">
            <a href="/login">Zaten bir hesabın var mı?</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
