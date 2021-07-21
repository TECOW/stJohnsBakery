import React from "react";
import "./ContactMe.css"
import {Card, Button, Container, Row, Col} from "react-bootstrap"

function Contact() {
  return (
    <div>
      <Container className="footers">
        <Row>
          <Col className="footerCards">
            <h1 className="footerTitle">ADDRESS</h1>
            <p className="footerText">153 Broadview Avenue, Toronto, Ontario M4M 2E9</p>
          </Col>
          <Col className="footerCards">
          <h1 className="footerTitle">HOURS</h1>
          <p className="footerText">Mon - Fri: 6am - 7pm ​​Sat - Sun: 8am - 8pm</p>
          </Col>
          <Col className="footerCards">
          <h1 className="footerTitle">CONTACT</h1>
          <p className="footerText">416-850-7413 info@stjohnsbakery.com</p>
          </Col>
          <Col className="footerCards">
          <h1 className="footerTitle">FOLLOW</h1>
          <p className="footerText">ikons</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Contact;
