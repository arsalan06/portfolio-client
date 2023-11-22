export const formContainer = {
  backgroundColor: "#2C2C38",
  padding: "30px 30px",
};

export const textField = {
  //   width: "100%",
  input: {
    color: "white",
    fontFamily: "Poppins",
    border: "none",
    backgroundColor: "#23232E",
    paddingLeft: "10px",
  },
  textarea: {
    color: "white",
    fontFamily: "Poppins",
    border: "none",
    backgroundColor: "#23232E",
    paddingLeft: "10px",
    paddingTop: "5px",
  },
  "&.css-111avd1-MuiInputBase-root-MuiOutlinedInput-root": {
    borderBottom: "none",
    border: "none",
    padding: "0px",
  },
  "& .MuiOutlinedInput-root": {
    padding: "0px",
    paddingLeft: "10px",

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
  "&.MuiFormControl-root": {
    backgroundColor: "#20202A",
    // padding:"0px"
  },
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

export const mainContainer = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "300px",
  height: "300px",
  marginTop: "50px",
  boxShadow: "-151px 121px 115px 110px rgba(41,41,53,0.61) inset",
};
export const mainTitle = {
  "&.MuiTypography-root": {
    fontFamily: "Poppins",
    fontWeight: 700,
    color: "white",
    fontSize: "42px",
  },
};

export const stackBox = {
  width: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
};
export const contactCardContainer = {
  "&.MuiCard-root": {
    backgroundColor: "#242430",
    padding: "30px 25px",
    // width:"330px"
  },
};
export const labelText = {
  "&.MuiTypography-root": {
    fontSize: "14px",
  },
};
