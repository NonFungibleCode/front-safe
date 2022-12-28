import Greeting from "./Greeting";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Greeting component", () => {
  test("renders Hello World as a text", () => {
    render(<Greeting />);

    // Act
    // ...nothing

    // Assert
    const helloWorldElement = screen.getByText("Hello World", { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders good to see you if the button was NOT clicked", () => {
    render(<Greeting />);
    // Act
    // ...nothing

    // Assert
    const outputElement = screen.getByText("good to see you", {
      exact: false,
    });
    expect(outputElement).toBeInTheDocument();
  });

  test("renders Changed! if the button was clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const btnElement = screen.getByRole("button");
    userEvent.click(btnElement);

    // Assert
    const outputElement = screen.getByText("Changed!");
    expect(outputElement).toBeInTheDocument();
  });

  test("does not render good to see you if the button was clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const btnElement = screen.getByRole("button");
    userEvent.click(btnElement);

    // Assert
    const outputElement = screen.queryByText("good to see you", {
      exact: false,
    });
    expect(outputElement).not.toBeInTheDocument();
  });
});
