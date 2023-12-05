import { createTheme } from "@mui/material";

export const themeTemplate = createTheme({
  typography: {
    main_heading: {
      fontFamily: "Poppins",
      fontWeight: 600,
      color: "white",
      marginTop: "5px",
      fontSize: "20px",
      textTransform:"capitalize"
    },
    section_heading: {
      fontFamily: "Poppins",
      fontWeight: 500,
      color: "white",
      marginTop: "5px",
      fontSize: "17px",
    },
    section_subheading: {
      fontFamily: "Poppins",
      fontWeight: 500,
      color: "white",
      fontSize: "14px",
      // marginTop: "5px",
    },
    page_title: {
      fontFamily: "Poppins",
      fontWeight: 500,
      color: "white",
      marginTop: "5px",
    },
    body_text: {
      fontFamily: "Poppins",
      fontSize: "14px",
      color: "#8C8C8E",
      textAlign: "left",
      textAlign:"justify"

      // marginTop: "5px",
    },
    white_text: {
      fontFamily: "Poppins",
      fontWeight: 400,
      color: "white",
    },
    order_text: {
      textTransform: "uppercase",
      fontFamily: "Poppins",
      fontWeight: 600,
      color: "#FFC107",
      marginTop: "5px",
      fontSize: "14px",
    },
  },
});
