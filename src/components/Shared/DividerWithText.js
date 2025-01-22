import React from "react";
import { Divider, Typography } from "@mui/material";

const DividerWithText = ({ text }) => {
  return (
    <Divider>
      <Typography variant="body2" color="textSecondary">
        {text}
      </Typography>
    </Divider>
  );
};

export default DividerWithText;
