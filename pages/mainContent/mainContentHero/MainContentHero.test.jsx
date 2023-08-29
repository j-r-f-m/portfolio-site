import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import { MainContentHero } from "./MainContenHero";

describe.skip("MainContent component", () => {
  it("renders image", () => {
    render(<MainContentHero />);
    screen.debug();

    expect(screen.getByRole("img"));
  });

  it("renders about me text", () => {
    render(<MainContentHero />);
    screen.debug();

    expect(screen.getByRole("article"));
  });
});
