import React, { useState } from "react";
import "./Menu.css"
import {Container, Row, Col, Image} from "react-bootstrap"
import HomeBread1 from "./HomeBread1.png";

function Menu() {
  return (
    <div className="aboutContainer">
      <Container>
        <Row>
          <Col>
            <h1 className="aboutTitle">OUR MENU</h1>

          </Col>
        </Row>
        <Row>
          <Col>
            <hr className="menuLine" />
            <p className="aboutText">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
            <hr className="menuLine" />
          </Col>
          <Col>
            <Image className="aboutBreadImageRight" src={HomeBread1} alt="HomeBread1"/>
          </Col>
          <Col>
            <Image className="aboutBreadImageLeft" src={HomeBread1} alt="HomeBread1"/>
          </Col>
          <Col>
            <Image className="aboutBreadImageRight" src={HomeBread1} alt="HomeBread1"/>
          </Col>
          <Col>
            <Image className="aboutBreadImageLeft" src={HomeBread1} alt="HomeBread1"/>
          </Col>
          <Col>
            <Image className="aboutBreadImageRight" src={HomeBread1} alt="HomeBread1"/>
          </Col>
          <Col>
            <Image className="aboutBreadImageLeft" src={HomeBread1} alt="HomeBread1"/>
          </Col>
          <Col>
            <Image className="aboutBreadImageRight" src={HomeBread1} alt="HomeBread1"/>
          </Col>
        </Row>
      </Container>
    </div>
  )
}


export default Menu;
