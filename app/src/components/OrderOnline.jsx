import React from "react";
import "./OrderOnline.css"
import "./About.css"
import {Card, Button, Container, Row, Col, Image} from "react-bootstrap"
import HomeBread1 from "../images/HomeBread1.png";
import HomeBread2 from "../images/HomeBread2.png";

function OrderOnline(props) {
  return (
    <Container className="orderOnlineContainer">
    {props.breads.map(bread => {
      return (
        <Card style={{ width: '280px' }}>
          <Card.Img variant="top" src={bread.imagePath} />
          <Card.Body>
          <Card.Title>{bread.name}</Card.Title>
          <Card.Text>{bread.description}</Card.Text>
          <Card.Text>${bread.price}</Card.Text>
          </Card.Body>
        </Card>
      )
    })}

    </Container>
  );
}

export default OrderOnline;
