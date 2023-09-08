import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export function MainContentContact() {
  return (
    <>
      <Container className="mt-5 pb-5 text-light">
        <Row>
          <h2 id="contact">Contact</h2>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center align-items-center">
            <div>moesch.jonas@protonmail.com</div>
          </Col>
        </Row>
        <hr className="mb-4" />
      </Container>
    </>
  );
}
