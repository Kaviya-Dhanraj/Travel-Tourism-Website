import React from "react";
import "./common-section.css";
import { Container, Row, Col } from "reactstrap";

const CommonSection = ({ title, imageUrl }) => {
  return (
    <section className="common__section">
      <Container>
        <Row>
          <Col lg="12">
            {/* {imageUrl && <img src={imageUrl} alt="Section Image" className="section-image" />} */}
            <h1>{title}</h1>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CommonSection;
