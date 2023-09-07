import {
  Box,
  Button,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import ContactCard from "../ContactCard/ContactCard";
import { formContainer, sendButton, textField } from "./contactFormStyles";
import { BiSolidUser } from "react-icons/bi";
import { MdAlternateEmail, MdEmail } from "react-icons/md";
function ContactForm() {
  return (
    <Box
      sx={{
        width: "95%",
        mt: 4,
        mb: 4,
      }}
    >
      <Grid container spacing={4}>
        <Grid item md={12} lg={12}>
          <Typography variant="section_heading">Contact information</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <ContactCard />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <ContactCard />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <ContactCard />
        </Grid>
      </Grid>
      <Grid container spacing={4} sx={{ mt: 2 }}>
        <Grid item md={12} lg={12}>
          <Typography variant="section_heading">Get in touch</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Box sx={formContainer}>
            <TextField
              inputProps={{
                sx: { color: "pink" },
              }}
              sx={textField}
              placeholder="Name"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <BiSolidUser style={{ color: "#8C8C8E" }} />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              sx={{ ...textField, mt: 4 }}
              placeholder="Email"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MdAlternateEmail style={{ color: "#8C8C8E" }} />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              sx={{ ...textField, mt: 4 }}
              placeholder="Message"
              fullWidth
              //   multiline
              rows={4}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MdEmail style={{ color: "#8C8C8E" }} />
                  </InputAdornment>
                ),
              }}
            />
            <Button variant="contained" sx={sendButton}>Send Message</Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ContactForm;
