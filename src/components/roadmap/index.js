import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Roadmap.scss";
import { roadmaps } from "./configs";

const Roadmap = () => {
  return (
    <Container id="roadmap" className="py-4 py-lg-5">
      <h2 className="mb-2 text-uppercase fw-bold text-center fs-1">Roadmap</h2>
      <Row>
        <Col md={12}>
          <div className="main-timeline">
            {roadmaps.map((roadmap) => (
              <div key={roadmap.title} className="timeline">
                <a href="" className="timeline-content">
                  <h3 className="title">{roadmap.title}</h3>
                  <p className="description">{roadmap.description}</p>
                </a>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Roadmap;
