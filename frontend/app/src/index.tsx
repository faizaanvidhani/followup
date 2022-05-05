import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PatientHome from "./Patient/PatientHome";
import ProfileInfo from './Patient/ProfileInfo';
import SymptomLog from './Patient/SymptomLog';
import AddSymptom from './Patient/AddSymptom';
import Home from './Home/Home';
import Mission from './Home/Mission';
import About from './Home/About';
import Contact from './Home/Contact';
import SignIn from './Home/SignIn';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(

    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<PatientHome />} />
            <Route path="/mission" element={<Mission />} /> 
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/signin" element={<SignIn />} />
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