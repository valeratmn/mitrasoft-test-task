import {
  Container,
  Nav,
  Navbar,
  Image,
  NavDropdown,
} from "./BootstrapComponent";
import { NavLink } from "react-router-dom";

import avatar from "./avatar.png";
import { Row, Col } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="light" expand="">
      <Container>
        <Navbar.Brand>
          <h1 style={{ fontSize: 20 }}>
            MitraSoft{" "}
            <Navbar.Text style={{ fontSize: 14 }}>Tesk task</Navbar.Text>
          </h1>{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown.Divider />
            <Row style={{ display: "flex" }}>
              <Col>
                <ul>
                  <li>
                    <NavLink
                      to="/"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Posts List
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/me"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      About me
                    </NavLink>
                  </li>
                </ul>
              </Col>
              <Col>
                <Navbar.Text style={{ display: "flex", justifyContent: "end" }}>
                  <Image
                    src={avatar}
                    alt="avatar"
                    style={{ maxWidth: "30px" }}
                  />{" "}
                  sobol.valery@ya.ru
                </Navbar.Text>
              </Col>
            </Row>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
