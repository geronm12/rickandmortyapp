import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

export function PageNavbar() {
  const style = {
    fontWeight: "bold",
  };

  const ConditionalCSS = ({ isActive }) => {
    return isActive ? style : undefined;
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink className="nav-link" to={"/"} style={ConditionalCSS}>
              Home
            </NavLink>
            <NavLink
              className="nav-link"
              to={"/characters"}
              style={ConditionalCSS}
            >
              Personajes
            </NavLink>
            <NavLink
              className="nav-link"
              to={"/location"}
              style={ConditionalCSS}
            >
              Localizaciones
            </NavLink>
            <NavLink
              className="nav-link"
              to={"/episodes"}
              style={ConditionalCSS}
            >
              Episodios
            </NavLink>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default PageNavbar;
