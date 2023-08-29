import Row from "react-bootstrap/Row";
import { ProjectCard } from "../../components/projectCard/ProjectCard";
import { MainContentHero } from "./MainContenHero";

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
      <ProjectCard />
      <Row className=" border-danger d-flex justify-content-center align-items-center">
        Row 3
      </Row>
    </>
  );
}
