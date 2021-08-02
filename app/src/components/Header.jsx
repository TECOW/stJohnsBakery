import React, { useState } from "react";
import HomeButton from "./HomeButton";
import "./Header.css"
import {Container, Row, Col, Navbar} from "react-bootstrap"

function Header() {
  function refreshPage(){
    window.location.reload();
  }

  return (
    <div className="headerDiv">
      <Navbar fixed="top" expand="lg" className="homeNavBar">
        <Container className="Headers">
          <Row className="headerRow">
            <Col className="navbarCol" onClick={refreshPage}>
              <h3 clssName="NavbarName" >Saint Johns Bakery</h3>
            </Col>
            <Col className="headerButtons"><HomeButton className="homeButton" buttonName="Home" path="/"/></Col>
            <Col className="headerButtons"><HomeButton className="homeButton" buttonName="About" path="/about"/></Col>
            <Col className="headerButtons"><HomeButton className="homeButton" buttonName="Menu" path="/menu"/></Col>
            <Col className="headerButtons"><HomeButton className="homeButton" buttonName="Order Online" path="/order"/></Col>
            <Col className="headerButtons"><HomeButton className="homeButton" buttonName="Contact" path="/contact"/></Col>
          </Row>
        </Container>
      </Navbar>
      <h1 className="headerWebsiteName">Saint Johns Bakery</h1>
    </div>
  );

}
export default Header;
