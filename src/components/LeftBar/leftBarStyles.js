export const mainContainer = {
  position: "absolute",
  top: 63,
  height: "85vh",
  backgroundColor: "#20202A",
  position: "fixed",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  // justifyContent:"center"
};
export const innerContainer = {
  width: "80%",
  marginTop: "10px",
  overflowY: "scroll",
  "&::-webkit-scrollbar": {
    display: "none",
  },
};
export const header = {
  backgroundColor: "#242430",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  paddingTop: "30px",
  paddingBottom: "10px",
};

export const stackBox = {
  width: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
};

export const labelText = {
  "&.MuiTypography-root": {
    fontSize: "14px",
  },
};

export const DividerLine = {
  "&.MuiDivider-root": {
    backgroundColor: "#8C8C8E",
    marginTop: "20px",
    marginBottom: "20px",
  },
};
export const languageBarBox = {
  width: "80px",
  height: "80px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

export const footer = {
  backgroundColor: "#242430",
  width: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: 2,
  padding: "15px 0px",
};

export const socialIcons = {
  color: "#8C8C8E",
  cursor: "pointer",
  "&:hover": {
    color: "white",
  },
};
