import { default as FinalScore } from "../FinalScore/index";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store";
import { MemoryRouter } from "react-router-dom";

describe("FinalScore Page", () => {
  beforeEach(() => {
    // Make the element
    render(
      <Provider store={store}>
        <MemoryRouter>
          <FinalScore />
        </MemoryRouter>
      </Provider>
    );
  });

  test("it displays a final score page", () => {
    const page = screen.getByTestId("final-score");
    expect(page).toBeInTheDocument();
  });

  test("it displays the Back Button", () => {
    const button = screen.getByText("BACK");
    expect(button).toBeInTheDocument();
  });
});
