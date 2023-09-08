import Col from "react-bootstrap/Col";
// import Image from "react-bootstrap/Image";
import { aboutMe } from "../MainContentText";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export function MainContentHero() {
  return (
    <>
      <Container
        className=" text-light"
        id="about-me"
        style={{ paddingTop: "65px" }}
      >
        <Row className=" ">
          <h2>About Me</h2>
        </Row>
        <Row className="d-flex">
          <Col sm className=" d-flex justify-content-center align-items-center">
            <article> {aboutMe}</article>
          </Col>
        </Row>
        <hr />
      </Container>
    </>
  );
}
