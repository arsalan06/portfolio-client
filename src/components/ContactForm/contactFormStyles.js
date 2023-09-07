export const formContainer = {
  backgroundColor: "#2C2C38",
  padding:"30px 30px"
};

export const textField = {
//   width: "100%",
  input: {
    color: "white",
    fontFamily: "Poppins",
    border: "none",
    backgroundColor: "#23232E",
    paddingLeft:"10px"
  },
  "&.css-v4u5dn-MuiInputBase-root-MuiInput-root": {
    borderBottom: "none",
    border: "none",
  },
  "& .MuiOutlinedInput-root": {
    // height: "40px",

    "& fieldset": {
      fontFamily: "Poppins",
      border: "none",
      borderColor: "none",
      borderRadius: 1,
    },
    "&:hover fieldset": {
      borderColor: "none",
      border: "none",
    },
    "&.Mui-focused fieldset": {
      borderColor: "none",
      border: "none",
    },
  },
  "&.MuiFormControl-root":{
    backgroundColor: "#20202A",
  }
};


export const sendButton = {
    "&.MuiButton-root": {
      fontFamily: "Poppins",
      fontWeight: 500,
      marginTop: "30px",
      backgroundColor: "#ffc107",
      color: "black",
    },
  };