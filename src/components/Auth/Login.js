import React, { useState } from "react";
import { auth } from "../../firebase/config";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Box, Stack } from "@mui/material";
import GoogleLoginButton from "./GoogleLoginButton";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import AlertMessage from "../Shared/AlertMessage";
import DividerWithText from "../Shared/DividerWithText";
// Importamos la imagen del logo
import logo from "../../assets/images/logo.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Usuario autenticado con Google:", result.user);
      navigate("/home");
    } catch (error) {
      console.error("Error al autenticar con Google:", error.message);
    }
  };

  const handleLoginWithEmail = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("Usuario autenticado con email:", userCredential.user);
      navigate("/home");
    } catch (error) {
      setErrorMessage("Revisa los datos ingresados");
      hideErrorMessage();
    }
  };

  const handleRegister = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const name = email.split("@")[0];
      await updateProfile(user, { displayName: name });
      console.log("Usuario registrado:", user);
      navigate("/home");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setErrorMessage("El correo ya está en uso. Probá iniciar sesión.");
      } else {
        setErrorMessage("Revisa los datos ingresados");
      }
      hideErrorMessage();
    }
  };

  const hideErrorMessage = () => {
    setTimeout(() => {
      setErrorMessage("");
    }, 2000);
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
      }}
    >
      {/* Imagen del logo */}
      <Box
        component="img"
        src={logo}
        alt="Logo"
        sx={{
          display: "block",
          mx: "auto",
          mb: 3,
          width: "150px", // Ancho deseado
          height: "auto", // Mantener proporción
        }}
      />
      <Stack spacing={2}>
        <GoogleLoginButton onGoogleLogin={handleGoogleLogin} />
        <DividerWithText text="O" />
        <LoginForm
          email={email}
          password={password}
          onEmailChange={(e) => setEmail(e.target.value)}
          onPasswordChange={(e) => setPassword(e.target.value)}
          onLogin={handleLoginWithEmail}
        />
        <RegisterForm onRegister={handleRegister} />
        <AlertMessage message={errorMessage} />
      </Stack>
    </Box>
  );
};

export default Login;
