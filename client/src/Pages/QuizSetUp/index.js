import { Typography, Button, CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import React from "react";
import { SelectField } from "../../components";
import { useAxios } from "../../hooks";
import TextComp from "../../components/TextComp";

import { DifficultyOptions, TypeOptions } from "../../container";

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
    <Box
      mt={12}
      style={{
        border: "2px solid #36BC4D",
        boxShadow: "3px 1px 3px 1px #36BC4D",
        borderRadius: "15px",
        padding: "25px",
        borderRadius: "15px",
      }}
    >
      <Typography variant="h3" fontWeight="Bold">
        Clueless
      </Typography>
      <form onSubmit={handleSubmit}>
        <SelectField options={response.trivia_categories} label="Category" />
        <SelectField options={DifficultyOptions} label="Difficulty" />
        <SelectField options={TypeOptions} label="Type" />
        <TextComp />
        <Box mt={3} width="100%">
          <Button fullWidth variant="contained" type="submit">
            Start Quiz
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default QuizSetup;
