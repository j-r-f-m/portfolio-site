import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

/**
 * navigation comopent
 * @returns jsx
 */
export function Navigation() {
  return (
    <Navbar
      activekey="#about-me"
      fixed="top"
      role="navigation"
      bg="dark"
      data-bs-theme="dark"
    >
      <Container>
        <Navbar.Brand href="#">Jonas Mösch</Navbar.Brand>
        <Nav>
          <Nav.Link eventKey="Link-1" href="#about-me">
            About
          </Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
