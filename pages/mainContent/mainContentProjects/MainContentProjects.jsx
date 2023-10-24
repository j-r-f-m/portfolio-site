import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PropTypes from "prop-types";
import { MainContentProjectsDescription } from "./MainContentProjectsDescription";
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
        <Row className="Heading-Row">
          <h2 id={props.LinkRef} style={{ paddingTop: "55px" }}>
            Projects
          </h2>
        </Row>

        <Row className="Body-Row mb-5">
          <Row>
            <h3>Shopping Cart</h3>
          </Row>
          <Row>
            <Col sm className="mb-2">
              <Image src="images/img_shopping.png" fluid rounded />
            </Col>
            <Col sm>
              <MainContentProjectsDescription />
              <MainContentProjectsLinks />
            </Col>
          </Row>
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
              <MainContentProjectsDescription />
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
