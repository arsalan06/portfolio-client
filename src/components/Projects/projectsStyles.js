export const mainContainer = {
  width: "95%",

  // display: "flex",
  // justifyContent: "space-between",
  // alignItems: "center",
  marginTop: "30px",
};
export const projectCardContainer = {
  "&.MuiBox-root": {
    minHeight: "250px",
    //   backgroundColor: "#20202A",
    //   padding: "20px 20px",
    position: "relative",
    "&>*:nth-child(2)": { 
        backgroundColor: "pink", marginBotton: 20 },
    // "&.MuiPaper-root": {
    //   backgroundColor: "tomato",
    //   "&:nth-child(2)": { backgroundColor: "pink" },
    // },
  },
};

export const readMoreBox = {
  position: "absolute",
  bottom: 0,
  //   backgroundColor: "#242430",
  padding: "20px 20px",
  width: "100%",
};

export const orderText = {
  "&.MuiTypography-root": {
    display: "flex",
    gap: 0,
    alignItems: "center",
    cursor: "pointer",
    transition: "gap 1s ease",
    marginTop: "10px",
    "&.MuiTypography-root:hover": {
      gap: 1,
    },
  },
};
export const marginTopClass = {
  "&.MuiTypography-root": {
    marginTop: "10px",
  },
};
