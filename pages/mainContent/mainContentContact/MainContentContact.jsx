import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export function MainContentContact() {
  return (
    <Container className="mt-3">
      <Row>
        {" "}
        <h2>Contact</h2>
      </Row>
      <Row className="d-flex  justify-content-center  align-items-center">
        <div>moesch.jonas@protonmail.com</div>
      </Row>
    </Container>
  );
}
