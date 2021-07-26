import React from "react";
import "./OrderOnline.css"

import {Card, Button, Container, Row, Col, Image, Tabs, Tab} from "react-bootstrap"


function OrderOnline(props) {
  return (
    <Container className="orderContainer">
      <Row>
        <Col>
          <h1 className="orderOnlinelogo">ORDER ONLINE</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <hr className="orderLine" />
          <h1 className="orderMenu">Menu</h1>
          <hr className="orderLine" />
        </Col>
      </Row>
        <Tabs defaultActiveKey="breads" id="orderId" className="orderTabs">
          <Tab eventKey="breads" title="Breads">
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
          </Tab>
          <Tab eventKey="sweets" title="Sweets">
            {props.sweets.map(sweet => {
              return (
                <Card className="orderCard">
                  <Card.Img variant="top" src={sweet.imagePath} className="orderImage"/>
                  <Card.Body>
                    <Card.Title className="orderTitle">{sweet.name}</Card.Title>
                    <Card.Text className="orderText">{sweet.description}</Card.Text>
                    <Card.Text className="orderPrice">${sweet.price}</Card.Text>
                    </Card.Body>
                </Card>
              )
            })}
          </Tab>

        </Tabs>


    </Container>
  );
}

export default OrderOnline;
