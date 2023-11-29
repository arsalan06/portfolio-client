export const mainContainer = {
  width: "95%",
  display: "grid",
  gridTemplateColumns: {
    xs: "repeat(2, 1fr)",
    sm: "repeat(2, 1fr)",
    md: "repeat(4, 1fr)",
    lg: "repeat(4, 1fr)",
  },
  marginTop: "30px",
};

export const flexDisplay = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const valueText = {
  "&.MuiTypography-root": {
    fontFamily: "Poppins",
    fontWeight: 500,
    color: "white",
    fontSize: "14px",
  },
};
export const numberText = {
  "&.MuiTypography-root": {
    fontFamily: "Poppins",
    fontWeight: 600,
    color: "#ffc107",
    fontSize: {xs:"16px", sm:"16px",md:"22px",lg:"22px"},
    marginRight: {xs:"2px", sm:"2px",md:"15px",lg:"15px"},
  },
};
