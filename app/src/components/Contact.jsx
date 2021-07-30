import React, { useState } from "react";
import "./Contact.css"
import {Card, Button, Container, Row, Col, Image, InputGroup, FormControl} from "react-bootstrap"


function Contact() {
  const [isMouseOver, setMouseOver] = useState(false);
  const [isMouseClicked, setMouseClicked] = useState(false);
  function handleMouseOver() {
    setMouseOver(true);
  }
  function handleMouseOut() {
    setMouseOver(false);
  }
  function handleMouseClick() {
    setMouseClicked(true)
    var input = document.getElementById("nameInput").value + " " + document.getElementById("emailInput").value + " " + document.getElementById("phoneInput").value + " " + document.getElementById("messageInput").value;
    /*input[0].select();
    document.execCommand("copy");*/
    alert("Please copy this to the body section of the email : " + (input));
}

  return (
    <div>
      <Container className="contactContainer">
        <Row>
          <Col>
            <h1 className="contactLogo">CONTACT</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Container className="contactInputContainer">
              <Row>
                <Col>
                  <p className="contactInputDescription">Please contact us if any additional help is needed.</p>
                </Col>
              </Row>
              <Row>
                <Col>
                <InputGroup className="contactInputGroup">
                  <FormControl type="text" name="name" placeholder="Name" className="contactName" id="nameInput"/>
                </InputGroup>

                </Col>
              </Row>
              <Row>
                <Col>
                  <InputGroup className="contactInputGroup">
                    <FormControl type="text" name="Email" placeholder="Email" className="contactEmail" id="emailInput" />
                  </InputGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <InputGroup className="contactInputGroup">
                    <FormControl type="text" name="Phone" placeholder="Phone" className="contactPhone" id="phoneInput" />
                  </InputGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                <InputGroup className="contactInputGroup">
                  <FormControl rows="4" as="textarea" name="Phone" placeholder="Type your message here.." className="contactTextArea" id="messageInput" />
                </InputGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <button
                    className="contactSubmitButton"
                    style={{ backgroundColor: isMouseOver ? "#05B0C6" : "#EA8B11", color: isMouseOver ? "#FFFFFF" : "#52463C"}}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    onClick={handleMouseClick}
                    >{isMouseClicked ? "Submitted!" :  "Submit"}</button>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col>
            <div class="mapouter">
              <div class="gmap_canvas">
                <iframe width="400" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=153%20Broadview%20Avenue,%20Toronto,%20Ontario%20M4M%202E9&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                <a href="https://putlocker-is.org"></a>
                <br />
                <a href="https://www.embedgooglemap.net">embedgooglemap.net</a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

    </div>
  )
}

/*      <Container>
      <form action="mailto:contact@yourdomain.com" method="POST" enctype="multipart/form-data" name="EmailForm">


      Name:<br />


      <input type="text" size="19" name="ContactName"><br />


      Message:<br />
      <textarea name="ContactComment" rows="6" cols="20"></textarea><br /> <input type="submit" value="Submit"></input>
      </form>
      </Container>*/
export default Contact;
