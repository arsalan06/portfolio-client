import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";

export const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));
export const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 5,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#191923",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#ffc107" : "#191923",
  },
}));
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
