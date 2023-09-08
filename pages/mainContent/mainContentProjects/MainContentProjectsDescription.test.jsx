import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import { MainContentProjectsDescription } from "./MainContentProjectsDescription";

describe("MainContentProjects component", () => {
  it("renders heading", () => {
    render(<MainContentProjectsDescription />);
    screen.debug();

    expect(screen.getByRole("heading", { name: "Description" }));
    expect(screen.getByRole("heading", { name: "Used Technologies" }));
  });
});
