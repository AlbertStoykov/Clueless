import { default as LandingPage } from "../LandingPage/index";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store";
import { MemoryRouter } from "react-router-dom";

describe("Landing Page", () => {
  beforeEach(() => {
    // Make the element
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LandingPage />
        </MemoryRouter>
      </Provider>
    );
  });

  test("it displays a landing page", () => {
    const page = screen.getByRole("landing-page");
    expect(page).toBeInTheDocument();
  });

  test("it displays the Brand Logo", () => {
    const logo = screen.getByText("Clueless");
    expect(logo).toBeInTheDocument();
  });

  test("it displays the Game Rules", () => {
    const rules = screen.getByText("Game rules");
    expect(rules).toBeInTheDocument();
  });

  test("it displays the No Cheating Instruction", () => {
    const cheating = screen.getByText("1. No cheating");
    expect(cheating).toBeInTheDocument();
  });

  test("it displays the Loser Instruction", () => {
    const loser = screen.getByText("2. Loser Drinks");
    expect(loser).toBeInTheDocument();
  });

  test("it displays the Timer Instruction", () => {
    const timer = screen.getByText("3. Answer within the timer");
    expect(timer).toBeInTheDocument();
  });
});
