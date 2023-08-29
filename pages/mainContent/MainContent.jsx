import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { MainContentHero } from "./MainContenHero";

// use border to make layout visible
let borderStyle = "border border-danger";

export function MainContent() {
  return (
    <>
      {/* organize the grid in */}
      <Container>
        <MainContentHero />
        <Row className={borderStyle}>
          {" "}
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card&apos;s content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Row>
        <Row className={borderStyle}>Row 3</Row>
      </Container>
    </>
  );
}
