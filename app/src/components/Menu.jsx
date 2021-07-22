import "./Menu.css"
import "./App.css"
import "./About.css"
import {Container, Row, Col, Image} from "react-bootstrap"
import HomeBread1 from "./HomeBread1.png";
import HomeBread2 from "./HomeBread2.png";
import Angeligus from "./Angeligus.jpg";



function Menu() {
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
          <Col>
            <Image className="menuImage" src={HomeBread1} alt="HomeBread1"/>
            <p className="menuPrice">$9</p>
            <h2 className="menuName">Banana Bread</h2>
            <hr className="menuPriceLine" />
            <p className="menuDescription">Banana bread made out of 100% banana.</p>
          </Col>
          <Col>
            <Image className="menuImage" src={HomeBread1} alt="HomeBread1"/>
            <p className="menuPrice">$9</p>
            <h2 className="menuName">Banana Bread</h2>
            <hr className="menuPriceLine" />
            <p className="menuDescription">Banana bread made out of 100% banana.</p>
          </Col>
          <Col>
            <Image className="menuImage" src={HomeBread1} alt="HomeBread1"/>
            <p className="menuPrice">$9</p>
            <h2 className="menuName">Banana Bread</h2>
            <hr className="menuPriceLine" />
            <p className="menuDescription">Banana bread made out of 100% banana.</p>
          </Col>
          <Col>
            <Image className="menuImage" src={HomeBread1} alt="HomeBread1"/>
            <p className="menuPrice">$9</p>
            <h2 className="menuName">Banana Bread</h2>
            <hr className="menuPriceLine" />
            <p className="menuDescription">Banana bread made out of 100% banana.</p>
          </Col>
          <Col className="menuCol">
            <hr className="menuLine" />
            <h1 className="menuTitle">Sweets</h1>
            <hr className="menuLine" />
            <p className="menuText">I'm a paragraph. Click here to add your own text and edit me. It’s easy.</p>
          </Col>
          <Col>
            <Image className="menuImage" src={HomeBread2} alt="HomeBread2"/>
            <p className="menuPrice">$5</p>
            <h2 className="menuName">Muffin</h2>
            <hr className="menuPriceLine" />
            <p className="menuDescription">Muffin made out of 100% muffin.</p>
          </Col>
          <Col>
            <Image className="menuImage" src={HomeBread2} alt="HomeBread2"/>
            <p className="menuPrice">$5</p>
            <h2 className="menuName">Muffin</h2>
            <hr className="menuPriceLine" />
            <p className="menuDescription">Muffin made out of 100% muffin.</p>
          </Col>
          <Col>
            <Image className="menuImage" src={HomeBread2} alt="HomeBread2"/>
            <p className="menuPrice">$5</p>
            <h2 className="menuName">Muffin</h2>
            <hr className="menuPriceLine" />
            <p className="menuDescription">Muffin made out of 100% muffin.</p>
          </Col>
          <Col>
            <Image className="menuImage" src={HomeBread2} alt="HomeBread2"/>
            <p className="menuPrice">$5</p>
            <h2 className="menuName">Muffin</h2>
            <hr className="menuPriceLine" />
            <p className="menuDescription">Muffin made out of 100% muffin.</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}


export default Menu;
