import React, { useState } from "react";
import { FormControl, Button } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handlePlayerChange } from "../../actions";

const UserTab = (props) => {
  const { players } = useSelector((state) => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [value, setValue] = useState("");

  return (
    <Box role="usertab-page" mt={3} width="100%">
      <FormControl size="large">{players}</FormControl>
    </Box>

    // <Box mt={2} width="100%">
    //   <Button variant="contained">{players}</Button>
    // </Box>
  );
};

export default UserTab;
