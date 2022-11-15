import React from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import "./FAQ.scss";

const FAQ = () => {
  return (
    <Container id="faq" className="py-4 py-lg-5 faq">
      <Row>
        <Col xs={12} lg={4}>
          <h2 className="mb-2 text-uppercase fw-bold text-center text-lg-start faq-title">
            FAQ
          </h2>
        </Col>
        <Col xs={12} lg={8}>
          <Accordion>
            {[...new Array(6)].map((_, index) => (
              <Accordion.Item eventKey={`${index}`}>
                <Accordion.Header>
                  <div className="d-flex justify-content-between align-items-center w-100">
                    Accordion Item #{index + 1}
                    <svg
                      className="svg-icon"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M12.522,10.4l-3.559,3.562c-0.172,0.173-0.451,0.176-0.625,0c-0.173-0.173-0.173-0.451,0-0.624l3.248-3.25L8.161,6.662c-0.173-0.173-0.173-0.452,0-0.624c0.172-0.175,0.451-0.175,0.624,0l3.738,3.736C12.695,9.947,12.695,10.228,12.522,10.4 M18.406,10c0,4.644-3.764,8.406-8.406,8.406c-4.644,0-8.406-3.763-8.406-8.406S5.356,1.594,10,1.594C14.643,1.594,18.406,5.356,18.406,10M17.521,10c0-4.148-3.374-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.147,17.521,17.521,14.147,17.521,10"></path>
                    </svg>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default FAQ;
