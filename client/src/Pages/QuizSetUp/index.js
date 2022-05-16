import { Typography, Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { SelectField } from '../../components';

const QuizSetUp = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Typography variant="h3" fontWeight="Bold">
        Quiz App
      </Typography>
      <form onSumbit={handleSubmit}>
        <SelectField label="Category" />
        <SelectField label="Difficulty" />
        <SelectField label="Type" />
        <Box mt={3} width="100%">
          <Button fullWidth varient="contained" type="submit">
            Get Started
          </Button>
        </Box>
      </form>
    </>
  );
};

export default QuizSetUp;
