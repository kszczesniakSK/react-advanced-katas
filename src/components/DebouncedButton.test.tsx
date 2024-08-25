import { render, fireEvent, screen } from "@testing-library/react";
import DebouncedButton from "./DebouncedButton";
import { vi } from "vitest";
import "@testing-library/jest-dom";

// Mock imported library using Jest ES6 Mocks
vi.mock("lodash", () => ({
  debounce: vi.fn((fn) => fn), 
}));

test('renders debounced button and debugs UI', () => {
    render(<DebouncedButton />);
  
    const button = screen.getByText('Click me');
    expect(button).toBeInTheDocument();
  });

test("increments count immediately when button is clicked", () => {
  render(<DebouncedButton />);

  const button = screen.getByText("Click me");

  fireEvent.click(button);
  fireEvent.click(button); 

  expect(screen.getByText("Count: 2")).toBeInTheDocument();
});

test("increments count immediately when button is clicked", () => {
  render(<DebouncedButton />);

  const button = screen.getByText("Click me");

  fireEvent.click(button);
  fireEvent.click(button);
  fireEvent.click(button);

  expect(screen.getByText("Count: 3")).toBeInTheDocument();
});
