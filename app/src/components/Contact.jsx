import React from "react";
import "./Contact.css"
import {Card, Button, Container, Row, Col, Image} from "react-bootstrap"


function Contact() {
  return (
    <div>
      <Container className="contactContainer">
        <Row>
          <Col>
            <h1 className="contactLogo">CONTACT</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Container>
              <Row>
                <Col>
                  <p>Please contact us if any additional help is needed.</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <input type="text" />
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>








    </div>
  )
}

export default Contact;
