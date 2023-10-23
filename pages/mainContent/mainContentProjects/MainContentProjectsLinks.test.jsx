import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MainContentProjectsLinks } from "./MainContentProjectsLinks";

describe("MainContentProjectsLinks component", () => {
  it("renders Visit Site and View Code links", () => {
    render(<MainContentProjectsLinks />);
    expect(
      screen.getByRole("link", { name: "Visit Site" })
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "View Code" })).toBeInTheDocument();
  });

  it("has the correct href for Visit Site and View Code links", () => {
    render(<MainContentProjectsLinks />);
    expect(screen.getByRole("link", { name: "Visit Site" })).toHaveAttribute(
      "href",
      "https://hilarious-tiramisu-a7e4c7.netlify.app"
    );
    expect(screen.getByRole("link", { name: "View Code" })).toHaveAttribute(
      "href",
      "https://github.com/j-r-f-m/portfolio-site"
    );
  });

  it("has the correct styling for Visit Site and View Code links", () => {
    render(<MainContentProjectsLinks />);
    expect(screen.getByRole("link", { name: "Visit Site" })).toHaveStyle({
      padding: "1px",
    });
    expect(screen.getByRole("link", { name: "View Code" })).toHaveStyle({
      padding: "1px",
    });
  });
});
