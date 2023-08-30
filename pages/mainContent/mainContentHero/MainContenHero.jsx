import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { aboutMe } from "../MainContentText";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export function MainContentHero() {
  return (
    <>
      <Container>
        <Row className="border border-danger mt-5 mb-2">
          <h1>About Me</h1>
        </Row>
        <Row className="d-flex">
          <Col
            sm
            className="border border-danger d-flex  justify-content-center  align-items-center"
          >
            <Image src="images/test_img_sm.jpg" rounded fluid />
          </Col>
          <Col
            sm
            className="border border-danger d-flex justify-content-center align-items-center"
          >
            <article> {aboutMe}</article>
          </Col>
        </Row>
      </Container>
    </>
  );
}
