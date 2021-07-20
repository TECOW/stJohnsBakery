import React from "react";
import "./ContactMe.css"
import {Card, Button} from "react-bootstrap"

function Contact() {
  return (
    <div class="footerCards">
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Address</Card.Title>
          <Card.Text>153 Broadview Avenue, Toronto, Ontario M4M 2E9</Card.Text>
        <Button variant="outline-dark">Google Map</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Hours</Card.Title>
          <Card.Text>Mon - Fri: 6am - 7pm</Card.Text>
          <Card.Text>Sat - Sun: 8am - 8pm</Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Contact</Card.Title>
          <Card.Text>416-850-7413</Card.Text>
          <Card.Text>info@stjohnsbakery.com</Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Follow</Card.Title>
          <Card.Text>416-850-7413</Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Contact;
