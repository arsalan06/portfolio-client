export const mainContainer = {
  width: "95%",
  // display: "flex",
  // justifyContent: "space-between",
  // alignItems: "center",
  marginTop: "30px",
};
export const skillCardContainer = {
  "&.MuiCard-root": {
    backgroundColor: "#242430",
    padding: "20px 20px",
  },
};
export const orderText = {
  "&.MuiTypography-root": {
    display: "flex",
    gap: 0,
    alignItems: "center",
    cursor: "pointer",
    transition: "gap 1s ease",
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
