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
import offices from "./offices.json";
import { useNavigate } from "react-router-dom";
import { Context as StaffContext } from "../Context";

function StaffStep1() {
  const navigate = useNavigate();
  const { faculty } = useContext(StaffContext);
  const { actions, states } = faculty;
  const campuses = offices.campuses;

  const toTitleCase = (str) => {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };

  const review = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    actions.setFacultyStep1Data(formData);
    navigate("/faculty/step2");
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
                onChange={(e) => actions.setFacultyID(e.target.value)}
                name="idNo"
                size="small"
                fullWidth
                required
                value={states.facultyID}
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
                value={states.facultyLastName}
                onChange={(e) =>
                  actions.setFacultyLastName(toTitleCase(e.target.value))
                }
                name="lastName"
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
                value={states.facultyFirstName}
                onChange={(e) =>
                  actions.setFacultyFirstName(toTitleCase(e.target.value))
                }
                name="firstName"
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
                value={states.facultyMI}
                onChange={(e) =>
                  actions.setFacultyMI(e.target.value.toString().toUpperCase())
                }
                name="mi"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                Date of Birth:
              </Typography>
              <TextField
                size="small"
                fullWidth
                inputProps={{ maxLength: 10 }}
                helperText="mm/dd/yyyy"
                value={states.facultyDOB}
                onChange={(e) => {
                  let value = e.target.value.toString();
                  if (value.length === 2) value += "/";
                  else if (value.length === 5) value += "/";
                  actions.setFacultyDOB(value);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Backspace") {
                    var val = states.facultyDOB;
                    if (val.length === 3 || val.length === 6) {
                      val = val.slice(0, val.length - 1);
                      actions.setFacultyDOB(val);
                    }
                  }
                }}
                name="dob"
                required
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
                value={states.facultyContact}
                inputProps={{ maxLength: 10 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">+63</InputAdornment>
                  ),
                }}
                onChange={(e) => actions.setFacultyContact(e.target.value)}
                name="contact"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                Blood Type:
              </Typography>
              <TextField
                size="small"
                fullWidth
                inputProps={{ maxLength: 3 }}
                value={states.facultyBloodType}
                onChange={(e) =>
                  actions.setFacultyBloodType(
                    e.target.value.toString().toUpperCase()
                  )
                }
                name="bloodType"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                GSIS:
              </Typography>
              <TextField
                size="small"
                fullWidth
                inputProps={{ maxLength: 11 }}
                value={states.facultyGSIS}
                onChange={(e) =>
                  actions.setFacultyGSIS(e.target.value.toString())
                }
                name="gsis"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                TIN:
              </Typography>
              <TextField
                size="small"
                fullWidth
                inputProps={{ maxLength: 9 }}
                value={states.facultyTIN}
                onChange={(e) =>
                  actions.setFacultyTIN(e.target.value.toString())
                }
                name="tin"
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                PhilHealth:
              </Typography>
              <TextField
                size="small"
                fullWidth
                inputProps={{ maxLength: 12 }}
                value={states.facultyPhilHealth}
                onChange={(e) =>
                  actions.setFacultyPhilHealth(e.target.value.toString())
                }
                name="philHealth"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                PAG-IBIG:
              </Typography>
              <TextField
                size="small"
                fullWidth
                required
                inputProps={{ maxLength: 12 }}
                value={states.facultyPagibig}
                onChange={(e) =>
                  actions.setFacultyPagibig(toTitleCase(e.target.value))
                }
                name="pagibig"
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
                value={states.facultyAddress}
                onChange={(e) =>
                  actions.setFacultyAddress(toTitleCase(e.target.value))
                }
                name="address"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                City:
              </Typography>
              <TextField
                size="small"
                fullWidth
                required
                value={states.facultyCity}
                onChange={(e) =>
                  actions.setFacultyCity(toTitleCase(e.target.value))
                }
                name="city"
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
                value={states.facultyProvince}
                onChange={(e) =>
                  actions.setFacultyProvince(toTitleCase(e.target.value))
                }
                name="province"
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
                Full Name:
              </Typography>
              <TextField
                size="small"
                fullWidth
                required
                value={states.facultyCFullName}
                onChange={(e) =>
                  actions.setFacultyCFullName(toTitleCase(e.target.value))
                }
                name="cFullName"
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
                value={states.facultyCContact}
                inputProps={{ maxLength: 10 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">+63</InputAdornment>
                  ),
                }}
                onChange={(e) => actions.setFacultyCContact(e.target.value)}
                name="cContact"
              />
            </Grid>
          </Grid>
        </Paper>
        <Paper elevation={8} sx={{ p: 1, my: 1 }}>
          <Typography variant="h6" sx={{ p: 0.5, bgcolor: green[200] }}>
            {"CATEGORY & OFFICE"}
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6}>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                Campus:
              </Typography>
              <FormControl fullWidth required size="small">
                <Select
                  name="campus"
                  value={states.facultyCampus}
                  onChange={(e) => {
                    const value = e.target.value;
                    const obj = campuses.find(
                      (c) => Object.keys(c)[0] === value
                    );
                    actions.setFacultyCollegesArr(obj[value]["offices"]);
                    actions.setFacultyCampus(value);
                  }}
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
                Designation:
              </Typography>
              <TextField
                size="small"
                fullWidth
                value={states.designation}
                onChange={(e) => actions.setDesignation(e.target.value)}
                name="designation"
                helperText="For faculty with staff designation"
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                College:
              </Typography>
              <FormControl fullWidth required size="small">
                <Select
                  name="office"
                  value={states.facultyOffice}
                  onChange={(e) => actions.setFacultyOffice(e.target.value)}
                  defaultValue=""
                >
                  {states.facultyCollegesArr.length > 0
                    ? states.facultyCollegesArr.map((o, i) => {
                        return (
                          <MenuItem value={o} key={i}>
                            {o}
                          </MenuItem>
                        );
                      })
                    : null}
                </Select>
              </FormControl>
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

export default StaffStep1;
