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
import React, { useContext } from "react";
import programs from "./programs.json";
import { useNavigate } from "react-router-dom";
import { Context } from "../Context";
function Student() {
  const navigate = useNavigate();
  const { student } = useContext(Context);
  const { states, actions } = student;
  const campuses = programs.campuses;

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
    actions.setCollegesArr(campusObject[_campus]["colleges"]);
  };

  const collegeChange = (e) => {
    actions.setProgram("");
    const _college = e.target.value;
    const collegeObject = states.collegesArr.find(
      (c) => Object.keys(c)[0] === _college
    );

    const arr = collegeObject[_college]["programs"];
    actions.setProgramsArr(arr);
    actions.setCollege(_college);
  };

  const programChange = (e) => {
    actions.setMajor("");
    const _program = e.target.value;
    const programObject = states.programsArr.find(
      (p) => Object.keys(p)[0] === _program
    );
    const arr = programObject[_program]["majors"];
    actions.setMajorsArr(arr);
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
    navigate("/student/step2");
  };

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
                  defaultValue={states.campus}
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
                  defaultValue={states.college}
                >
                  {states.collegesArr.length > 0 ? (
                    states.collegesArr.map((c, i) => {
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
                  defaultValue={states.program}
                >
                  {states.programsArr.length > 0 || states.college ? (
                    states.programsArr.map((p, i) => {
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
                disabled={states.majorsArr.length > 0 ? false : true}
                size="small"
              >
                <Select
                  name="major"
                  value={states.major}
                  onChange={majorChange}
                  defaultValue={states.major}
                >
                  {states.majorsArr.length > 0 || states.program ? (
                    states.majorsArr.map((m, i) => {
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
                value={states.level}
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
                value={states.section}
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
        >
          Next
        </Button>
      </Box>
    </Box>
  );
}

export default Student;
