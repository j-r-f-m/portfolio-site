import Container from "react-bootstrap/Container";

import Navbar from "react-bootstrap/Navbar";

export function Footer() {
  return (
    <>
      <Navbar fixed="bottom" bg="dark" data-bs-theme="dark">
        <Container className="d-flex justify-content-center ">
          <div className="text-muted">Copyright</div>
        </Container>
      </Navbar>
    </>
  );
}
