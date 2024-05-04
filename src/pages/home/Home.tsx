import { useEffect, useState } from "react";
import { DoctorManager } from "../../services/DoctorManager";
import { Card, Col, Modal, Row, Select } from "antd";
import "./home.scss";
import PersonDetail from "../../components/person-detail/PersonDetail";
import PoliclinicService from "../../services/PoliclinicManager";
import HospitalManager from "../../services/HospitalManager";
import TitleManager from "../../services/TitleManager";
import Meta from "antd/es/card/Meta";
import { SearchOutlined } from "@ant-design/icons";

const Home = () => {
  let [doctorList, setDoctorList] = useState<Array<any>>(new Array<any>());
  let doctorService = new DoctorManager();
  let emptyDoc = {
    DoctorName: "",
    DoctorEmail: "String",
    DoctorTitle: 1,
    DoctorTitleName: "String",
    DoctorHospital: 1,
    DoctorHospitalName: "string",
    DoctorImageLink: "string",
    DoctorPoliclinic: 1,
    DoctorPoliclinicName: "string",
    Id: 1,
    RowStateId: 1,
  };
  let [doctor, setDoctor] = useState<DoctorModel>(emptyDoc);
  const [open, setOpen] = useState(false);
  let policlinicService = new PoliclinicService();
  let hospitalService = new HospitalManager();
  let titleService = new TitleManager();
  let [policlinicList, setPoliclinicList] = useState<Array<SelectModel>>();
  let [hospitalList, setHospitalList] = useState<Array<SelectModel>>();
  let [titleList, setTitleList] = useState<Array<SelectModel>>();

  const showModal = (item: DoctorModel) => {
    setDoctor(item);
    setOpen(true);
  };
  const handleOk = () => {
    setOpen(false);
  };
  const handleCancel = () => {
    setOpen(false);
  };

  let handleFilter = () => {
    doctorService
      .GetDoctorsFiltered(cityCategory, policlinicCategory, titleCategory)
      .then((response) => {
        console.log(response);
      });
  };

  useEffect(() => {
    doctorService
      .getDoctors()
      .then((response) => {
        setDoctorList(JSON.parse(response.data));
      })
      .catch((err) => {
        console.log(err);
      });

    policlinicService.GetPoliclinics().then((response: any) => {
      setPoliclinicList(
        policlinicService.ConvertPoliclinicsToSelectModel(
          JSON.parse(response.data)
        )
      );
    });

    hospitalService.GetHospitals().then((response: any) => {
      setHospitalList(
        hospitalService.ConvertHospitalsToSelectModel(JSON.parse(response.data))
      );
    });

    titleService.GetTitles().then((response) => {
      setTitleList(
        titleService.ConvertTitlesToSelectModel(JSON.parse(response.data))
      );
    });

    //.then((response) => setLecturerList(response.data));
  }, []);

  let [cityCategory, setCityCategory] = useState<any>();
  let [titleCategory, setTitleCategory] = useState<any>();
  let [policlinicCategory, setPoliclinicCategory] = useState<any>();

  return (
    <>
      <div className="home">
        <div className="search-bar">
          <div className="search-bar-border">
            <input type="text" />
            <span>
              <SearchOutlined />
            </span>
          </div>
        </div>
        <div className="filters">
          <Select
            allowClear
            showSearch
            style={{ width: 200 }}
            placeholder="Hastane"
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.label ?? "").includes(input)
            }
            options={hospitalList}
            value={cityCategory}
            onChange={(cityCategory) => {
              setCityCategory(cityCategory);
              console.log(cityCategory);
            }}
          />

          <Select
            allowClear
            showSearch
            style={{ width: 200 }}
            placeholder="Ünvan"
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.label ?? "").includes(input)
            }
            options={titleList}
            value={titleCategory}
            onChange={(titleCategory) => {
              setTitleCategory(titleCategory);
              console.log(titleCategory);
            }}
          />

          <Select
            allowClear
            showSearch
            style={{ width: 200 }}
            placeholder="Poliklinik"
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.label ?? "").includes(input)
            }
            options={policlinicList}
            value={policlinicCategory}
            onChange={(policlinicCategory) => {
              setPoliclinicCategory(policlinicCategory);
              console.log(policlinicCategory);
            }}
          />
          <button onClick={handleFilter}>Filtrele</button>
        </div>

        <Modal
          open={open}
          onOk={handleOk}
          onCancel={handleCancel}
          width={800}
          okButtonProps={{}}
          cancelButtonProps={{
            disabled: true,
          }}
        >
          <PersonDetail doctorObj={doctor} />
        </Modal>

        <div className="doctor-list">
          <div style={{ padding: "20px" }}>
            <Row gutter={[16, 16]}>
              {doctorList.map((item) => (
                <Col key={item.id} xs={24} sm={12} md={8} lg={6}>
                  <Card style={{ width: "100%" }}>
                    <Card.Grid
                      style={{ width: "100%", height: "auto" }}
                      onClick={() => showModal(item)}
                    >
                      <div className="card">
                        <div className="photo">
                          <img src={item.DoctorImageLink} />
                        </div>
                        <div className="name">
                          <span>{item.DoctorName}</span>
                        </div>
                        <div className="email">
                          <span>{item.DoctorEmail}</span>
                        </div>
                        <div className="phone">
                          <span>{item.DoctorPoliclinicName}</span>
                        </div>
                      </div>
                    </Card.Grid>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
