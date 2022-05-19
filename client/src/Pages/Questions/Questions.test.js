import { default as Questions } from "../Questions/index";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store";
import { MemoryRouter } from "react-router-dom";

import { useAxios } from "../../hooks"; // Get the hook that needs faking
jest.mock("../../hooks"); // Fake the hooks

// Example response data

const mockReturnData = {
  response: {
    results: [
      {
        question: "How many Harry Potter books are there?",
        correct_answer: "C",
        incorrect_answers: ["A", "B"],
      },
    ],
  },
  error: "",
  loading: false,
};

describe("Questions", () => {
  beforeEach(() => {
    // When useAxios is called, fake the response
    useAxios.mockReturnValue(mockReturnData);

    // Make the element
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Questions />
        </MemoryRouter>
      </Provider>
    );
  });

  test("it renders", () => {
    // Does it display the right element?
    const question = screen.getByRole("question-box");
    expect(question).toBeInTheDocument();
  });

  test("it renders a Question Title", () => {
    const question = screen.getByRole("question-title");
    expect(question).toBeInTheDocument();
  });

  test("it renders a Question from the API", () => {
    const apiQuestion = screen.getByRole("api-question");
    expect(apiQuestion).toBeInTheDocument();
  });

  test("it renders Answers from API", () => {
    const answer = screen.getAllByRole("api-answer");
    expect.arrayContaining(answer);
  });

  test("it renders a Score", () => {
    const apiScore = screen.getByRole("api-score");
    expect(apiScore).toBeInTheDocument();
  });

  test("it uses Axios", () => {
    // Does it call useAxios?
    expect(useAxios).toHaveBeenCalled();
  });
});
