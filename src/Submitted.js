import { Box, Container, Stack, Typography } from "@mui/material";
import { green } from "@mui/material/colors";
import React from "react";

const Submitted = () => {
  return (
    <Container maxWidth="sm" sx={{ bgcolor: green[50] }}>
      <Stack>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            pt: { xs: 1, md: 2 },
          }}
        >
          <Box sx={{ maxWidth: { xs: 50, md: 80 } }}>
            <img
              src="logo.png"
              style={{ width: "100%", height: "auto" }}
              alt="logo"
            />
          </Box>
          <Typography
            variant="h5"
            sx={{
              textAlign: "right",
              flex: 1,
              lineHeight: 1,
              fontWeight: 700,
            }}
          >
            {` CHMSU IDentification Card & Security Access Activation Form`}
          </Typography>
        </Box>
        <Box sx={{ my: 2 }}>
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",

              fontWeight: 600,
            }}
          >
            Form Submitted
          </Typography>
          <Typography variant="h4" textAlign="center">
            Thank you!
          </Typography>
        </Box>
      </Stack>
    </Container>
  );
};

export default Submitted;
