import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("Tests for Login Form", () => {
  it("submitting the form calls onSubmit with username and password", () => {
    let submittedData = null;
    const handleSubmit = (eve) => {
      submittedData = {
        username: eve.username,
        password: eve.password,
      };
    };
    render(<App onSubmit={handleSubmit} />);

    const getusername = screen.getByLabelText("Username", {
      selector: "input",
    });
    const getpassword = screen.getByLabelText("Password", {
      selector: "input",
    });

    userEvent.type(getusername, "USERNAME!!!");
    userEvent.type(getpassword, "Password!!!");

    const submit = screen.getByRole("button", { name: /submit/i });
    userEvent.click(submit);
    expect(submittedData.username).toEqual("USERNAME!!!");
    expect(submittedData.password).toEqual("Password!!!");
  });
  // create a variable called "submittedData" and a handleSubmit function that
  // accepts the data and assigns submittedData to the data that was submitted
  // Hint: if you need a hand, here's what the handleSubmit function should do:
  // const handleSubmit = data => (submittedData = data)
  //
  // render the login with your handleSubmit function as the onSubmit prop
  //
  // get the username and password fields via `getByLabelText`
  // use `await userEvent.type...` to change the username and password fields to
  //    whatever you want
  //
  // click on the button with the text "Submit"
  //
  // assert that submittedData is correct
  // Hint: use `toEqual` from Jest: 📜 https://jestjs.io/docs/en/expect#toequalvalue
});
