import React from "react";
import { Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";

const GoogleLoginButton = ({ onGoogleLogin }) => {
  return (
    <Button
      onClick={onGoogleLogin}
      variant="outlined"
      startIcon={<GoogleIcon />}
      fullWidth
      sx={{ textTransform: "none" }}
    >
      Iniciar sesión con Google
    </Button>
  );
};

export default GoogleLoginButton;
