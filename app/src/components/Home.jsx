import React from "react";
import "./Home.css";
import {Container, Row, Col, Image} from "react-bootstrap";

function Home() {
  return (
    <Container className="homeContainer">
      <Row className="homeRow">
        <Col className="bodyBoxes" md="4">
          <Row className="doubleHeight">
            <Image className="tallBreadImage" src="/images/HomeBread1.png" alt="HomeBread1"/>
          </Row>
        </Col>
        <Col className="bodyBoxes" md="4">
          <Row className="singleHeight">
            <Image className="shortBreadTopImage" src="/images/HomeBread2.png" alt="HomeBread2"/>
          </Row>
          <Row className="singleHeight">
            <Image className="shortBreadBottomImage" src="/images/HomeBread3.png" alt="HomeBread3"/>
          </Row>
        </Col>
        <Col className="bodyBoxes" md="4">
          <Row className="doubleHeight">
          <Container className="textContainer">
            <h1 className="breadDescription">Baking From The Heart</h1>
            <p className="homeBodyText">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
            <h2 className="sign">Erin Bae</h2>
            </Container>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
