"use client";
import {
  Box,
  Button,
  Card,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import {
  contactCardContainer,
  formContainer,
  labelText,
  sendButton,
  stackBox,
  textField,
} from "./contactFormStyles";
import { BiSolidUser } from "react-icons/bi";
import { MdAlternateEmail, MdEmail } from "react-icons/md";
import { useForm } from "react-hook-form";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import { BsCheck2Circle } from "react-icons/bs";
import { useSelector } from "react-redux";
import { api_base_url } from "@/constant/constant";
function ContactForm() {
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const userDetail = useSelector((state) => state.userDetailReducer);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleRequesSubmit = (data) => {
    setLoading(true);
    axios
      .post(`${api_base_url}sendEmail`, data)
      .then((res) => {
        setLoading(false);
        setSuccess(true);
      })
      .catch((err) => {
        setLoading(false);
      });
  };
  return (
    <Box
      sx={{
        width: "95%",
        mt: 4,
        mb: 4,
      }}
    >
      <Grid container spacing={2}>
        <Grid item md={12} lg={12}>
          <Typography variant="section_heading">Contact information</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={5} lg={4}>
          <Card sx={contactCardContainer}>
            <Box sx={stackBox}>
              <Typography variant="page_title" sx={labelText}>
                Residence:
              </Typography>
              <Typography variant="body_text">
                {userDetail?.userDetail?.user?.country}
              </Typography>
            </Box>
            <Box sx={stackBox}>
              <Typography variant="page_title" sx={labelText}>
                City:
              </Typography>
              <Typography variant="body_text">
                {userDetail?.userDetail?.user?.city}
              </Typography>
            </Box>
            <Box sx={stackBox}>
              <Typography variant="page_title" sx={labelText}>
                State:
              </Typography>
              <Typography variant="body_text">
                {userDetail?.userDetail?.user?.state}
              </Typography>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={5} lg={4}>
          <Card sx={contactCardContainer}>
            <Box sx={stackBox}>
              <Typography variant="page_title" sx={labelText}>
                Email:
              </Typography>
              <Typography variant="body_text">
                {userDetail?.userDetail?.user?.email}
              </Typography>
            </Box>
            <Box sx={stackBox}>
              <Typography variant="page_title" sx={labelText}>
                Telegram:
              </Typography>
              <Typography variant="body_text">
                {userDetail?.userDetail?.user?.telegram}
              </Typography>
            </Box>
            <Box sx={stackBox}>
              <Typography variant="page_title" sx={labelText}>
                Skype:
              </Typography>
              <Typography variant="body_text">
                {userDetail?.userDetail?.user?.skype}
              </Typography>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={5} lg={4}>
          <Card sx={contactCardContainer}>
            <Box sx={stackBox}>
              <Typography variant="page_title" sx={labelText}>
                Name:
              </Typography>
              <Typography variant="body_text">
                {userDetail?.userDetail?.user?.fullName}
              </Typography>
            </Box>
            <Box sx={stackBox}>
              <Typography variant="page_title" sx={labelText}>
                Phone Number:
              </Typography>
              <Typography variant="body_text">
                {userDetail?.userDetail?.user?.phoneNumber}
              </Typography>
            </Box>
            <Box sx={stackBox}>
              <Typography variant="page_title" sx={labelText}>
                Age:
              </Typography>
              <Typography variant="body_text">
                {userDetail?.userDetail?.user?.age}
              </Typography>
            </Box>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={4} sx={{ mt: 2 }}>
        <Grid item md={12} lg={12}>
          <Typography variant="section_heading">Get in touch</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <form onSubmit={handleSubmit(handleRequesSubmit)}>
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
                {...register("name", {
                  required: true,
                })}
              />
              {errors.name && (
                <Typography variant="body_error">
                  This field is required
                </Typography>
              )}
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
                {...register("to", {
                  required: true,
                })}
              />
              {errors.to && (
                <Typography variant="body_error">
                  This field is required
                </Typography>
              )}
              <TextField
                sx={{ ...textField, mt: 4 }}
                placeholder="Message"
                fullWidth
                multiline
                rows={4}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MdEmail style={{ color: "#8C8C8E" }} />
                    </InputAdornment>
                  ),
                }}
                {...register("desc", {
                  required: true,
                })}
              />
              {errors.desc && (
                <Typography variant="body_error">
                  This field is required
                </Typography>
              )}
              <Button variant="contained" sx={sendButton} type="submit">
                {loading && !success ? (
                  <CircularProgress />
                ) : !loading && success ? (
                  <>
                    <BsCheck2Circle /> Message Sent
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
            </Box>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ContactForm;
