import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { Provider } from "./Context";

import Home from "./Home";

import StudentPolicy from "./Student/Policy";
import StudentStep1 from "./Student/StudentStep1";
import StudentStep2 from "./Student/StudentStep2";
import StudentStep3 from "./Student/StudentStep3";

import StaffPolicy from "./Staff/Policy";

import Submitted from "./Submitted";
import StaffStep1 from "./Staff/StaffStep1";
import StaffStep2 from "./Staff/StaffStep2";
import StaffStep3 from "./Staff/StaffStep3";

import FacultyPolicy from "./Faculty/Policy";
import FacultyStep1 from "./Faculty/FacultyStep1";
import FacultyStep2 from "./Faculty/FacultyStep2";
import FacultyStep3 from "./Faculty/FacultyStep3";

const root = ReactDOM.createRoot(document.getElementById("root"));
let theme = createTheme();
theme = responsiveFontSizes(theme);
root.render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Provider>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route path="student">
                <Route index element={<StudentPolicy />} />
                <Route path="step1" element={<StudentStep1 />} />
                <Route path="step2" element={<StudentStep2 />} />
                <Route path="review" element={<StudentStep3 />} />
              </Route>
              <Route path="staff">
                <Route index element={<StaffPolicy />} />
                <Route path="step1" element={<StaffStep1 />} />
                <Route path="step2" element={<StaffStep2 />} />
                <Route path="review" element={<StaffStep3 />} />
              </Route>
              <Route path="faculty">
                <Route index element={<FacultyPolicy />} />
                <Route path="step1" element={<FacultyStep1 />} />
                <Route path="step2" element={<FacultyStep2 />} />
                <Route path="review" element={<FacultyStep3 />} />
              </Route>
            </Route>

            <Route path="submitted" element={<Submitted />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
