import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";

export function MainContentProjects() {
  return (
    <>
      <Container>
        <Row className="border border-danger mt-5">
          <h1>Projects</h1>
        </Row>
        <Row className="border border-danger mt-2">
          <Container>
            <Row>
              <h2>Bemessungshilfe</h2>
            </Row>
            <Row>
              <Col sm className="border border-danger">
                <Image src="images/img_bemessungshilfen.png" fluid />
              </Col>
              <Col sm className="border border-danger">
                <h4>Description</h4>
                <article className="mb-3">
                  A front end calculation tool for concrete construction. You
                  can calculate the needed anchorage length of a rebar and the
                  amount of rebars that can fit in a concrete beam.
                </article>
                <h4>Used Technologies</h4>
                <article>Javascript, React.js, Bootstrap, vite</article>
                <Row xs="auto">
                  <Col>
                    {" "}
                    <Nav.Link className="mt-2" href="">
                      Site
                    </Nav.Link>
                  </Col>
                  <Col>
                    {" "}
                    <Nav.Link className="mt-2" href="">
                      Code
                    </Nav.Link>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Row>
      </Container>
    </>
  );
}
