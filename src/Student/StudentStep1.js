import {
  Box,
  Button,
  FormControl,
  Grid,
  InputAdornment,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { green } from "@mui/material/colors";
import React, { useContext, useState } from "react";
import programs from "./programs.json";
import { useNavigate } from "react-router-dom";
import { Context as StudentContext } from "./StudentContext";
function Student() {
  const navigate = useNavigate();
  const { states, actions } = useContext(StudentContext);
  const campuses = programs.campuses;
  const [collegesArr, setCollegesArr] = useState([]);
  const [programsArr, setProgramsArr] = useState([]);
  const [majorsArr, setMajorsArr] = useState([]);

  // const [dialogOpen, setDialogOpen] = useState(false);
  // const [submitted, setSubmitted] = useState(false);

  // const [anchor, setAnchor] = useState(null);

  const toTitleCase = (str) => {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };
  const campusChange = (e) => {
    actions.setCollege("");
    const _campus = e.target.value;

    const campusObject = campuses.find((c) => Object.keys(c)[0] === _campus);
    actions.setCampus(_campus);
    setCollegesArr(campusObject[_campus]["colleges"]);
  };

  const collegeChange = (e) => {
    actions.setProgram("");
    const _college = e.target.value;
    const collegeObject = collegesArr.find(
      (c) => Object.keys(c)[0] === _college
    );

    const arr = collegeObject[_college]["programs"];
    setProgramsArr(arr);
    actions.setCollege(_college);
  };

  const programChange = (e) => {
    actions.setMajor("");
    const _program = e.target.value;
    const programObject = programsArr.find(
      (p) => Object.keys(p)[0] === _program
    );
    const arr = programObject[_program]["majors"];
    setMajorsArr(arr);
    actions.setProgram(_program);
  };

  const majorChange = (e) => {
    const _major = e.target.value;
    actions.setMajor(_major);
  };

  const review = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    actions.setStep1Data(formData);
  };

  // const submit = () => {
  //   setSubmitted(true);
  //   axios
  //     .post("https://cidsa.chmsu.edu.ph/api/submit.php", finalFormData)
  //     .then(({ data }) => {
  //       if (data) navigate("/submitted");
  //     })
  //     .catch((err) => console.log(err));
  // };
  return (
    <Box>
      <Box sx={{ display: "flex", width: "100%" }}>
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
          1. Fill Up
        </Typography>
      </Box>
      <Box component="form" onSubmit={review}>
        <Paper elevation={8} sx={{ p: 1, mb: 1 }}>
          <Typography variant="h6" sx={{ p: 0.5, bgcolor: green[200] }}>
            PERSONAL DATA
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                I.D. No.:
              </Typography>
              <TextField
                onChange={(e) => actions.setSID(e.target.value)}
                name="sID"
                size="small"
                fullWidth
                required
                value={states.sID}
                helperText="Kindly check your enrolment form for your ID number to avoid data duplication."
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                Last Name:
              </Typography>
              <TextField
                size="small"
                fullWidth
                required
                value={states.sLastName}
                onChange={(e) =>
                  actions.setSLastName(toTitleCase(e.target.value))
                }
                name="sLastName"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                First Name:
              </Typography>
              <TextField
                size="small"
                fullWidth
                required
                value={states.sFirstName}
                onChange={(e) =>
                  actions.setSFirstName(toTitleCase(e.target.value))
                }
                name="sFirstName"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                Middle Initial:
              </Typography>
              <TextField
                size="small"
                fullWidth
                inputProps={{ maxLength: 3 }}
                helperText="Leave blank if not applicable."
                value={states.sMI}
                onChange={(e) =>
                  actions.setSMI(e.target.value.toString().toUpperCase())
                }
                name="sMI"
              />
            </Grid>
          </Grid>
        </Paper>
        <Paper elevation={8} sx={{ p: 1, my: 1 }}>
          <Typography variant="h6" sx={{ p: 0.5, bgcolor: green[200] }}>
            IN CASE OF EMERGENCY
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6}>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                Last Name:
              </Typography>
              <TextField
                size="small"
                fullWidth
                required
                value={states.cLastName}
                onChange={(e) =>
                  actions.setCLastName(toTitleCase(e.target.value))
                }
                name="cLastName"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                First Name:
              </Typography>
              <TextField
                size="small"
                fullWidth
                required
                value={states.cFirstName}
                onChange={(e) =>
                  actions.setCFirstName(toTitleCase(e.target.value))
                }
                name="cFirstName"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                Middle Initial:
              </Typography>
              <TextField
                size="small"
                fullWidth
                value={states.cMI}
                inputProps={{ maxLength: 3 }}
                helperText="Leave blank if not applicable."
                onChange={(e) =>
                  actions.setCMI(e.target.value.toString().toUpperCase())
                }
                name="cMI"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                Contact No.:
              </Typography>
              <TextField
                size="small"
                fullWidth
                required
                value={states.cContact}
                inputProps={{ maxLength: 10 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">+63</InputAdornment>
                  ),
                }}
                onChange={(e) => actions.setCContact(e.target.value)}
                name="cContact"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                Relationship:
              </Typography>
              <TextField
                size="small"
                fullWidth
                required
                value={states.cRelationship}
                onChange={(e) =>
                  actions.setCRelationship(toTitleCase(e.target.value))
                }
                name="cRelationship"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                Street/Block/Brgy.:
              </Typography>
              <TextField
                size="small"
                fullWidth
                required
                value={states.cAddress}
                onChange={(e) =>
                  actions.setCAddress(toTitleCase(e.target.value))
                }
                name="cAddress"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                City/Municipal:
              </Typography>
              <TextField
                size="small"
                fullWidth
                required
                value={states.cCity}
                onChange={(e) => actions.setCCity(toTitleCase(e.target.value))}
                name="cCity"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                Zip Code:
              </Typography>
              <TextField
                size="small"
                fullWidth
                required
                value={states.cZip}
                inputProps={{ maxLength: 4 }}
                onChange={(e) => actions.setCZip(e.target.value)}
                name="cZip"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                Province:
              </Typography>
              <TextField
                size="small"
                fullWidth
                required
                value={states.cProvince}
                helperText="Do not abbreviate."
                onChange={(e) =>
                  actions.setCProvince(toTitleCase(e.target.value))
                }
                name="cProvince"
              />
            </Grid>
          </Grid>
        </Paper>
        <Paper elevation={8} sx={{ p: 1, my: 1 }}>
          <Typography variant="h6" sx={{ p: 0.5, bgcolor: green[200] }}>
            {"COLLEGE & PROGRAM"}
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6}>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                Campus:
              </Typography>
              <FormControl fullWidth required size="small">
                <Select
                  name="campus"
                  value={states.campus}
                  onChange={campusChange}
                  defaultValue=""
                >
                  {campuses.map((c, i) => {
                    const campusName = Object.keys(c)[0];
                    return (
                      <MenuItem value={campusName} key={i}>
                        {campusName.toUpperCase()}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                College:
              </Typography>
              <FormControl fullWidth required size="small">
                <Select
                  name="college"
                  value={states.college}
                  onChange={collegeChange}
                  defaultValue=""
                >
                  {collegesArr.length > 0 ? (
                    collegesArr.map((c, i) => {
                      const collegeShort = Object.keys(c)[0];
                      const { name } = c[collegeShort];

                      return (
                        <MenuItem value={collegeShort} key={i}>
                          {`${collegeShort} - ${name}`}
                        </MenuItem>
                      );
                    })
                  ) : (
                    <MenuItem value="">Specify a campus first</MenuItem>
                  )}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                Program:
              </Typography>
              <FormControl fullWidth required size="small">
                <Select
                  name="program"
                  value={states.program}
                  onChange={programChange}
                  defaultValue=""
                >
                  {programsArr.length > 0 ? (
                    programsArr.map((p, i) => {
                      const name = Object.keys(p)[0];

                      return (
                        <MenuItem value={name} key={i}>
                          {name}
                        </MenuItem>
                      );
                    })
                  ) : (
                    <MenuItem value="">Specify a college first</MenuItem>
                  )}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                Major:
              </Typography>
              <FormControl
                fullWidth
                disabled={majorsArr.length > 0 ? false : true}
                size="small"
              >
                <Select
                  name="major"
                  value={states.major}
                  onChange={majorChange}
                  defaultValue=""
                >
                  {majorsArr.length > 0 ? (
                    majorsArr.map((m, i) => {
                      return (
                        <MenuItem value={m} key={i}>
                          {m}
                        </MenuItem>
                      );
                    })
                  ) : (
                    <MenuItem value="">None</MenuItem>
                  )}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                Year Level:
              </Typography>
              <TextField
                size="small"
                fullWidth
                type="text"
                required
                inputProps={{ maxLength: 1 }}
                onChange={(e) => actions.setLevel(e.target.value)}
                name="level"
                helperText="ex: 1, 2, 3, 4"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                Section:
              </Typography>
              <TextField
                size="small"
                fullWidth
                type="text"
                required
                inputProps={{ maxLength: 1 }}
                onChange={(e) =>
                  actions.setSection(e.target.value.toString().toUpperCase())
                }
                name="section"
                helperText="ex: A, B, C, D"
              />
            </Grid>
          </Grid>
        </Paper>
        <Button
          type="submit"
          variant="contained"
          sx={{ bgcolor: green[500], my: 2, ml: "auto", display: "block" }}
          onClick={() => navigate("/student/step2")}
        >
          Next
        </Button>
      </Box>

      {/* <Dialog
        scroll="paper"
        maxWidth="sm"
        fullWidth
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
      >
        <DialogTitle sx={{ bgcolor: green[700], color: "white", py: 2, mb: 1 }}>
          Review Your Data
        </DialogTitle>
        <DialogContent>
          <DialogContentText>Proceed data submission?</DialogContentText>
          <Stack>
            <Box sx={{ my: 1 }}>
              <Typography variant="body1" fontWeight={500}>
                Personal Data
              </Typography>
              <Typography variant="body2">{`I.D. No.: ${sID}`}</Typography>
              <Typography variant="body2">{`Last Name: ${sLastName}`}</Typography>
              <Typography variant="body2">{`First Name: ${sFirstName}`}</Typography>
              <Typography variant="body2">{`M.I.: ${sMI}`}</Typography>
            </Box>
            <Divider />
            <Box sx={{ my: 1 }}>
              <Typography variant="body1" fontWeight={500}>
                In Case of Emergency
              </Typography>
              <Typography variant="body2">{`Last Name: ${cLastName}`}</Typography>
              <Typography variant="body2">{`First Name: ${cFirstName}`}</Typography>
              <Typography variant="body2">{`M.I.: ${cMI}`}</Typography>
              <Typography variant="body2">{`Contact No.: +63${cContact}`}</Typography>
              <Typography variant="body2">{`Relationship: ${cRelationship}`}</Typography>
              <Typography variant="body2">{`Street/Block/Brgy.: ${cAddress}`}</Typography>
              <Typography variant="body2">{`City: ${cCity}`}</Typography>
              <Typography variant="body2">{`Zip Code: ${cZip}`}</Typography>
              <Typography variant="body2">{`Province: ${cProvince}`}</Typography>
            </Box>
            <Divider />
            <Box sx={{ my: 1 }}>
              <Typography variant="body1" fontWeight={500}>
                {"College & Program"}
              </Typography>
              <Typography variant="body2">{`Campus: ${campus}`}</Typography>
              <Typography variant="body2">{`College: ${college}`}</Typography>
              <Typography variant="body2">{`Program: ${program}`}</Typography>
              <Typography variant="body2">{`Major: ${major}`}</Typography>
              <Typography variant="body2">{`Year Level: ${level}`}</Typography>
              <Typography variant="body2">{`Section: ${section}`}</Typography>
            </Box>
            <Typography variant="caption">
              By clicking the submit button, I have read and agreed to{" "}
              <Link
                underline="none"
                component="button"
                color={green[500]}
                onClick={(e) => setAnchor(e.currentTarget)}
              >
                CHMSU Data Privacy Statement
              </Link>
              .
            </Typography>
            <Popover
              open={Boolean(anchor)}
              anchorEl={anchor}
              onClose={() => setAnchor(null)}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              PaperProps={{
                sx: {
                  p: 1,
                  maxWidth: { xs: "90vw", md: 500 },
                  border: "3px solid",
                  borderColor: green[500],
                },
              }}
            >
              <Typography variant="caption">
                In compliance with Republic Act No. 10173, otherwise known as
                the Data Privacy Act of 2012. I hereby acknowledge that my
                personal information provided is solely used for Carlos Hilado
                Memorial State University. That by virtue of the said law, I
                freely give my consent and hereby agree to the collections,
                access and processing of my sensitive personal and privileged
                information - as defined under RA 10173 - DPC Act 2012 for any
                legal and all legitimate interests of CHMSU as Higher
                Educational Institution.
              </Typography>
            </Popover>
          </Stack>
          {submitted ? (
            <Alert severity="info">
              Submitting form... Please don't close the browser.
            </Alert>
          ) : null}
        </DialogContent>
        <DialogActions>
          <Button
            disabled={submitted}
            size="small"
            sx={{ color: green[500] }}
            onClick={() => setDialogOpen(false)}
          >
            Cancel
          </Button>
          <Button
            size="small"
            variant="contained"
            disabled={submitted}
            sx={{ bgcolor: green[500] }}
            onClick={submit}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog> */}
    </Box>
  );
}

export default Student;
