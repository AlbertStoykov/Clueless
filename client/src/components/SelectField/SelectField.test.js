import { default as SelectField } from "../SelectField/index";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store";
import { MemoryRouter } from "react-router-dom";

describe("SelectField Page", () => {
  beforeEach(() => {
    // Make the element
    render(
      <Provider store={store}>
        <MemoryRouter>
          <SelectField />
        </MemoryRouter>
      </Provider>
    );
  });

  test("it displays a SelectField page", () => {
    const selectfield = screen.getByRole("selectfield");
    expect(selectfield).toBeInTheDocument();
  });
});
