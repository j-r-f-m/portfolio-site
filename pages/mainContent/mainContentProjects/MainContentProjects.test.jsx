import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import { MainContentProjects } from "./MainContentProjects";

describe("MainContentProjects component", () => {
  it("renders heading", () => {
    render(<MainContentProjects />);
    screen.debug();

    expect(screen.getByRole("heading").textContent).toMatch(/Projects/i);
  });
});
