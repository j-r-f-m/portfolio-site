import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { aboutMe } from "./MainContentText";

export function MainContent() {
  return (
    <>
      <Container>
        <Row>
          <Col>Photo</Col>
          <Col>{aboutMe}</Col>
        </Row>
        <Row>Row 2</Row>
        <Row>Row 3</Row>
      </Container>
    </>
  );
}
