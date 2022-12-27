import {
  Grid,
  CssBaseline,
  Paper,
  Box,
  Avatar,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Link,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material/";
import { Visibility, VisibilityOff } from "@mui/icons-material/";
import * as React from "react";
import "./App.css";
import SignUp from "./signup";

function App() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Grid
      className="main_grid"
      container
      component="main"
      sx={{ height: "100vh" }}
    >
      <CssBaseline />

      <Grid
        className="img_grid"
        item
        xs={0}
        sm={4}
        md={7}
        sx={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: `url("./images/1.jpg")`,
        }}
      >
        {/* <img className="img" src="./images/1.jpg" alt="Image" /> */}
      </Grid>

      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            sx={{ m: "1", bgcolor: "secondory.main" }}
            src="/broken-image.jpg"
          />
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form">
            <TextField
              required
              margin="normal"
              id="email-address"
              label="Email"
              type="email"
              name="email"
              autoComplete="email"
              fullWidth
            />
            {/* <TextField
              required
              margin="normal"
              id="password"
              label="Password"
              type="password"
              name="password"
              autoComplete="Current Password"
              fullWidth
            /> */}
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign in
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forget Password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  Don't have an account? Sign up?
                  
                </Link>
              </Grid>
            </Grid>
            <Typography
            sx={{
              mt: 3,
              textAlign: 'center',
              
            }}
            >Copyright © <Link color="inherit" href="#">Your Website</Link> 2022.</Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default App;
