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
    const page = screen.getByTestId("landing-page");
    expect(page).toBeInTheDocument();
  });
});
