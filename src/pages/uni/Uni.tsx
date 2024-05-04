import React from "react";
import { Card, Row, Col } from "antd";
import Meta from "antd/es/card/Meta";

const Uni = () => {
  const items = [
    { id: 1, name: "Öğe 1" },
    { id: 2, name: "Öğe 2" },
    { id: 3, name: "Öğe 3" },
    { id: 4, name: "Öğe 4" },
    { id: 5, name: "Öğe 5" },
    { id: 6, name: "Öğe 6" },
    // Dinamik olarak eklenen öğeler buraya gelecek
  ];

  return (
    <div style={{ padding: "20px" }}>
      <Row gutter={[16, 16]}>
        {items.map((item) => (
          <Col key={item.id} xs={24} sm={12} md={8} lg={6}>
            <Card>
              <Meta title={item.name} description={`ID: ${item.id}`} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Uni;
