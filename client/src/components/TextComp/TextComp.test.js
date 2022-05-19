import { default as TextComp } from "../TextComp/index";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store";
import { MemoryRouter } from "react-router-dom";

describe("TextComp Page", () => {
  beforeEach(() => {
    // Make the element
    render(
      <Provider store={store}>
        <MemoryRouter>
          <TextComp />
        </MemoryRouter>
      </Provider>
    );
  });

  test("it displays a TextComp page", () => {
    const usertab = screen.getByRole("textcomp");
    expect(usertab).toBeInTheDocument();
  });
});
