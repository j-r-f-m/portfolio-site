import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export function MainContentContact() {
  return (
    <>
      <Container className="mt-5 pb-5 text-light">
        <Row>
          <h2 id="contact">Contact</h2>
        </Row>
        <Row className="d-flex  justify-content-center  align-items-center">
          <div>moesch.jonas@protonmail.com</div>
        </Row>
        <hr />
      </Container>
    </>
  );
}
