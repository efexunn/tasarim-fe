import { Divider, Input, Select, Table } from "antd";
import "./admin-panel.scss";

const AdminPanel = () => {
  let opts = [
    { value: 1, label: "HTML Elementi" },
    { value: 2, label: "Tag Id'si" },
    { value: 3, label: "Class Adı" },
  ];

  let cols = [
    { title: "Kayıt No", dataIndex: "", key: "", width: "100" },
    { title: "Doktor Adı", dataIndex: "", key: "" },
    { title: "Ünvanı", dataIndex: "", key: "" },
    { title: "Uzmanlık Alanı", dataIndex: "", key: "" },
    { title: "İletişim", dataIndex: "", key: "" },
  ];

  return (
    <>
      <div className="admin-panel">
        <div className="site-link">
          <span>Sayfa Linki</span>
          <input type="text" />
        </div>
        <Divider>Doktor Adı Soyadı</Divider>
        <div className="tag-form">
          <div className="infos">
            <span>Tipi</span>
            <Select options={opts} size="small" style={{ width: "200px" }} />
          </div>
          <div className="infos">
            <span>Tag/Id/Class İsmi</span>
            <Input size="small" style={{ width: "200px" }} />
          </div>
        </div>
        <Divider>Ünvan Bilgisi</Divider>
        <div className="tag-form">
          <div className="infos">
            <span>Tipi</span>
            <Select options={opts} size="small" style={{ width: "200px" }} />
          </div>
          <div className="infos">
            <span>Tag/Id/Class İsmi</span>
            <Input size="small" style={{ width: "200px" }} />
          </div>
        </div>
        <Divider>Uzmanlık Alanı</Divider>
        <div className="tag-form">
          <div className="infos">
            <span>Tipi</span>
            <Select options={opts} size="small" style={{ width: "200px" }} />
          </div>
          <div className="infos">
            <span>Tag/Id/Class İsmi</span>
            <Input size="small" style={{ width: "200px" }} />
          </div>
        </div>
        <Divider>İletişim Bilgileri</Divider>
        <div className="tag-form">
          <div className="infos">
            <span>Tipi</span>
            <Select options={opts} size="small" style={{ width: "200px" }} />
          </div>
          <div className="infos">
            <span>Tag/Id/Class İsmi</span>
            <Input size="small" style={{ width: "200px" }} />
          </div>
        </div>
        <Divider>Fotoğraf</Divider>
        <div className="tag-form">
          <div className="infos">
            <span>Tipi</span>
            <Select options={opts} size="small" style={{ width: "200px" }} />
          </div>
          <div className="infos">
            <span>Tag/Id/Class İsmi</span>
            <Input size="small" style={{ width: "200px" }} />
          </div>
        </div>
        <div className="button-div">
          <button>Kazımayı Başlat</button>
        </div>
        <div className="table-area">
          <Table columns={cols} />
        </div>
      </div>
    </>
  );
};

export default AdminPanel;
