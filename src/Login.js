import * as React from "react";
import "./styles.css";
import { PrimaryButton, LoginBox } from "./StyledComponents";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import PersonIcon from "@mui/icons-material/Person";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import { FormGroup } from "@mui/material";

export default function Login({ setLoggedIn }) {
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="Login">
      <LoginBox>
        <Typography
          sx={{ fontSize: "23px", fontWeight: 600, color: "gray", pb: "30px" }}
          variant="h1"
        >
          Log in
        </Typography>
        <FormGroup
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center"
          }}
        >
          <TextField
            sx={{
              border: "1px solid #39B54A",
              borderRadius: "5px",
              mb: "20px",
              width: "80%"
            }}
            placeholder="Username or Email"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              )
            }}
          />
          <OutlinedInput
            sx={{
              border: "1px solid #39B54A",
              borderRadius: "5px",
              width: "80%"
            }}
            id="outlined-adornment-password"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            placeholder="Password"
          />
          <PrimaryButton
            sx={{ mt: "30px" }}
            onClick={() => setLoggedIn(true)}
            variant="contained"
          >
            Continue with Email
          </PrimaryButton>
        </FormGroup>
      </LoginBox>
    </div>
  );
}
