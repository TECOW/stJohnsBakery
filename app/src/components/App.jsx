import React from "react";
import Header from "./Header";
import "./App.css"
import {Container, Row, Col, Image} from "react-bootstrap";
import Contact from "./ContactMe"
import HomeBread1 from "./HomeBread1.png";
import HomeBread2 from "./HomeBread2.png";
import HomeBread3 from "./HomeBread3.png";

function App() {
  return (
    <div className="HomeBody">
      <div className="heading">
        <Header />
        <Container className="appContainer">
          <Row>
            <Col className="bodyBoxes" md="4">
              <Row className="doubleHeight">
                <Image className="breadImage" src={HomeBread1} alt="HomeBread1"/>
              </Row>
            </Col>
            <Col className="bodyBoxes" md="4">
              <Row className="singleHeight">
                <Image className="breadImage" src={HomeBread2} alt="HomeBread2"/>
              </Row>
              <Row className="singleHeight">
                <Image className="breadImage" src={HomeBread3} alt="HomeBread3"/>
              </Row>
            </Col>
            <Col className="bodyBoxes" md="4">
              <Row className="doubleHeight">
                <h1>Baking From The Heart</h1>
                <p>Blah blah</p>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer">
        <Contact />
      </div>
    </div>
  );
}

export default App;
