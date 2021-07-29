import React, { useState } from "react";
import HomeButton from "./HomeButton";
import "./Header.css"
import {Container, Row, Col, Nav, Navbar, NavDropdown} from "react-bootstrap"

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
  const refreshPage = ()=>{
     window.location.reload();
  }
  function handleMouseOver() {
    setMouseOver(true);
  }
  function handleMouseOut() {
    setMouseOver(false);
  }
  function scrollToHome() {
    window.scrollTo(300, 0);
  }
  function scrollToAbout() {
    window.scrollTo(300, 670);
  }
  function scrollToMenu() {
    window.scrollTo(300, 1925);
  }
  function scrollToOrderOnline() {
    window.scrollTo(300, 4600);
  }
  function scrollToContact() {
    window.scrollTo(300, 8000);
  }
  return (
    <div className="headerDiv">
      <h1 className="headerWebsiteName">Saint Johns Bakery</h1>
    <Navbar fixed="top" expand="lg" className="homeNavBar">
    <Container className="Headers">
      <Row className="headerRow">
        <Col className="navbarCol" onClick={refreshPage}>
          <h3 clssName="NavbarName" >Saint Johns Bakery</h3>
        </Col>
        <Col className="headerButtons" onClick={scrollToHome}><HomeButton className="homeButton" buttonName="Home"/></Col>
        <Col className="headerButtons" onClick={scrollToAbout}><HomeButton className="homeButton" buttonName="About"/></Col>
        <Col className="headerButtons" onClick={scrollToMenu}><HomeButton className="homeButton" buttonName="Menu" /></Col>
        <Col className="headerButtons" onClick={scrollToOrderOnline}><HomeButton className="homeButton" buttonName="Order Online" /></Col>
        <Col className="headerButtons" onClick={scrollToContact}><HomeButton className="homeButton" buttonName="Contact" /></Col>
      </Row>
      </Container>
      </Navbar>
    </div>
  );

}
export default Header;
