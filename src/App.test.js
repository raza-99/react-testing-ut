import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("Tests for Todo App", () => {
  // Write tests for Todo App
  // Add and Delete Todo

  it(" todo app", () => {
    render(<App />);
    expect(screen.getByText(/0/i)).toBeInTheDocument();
  });

  it("ADD", () => {
    render(<App />);
    const item = screen.getByText(/0/i);
    const input = screen.getByPlaceholderText(/new todo/i);
    const Button = screen.getByRole("button", { name: "CREATE" });
    userEvent.type(input, "SAMPLEINPUT");
    userEvent.click(Button);
    expect(item).toHaveTextContent("1 todos");
  });

  it("DELETE", () => {
    render(<App />);
    const item = screen.getByText(/0/i);
    const input = screen.getByPlaceholderText(/new todo/i);
    const Button1 = screen.getByRole("button", { name: "CREATE" });
    userEvent.type(input, "SAMPLEINPUT");
    userEvent.click(Button1);
    expect(item).toHaveTextContent("1 todos");
    const Button2 = screen.getByRole("button", { name: "DELETE" });
    userEvent.click(Button2);
    expect(item).toHaveTextContent("0 todos");
  });
});
