import React from "react";
import App from "../App";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

it("Header Test", () => {
  render(<App />);
  const Header = screen.getByText("Emoji Search");
  expect(Header).toBeInTheDocument();
});
