export const upperMainContainer = {
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
export const mainContainer = {
  backgroundColor: "#24242F",
  width: "450px",
  height: "400px",
  display: "flex",
  flexDirection: "column",
  padding:"25px 25px",
  justifyContent: "space-around",
  alignItems: "center",
  borderRadius:"20px",
//   boxShadow: "0px 0px 10px -8px rgba(255,255,255,0.75) inset"
};

export const searchField = {
  width: "100%",
  input: {
    color: "white",
    fontFamily: "Poppins",
  },
  label: {
    color: "#58585E",
    fontFamily: "Poppins",
  },
  "&.css-v4u5dn-MuiInputBase-root-MuiInput-root": {
    borderBottom: "1px solid white !important",
  height:"40px",

  },
  "& .MuiOutlinedInput-root": {
    height: "40px",

    "& fieldset": {
      fontFamily: "Poppins",
      borderColor: "#58585E",
      borderRadius: 3,
    },
    "& label": {
      color: "red",
    },
    "&:hover fieldset": {
      borderColor: "#58585E",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#585562",
    },
  },
};

export const button={
    "&.MuiButton-root":{
        backgroundColor:"#FFC107",
        width:"30%",
        fontFamily: "Poppins",
        fontWeight: 500,
        color: "white",
        fontSize: "15px",
    }
}
