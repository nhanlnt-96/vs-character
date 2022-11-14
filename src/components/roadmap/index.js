import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Roadmap.scss";
import { roadmaps } from "./configs";

const Roadmap = () => {
  return (
    <Container id="roadmap" className="py-4 py-lg-5">
      <h2 className="mb-2 text-uppercase fw-bold text-center">Roadmap</h2>
      <div className="content">
        <div className="process">
          <div className="container">
            <div className="roadmap-container">
              <ul className="row">
                {roadmaps.map((roadmap) => (
                  <li key={roadmap.description}>
                    <div className="media-body">
                      <h4>{roadmap.title}</h4>
                      <p>{roadmap.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Roadmap;
