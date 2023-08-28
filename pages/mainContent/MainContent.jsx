import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { aboutMe } from "./MainContentText";

// use border to make layout visible
let borderStyle = "border border-danger";

export function MainContent() {
  return (
    <>
      <Container>
        <Row>
          <Col className="border border-danger d-flex justify-content-center align-items-center">
            Photo
          </Col>
          <Col className={borderStyle}>{aboutMe}</Col>
        </Row>
        <Row className={borderStyle}>Row 2</Row>
        <Row className={borderStyle}>Row 3</Row>
      </Container>
    </>
  );
}
