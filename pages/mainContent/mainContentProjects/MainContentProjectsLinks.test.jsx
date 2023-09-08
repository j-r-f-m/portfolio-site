import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import { MainContentProjectsLinks } from "./MainContentProjectsLinks";

describe("MainContentProjectsLinks component", () => {
  it("Renders Projects Links", () => {
    render(<MainContentProjectsLinks />);
    screen.debug();

    // expect(screen.getByRole("heading", { level: 1 }).textContent).toMatch(
    //   /Projects/i
    // );

    expect(screen.getByRole("button", { name: "Visit Site" }));
    expect(screen.getByRole("button", { name: "View Code" }));
  });
});
