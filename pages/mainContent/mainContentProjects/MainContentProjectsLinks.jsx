import Nav from "react-bootstrap/Nav";

// export function LinkComponent()

/**
 * Renders the links for a project in the main content section.
 * @returns {JSX.Element} The JSX code for the project links.
 */

export function MainContentProjectsLinks() {
  return (
    <>
      <Nav variant="underline">
        <Nav.Item className="">
          <Nav.Link
            className=" text-light"
            href="https://hilarious-tiramisu-a7e4c7.netlify.app"
            style={{ padding: "1px" }}
          >
            <span>Visit Site</span>
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link
            className="text-light"
            href="https://github.com/j-r-f-m/portfolio-site"
            style={{ padding: "1px" }}
          >
            View Code
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}
