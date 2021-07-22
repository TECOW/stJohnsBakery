import React, { useState } from "react";
import HomeButton from "./HomeButton";
import "./Header.css"
import {Container} from "react-bootstrap"
import {Row} from "react-bootstrap"
import {Col} from "react-bootstrap"


function Header() {
  const idkYet = "idkyet";
  const [isMouseOver, setMouseOver] = useState(false);
  function handleMouseOver() {
    setMouseOver(true);
  }
  function handleMouseOut() {
    setMouseOver(false);
  }
  return (
    <div>
    <div className="websitename">
      <h1 headerWebsiteName>Saint Johns Bakery</h1>
    </div>
    <Container className="Headers">
      <Row className="headerRow">
        <Col className="headerButtons"><HomeButton className="homeButton" buttonName="Home" /></Col>
        <Col className="headerButtons"><HomeButton className="homeButton" buttonName="About" /></Col>
        <Col className="headerButtons"><HomeButton className="homeButton" buttonName="Menu" /></Col>
        <Col className="headerButtons"><HomeButton className="homeButton" buttonName="Order Online" /></Col>
        <Col className="headerButtons"><HomeButton className="homeButton" buttonName="Contact" /></Col>
      </Row>
      </Container>
    </div>
  );
}

export default Header;
