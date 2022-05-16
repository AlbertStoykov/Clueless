import { Typography, Button, FromGroup, CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { SelectField } from "../../components";
import { useAxios } from "../../hooks";

const QuizSetup = () => {
  const { response, error, loading } = useAxios({ url: "/api_category.php" });

  if (loading) {
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    );
  }

  const difficultyOptions = [
    { id: "easy", name: "Easy" },
    { id: "medium", name: "Medium" },
    { id: "hard", name: "Hard" },
  ];

  const typeOptions = [
    { id: "multiple", name: "Multiple Choice" },
    { id: "boolean", name: "True/False" },
  ];

  const questionOptions = [
    { id: "1", name: "1" },
    { id: "2", name: "2" },
    { id: "3", name: "3" },
    { id: "4", name: "4" },
    { id: "5", name: "5" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Typography variant="h3" fontWeight="Bold">
        Quiz App
      </Typography>
      <form onSubmit={handleSubmit}>
        <SelectField options={response.trivia_categories} label="Category" />
        <SelectField options={difficultyOptions} label="Difficulty" />
        <SelectField options={typeOptions} label="Type" />
        <SelectField options={questionOptions} label="Number of Questions" />
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
