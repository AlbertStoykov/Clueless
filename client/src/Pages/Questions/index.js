import React from "react";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useAxios } from "../../hooks";
import { useSelector } from "react-redux";

const Questions = () => {
  const { question_cat, question_dif, question_type, question_num } =
    useSelector((state) => state);
  let apiUrl = `/api.php?amount=10`;
  const { response, loading } = useAxios({ url: apiUrl });

  return (
    <Box>
      <Typography variant="h4">Question 1</Typography>
      <Typography mt={5}>This is the question?</Typography>
      <Box mt={2}>
        <Button variant="contained">Answer 1</Button>
      </Box>
      <Box mt={2}>
        <Button variant="contained">Answer 2</Button>
      </Box>
      <Box mt={2}>
        <Button variant="contained">Answer 3</Button>
      </Box>
      <Box mt={2}>
        <Button variant="contained">Answer 4</Button>
      </Box>
      <Box mt={5}>Score 2 / 6</Box>
    </Box>
  );
};

export default Questions;
