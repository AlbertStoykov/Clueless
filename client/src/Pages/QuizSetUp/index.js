import { Typography, Button, CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import React from "react";
import { SelectField } from "../../components";
import { useAxios } from "../../hooks";
import {
  QuestionOptions,
  DifficultyOptions,
  TypeOptions,
} from "../../container";

const QuizSetup = () => {
  const { response, error, loading } = useAxios({ url: "/api_category.php" });
  const navigate = useNavigate();

  if (loading) {
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography variant="h6" mt={20} color="red">
        Something Went Wrong!
      </Typography>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/questions");
  };

  return (
    <>
      <Typography variant="h3" fontWeight="Bold">
        Clueless
      </Typography>
      <form onSubmit={handleSubmit}>
        <SelectField options={response.trivia_categories} label="Category" />
        <SelectField options={DifficultyOptions} label="Difficulty" />
        <SelectField options={TypeOptions} label="Type" />
        <SelectField options={QuestionOptions} label="Questions" />
        <Box mt={3} width="100%">
          <Button fullWidth variant="contained" type="submit">
            Start Quiz
          </Button>
        </Box>
      </form>
    </>
  );
};

export default QuizSetup;
