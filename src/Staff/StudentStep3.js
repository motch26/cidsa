import React, { useContext, useState } from "react";
import {
  Alert,
  Box,
  Button,
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

  const { staff } = useContext(Context);
  const { states } = staff;

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
      states.staffSigURL,
      states.staffSID + ".jpg",
      "image/jpeg"
    );
    states.staffStep1Data.append("picture", _picture);
    states.staffStep1Data.append("signature", _sig);
    axios
      .post("https://cidsa.chmsu.edu.ph/api/submit.php", states.step1Data, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(({ data }) => {
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
          onClick={() => navigate("/staff/step2")}
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
                  {states.staffCategory}
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    bgcolor: green[500],
                    fontWeight: 700,
                    color: "white",
                  }}
                >
                  STUDENT
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
                src={states.pictureUrl}
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
          <Box sx={{ p: 1, display: "flex", flexDirection: "column" }}>
            <Typography
              variant="body1"
              sx={{ fontWeight: 700, color: green[700] }}
            >
              In case of emergency, please contact:
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontWeight: 700, textTransform: "uppercase" }}
            >{`${states.cFirstName} ${states.cMI}. ${states.cLastName}`}</Typography>
            <Typography variant="body2">{`${states.cAddress}, ${states.cCity}, ${states.cZip}`}</Typography>
            <Typography variant="body2">{states.cProvince}</Typography>
            <Typography
              variant="body2"
              sx={{ fontWeight: 700 }}
            >{`+63${states.cContact}`}</Typography>
            <Box sx={{ mt: 1, p: 1, bgcolor: green[500] }}></Box>
          </Box>
        </Box>
      </Paper>
      <Button
        type="button"
        disabled={submitted}
        variant="contained"
        sx={{ bgcolor: green[500], my: 2, mx: "auto", display: "block" }}
        onClick={submit}
      >
        Submit
      </Button>
    </Box>
  );
};

export default StaffStep3;
