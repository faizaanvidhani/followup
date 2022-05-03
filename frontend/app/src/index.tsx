import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PatientHome from "./Patient/PatientHome";
import MainNavigation from "./components/MainNavigation";
import ProfileInfo from './Patient/ProfileInfo';
import SymptomLog from './Patient/SymptomLog';
import AddSymptom from './Patient/AddSymptom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <Router>
        <MainNavigation />
        <Routes>
            <Route path="/home" element={<PatientHome name="Suraj Zaveri" dob="04/05/2001" tel="504-405-9585" />} />
            <Route path="/mission" />
            <Route path="/contact" />
            <Route path="/about" />
        </Routes>

        <Routes>
            <Route path="/profileInfo" element={<ProfileInfo />} />
            <Route path="/symptomLog" element={<SymptomLog />} />
            <Route path="/addSymptom" element={<AddSymptom />} />
        </Routes>

      
    </Router>,

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();