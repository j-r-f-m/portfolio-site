import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { aboutMe } from "./MainContentText";

export function MainContentHero() {
  return (
    <>
      <Row className="mt-5">
        <Col className="border border-danger d-flex justify-content-center align-items-center">
          <Image src="images/test_img_sm.jpg" rounded fluid />
        </Col>
        <Col className="border border-danger d-flex justify-content-center align-items-center">
          <article> {aboutMe}</article>
        </Col>
      </Row>
    </>
  );
}
