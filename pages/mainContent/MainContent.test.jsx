import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import { MainContent } from "./MainContent";

describe("App component", () => {
  it("renders navbar and corresponding links", () => {
    render(<MainContent />);

    expect(screen.getByRole("heading").textContent).toMatch(/Main Content/i);
  });
});
