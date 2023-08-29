import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export function ProjectCard() {
  return (
    <>
      <Container>
        <Row>
          <Card
            bg="dark"
            data-bs-theme="dark"
            style={{ width: "18rem", margin: "2rem", padding: "0rem" }}
          >
            <Card.Header>Verankerungslänge</Card.Header>
            <Card.Img
              className="p-1 rounded"
              variant="top"
              src="images/img_verankerung.jpeg"
            />
            <Card.Body>
              <Card.Text>
                Tool that calculates the needed anchorage length.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </>
  );
}
