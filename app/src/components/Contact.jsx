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
  }
  var link = "choihyoeun04@gmail.com" + "?body=" ;
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
                  <FormControl placeholder="Name" aria-label="contactName" className="contactName" /*value={contactName}*//>
                </InputGroup>

                </Col>
              </Row>
              <Row>
                <Col>
                  <InputGroup className="contactInputGroup">
                    <FormControl placeholder="Email" aria-label="contactEmail" className="contactEmail" />
                  </InputGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <InputGroup className="contactInputGroup">
                    <FormControl placeholder="Phone" aria-label="contactPhone" className="contactPhone" />
                  </InputGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                <InputGroup className="contactInputGroup">
                  <FormControl as="textarea" placeholder="Type your message here.." className="contactTextArea" />
                </InputGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                <a href={link}>
                  <button
                    className="contactSubmitButton"
                    style={{ backgroundColor: isMouseOver ? "#05B0C6" : "#EA8B11", color: isMouseOver ? "#FFFFFF" : "#52463C"}}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    onClick={handleMouseClick}
                    >{isMouseClicked ? "Submitted!" :  "Submit"}</button>
                  </a>
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
