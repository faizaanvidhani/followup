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
// import SignUp from "./FirebaseAuth/SignUp"
// import LogIn from "./FirebaseAuth/LogIn"
import SignIn from "./Home/SignIn"
import PrivateRoute from './FirebaseAuth/PrivateRoute'
import { AuthProvider } from './FirebaseAuth/AuthContext'
import 'bootstrap/dist/css/bootstrap.min.css'
import ProviderPatientView from './components/provider/ProviderPatientView';
import ProviderHomePage from './components/provider/ProviderHomePage';
import ProviderIntakePage from './components/provider/ProviderIntakePage';
import ProviderInfoPage from './components/provider/ProviderInfoPage';
import ProviderPatientGrid from './components/provider/ProviderPatientGrid';
import Tabs from './components/provider/Tabs';
import PortalHeader from './components/PortalHeader';
import NewAccountPage from './components/NewAccountPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(

    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mission" element={<Mission />} /> 
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<SignIn />} />
            {/*<Route path="/login" element={<LogIn />} />*/}
            {/*<Route path="/signup" element={<SignUp />} />*/}

            {/*DEMO PURPOSES: private routing*/}
            <Route path="/dashboard" element={<PatientHome />} />

            {/*<Route path="/dashboard" element={*/}
            {/*    <PrivateRoute>*/}
            {/*        <PatientHome />*/}
            {/*    </PrivateRoute>*/}
            {/*} />*/}
        </Routes>

        <Routes>
            <Route path="/patientHome" element={<PatientHome />} />
            <Route path="/profileInfo" element={<ProfileInfo />} />
            <Route path="/symptomLog" element={<SymptomLog />} />
            <Route path="/addSymptom" element={<AddSymptom />} />
        </Routes>

        <Routes>
            <Route path="/providerHome" element={<ProviderHomePage name="Jane Doe" clinicName='RI Hospital' title='MD' />} />
            <Route path="/providerPatientGrid" element={<ProviderPatientGrid name="Jane Doe" clinicName='RI Hospital' title='MD' patients={[]} />} />
            <Route path="/providerIntakePage" element={<ProviderIntakePage />} />
            <Route path="/providerInfoPage" element={<ProviderInfoPage fname='Jane' lname='Doe' institution='RI Hospital' phoneNumber='012-345-6789' email='jane@gmail.com' />} />
        </Routes>

      
    </Router>,

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();