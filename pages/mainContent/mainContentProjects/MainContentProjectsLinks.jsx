import Nav from "react-bootstrap/Nav";

export function MainContentProjectsLinks() {
  return (
    <>
      <Nav variant="underline">
        <Nav.Item className="d-flex align-items-center">
          <Nav.Link className=" text-light" href="" style={{ padding: "1px" }}>
            <span>Visit Site</span>
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link className="text-light" href="" style={{ padding: "1px" }}>
            View Code
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}
