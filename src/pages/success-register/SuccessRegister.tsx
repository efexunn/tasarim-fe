import { Button, Result } from "antd";

const SuccessRegister = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Result
        status="success"
        title="Başarıyla Kayıt Oldunuz!"
        subTitle="Giriş ekranına dönmek için aşağıdaki butonu kullanabilirsiniz."
        extra={[
          <Button
            type="primary"
            key="console"
            onClick={() => (location.href = "/login")}
          >
            Giriş Ekranına Dön
          </Button>,
        ]}
      />
    </div>
  );
};

export default SuccessRegister;
