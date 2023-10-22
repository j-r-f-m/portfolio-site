import Col from "react-bootstrap/Col";
// import Image from "react-bootstrap/Image";
import { aboutMeEng } from "../MainContentText";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export function MainContentHero() {
  return (
    <>
      <Container
        className="xs text-light p-6"
        id="about-me"
        style={{ paddingTop: "65px" }}
      >
        <Row className=" ">
          <h2>About Me</h2>
        </Row>
        <Row className="d-flex">
          <Col
            sm
            className=" d-flex justify-content-center align-items-center mb-2"
          >
            <article> {aboutMeEng}</article>
          </Col>
        </Row>
        <Row>
          <Col className="mb-2">
            <article>Technologies I use as a programmer:</article>
            <article>
              Javascript, Python, React.js, git, bootstrap, vite
            </article>
          </Col>
        </Row>
        <Row>
          <Col>
            <article>Technologies I use as a structural engineer:</article>
            <article>Rfem, Frilo, Harzer, Revit, Briscad</article>
          </Col>
        </Row>
        <hr />
      </Container>
    </>
  );
}
