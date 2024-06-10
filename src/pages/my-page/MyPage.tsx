import React, { useEffect, useState } from "react";
import { DoctorManager } from "../../services/DoctorManager";
import { Card, Col, Modal, Pagination, Row } from "antd";
import PersonDetail from "../../components/person-detail/PersonDetail";
import "./my-page.scss";
import { StarTwoTone } from "@ant-design/icons";
import axios from "axios";

const MyPage = () => {
  let doctorService = new DoctorManager();

  let [doctorList, setDoctorList] = useState<Array<any>>(new Array<any>());

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

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 20; // Her sayfada gösterilecek öğe sayıs

  const currentData = doctorList.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  // Sayfa değiştiğinde çalışacak olan fonksiyon
  const onPageChange = (page: any) => {
    setCurrentPage(page);
  };

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

  let removeFromFavorites = async () => {
    await doctorService
      .RemoveFavorites(localStorage.getItem("user_id"), doctor.Id)
      .then((response) => {
        window.alert(response.data);
      });

    await doctorService
      .GetFavoritesByUserId(localStorage.getItem("user_id"))
      .then((response) => {
        setDoctorList(response.data);
      });
  };

  useEffect(() => {
    doctorService
      .GetFavoritesByUserId(localStorage.getItem("user_id"))
      .then((response) => {
        setDoctorList(response.data);
      });
  }, []);

  return (
    <>
      <div className="my-page-home">
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

          <StarTwoTone
            twoToneColor="#FA1C05"
            style={{
              fontSize: "40px",
              display: "flex",
              paddingTop: "25px",
              paddingLeft: "25px",
              paddingBottom: "10px",
              cursor: "pointer",
            }}
            onClick={() => {
              removeFromFavorites();
            }}
          />
        </Modal>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "45px",
            fontWeight: "700",
            paddingBottom: "40px",
          }}
        >
          <span>FAVORILERIM</span>
        </div>

        <div className="doctor-list">
          <div style={{ padding: "20px" }}>
            <Row gutter={[16, 16]}>
              {currentData.map((item) => (
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

        <div className="paging-bar">
          <Pagination
            current={currentPage}
            total={doctorList.length}
            defaultPageSize={pageSize}
            onChange={onPageChange}
          />
        </div>
      </div>
    </>
  );
};

export default MyPage;
