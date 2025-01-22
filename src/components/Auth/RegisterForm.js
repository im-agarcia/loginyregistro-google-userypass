import React from "react";
import { Button } from "@mui/material";

const RegisterForm = ({ onRegister }) => {
  return (
    <Button
      onClick={onRegister}
      variant="outlined"
      color="secondary"
      fullWidth
      sx={{ textTransform: "none" }}
    >
      Registrarse
    </Button>
  );
};

export default RegisterForm;
