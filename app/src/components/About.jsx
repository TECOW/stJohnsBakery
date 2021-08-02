import React, {useEffect, useState} from "react";
import "./About.css"
import {Container, Row, Col, Image} from "react-bootstrap"

function About() {
  const [bakings, setBakings] = useState([]);
  
  useEffect(() => {
    fetch("/bakings")
      .then((res) => res.json())
      .then((data) => setBakings(data.bakings));
    }, []);

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
          {bakings.map(baking => {
            return (
            <Col className="aboutPictureCol">
              <Image className="aboutBreadImageLeft" src={baking.imagePath} alt="About1"/>
              <p className="aboutDescription">{baking.description}</p>
            </Col>
          )})}
        </Row>
      </Container>
    </div>
  )
}


export default About;
