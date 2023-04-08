import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

import App from "../App";

describe("index", () => {
  test("Should render Hello World", async () => {
    render(<App />);
    expect(await screen.findByText("Person")).toBeInTheDocument();
    expect(await screen.findByText("Amount")).toBeInTheDocument();
    expect(await screen.findAllByText("Add")).toHaveLength(1);
  });
});
