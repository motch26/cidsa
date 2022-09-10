import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Input,
  Link,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { green } from "@mui/material/colors";
import { Add, ChangeCircle, Create } from "@mui/icons-material";
import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context as StudentContext } from "./StudentContext";
import SignatureCanvas from "react-signature-canvas";
const StudentStep2 = () => {
  const { states, actions } = useContext(StudentContext);
  let sigPad = useRef();

  const [pictureUpdated, setPictureUpdated] = useState(false);
  const [sigDialogOpen, setSigDialogOpen] = useState(false);

  const review = (e) => {
    e.preventDefault();
  };
  const navigate = useNavigate();

  const getBase64 = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => actions.setPictureUrl(reader.result);
    reader.onerror = (err) => err;
  };

  return (
    <Box>
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
          onClick={() => navigate("/student/step1")}
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
          2. Attach
        </Typography>
      </Box>
      <Box component="form" onSubmit={review}>
        <Paper elevation={8} sx={{ p: 1, mb: 1 }}>
          <Typography variant="h6" sx={{ p: 0.5, bgcolor: green[200] }}>
            ID Picture
          </Typography>
          <Grid container sx={{ p: 2 }} spacing={2}>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              {pictureUpdated ? (
                <Box sx={{ width: 200 }}>
                  <Box
                    sx={{
                      width: "100%",
                      height: 200,
                      border: "3px solid",
                      borderColor: green[500],
                      mb: 1,
                    }}
                  >
                    <img
                      src={states.pictureUrl}
                      style={{ width: "100%", height: "100%" }}
                      alt="idPicture"
                    />
                  </Box>
                  <Button
                    variant="contained"
                    fullWidth
                    size="small"
                    sx={{ bgcolor: green[500] }}
                    onClick={() => setPictureUpdated(false)}
                  >
                    Change Picture
                  </Button>
                </Box>
              ) : (
                <Box sx={{ width: 200 }}>
                  <label htmlFor="upload-photo">
                    <Input
                      sx={{ display: "none" }}
                      id="upload-photo"
                      name="upload-photo"
                      type="file"
                      inputProps={{ accept: "image/jpeg" }}
                      onChange={async (e) => {
                        getBase64(e.target.files[0]);
                        setPictureUpdated(true);
                      }}
                    />
                    <Box
                      sx={{
                        width: "100%",
                        height: 200,
                        border: "3px solid",
                        borderColor: green[500],
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        bgcolor: "white",
                      }}
                    >
                      <Box
                        sx={{
                          borderRadius: "50%",
                          width: 50,
                          height: 50,
                          bgcolor: green[500],
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Add />
                      </Box>
                    </Box>
                  </label>
                  <Typography sx={{ textAlign: "center", mt: 1 }}>
                    Upload Photo
                  </Typography>
                </Box>
              )}
            </Grid>
            <Grid item xs={12} md={7}>
              <Typography variant="body1" sx={{ fontWeight: 600 }}>
                ID Picture Guidelines:
              </Typography>
              <Stack>
                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  <Avatar
                    sx={{
                      height: 20,
                      width: 20,
                      mr: 2,
                      fontSize: "0.8rem",
                      bgcolor: green[500],
                    }}
                  >
                    1
                  </Avatar>
                  <Typography variant="caption" sx={{ lineHeight: 1.2 }}>
                    Your frontal pose looking directly at the camera lens and
                    showing your full face must be used. Both ears and shoulders
                    must be visible.
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  <Avatar
                    sx={{
                      height: 20,
                      width: 20,
                      mr: 2,
                      fontSize: "0.8rem",
                      bgcolor: green[500],
                    }}
                  >
                    2
                  </Avatar>
                  <Typography variant="caption" sx={{ lineHeight: 1.2 }}>
                    Your expression should be neutral with both eyes open and
                    mouth closed.
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  <Avatar
                    sx={{
                      height: 20,
                      width: 20,
                      mr: 2,
                      fontSize: "0.8rem",
                      bgcolor: green[500],
                    }}
                  >
                    3
                  </Avatar>
                  <Typography variant="caption" sx={{ lineHeight: 1.2 }}>
                    Accessories should be removed prior to photo capturing.
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  <Avatar
                    sx={{
                      height: 20,
                      width: 20,
                      mr: 2,
                      fontSize: "0.8rem",
                      bgcolor: green[500],
                    }}
                  >
                    4
                  </Avatar>
                  <Typography variant="caption" sx={{ lineHeight: 1.2 }}>
                    Taken in front of a plain white or off-white background
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  <Avatar
                    sx={{
                      height: 20,
                      width: 20,
                      mr: 2,
                      fontSize: "0.8rem",
                      bgcolor: green[500],
                    }}
                  >
                    5
                  </Avatar>
                  <Typography variant="caption" sx={{ lineHeight: 1.2 }}>
                    Wear a decent attire and has a proper hair grooming.
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  <Avatar
                    sx={{
                      height: 20,
                      width: 20,
                      mr: 2,
                      fontSize: "0.8rem",
                      bgcolor: green[500],
                    }}
                  >
                    6
                  </Avatar>
                  <Typography variant="caption" sx={{ lineHeight: 1.2 }}>
                    File Format: The image must be in JPEG/JPG ﬁle format and in
                    1 by 1 dimension.
                  </Typography>
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={12} md={5}>
              <Typography sx={{ textAlign: "center", fontWeight: 600, mb: 1 }}>
                Sample Picture
              </Typography>
              <Box sx={{ mx: "auto", width: "fit-content" }}>
                <img src="sample.jpg" width={150} height={150} alt="sample" />
              </Box>
            </Grid>
          </Grid>
        </Paper>
        <Paper elevation={8} sx={{ p: 1, mb: 1 }}>
          <Typography variant="h6" sx={{ p: 0.5, bgcolor: green[200] }}>
            E-Signature
          </Typography>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              p: 2,
            }}
          >
            <Box>
              {states.sigURL ? (
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <img
                    alt="sig"
                    src={states.sigURL}
                    style={{ width: "100%", height: "auto", marginBottom: 10 }}
                  />
                  <Button
                    size="small"
                    sx={{
                      width: "fit-content",
                      mx: "auto",
                      bgcolor: green[500],
                    }}
                    variant="contained"
                    onClick={() => setSigDialogOpen(true)}
                    startIcon={<ChangeCircle />}
                  >
                    Change Signature
                  </Button>
                </Box>
              ) : (
                <Button
                  variant="contained"
                  sx={{ bgcolor: green[500] }}
                  size="small"
                  startIcon={<Create />}
                  onClick={() => setSigDialogOpen(true)}
                >
                  Add E-Signature
                </Button>
              )}
            </Box>
          </Box>
        </Paper>
        <Button
          type="submit"
          variant="contained"
          sx={{ bgcolor: green[500], my: 2, ml: "auto", display: "block" }}
          onClick={() => navigate("/student/review")}
        >
          Next
        </Button>
        <Dialog
          onClose={() => setSigDialogOpen(false)}
          open={sigDialogOpen}
          maxWidth="sm"
          fullWidth
        >
          <DialogTitle sx={{ bgcolor: green[500], color: "white" }}>
            Add E-Signature
          </DialogTitle>
          <DialogContent>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                pt: 2,
              }}
            >
              <Typography variant="caption">Sign on the canvas</Typography>
              <SignatureCanvas
                backgroundColor="rgba(255,255,255,0)"
                minDistance={1}
                dotSize={5}
                ref={(ref) => {
                  sigPad = ref;
                }}
                canvasProps={{
                  style: {
                    width: "100%",
                    height: 120,
                    marginTop: 5,
                    border: "2px solid",
                    borderColor: green[500],
                  },
                }}
              />
              <ButtonGroup sx={{ mt: 1, ml: "auto" }}>
                <Button
                  sx={{ color: green[500] }}
                  onClick={() => sigPad.clear()}
                  variant="text"
                >
                  Clear
                </Button>
                <Button
                  onClick={() => {
                    actions.setSigURL(
                      sigPad.getCanvas().toDataURL("image/png")
                    );
                    sigPad.clear();
                    setSigDialogOpen(false);
                  }}
                  sx={{ bgcolor: green[500] }}
                  variant="contained"
                >
                  Submit
                </Button>
              </ButtonGroup>
            </Box>
          </DialogContent>
        </Dialog>
      </Box>
    </Box>
  );
};

export default StudentStep2;
