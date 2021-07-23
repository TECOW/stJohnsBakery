import "./Menu.css"
import "./App.css"
import "./About.css"
import {Container, Row, Col, Image} from "react-bootstrap"

function Menu(props) {
  return (
    <div className="aboutContainer">
      <Container>
        <Row>
          <Col>
            <h1 className="aboutTitle">OUR MENU</h1>
          </Col>
        </Row>
        <Row>
          <Col className="menuCol">
            <hr className="menuLine" />
            <h1 className="menuTitle">Bread</h1>
            <hr className="menuLine" />
            <p className="menuText">I'm a paragraph. Click here to add your own text and edit me. It’s easy.</p>
          </Col>
          {props.breads.map(bread => {
            return (
              <Col>
                <Image className="menuImage" src={bread.imagePath} alt="HomeBread1"/>
                <p className="menuPrice">${bread.price}</p>
                <h2 className="menuName">{bread.name}</h2>
                <hr className="menuPriceLine" />
                <p className="menuDescription">{bread.description}</p>
              </Col>
          )})}
          <Col className="menuCol">
            <hr className="menuLine" />
            <h1 className="menuTitle">Sweets</h1>
            <hr className="menuLine" />
            <p className="menuText">I'm a paragraph. Click here to add your own text and edit me. It’s easy.</p>
          </Col>
          {props.sweets.map(sweet => {
            return (
              <Col>
                <Image className="menuImage" src={sweet.imagePath} alt="HomeBread1"/>
                <p className="menuPrice">${sweet.price}</p>
                <h2 className="menuName">{sweet.name}</h2>
                <hr className="menuPriceLine" />
                <p className="menuDescription">{sweet.description}</p>
              </Col>
          )})}
        </Row>
      </Container>
    </div>
  )
}


export default Menu;
