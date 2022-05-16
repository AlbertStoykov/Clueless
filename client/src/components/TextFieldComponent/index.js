import React from 'react';
import { Box } from '@mui/system';
import { FormControl, TextField } from '@mui/material';

const TextFieldComponent = () => {
  const handleChange = () => {};

  return (
    <Box mt={3} width="100%">
      <FormControl fullWidth size="small">
        <TextField
          onChange={handleChange}
          variant="outlined"
          label="Amount of Questions"
          type="number"
          size="small"
        />
      </FormControl>
    </Box>
  );
};

export default TextFieldComponent;
