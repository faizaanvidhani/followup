import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './components/login.css';

import PatientHome from "./Patient/PatientHome";
import Navigation from "./components/Navigation";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
root.render(
    <Router>
        <Navigation />
        <Routes>
            <Route path="/Home" element={<PatientHome name="Suraj Zaveri" dob="04/05/2001" tel="504-405-9585" />} />
        </Routes>
    </Router>,

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
