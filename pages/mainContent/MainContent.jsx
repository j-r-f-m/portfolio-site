import { MainContentHero } from "./mainContentHero/MainContenHero";
import { MainContentProjects } from "./mainContentProjects/MainContentProjects";
import { MainContentContact } from "./mainContentContact/MainContentContact";

// use border to make layout visible
// let borderStyle = "border border-danger";

/**
 * Landing page that conatins the three main content sections.
 * @returns Landing page
 */
export function MainContent() {
  /**
   * Basic layout of MainContent(): Each component wraps its content inside a
   * container.
   */
  return (
    <>
      <MainContentHero />
      <MainContentProjects LinkRef="projects" />
      <MainContentProjects />
      <MainContentProjects />
      <MainContentContact />
    </>
  );
}
