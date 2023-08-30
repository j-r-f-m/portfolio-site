import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { MainContentHero } from "./mainContentHero/MainContenHero";
import { MainContentProjects } from "./mainContentProjects/MainContentProjects";

// use border to make layout visible
// let borderStyle = "border border-danger";

/**
 * Landing page that conatins the three main content sections
 * @returns Landing page
 */
export function MainContent() {
  return (
    <>
      <MainContentHero />
      <MainContentProjects />

      <Container>
        <Row className="mt-4">
          <Col sm className="border border-danger">
            Col1
          </Col>
          <Col sm className="border border-danger">
            Col1
          </Col>
        </Row>
      </Container>
    </>
  );
}
