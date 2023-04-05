import React from "react";
import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

import App from "../App";

describe("index", () => {
  test("Should render Hello World", () => {
    render(<App />);
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });
});
