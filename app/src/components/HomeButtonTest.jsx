import React, { useState } from "react";
import {Container, Row, Col, Navbar, Nav, NavDropdown} from "react-bootstrap"
import "./HomeButton.css"

function HomeButton() {
  const [isMouseOver, setMouseOver] = useState(false);
  const refreshPage = ()=>{
     window.location.reload();
  }
  function handleMouseOver() {
    setMouseOver(true);
    //"this.style.backgroundColor='#000000'
  }
  function handleMouseOut() {
    setMouseOver(false);
  }
  function scrollToHome() {
    window.scrollTo(300, 0);
  }
  function scrollToAbout() {
    window.scrollTo(300, 650);
  }
  function scrollToMenu() {
    window.scrollTo(300, 1910);
  }
  function scrollToOrderOnline() {
    window.scrollTo(300, 4580);
  }
  function scrollToContact() {
    window.scrollTo(300, 8000);
  }
  const customStyle = {
    backgroundColor: "",
    color: ""
  };

  const currentTime = 1;

  if (isMouseOver===true) {
    customStyle.backgroundColor = "red"
    customStyle.color = "#f1eade"
  } else {
    customStyle.backgroundColor = "f1eade"
    customStyle.color = "#3E2B1C"
  }

  return (
    <div>
      <Navbar fixed="top" expand="lg" className="homeNavBar">
        <Container>
          <Row>
            <Col className="navbarCol" onClick={refreshPage}>
              <h3 clssName="NavbarName" >Saint Johns Bakery</h3>
            </Col>
            <Col className="navbarCol">
              <button
              className="homeButtons"
                style={customStyle}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                onClick={scrollToHome}
                >
                Home
                </button>
              </Col>
              <Col className="navbarCol">
                <button
                className="homeButtons"
                style={{ backgroundColor: isMouseOver ? "#3E2B1C" : "#f1eade", color: isMouseOver ? "#f1eade" : "#3E2B1C"}}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                onClick={scrollToAbout}
                >
                About
                </button>
              </Col>
              <Col className="navbarCol">
                <button
                className="homeButtons"
                style={{ backgroundColor: isMouseOver ? "#3E2B1C" : "#f1eade", color: isMouseOver ? "#f1eade" : "#3E2B1C"}}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                onClick={scrollToMenu}
                >
                Menu
                </button>
              </Col>
              <Col className="navbarCol">
                <button
                className="homeButtons"
                style={{ backgroundColor: isMouseOver ? "#3E2B1C" : "#f1eade", color: isMouseOver ? "#f1eade" : "#3E2B1C"}}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                onClick={scrollToOrderOnline}
                >
                Order Online
                </button>
              </Col>
              <Col className="navbarCol">
                <button
                className="homeButtons"
                style={{ backgroundColor: isMouseOver ? "#3E2B1C" : "#f1eade", color: isMouseOver ? "#f1eade" : "#3E2B1C"}}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                onClick={scrollToContact}
                >
                Contact
                </button>
              </Col>
            </Row>
        </Container>
      </Navbar>
    </div>
  );
}

export default HomeButton;
