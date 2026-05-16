import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders blog name", () => {
  render(<App />);
  expect(screen.getByText("My Blog")).toBeInTheDocument();
});

test("renders about text", () => {
  render(<App />);
  expect(screen.getByText("This is my tech blog")).toBeInTheDocument();
});

test("renders article title", () => {
  render(<App />);
  expect(screen.getByText("First Post")).toBeInTheDocument();
});