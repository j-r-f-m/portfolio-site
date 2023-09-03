import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import PropTypes from "prop-types";

/**
 * Component that renders one Project. If the LinkRef gets passed as a prop you
 * can linkt the navigation bar with first project.
 * @param {object} props LinkRef pass string if you want to set the link for the
 * first project
 * @returns
 */
export function MainContentProjects(props) {
  return (
    <>
      <Container className="text-light ">
        <Row>
          <h2 id={props.LinkRef} className="pt-5">
            Projects
          </h2>
        </Row>
        <Row className="">
          <Container>
            <Row>
              <h3>Bemessungshilfe</h3>
            </Row>
            <Row>
              <Col sm>
                <Image src="images/img_bemessungshilfen.png" fluid rounded />
              </Col>
              <Col sm>
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
        <hr />
      </Container>
    </>
  );
}

MainContentProjects.propTypes = {
  LinkRef: PropTypes.string,
};
