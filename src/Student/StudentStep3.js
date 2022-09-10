import React, { useContext } from "react";
import { Box, Link, Paper, Typography } from "@mui/material";
import {} from "@mui/icons-material";
import { green } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import { Context as StudentContext } from "./StudentContext";

const StudentStep3 = () => {
  const navigate = useNavigate();

  const { states } = useContext(StudentContext);

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link
          underline="none"
          sx={{
            fontWeight: 500,
            fontSize: "0.8rem",
            pl: 1,
            color: green[700],
            cursor: "pointer",
          }}
          onClick={() => navigate("/student/step2")}
        >
          {"<  Go Back"}
        </Link>
        <Typography
          variant="h6"
          sx={{
            ml: "auto",
            color: green[700],
            fontWeight: 700,
            p: 1,
            bgcolor: "white",
            lineHeight: 0.8,
          }}
        >
          3. Review
        </Typography>
      </Box>
      <Paper elevation={8} sx={{ p: 1, mb: 1 }}>
        <Typography variant="h6" sx={{ p: 0.5, bgcolor: green[200] }}>
          ID Picture
        </Typography>
      </Paper>
    </Box>
  );
};

export default StudentStep3;
