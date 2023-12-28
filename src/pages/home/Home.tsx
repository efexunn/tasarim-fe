import { useEffect, useState } from "react";
import { LecturerService } from "../../services/LecturerService";
import { DoctorService } from "../../services/DoctorServices";
import { Card, Modal, Select } from "antd";
import "./home.scss";
import PersonDetail from "../../components/person-detail/PersonDetail";

const Home = () => {
  let [doctorList, setDoctorList] = useState<Array<DoctorModel>>([]);
  let doctorService = new DoctorService();
  let emptyDoc = {
    DoctorName: "",
    DoctorEmail: "String",
    DoctorTitle: 1,
    DoctorTitleName: "String",
    DoctorHospital: 1,
    DoctorHospitalName: "string",
    DoctorPoliclinic: 1,
    DoctorPoliclinicName: "string",
    Id: 1,
    RowStateId: 1,
  };
  let [doctor, setDoctor] = useState<DoctorModel>(emptyDoc);
  const [open, setOpen] = useState(false);
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

  useEffect(() => {
    doctorService.getDoctors().then((response) => {
      setDoctorList(response.data);
    });
    //.then((response) => setLecturerList(response.data));
  }, []);

  let opts = [
    {
      value: "1",
      label: "Not Identified",
    },
    {
      value: "2",
      label: "Closed",
    },
    {
      value: "3",
      label: "Communicated",
    },
    {
      value: "4",
      label: "Identified",
    },
    {
      value: "5",
      label: "Resolved",
    },
    {
      value: "6",
      label: "Cancelled",
    },
  ];

  let [cityCategory, setCityCategory] = useState("Hastane");
  let [titleCategory, setTitleCategory] = useState("Ünvan");
  let [policlinicCategory, setPoliclinicCategory] = useState("Poliklinik");
  return (
    <>
      <div className="home">
        <div className="filters">
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Search to Select"
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.label ?? "").includes(input)
            }
            options={opts}
            value={cityCategory}
            onChange={(cityCategory) => {
              setCityCategory(cityCategory);
              console.log(cityCategory);
            }}
          />

          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Search to Select"
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.label ?? "").includes(input)
            }
            options={opts}
            value={titleCategory}
            onChange={(titleCategory) => {
              setTitleCategory(titleCategory);
              console.log(titleCategory);
            }}
          />

          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Search to Select"
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.label ?? "").includes(input)
            }
            options={opts}
            value={policlinicCategory}
            onChange={(policlinicCategory) => {
              setPoliclinicCategory(policlinicCategory);
              console.log(policlinicCategory);
            }}
          />
          <button>Filtrele</button>
        </div>

        <Card
          style={{
            display: "flex",
            justifyContent: "space-around",
            fontFamily: "Archivo",
          }}
        >
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
          {doctorList.map((item) => (
            <Card.Grid
              style={{ width: "17%", marginInline: "4%", height: "auto" }}
              onClick={() => showModal(item)}
            >
              <div className="card">
                <div className="photo">
                  <img src="https://www.acibadem.com.tr/assets/images/doctors/cagri-buke-banner.png" />
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
          ))}
        </Card>
      </div>
    </>
  );
};

export default Home;
