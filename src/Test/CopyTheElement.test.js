import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe("Emoji Search Test", () => {
  let clickElement;
  beforeEach(() => {
    render(<App />);
    clickElement = screen.getByText("Laughing");
  });
  it("emoji list render", () => {
    const input = "Laughing";
    userEvent.click(clickElement);
    expect(
      clickElement.parentElement.getAttribute("data-clipboard-text")
    ).toMatch("😆");
  });
});
