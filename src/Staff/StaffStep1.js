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
import { Context as StaffContext } from "./../Context";
import { useState } from "react";
import { getValue } from "@testing-library/user-event/dist/utils";
function StaffStep1() {
  const navigate = useNavigate();
  const { staff } = useContext(StaffContext);
  const { actions, states } = staff;
  const campuses = offices.campuses;

  const [officesArr, setOfficesArr] = useState([]);

  const category = [
    { gass: "General Administrative Support & Services" },
    { cos: "Contract of Service" },
  ];
  // const [dialogOpen, setDialogOpen] = useState(false);
  // const [submitted, setSubmitted] = useState(false);

  // const [anchor, setAnchor] = useState(null);

  const toTitleCase = (str) => {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };
  // const campusChange = (e) => {
  //   actions.setCollege("");
  //   const _campus = e.target.value;

  //   const campusObject = campuses.find((c) => Object.keys(c)[0] === _campus);
  //   actions.setCampus(_campus);
  //   actions.setCollegesArr(campusObject[_campus]["colleges"]);
  // };

  // const collegeChange = (e) => {
  //   actions.setProgram("");
  //   const _college = e.target.value;
  //   const collegeObject = states.collegesArr.find(
  //     (c) => Object.keys(c)[0] === _college
  //   );

  //   const arr = collegeObject[_college]["programs"];
  //   actions.setProgramsArr(arr);
  //   actions.setCollege(_college);
  // };

  // const programChange = (e) => {
  //   actions.setMajor("");
  //   const _program = e.target.value;
  //   const programObject = states.programsArr.find(
  //     (p) => Object.keys(p)[0] === _program
  //   );
  //   const arr = programObject[_program]["majors"];
  //   actions.setMajorsArr(arr);
  //   actions.setProgram(_program);
  // };

  // const majorChange = (e) => {
  //   const _major = e.target.value;
  //   actions.setMajor(_major);
  // };

  const review = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    actions.setStaffStep1Data(formData);
    navigate("/staff/step2");
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
                onChange={(e) => actions.setStaffID(e.target.value)}
                name="staffID"
                size="small"
                fullWidth
                required
                value={states.staffID}
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
                value={states.staffLastName}
                onChange={(e) =>
                  actions.setStaffLastName(toTitleCase(e.target.value))
                }
                name="staffLastName"
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
                value={states.staffFirstName}
                onChange={(e) =>
                  actions.setStaffFirstName(toTitleCase(e.target.value))
                }
                name="staffFirstName"
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
                value={states.staffMI}
                onChange={(e) =>
                  actions.setStaffMI(e.target.value.toString().toUpperCase())
                }
                name="staffMI"
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
                value={states.staffDOB}
                onChange={(e) => {
                  let value = e.target.value.toString();
                  if (value.length === 2) value += "/";
                  else if (value.length === 5) value += "/";
                  actions.setStaffDOB(value);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Backspace") {
                    var val = states.staffDOB;
                    if (val.length === 3 || val.length === 6) {
                      val = val.slice(0, val.length - 1);
                      actions.setStaffDOB(val);
                    }
                  }
                }}
                name="staffDOB"
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
                value={states.staffBloodType}
                onChange={(e) =>
                  actions.setStaffBloodType(
                    e.target.value.toString().toUpperCase()
                  )
                }
                name="staffBloodType"
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
                value={states.staffGSIS}
                onChange={(e) =>
                  actions.setStaffGSIS(e.target.value.toString())
                }
                name="staffGSIS"
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
                value={states.staffTIN}
                onChange={(e) => actions.setStaffTIN(e.target.value.toString())}
                name="staffTIN"
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
                value={states.staffPhilHealth}
                onChange={(e) =>
                  actions.setStaffPhilHealth(e.target.value.toString())
                }
                name="staffPhilHealth"
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
                value={states.staffPagibig}
                onChange={(e) =>
                  actions.setStaffPagibig(toTitleCase(e.target.value))
                }
                name="staffPagibig"
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
                value={states.staffAddress}
                onChange={(e) =>
                  actions.setStaffAddress(toTitleCase(e.target.value))
                }
                name="staffAddress"
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
                value={states.staffCity}
                onChange={(e) =>
                  actions.setStaffCity(toTitleCase(e.target.value))
                }
                name="staffCity"
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
                value={states.staffProvince}
                onChange={(e) =>
                  actions.setStaffProvince(toTitleCase(e.target.value))
                }
                name="staffProvince"
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
                value={states.staffCFullName}
                onChange={(e) =>
                  actions.setStaffCFullName(toTitleCase(e.target.value))
                }
                name="staffCFullName"
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
                value={states.staffCContact}
                inputProps={{ maxLength: 10 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">+63</InputAdornment>
                  ),
                }}
                onChange={(e) => actions.setStaffCContact(e.target.value)}
                name="staffCContact"
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
                  name="staffCampus"
                  value={states.staffCampus}
                  onChange={(e) => {
                    const value = e.target.value;
                    const obj = campuses.find(
                      (c) => Object.keys(c)[0] === value
                    );
                    setOfficesArr(obj[value]["offices"]);
                    actions.setStaffCampus(value);
                  }}
                  defaultValue={states.staffCampus}
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
                Category:
              </Typography>
              <FormControl fullWidth required size="small">
                <Select
                  name="staffCategory"
                  value={states.staffCategory}
                  onChange={(e) => actions.setStaffCategory(e.target.value)}
                  defaultValue={states.staffCategory}
                >
                  {category.map((c, i) => {
                    const acronym = Object.keys(c)[0];
                    return (
                      <MenuItem value={c[acronym]} key={i}>
                        {c[acronym]}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                Office:
              </Typography>
              <FormControl fullWidth required size="small">
                <Select
                  name="staffOffice"
                  value={states.staffOffice}
                  onChange={(e) => actions.setStaffOffice(e.target.value)}
                  defaultValue={states.staffOffice}
                >
                  {officesArr.length > 0
                    ? officesArr.map((o, i) => {
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
