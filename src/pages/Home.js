import React from "react";
import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Button, Typography, Box, Stack } from "@mui/material";

export const Home = () => {
  const navigate = useNavigate();

  // Función para cerrar sesión
  const handleLogout = async () => {
    try {
      await signOut(auth); // Cerrar sesión en Firebase
      console.log("Sesión cerrada.");
      navigate("/"); // Redirigir al login
    } catch (error) {
      console.error("Error al cerrar sesión:", error.message);
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 700,
        width: "100%",
        mx: "auto",
        mt: 1,
        p: 3,
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: "#fff",
        textAlign: "center",
      }}
    >
      {/* Encabezado de bienvenida */}
      <Typography variant="h4" gutterBottom>
        Bienvenido a Home
      </Typography>

      {/* Mostrar el nombre del usuario */}
      <Typography variant="h6" gutterBottom>
        Hola, <strong>{auth.currentUser?.displayName || "Usuario"}!</strong>
      </Typography>

      {/* Botón para cerrar sesión */}
      <Stack spacing={2} mt={3}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleLogout}
          sx={{
            textTransform: "none",
            padding: "10px 20px",
            fontSize: "16px",
            bgcolor: "#1976d2",
            "&:hover": { bgcolor: "#1565c0" },
          }}
        >
          Cerrar Sesión
        </Button>
      </Stack>
    </Box>
  );
};
