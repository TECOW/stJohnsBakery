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
      <h1>Saint Johns Bakery</h1>
    </div>
    <Container className="Headers">
      <Row>
        <Col><HomeButton buttonName="Home" /></Col>
        <Col><HomeButton buttonName="About" /></Col>
        <Col><HomeButton buttonName="Menu" /></Col>
        <Col><HomeButton buttonName="Order Online" /></Col>
        <Col><HomeButton buttonName="Contact" /></Col>
      </Row>
      </Container>
    </div>
  );
}

export default Header;
