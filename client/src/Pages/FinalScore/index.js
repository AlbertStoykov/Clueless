import React from "react";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleNumChange, handleScoreChange } from "../../actions/index.js";

const FinalScore = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { score } = useSelector((state) => state);

  const handleBackToQuizSetUp = () => {
    dispatch(handleScoreChange(0));
    dispatch(handleNumChange(50));
    navigate("/");
  };

  return (
    <Box mt={30}>
      <Typography variant="h3" fontWeight="bold" mb={3}>
        Final Score {score}
      </Typography>
      <Button onClick={handleBackToQuizSetUp} variant="outlined">
        BACK
      </Button>
    </Box>
  );
};
export default FinalScore;
