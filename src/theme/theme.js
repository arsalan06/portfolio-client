import { createTheme } from "@mui/material";

export const theme = createTheme({
    typography: {
      page_title: {
        fontFamily: "Poppins",
        fontWeight: 500,
        color: "white",
        marginTop:"5px"
      },
      body_text: {
        fontFamily: "Poppins",
        fontSize: "14px",
        color: "#8C8C8E",
        marginTop:"5px"

      },
      p1_italic: {
        lineHeight: 2.6,
        fontSize: 26,
        fontStyle: "italic",
        fontWeight: 800,
      },
      p1_bold: {
        lineHeight: 2.6,
        fontSize: 22,
        fontStyle: "bold",
        fontWeight: 700,
      },
      p1_error: {
        fontStyle: "bold",
        fontWeight: 300,
        color: "red",
      },
      p2_highlighted: {
        fontStyle: "italic",
        fontWeight: 500,
        backgroundColor: "yellow",
      },
    },
  });