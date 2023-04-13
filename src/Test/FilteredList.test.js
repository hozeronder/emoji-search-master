import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe("Emoji Search Test", () => {
  let inputSearch;
  beforeEach(() => {
    render(<App />);
    inputSearch = screen.getByTitle("inputSearch");
  });
  it("emoji list render", () => {
    const input = "Laughing";
    userEvent.type(inputSearch, input);
    expect(screen.getByText(input)).toBeInTheDocument();
  });
});
