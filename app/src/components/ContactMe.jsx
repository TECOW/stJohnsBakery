import React from "react";
import "./ContactMe.css"
import {Card, Button, Container, Row, Col, Image} from "react-bootstrap"
import IconFacebook from "./IconFacebook.png"
import IconInstagram from "./IconInstagram.png"
import IconTwitter from "./IconTwitter.png"

function Contact() {
  return (
    <div>
      <Container className="contactContainer">
        <Row>
          <Col className="contactCards">
            <h1 className="contactTitle">ADDRESS</h1>
            <p className="contactText">153 Broadview Avenue, Toronto, Ontario M4M 2E9</p>
          </Col>
          <Col className="contactCards">
            <h1 className="contactTitle">HOURS</h1>
            <p className="contactText">Mon - Fri: 6am - 7pm<br />​​Sat - Sun: 8am - 8pm</p>
          </Col>
          <Col className="contactCards">
            <h1 className="contactTitle">CONTACT</h1>
            <p className="contactText">416-850-7413<br />info@stjohnsbakery.com</p>
          </Col>
          <Col className="contactCards">
            <h1 className="contactTitle">FOLLOW</h1>
            <Container className="contactIconContainer">
            <Image className="contactIcons" src={IconFacebook} alt="IconFacebook"/>
            <Image className="contactIcons" src={IconTwitter} alt="IconTwitter"/>
            <Image className="contactIcons" src={IconInstagram} alt="IconInstagram"/>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Contact;
