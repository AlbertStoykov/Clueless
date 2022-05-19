import { default as UserTab } from "../UserTab/index";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store";
import { MemoryRouter } from "react-router-dom";

describe("UserTab Page", () => {
  beforeEach(() => {
    // Make the element
    render(
      <Provider store={store}>
        <MemoryRouter>
          <UserTab />
        </MemoryRouter>
      </Provider>
    );
  });

  test("it displays a UserTab page", () => {
    const usertab = screen.getByRole("usertab-page");
    expect(usertab).toBeInTheDocument();
  });
});
