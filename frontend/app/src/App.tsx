import React, {MutableRefObject, useRef, useState } from 'react';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import PatientHome from "./components/patient/PatientHome";
import ProfileInfo from './components/patient/ProfileInfo';
import SymptomLog from './components/patient/SymptomLog';
import AddSymptom from './components/patient/AddSymptom';

import Home from './Home/Home';
import Mission from './Home/Mission';
import About from './Home/About';
import Contact from './Home/Contact';
import SignIn from "./Home/SignIn"
import ProviderProtectedRoute from './components/private routes/ProviderProtectedRoute'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProviderHomePage from './components/provider/ProviderHomePage';
import ProviderIntakePage from './components/provider/ProviderIntakePage';
import ProviderPatientGrid from './components/provider/ProviderPatientGrid';
import PatientIntake from './components/patient/PatientIntake'
import PatientView from './components/provider/PatientView';
import ContactSubmission from './Home/ContactSubmission';
import UserContext from './UserContext';
import AddSymptomContext from './components/patient/AddSymptomContext';
import IntakePage from './components/patient/PatientIntake';
import ProviderContext from './components/provider/contexts/ProviderContext';
import CurrentPatientContext from "./components/provider/contexts/CurrentPatientContext";
import ProviderInfoPage from './components/provider/ProviderInfoPage';
import NewAccountPage from './components/NewAccountPage';
import PatientProtectedRoute from "./components/private routes/PatientProtectedRoute";

function App() {
    const [userType, setUserType] = useState(null);
    const [currentUser, setCurrentUser] = useState(null);
    const [providerDemographics, setProviderDemographics] = useState(null);
    const [providerPatients, setPatients] = useState(null);
    const [allPatientsData, setPatientsData] = useState(null);
    const [currentPatientDemos, setCurrentPatientDemos] = useState(null);
    const [currentPatientSymptomLogs, setPatientLogs] = useState(null);
    const [currentPatientSymptomIDs, setCurrentPatientLogIDs] = useState(null);

    const userSettings = {
        userType: userType,
        currentUser: currentUser,
        setUserType,
        setCurrentUser
    }

    const providerSettings = {
        demographics: providerDemographics,
        patients: providerPatients,
        patientsData: allPatientsData,
        setProviderDemographics,
        setPatients,
        setPatientsData
    }

    const currentPatientSettings = {
        demographics: currentPatientDemos,
        symptomIDs: currentPatientSymptomIDs,
        allSymptomLogs: currentPatientSymptomLogs,
        setCurrentPatientDemos,
        setPatientLogs,
        setCurrentPatientLogIDs
    }

    return (
        <UserContext.Provider value={userSettings}>
        {/*// <UserContext.Provider value={{userType, setUserType, currentUser, setCurrentUser}}>*/}
            <ProviderContext.Provider value={providerSettings}>
                <Router>
                    <Routes>
                        {/* outward facing routes*/}
                        <Route path="/" element={<Home />} />
                        <Route path="/mission" element={<Mission />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/contact-submission" element={<ContactSubmission />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/login" element={<SignIn />} />
                    </Routes>

                    <Routes>
                        <Route path="/newAccount" element={<NewAccountPage />} />
                    </Routes>

                    <Routes>
                        {/*patient routes*/}
                        <Route path="/patientHome" element={<PatientProtectedRoute><PatientHome /></PatientProtectedRoute>} />
                        <Route path="/profileInfo" element={<PatientProtectedRoute><IntakePage /></PatientProtectedRoute>} />
                        <Route path="/symptomLog" element={<PatientProtectedRoute><SymptomLog /></PatientProtectedRoute>} />
                        <Route path="/addSymptom" element={<PatientProtectedRoute><AddSymptom /></PatientProtectedRoute>} />
                        <Route path="/addSymptomContext" element={<PatientProtectedRoute><AddSymptomContext /></PatientProtectedRoute>} />
                        <Route path="/patientIntake" element={<PatientIntake/>} />
                    </Routes>

                    <CurrentPatientContext.Provider value={currentPatientSettings}>
                    {/*provider routes*/}
                        <Routes>
                            <Route path="/profileInfo" element={<IntakePage />} />
                            <Route path="/providerHome" element={<ProviderProtectedRoute><ProviderHomePage /> </ProviderProtectedRoute>} />
                            <Route path="/providerIntake" element={<ProviderIntakePage />} />
                            {/*<CurrentPatientContext.Provider value={currentPatientSettings}>*/}
                                <Route path="/providerPatientGrid" element={<ProviderPatientGrid />} />
                                <Route path="/provider-patientView" element={<PatientView />} />
                            {/*</CurrentPatientContext.Provider>*/}
                            <Route path="/providerInfoPage" element={<ProviderInfoPage />} />
                        </Routes>
                    </CurrentPatientContext.Provider>
                </Router>
            </ProviderContext.Provider>
        </UserContext.Provider>
    );
}
export default App;