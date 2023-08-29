import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ProjectCard } from "./ProjectCard";

describe("App component", () => {
  it("renders navbar and corresponding links", () => {
    render(<ProjectCard />);

    expect(screen.getByRole("img"));
  });
});
