import React from "react";
import "./OrderOnline.css"
import "./About.css"
import {Card, Button, Container, Row, Col, Image} from "react-bootstrap"
import HomeBread1 from "../images/HomeBread1.png";
import HomeBread2 from "../images/HomeBread2.png";

function OrderOnline(props) {
  return (
    <Container className="orderContainer">
    {props.breads.map(bread => {
      return (
        <Card className="orderCard">
          <Card.Img variant="top" src={bread.imagePath} className="orderImage"/>
          <Card.Body>
          <Card.Title className="orderTitle">{bread.name}</Card.Title>
          <Card.Text className="orderText">{bread.description}</Card.Text>
          <Card.Text className="orderPrice">${bread.price}</Card.Text>
          </Card.Body>
        </Card>
      )
    })}

    </Container>
  );
}

export default OrderOnline;
