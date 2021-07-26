import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap"
import IconFacebook from "../images/IconFacebook.png"
import IconInstagram from "../images/IconInstagram.png"
import IconTwitter from "../images/IconTwitter.png"

function Footer() {
  <Container className="footerContainer">
    <Row>
      <Col className="footerCards">
        <h1 className="footerTitle">ADDRESS</h1>
        <p className="footerText">153 Broadview Avenue, Toronto, Ontario M4M 2E9</p>
      </Col>
      <Col className="footerCards">
        <h1 className="footerTitle">HOURS</h1>
        <p className="footerText">Mon - Fri: 6am - 7pm<br />​​Sat - Sun: 8am - 8pm</p>
      </Col>
      <Col className="footerCards">
        <h1 className="footerTitle">CONTACT</h1>
        <p className="footerText">416-850-7413<br />info@stjohnsbakery.com</p>
      </Col>
      <Col className="footerCards">
        <h1 className="footerTitle">FOLLOW</h1>
        <Container className="footerIconContainer">
        <Image className="footerIcons" src={IconFacebook} alt="IconFacebook"/>
        <Image className="footerIcons" src={IconTwitter} alt="IconTwitter"/>
        <Image className="footerIcons" src={IconInstagram} alt="IconInstagram"/>
        </Container>
      </Col>
    </Row>
  </Container>
}

export default Footer;
