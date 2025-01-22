import React from "react";
import { Alert } from "@mui/material";

const AlertMessage = ({ message, severity = "error" }) => {
  return message ? (
    <Alert severity={severity} sx={{ mt: 2 }}>
      {message}
    </Alert>
  ) : null;
};

export default AlertMessage;
