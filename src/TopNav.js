import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
  NavBar
} from "./StyledComponents";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <NavBar sx={{ padding: "0 10%" }} position="static">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0 !important"
          }}
        >
          <Box>
            <Search sx={{ ml: "0 !important" }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                sx={{ pl: "50px" }}
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Link to="/jobs" style={{ color: "white", textDecoration: "none" }}>
              <Button color="inherit">Find a Job</Button>
            </Link>
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              <Button color="inherit">Login</Button>
            </Link>
          </Box>
        </Toolbar>
      </NavBar>
    </Box>
  );
}
