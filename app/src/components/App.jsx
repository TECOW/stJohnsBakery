import React, {useEffect, useState} from "react";
import Header from "./Header";
import "./App.css";
import {Container, Row, Col, Image} from "react-bootstrap";
import Contact from "./ContactMe";
import About from "./About";
import Menu from "./Menu";
import OrderOnline from "./OrderOnline";

function App() {
  const [breads, setBreads] = useState([]);
  const [bakings, setBakings] = useState([]);
  const [sweets, setSweets] = useState([]);

  useEffect(() => {
    fetch("/breads")
      .then((res) => res.json())
      .then((data) => setBreads(data.breads));
    }, []);

  useEffect(() => {
    fetch("/bakings")
      .then((res) => res.json())
      .then((data) => setBakings(data.bakings));
    }, []);

  useEffect(() => {
    fetch("/sweets")
      .then((res) => res.json())
      .then((data) => setSweets(data.sweets));
    }, []);

  return (
    <div className="HomeBody">
      <div className="heading">
        <Header />
        <Container className="appContainer">
          <Row className="appRow">
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
      </div>
          <About
          bakings={bakings}/>
          <Menu
          breads={breads}
          sweets={sweets}
          />
          <OrderOnline
          breads={breads}
          sweets={sweets}
          />
      <div className="footer">
        <Contact />
      </div>
    </div>
  );
}

export default App;
