import Container from "react-bootstrap/Container";
import { CCircle } from "react-bootstrap-icons";
import Navbar from "react-bootstrap/Navbar";

export function Footer() {
  return (
    <>
      <Navbar fixed="bottom" bg="dark" data-bs-theme="dark">
        <Container className="d-flex justify-content-center ">
          <CCircle style={{ marginRight: "10px" }} color="LightGray" />
          <div style={{ color: "lightgrey" }}> 2023 Jonas Mösch</div>
        </Container>
      </Navbar>
    </>
  );
}
