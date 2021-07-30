import React, { useState } from "react";
import HomeButton from "./HomeButton";
import "./Header.css"
import {Container, Row, Col, Navbar} from "react-bootstrap"

//function Header() {
//  return (
//    <div className="headerDiv">
//      <h1 className="headerWebsiteName">Saint Johns Bakery</h1>
//    <Container className="Headers">
//      <Row className="headerRow">
//        <Col className="headerButtons"><HomeButton className="homeButton" /></Col>
//      </Row>
//      </Container>
//    </div>
//  );
//}
//
function Header() {
  const [isMouseOver, setMouseOver] = useState(false);

  return (
    <div className="headerDiv">
      <Navbar fixed="top" expand="lg" className="homeNavBar">
        <Container className="Headers">
          <Row className="headerRow">
            <Col className="navbarCol">
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
