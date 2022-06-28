import { getByText, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("Tests for Counter App", () => {
  it("Should have initial value 0", () => {
    render(<App />);
    /**
     * Todo:
     * 1. Assert that the initial value is 0. Use getBy/findBy Query to find text '0' from the screen.
     * 2. use getByRole/findByRole query to find 'increment' button.
     * 3. Use userEvent to click on increment button to increment the count by 1.
     * 4. Assert that the count has value incremented by 1. i.e. the current value should become 1.
     * 5. Similarly perform actions 3 and 4 for decrement.
     *
     */

    const number = screen.getByText("0");
    const increment = screen.getByRole("button", { name: "increment" });
    const decrement = screen.getByRole("button", { name: "decrement" });
    userEvent.click(increment);
    expect(number).toHaveTextContent("1");
    userEvent.click(decrement);
    expect(number).toHaveTextContent("0");
  });
});
