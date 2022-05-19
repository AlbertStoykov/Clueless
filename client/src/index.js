import React from "react";
import reactDom from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { Container } from "@mui/material";
import { Box } from "@mui/system";

import App from "./App";

reactDom.render(
  <Provider store={store}>
    <Container maxWidth="sm">
      <Box textAlign="center" mt={5}>
        <Router>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </Router>
      </Box>
    </Container>
  </Provider>,
  document.querySelector("#root")
);
