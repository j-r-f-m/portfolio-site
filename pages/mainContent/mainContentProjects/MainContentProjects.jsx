import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PropTypes from "prop-types";
import { MainContentProjectsLinks } from "./MainContentProjectsLinks";

/**
 * Component that renders one Project. If the LinkRef gets passed as a prop you
 * can linkt the navigation bar with first project.
 * @param {object} props LinkRef pass string if you want to set the link for the
 * first project
 * @returns
 */
export function MainContentProjects(props) {
  /**
   * Basic layout of MainContentProjects:
   * Projects-Container - containing two rows
   * Heading-Row - contianing heading
   * Body-Row - containing image and description
   */

  return (
    <>
      <Container className="Projects-Container text-light">
        {/* <div className="test" id={props.LinkRef}></div> */}
        <Row className="Heading-Row">
          {/* <h2 id={props.LinkRef} className="pt-5"> */}
          <h2 id={props.LinkRef} style={{ paddingTop: "50px" }}>
            Projects
          </h2>
        </Row>
        <Row className="Body-Row">
          <Row>
            <h3>Bemessungshilfe</h3>
          </Row>
          <Row>
            <Col sm className="mb-2">
              <Image src="images/img_bemessungshilfen.png" fluid rounded />
            </Col>
            <Col sm>
              <h4>Description</h4>
              <article className="mb-3">
                A front end calculation tool for concrete construction. You can
                calculate the needed anchorage length of a rebar and the amount
                of rebars that can fit in a concrete beam.
              </article>
              <h4>Used Technologies</h4>
              <article className="mb-4">
                Javascript, React.js, Bootstrap, vite
              </article>
              <MainContentProjectsLinks />
            </Col>
          </Row>
        </Row>
        <hr />
      </Container>
    </>
  );
}

MainContentProjects.propTypes = {
  LinkRef: PropTypes.string,
};
