import React, { useState } from "react";
import { FormControl } from "@mui/material";
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
    <Box mt={3} width="100%">
      <FormControl size="large">{players}</FormControl>
    </Box>
  );
};

export default UserTab;
