import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { ProjectCard } from "../../components/projectCard/ProjectCard";
import { MainContentHero } from "./MainContenHero";

// use border to make layout visible
// let borderStyle = "border border-danger";

export function MainContent() {
  return (
    <>
      {/* organize the grid in */}

      <MainContentHero />

      <ProjectCard />

      <Row className=" border-danger d-flex justify-content-center align-items-center">
        Row 3
      </Row>
    </>
  );
}
