import React, { useContext, useState } from "react";
import {
  Alert,
  Box,
  Button,
  Divider,
  Grid,
  Link,
  Paper,
  Typography,
} from "@mui/material";
import {} from "@mui/icons-material";
import { green } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import { Context } from "../Context";
import axios from "axios";
const StaffStep3 = () => {
  const navigate = useNavigate();

  const [submitted, setSubmitted] = useState(false);

  const { faculty } = useContext(Context);
  const { states } = faculty;

  const urltoFile = (url, filename, mimeType) => {
    return fetch(url)
      .then(function (res) {
        return res.arrayBuffer();
      })
      .then(function (buf) {
        return new File([buf], filename, { type: mimeType });
      });
  };

  const submit = async () => {
    setSubmitted(true);
    const _picture = await urltoFile(
      states.staffPictureUrl,
      states.staffID + ".jpg",
      "image/jpeg"
    );
    const _sig = await urltoFile(
      states.staffSigUrl,
      states.staffID + ".png",
      "image/png"
    );
    states.staffStep1Data.append("picture", _picture);
    states.staffStep1Data.append("signature", _sig);
    axios
      .post(
        "https://cidsa.chmsu.edu.ph/api/facultySubmit.php",
        states.staffStep1Data,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      )
      .then(({ data }) => {
        console.log(data);
        if (data) navigate("/submitted");
      })
      .catch((err) => console.log(err));
  };

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
          onClick={() => navigate("/faculty/step2")}
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
          Front View
        </Typography>
        <Box sx={{ mt: 1, p: 1 }}>
          <Alert>
            This is for reference only and not the actual ID layout.
          </Alert>

          <Grid container sx={{ alignContent: "stretch", mt: 2 }}>
            <Grid
              item
              xs={12}
              md={7}
              order={{ xs: 2, md: 1 }}
              sx={{ display: "flex" }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignSelf: "flex-end",
                  textAlign: "center",
                }}
              >
                <img
                  src={states.staffSigUrl}
                  style={{ width: "100%", height: "auto" }}
                  alt="signature"
                />
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    textTransform: "uppercase",
                  }}
                >{`${states.staffFirstName} ${states.staffMI}. ${states.staffLastName}`}</Typography>
                <Typography
                  variant="body1"
                  sx={{ lineHeight: 1, fontWeight: 500 }}
                >
                  {states.staffOffice}
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    bgcolor: green[500],
                    fontWeight: 700,
                    color: "white",
                    lineHeight: "1.4rem",
                  }}
                >
                  FACULTY
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={5}
              order={{ xs: 1, md: 2 }}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                alt="idPicture"
                width={150}
                height={150}
                src={states.staffPictureUrl}
                style={{
                  border: "3px solid",
                  borderColor: green[500],
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </Paper>
      <Paper elevation={8} sx={{ p: 1, mb: 1 }}>
        <Typography variant="h6" sx={{ p: 0.5, bgcolor: green[200] }}>
          Back View
        </Typography>
        <Box sx={{ mt: 1, p: 1 }}>
          <Alert>
            This is for reference only and not the actual ID layout.
          </Alert>
          <Grid container spacing={1}>
            <Grid item xs={12} md={7}>
              <Box sx={{ p: 1, display: "flex", flexDirection: "column" }}>
                <Typography sx={{ fontSize: 12 }}>
                  <strong>Address:</strong>
                </Typography>
                <Typography sx={{ fontSize: 12 }}>
                  {`${states.staffAddress}, ${states.staffCity}, ${states.staffProvince}`}
                </Typography>
                <Typography sx={{ fontSize: 12 }}>
                  <strong>Contact Number:</strong>
                </Typography>
                <Typography sx={{ fontSize: 12 }}>
                  {`+63${states.staffContact}`}
                </Typography>
                <Divider />
                <Typography
                  variant="body1"
                  sx={{ fontWeight: 700, color: green[700] }}
                >
                  In case of emergency, please contact:
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontWeight: 700, textTransform: "uppercase" }}
                >{`${states.staffCFullName}`}</Typography>
                <Typography
                  variant="body2"
                  sx={{ fontWeight: 700 }}
                >{`+63${states.staffCContact}`}</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={5}>
              <Box sx={{ p: 1, display: "flex", flexDirection: "column" }}>
                <Grid container spacing={1}>
                  <Grid item xs={6}>
                    <Typography sx={{ fontSize: 12 }}>
                      <strong>Date of Birth:</strong>
                    </Typography>
                    <Typography sx={{ fontSize: 12 }}>
                      {states.staffDOB}
                    </Typography>
                  </Grid>

                  <Grid item xs={6}>
                    <Typography sx={{ fontSize: 12 }}>
                      <strong>Blood Type:</strong>
                    </Typography>
                    <Typography sx={{ fontSize: 12 }}>
                      {states.staffBloodType}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography sx={{ fontSize: 12 }}>
                      <strong>TIN:</strong>
                    </Typography>
                    <Typography sx={{ fontSize: 12 }}>
                      {states.staffTIN}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography sx={{ fontSize: 12 }}>
                      <strong>PhilHealth:</strong>
                    </Typography>
                    <Typography sx={{ fontSize: 12 }}>
                      {states.staffPhilHealth}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography sx={{ fontSize: 12 }}>
                      <strong>PAGIBIG:</strong>
                    </Typography>
                    <Typography sx={{ fontSize: 12 }}>
                      {states.staffPagibig}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography sx={{ fontSize: 12 }}>
                      <strong>GSIS:</strong>
                    </Typography>
                    <Typography sx={{ fontSize: 12 }}>
                      {states.staffGSIS}
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
          <Box sx={{ mt: 1, p: 1, bgcolor: green[500] }}></Box>
        </Box>
      </Paper>
      <Button
        type="button"
        disabled={submitted}
        variant="contained"
        sx={{ bgcolor: green[500], my: 2, mx: "auto", display: "block" }}
        onClick={submit}
      >
        {submitted ? "Uploading... Dont' Close" : "Submit"}
      </Button>
    </Box>
  );
};

export default StaffStep3;
