import React, { useState } from "react";
import "./About.css"
import {Container, Row, Col, Image} from "react-bootstrap"
import HomeBread1 from "./HomeBread1.png";

function About() {
  return (
    <div className="aboutContainer">
      <Container>
        <Row>
          <Col>
            <h1 className="aboutTitle">OUR STORY</h1>
            <p className="aboutText">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
          </Col>
        </Row>
        <Row>
          <Col className="aboutPictureCol">
            <Image className="aboutBreadImageLeft" src={HomeBread1} alt="HomeBread1"/>
            <p className="aboutDescription">I'm a paragraph. Click here to add your own text and edit me. It’s easy. </p>
          </Col>
          <Col className="aboutPictureCol">
            <Image className="aboutBreadImageRight" src={HomeBread1} alt="HomeBread1"/>
            <p className="aboutDescription">I'm a paragraph. Click here to add your own text and edit me. It’s easy. </p>
          </Col>
          <Col className="aboutPictureCol">
            <Image className="aboutBreadImageLeft" src={HomeBread1} alt="HomeBread1"/>
            <p className="aboutDescription">I'm a paragraph. Click here to add your own text and edit me. It’s easy. </p>
          </Col>
          <Col className="aboutPictureCol">
            <Image className="aboutBreadImageRight" src={HomeBread1} alt="HomeBread1"/>
            <p className="aboutDescription">I'm a paragraph. Click here to add your own text and edit me. It’s easy. </p>
          </Col>
          <Col className="aboutPictureCol">
            <Image className="aboutBreadImageLeft" src={HomeBread1} alt="HomeBread1"/>
            <p className="aboutDescription">I'm a paragraph. Click here to add your own text and edit me. It’s easy. </p>
          </Col>
          <Col className="aboutPictureCol">
            <Image className="aboutBreadImageRight" src={HomeBread1} alt="HomeBread1"/>
            <p className="aboutDescription">I'm a paragraph. Click here to add your own text and edit me. It’s easy. </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}


export default About;
