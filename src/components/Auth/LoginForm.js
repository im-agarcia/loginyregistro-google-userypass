import React from "react";
import { Button, TextField, Stack } from "@mui/material";

const LoginForm = ({ email, password, onEmailChange, onPasswordChange, onLogin }) => {
  return (
    <Stack spacing={2}>
      <TextField
        label="Correo"
        type="email"
        variant="outlined"
        value={email}
        onChange={onEmailChange}
        fullWidth
      />
      <TextField
        label="Contraseña"
        type="password"
        variant="outlined"
        value={password}
        onChange={onPasswordChange}
        fullWidth
      />
      <Button
        onClick={onLogin}
        variant="contained"
        color="primary"
        fullWidth
        sx={{ textTransform: "none" }}
      >
        Iniciar sesión
      </Button>
    </Stack>
  );
};

export default LoginForm;
