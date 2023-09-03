import Col from "react-bootstrap/Col";
// import Image from "react-bootstrap/Image";
import { aboutMe } from "../MainContentText";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export function MainContentHero() {
  return (
    <>
      {/* navigation anchor */}

      <Container id="about-me" className=" pt-5 text-light">
        <Row className=" ">
          <h2>About Me</h2>
        </Row>
        <Row className="d-flex">
          {/* <Col
            sm
            className=" d-flex  justify-content-center  align-items-center"
          >
            <Image src="images/test_img_sm.jpg" rounded fluid />
          </Col> */}
          <Col sm className=" d-flex justify-content-center align-items-center">
            <article> {aboutMe}</article>
          </Col>
        </Row>
        <hr />
      </Container>
    </>
  );
}
