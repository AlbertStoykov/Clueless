import React, { useState, useEffect } from "react";
import { Button, CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useAxios } from "../../hooks";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleScoreChange } from "../../actions";
import { UserTab } from "../../components";

//creates a random number
const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

//Function handling special HTML characters
function htmlDecode(input) {
  var doc = new DOMParser().parseFromString(input, "text/html");
  return doc.documentElement.textContent;
}

const Questions = () => {
  const { question_cat, question_dif, question_type, amount, score } =
    useSelector((state) => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let apiUrl = `/api.php?amount=${amount}`;

  if (question_cat) {
    apiUrl = apiUrl.concat(`&category=${question_cat}`);
  }
  if (question_dif) {
    apiUrl = apiUrl.concat(`&difficulty=${question_dif}`);
  }
  if (question_type) {
    apiUrl = apiUrl.concat(`&type=${question_type}`);
  }

  const { response, loading } = useAxios({ url: apiUrl });
  const [questionIndex, setQuestionIndex] = useState(0);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (response?.results.length) {
      const question = response.results[questionIndex];
      let answers = [...question.incorrect_answers];
      answers.splice(
        //creates a random index for incorrect answers
        getRandomInt(question.incorrect_answers.length),
        0,
        question.correct_answer
      );
      setOptions(answers);
    }
  }, [response, questionIndex]);
  if (loading) {
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    );
  }

  const handleClickAnswer = (e) => {
    const question = response.results[questionIndex];
    if (e.target.textContent === question.correct_answer) {
      dispatch(handleScoreChange(score + 1));
    }

    if (questionIndex + 1 < response.results.length) {
      setQuestionIndex(questionIndex + 1);
    } else {
      navigate("/score");
    }
  };

  return (
    <Box
      mt={12}
      style={{
        backgroundColor: "#202124",
        borderRadius: "15px",
      }}
    >
      <UserTab />
      <Typography
        style={{
          backgroundColor: "red",
          borderRadius: "10px",
          textAlign: "center",
          color: "white",
          textDecoration: "underline",
        }}
        variant="h4"
        mt={6}
      >
        Question {questionIndex + 1}
      </Typography>

      <Typography
        mt={5}
        style={{
          color: "white",
        }}
      >
        {htmlDecode(response.results[questionIndex].question)}
      </Typography>

      {options.map((data, id) => (
        <Box mt={2} key={id}>
          <Button
            onClick={handleClickAnswer}
            variant="contained"
            style={{
              minWidth: "400px",
              minHeight: "30px",
            }}
          >
            {htmlDecode(data)}
          </Button>
        </Box>
      ))}

      <Box
        mt={5}
        fontSize={50}
        style={{
          color: "white",
          fontFamily: "Roboto, Helvetica",
        }}
      >
        Score: {score} / {response.results.length}
      </Box>
    </Box>
  );
};

export default Questions;
