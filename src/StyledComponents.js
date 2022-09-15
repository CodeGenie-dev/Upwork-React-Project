import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { AppBar, Typography } from "@mui/material";

// Colors
export const PRIMARY_GREEN = "#39B54A";
export const SECONDARY_NAVY = "#2B5468";

// Buttons
export const PrimaryButton = styled(Button)(() => ({
  background: PRIMARY_GREEN,
  borderRadius: "20px",
  textTransform: "none",
  width: "80%"
}));

export const SecondaryButton = styled(Button)(() => ({
  background: SECONDARY_NAVY
}));

export const ThirdButton = styled(Button)(() => ({
  background: "white",
  color: PRIMARY_GREEN,
  borderRadius: "20px",
  textTransform: "none",
  width: "80%",
  border: "1px solid #39B54A"
}));

// Login Styles
export const LoginBox = styled(Box)(() => ({
  width: "400px",
  height: "auto",
  backgroundColor: "#ffffff",
  padding: "50px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
}));

// JobBoard Styles
export const NavBar = styled(AppBar)(() => ({
  backgroundColor: SECONDARY_NAVY
}));

export const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#ffffff",
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto"
  }
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "gray"
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "gray",
  width: "400px"
  // "& .MuiInputBase-input": {
  // padding: theme.spacing(1, 1, 1, 0),
  // vertical padding + font size from searchIcon
  // paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  // transition: theme.transitions.create("width"),
  // width: "100%",
  // [theme.breakpoints.up("sm")]: {
  //   width: "12ch",
  //   "&:focus": {
  //     width: "20ch"
  //   }
  // }
  // }
}));

export const CategoryOptions = styled(Typography)(() => ({
  marginBottom: "10px"
}));
