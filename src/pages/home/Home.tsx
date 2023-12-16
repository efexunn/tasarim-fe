import { useEffect, useState } from "react";
import { LecturerService } from "../../services/LecturerService";
import { DoctorService } from "../../services/DoctorServices";
import { Card, Modal } from "antd";
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
        RowStateId: 1
  }
  let [doctor, setDoctor] = useState<DoctorModel>(emptyDoc)
  const [open, setOpen] = useState(false);
  const showModal = (item : DoctorModel) => {
    setDoctor(item);
    setOpen(true);
  };
  const handleOk = () => {
    setOpen(false);
  };
  const handleCancel = () => {
    setOpen(false);
  };

  let orn = [
    {
      FullName: "prof. dr. kemal fidanboylu",
      Title: "",
      Email: " kfidan@uludag.edu.tr",
      TelephoneNumber: " +90 (224) 295 5282",
      Adress: " bilgisayar müh. bölüm binası, 1. kat, oda 3.",
      AvesisLink: " https://avesis.uludag.edu.tr/kfidan",
      Id: 150,
      RowStateId: 0,
    },
    {
      FullName: "prof. dr. kemal fidanboylu",
      Title: "",
      Email: " kfidan@uludag.edu.tr",
      TelephoneNumber: " +90 (224) 295 5282",
      Adress: " bilgisayar müh. bölüm binası, 1. kat, oda 3.",
      AvesisLink: " https://avesis.uludag.edu.tr/kfidan",
      Id: 151,
      RowStateId: 0,
    },
    {
      FullName: "prof. dr. ahmet emir dirik",
      Title: "",
      Email: " edirik@uludag.edu.tr",
      TelephoneNumber: " +90(224) 294 0655",
      Adress: " bilgisayar müh. bölüm binası, 5. kat, oda 546.",
      AvesisLink: " https://avesis.uludag.edu.tr/edirik",
      Id: 152,
      RowStateId: 0,
    },
    {
      FullName: "prof. dr. ahmet emir dirik",
      Title: "",
      Email: " edirik@uludag.edu.tr",
      TelephoneNumber: " +90(224) 294 0655",
      Adress: " bilgisayar müh. bölüm binası, 5. kat, oda 546.",
      AvesisLink: " https://avesis.uludag.edu.tr/edirik",
      Id: 153,
      RowStateId: 0,
    },
    {
      FullName: "prof. dr. pınar kırcı",
      Title: "",
      Email: " pinarkirci@uludag.edu.tr",
      TelephoneNumber: "",
      Adress: " bilgisayar müh. bölüm binası, 1. kat, oda 110.",
      AvesisLink: " https://avesis.uludag.edu.tr/pinarkirci",
      Id: 154,
      RowStateId: 0,
    },
    {
      FullName: "prof. dr. pınar kırcı",
      Title: "",
      Email: " pinarkirci@uludag.edu.tr",
      TelephoneNumber: "",
      Adress: " bilgisayar müh. bölüm binası, 1. kat, oda 110.",
      AvesisLink: " https://avesis.uludag.edu.tr/pinarkirci",
      Id: 155,
      RowStateId: 0,
    },
    {
      FullName: "doç. dr. gıyasettin özcan",
      Title: "",
      Email: " gozcan@uludag.edu.tr",
      TelephoneNumber: "+90 (224) 294 2792",
      Adress: " bilgisayar müh. bölüm binası, 1. kat, oda 107.",
      AvesisLink: " https://avesis.uludag.edu.tr/gozcan",
      Id: 156,
      RowStateId: 0,
    },
    {
      FullName: "doç. dr. gıyasettin özcan",
      Title: "",
      Email: " gozcan@uludag.edu.tr",
      TelephoneNumber: "+90 (224) 294 2792",
      Adress: " bilgisayar müh. bölüm binası, 1. kat, oda 107.",
      AvesisLink: " https://avesis.uludag.edu.tr/gozcan",
      Id: 157,
      RowStateId: 0,
    },
    {
      FullName: "doç. dr. metin bilgin",
      Title: "",
      Email: " metinbilgin@uludag.edu.tr",
      TelephoneNumber: " +90 (224) 275 5263",
      Adress: " bilgisayar müh. bölüm binası, 1. kat, oda:109",
      AvesisLink: " https://avesis.uludag.edu.tr/metinbilgin",
      Id: 158,
      RowStateId: 0,
    },
    {
      FullName: "doç. dr. metin bilgin",
      Title: "",
      Email: " metinbilgin@uludag.edu.tr",
      TelephoneNumber: " +90 (224) 275 5263",
      Adress: " bilgisayar müh. bölüm binası, 1. kat, oda:109",
      AvesisLink: " https://avesis.uludag.edu.tr/metinbilgin",
      Id: 159,
      RowStateId: 0,
    },
    {
      FullName: "doç. dr. murtaza cicioğlu",
      Title: "",
      Email: " murtazacicioglu@uludag.edu.tr",
      TelephoneNumber: " +90 (224) 294 2796",
      Adress: " bilgisayar müh. bölüm binası, 1. kat, oda 111.",
      AvesisLink: " https://avesis.uludag.edu.tr/murtazacicioglu",
      Id: 160,
      RowStateId: 0,
    },
    {
      FullName: "doç. dr. murtaza cicioğlu",
      Title: "",
      Email: " murtazacicioglu@uludag.edu.tr",
      TelephoneNumber: " +90 (224) 294 2796",
      Adress: " bilgisayar müh. bölüm binası, 1. kat, oda 111.",
      AvesisLink: " https://avesis.uludag.edu.tr/murtazacicioglu",
      Id: 161,
      RowStateId: 0,
    },
    {
      FullName: "dr. öğr. üyesi ceyda nur öztürk",
      Title: "",
      Email: " ceydanur@uludag.edu.tr",
      TelephoneNumber: " +90 (224) 294 1936",
      Adress: " bilgisayar müh. bölüm binası, 1. kat, oda 112",
      AvesisLink: " https://avesis.uludag.edu.tr/ceydanur",
      Id: 162,
      RowStateId: 0,
    },
    {
      FullName: "dr. öğr. üyesi ceyda nur öztürk",
      Title: "",
      Email: " ceydanur@uludag.edu.tr",
      TelephoneNumber: " +90 (224) 294 1936",
      Adress: " bilgisayar müh. bölüm binası, 1. kat, oda 112",
      AvesisLink: " https://avesis.uludag.edu.tr/ceydanur",
      Id: 163,
      RowStateId: 0,
    },
    {
      FullName: "araş. gör. caner şen",
      Title: "",
      Email: " canersen@uludag.edu.tr",
      TelephoneNumber: " +90 (224) 294 2644",
      Adress: " bilgisayar müh. bölüm binası, 1.kat, oda 105.",
      AvesisLink: " https://avesis.uludag.edu.tr/canersen",
      Id: 164,
      RowStateId: 0,
    },
    {
      FullName: "araş. gör. caner şen",
      Title: "",
      Email: " canersen@uludag.edu.tr",
      TelephoneNumber: " +90 (224) 294 2644",
      Adress: " bilgisayar müh. bölüm binası, 1.kat, oda 105.",
      AvesisLink: " https://avesis.uludag.edu.tr/canersen",
      Id: 165,
      RowStateId: 0,
    },
  ];

  useEffect(() => {
    doctorService.getDoctors().then((response) => {setDoctorList(response.data)})
      //.then((response) => setLecturerList(response.data));
  }, []);

  return (
    <>
      <div className="home">
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
          okButtonProps={{
           
          }}
          cancelButtonProps={{
            disabled: true,
          }}
          >
            <PersonDetail doctorObj={doctor}/>
          </Modal>
          {doctorList.map((item) => (
            <Card.Grid
              style={{ width: "17%", marginInline: "4%", height: "auto" }}
              onClick={()=>showModal(item)}
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
