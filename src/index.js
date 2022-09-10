import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import StudentStep1 from "./Student/StudentStep1";
import { CssBaseline } from "@mui/material";
import Submitted from "./Submitted";
import { Provider as StudentProvider } from "./Student/StudentContext";
import Home from "./Home";
import Policy from "./Student/Policy";
import StudentStep2 from "./Student/StudentStep2";
import StudentStep3 from "./Student/StudentStep3";

const root = ReactDOM.createRoot(document.getElementById("root"));
let theme = createTheme();
theme = responsiveFontSizes(theme);
root.render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <StudentProvider>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route path="student">
                <Route index element={<Policy />} />
                <Route path="step1" element={<StudentStep1 />} />
                <Route path="step2" element={<StudentStep2 />} />
                <Route path="review" element={<StudentStep3 />} />
              </Route>
            </Route>

            <Route path="submitted" element={<Submitted />} />
          </Routes>
        </StudentProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
