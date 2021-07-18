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
    </div>
  )
}

export default Contact;
