import { Typography, Button, FromGroup } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { SelectField, TextFieldComponent } from '../../components';
import { useAxios } from '../../hooks';

const QuizSetup = () => {
  const { response, error, loading } = useAxios({ url: '/api_category.php' });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Typography variant="h3" fontWeight="Bold">
        Quiz App
      </Typography>
      <form onSubmit={handleSubmit}>
        <SelectField label="Category" />
        <SelectField label="Difficulty" />
        <SelectField label="Type" />
        <TextFieldComponent />
        <Box mt={3} width="100%">
          <Button fullWidth variant="contained" type="submit">
            Get Started
          </Button>
        </Box>
      </form>
    </>
  );
};

export default QuizSetup;
