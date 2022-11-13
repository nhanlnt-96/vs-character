import React, { useEffect, useRef, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Button from "../button";
import "./Header.scss";
import { headerMenu } from "./configs";
import Social from "../social";
import Logo from "../../assets/images/logo.jpg";

const Header = () => {
  const headerRef = useRef(null);
  const [isChangeHeaderBg, setIsChangeHeaderBg] = useState(false);

  useEffect(() => {
    const handleChangeHeaderBg=()=>
  }, [headerRef]);

  return (
    <div ref={headerRef}>
      <Navbar collapseOnSelect fixed={"top"} expand="lg">
        <Container className="header-container">
          <Navbar.Brand href="/" className="header-logo">
            <div className="header-logo__wrapper">
              <img src={Logo} alt="vs-character-logo" />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="header-toggle"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="flex-grow-1 d-flex justify-content-center align-items-center header-menu">
              {headerMenu.map((menu) => (
                <Nav.Link
                  key={menu.path}
                  href={menu.path}
                  className="text-white"
                >
                  {menu.label}
                </Nav.Link>
              ))}
            </Nav>
            <Nav>
              <div className="d-flex justify-content-center align-items-center mt-3 mt-lg-0 me-2">
                <Social />
              </div>
              <div className="d-flex justify-content-center align-items-center mt-3 mt-lg-0">
                <Button label="Connect" />
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
