import { Avatar, Box, Container, CssBaseline } from "@mui/material";

function SignUp() {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          mt: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar
          sx={{ m: "1", bgcolor: "secondory.main" }}
          src="/broken-image.jpg"
        ></Avatar>
      </Box>
    </Container>
  );
}
export default SignUp;
