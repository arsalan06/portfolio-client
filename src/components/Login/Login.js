import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import {
  button,
  mainContainer,
  searchField,
  upperMainContainer,
} from "./loginStyles";

function Login() {
  return (
    <Box sx={upperMainContainer}>
      <Box sx={mainContainer}>
        <Typography variant="main_heading">Login</Typography>
        <TextField
          id="outlined-basic"
          variant="outlined"
          sx={searchField}
          placeholder="User Name"
        />
        <TextField
          id="outlined-basic"
          variant="outlined"
          sx={searchField}
          placeholder="Password"
        />
        <Button variant="contained" sx={button}>
          Login
        </Button>
      </Box>
    </Box>
  );
}

export default Login;
