import React from "react";
import { Box, Button, Paper, Typography } from "@mui/material";
import { green } from "@mui/material/colors";
import { ArrowForward } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
const Policy = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ mt: 5 }}>
      <Box sx={{ width: "100%", display: "flex" }}>
        <Typography
          variant="h6"
          sx={{
            ml: "auto",
            color: "white",
            fontWeight: 700,
            p: 1,
            bgcolor: green[700],
            lineHeight: 0.8,
          }}
        >
          DATA PRIVACY STATEMENT
        </Typography>
      </Box>
      <Paper
        sx={{ p: 2, display: "flex", flexDirection: "column" }}
        elevation={10}
      >
        <Typography variant="h6" sx={{ fontWeight: 400, mb: 1 }}>
          In compliance with Republic Act No. 10173, otherwise known as the Data
          Privacy Act of 2012. I hereby acknowledge that my personal information
          provided is solely used for Carlos Hilado Memorial State University.
          That by virtue of the said law, I freely give my consent and hereby
          agree to the collections, access and processing of my sensitive
          personal and privileged information - as defined under RA 10173 - DPC
          Act 2012 for any legal and all legitimate interests of CHMSU as Higher
          Educational Institution.
        </Typography>
        <Button
          variant="contained"
          sx={{ bgcolor: green[700], width: "fit-content", ml: "auto" }}
          endIcon={<ArrowForward />}
          onClick={() => navigate("step1")}
        >
          {"Agree & Continue"}
        </Button>
      </Paper>
    </Box>
  );
};

export default Policy;
