import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export function Navigation() {
  return (
    <Navbar
      fixed="top"
      role="navigation"
      bg="dark"
      data-bs-theme="dark"
      // className="pb-2"
      // style={{ marginBottom: "65px" }}
    >
      <Container className="me-auto space-between">
        <Navbar.Brand href="#home">- jm -</Navbar.Brand>
        <Nav>
          <Nav.Link href="#about-me">About</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
