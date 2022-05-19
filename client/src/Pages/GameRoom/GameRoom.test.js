import { default as GameRoom } from "../GameRoom/index";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store";
import { MemoryRouter } from "react-router-dom";

describe("GameRoom Page", () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <GameRoom />
      </MemoryRouter>
    </Provider>
  );

  test("it displays the GameRoom Page", () => {
    // Does it display the right element?
    const room = screen.getByTestId("gameroom-page");
    expect(room).toBeInTheDocument();
  });
});
