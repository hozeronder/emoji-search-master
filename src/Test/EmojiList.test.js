import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import emojiList from "../emojiList.json";
import App from "../App";

describe("Emoji List Test", () => {
  beforeEach(() => {
    render(<App />);
  });
  it("emoji list render", () => {
    let emoji = emojiList.slice(0, 20);
    emoji.map(item => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    });
  });
});
