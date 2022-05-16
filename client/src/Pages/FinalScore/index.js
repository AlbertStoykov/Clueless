import React from 'react';
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { handleAmountChange, handleScoreChange } from '../../actions/index.js';

const FinalScore = () => {
  const disptach = useDispatch();
  const history = useNavigate();
  const { score } = useSelector((state) => state);

  const handleBackToQuizSetUp = () => {
    disptach(handleScoreChange(0));
    disptach(handleAmountChange(50));
    history.push;
  };

  return (
    <Box mt={30}>
      <Typography variant="h3" fontWeight="bold" mb={3}>
        Final Score {score}
      </Typography>
      <Button onClick={handleBackToQuizSetUp} variant="outlined">
        back to settings!
      </Button>
    </Box>
  );
};
export default FinalScore;
