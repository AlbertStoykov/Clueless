import { default as Questions } from "../Questions/index";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store";
import { MemoryRouter } from "react-router-dom";

jest.mock("../../hooks", () => ({
  useAxios: () => ({ state: "mocked_value" }),
}));

jest.mock("axios");
import axios from "axios";
axios.get.mockResolvedValue({
  data: {
    response_code: 0,
    results: [
      {
        category: "Entertainment: Books",
        type: "multiple",
        difficulty: "easy",
        question: "How many Harry Potter books are there?",
        correct_answer: "7",
        incorrect_answers: ["8", "5", "6"],
      },
      {
        category: "Animals",
        type: "multiple",
        difficulty: "easy",
        question: "How many teeth does an adult rabbit have?",
        correct_answer: "28",
        incorrect_answers: ["30", "26", "24"],
      },
    ],
  },
});

describe("Questions", () => {
  test("it renders", async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Questions />
        </MemoryRouter>
      </Provider>
    );
    const role = await screen.getByRole("question");
    expect(role.textContent).toMatch(/question/i);
  });
});
