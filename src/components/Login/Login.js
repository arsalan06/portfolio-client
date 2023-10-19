import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import {
  button,
  mainContainer,
  searchField,
  upperMainContainer,
} from "./loginStyles";
import { loginAction } from "@/redux/slice/loginSlice";
import { Formik } from "formik";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "@/redux/store";
function Login() {
  const dispatch =useDispatch()
  const router = useRouter();
 const userData =useSelector((state)=>state.loginReducer)
 console.log("userData")
 console.log("userData")
 console.log(userData)
//  let languages=userData?.userData?.user?.languages
//  console.log(JSON.parse(JSON.stringify(languages)))
  return (
    <Box sx={upperMainContainer}>
      <Box sx={mainContainer}>
        <Typography variant="main_heading">Login</Typography>
        <Formik
          initialValues={{ userName: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.userName) {
              errors.userName = "Required";
            }
            if (!values.password) {
              errors.password = "Required";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              // alert(JSON.stringify(values, null, 2));
              dispatch(loginAction(values, router))
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit} style={mainContainer}>
              <TextField
                id="outlined-basic"
                variant="outlined"
                type="text"
                name="userName"
                sx={searchField}
                placeholder="User Name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.userName}
              />
              {errors.userName && touched.userName && errors.userName}
              <TextField
                id="outlined-basic"
                variant="outlined"
                type="password"
                name="password"
                sx={searchField}
                placeholder="Password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password && errors.password}
              <Button variant="contained" type="submit" sx={button} disabled={isSubmitting}>
                Login
              </Button>
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  );
}

export default Login;
