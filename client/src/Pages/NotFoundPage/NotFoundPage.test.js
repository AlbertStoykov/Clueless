import { default as NotFoundPage } from "../NotFoundPage/index";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store";
import { MemoryRouter } from "react-router-dom";

describe("Error Page", () => {
  beforeEach(() => {
    // Make the element
    render(
      <Provider store={store}>
        <MemoryRouter>
          <NotFoundPage />
        </MemoryRouter>
      </Provider>
    );
  });

  test("it displays 404 error", () => {
    // Does it display the right element?
    const error = screen.getByText("Error 404! Page not found..");
    expect(error).toBeInTheDocument();
  });
});
