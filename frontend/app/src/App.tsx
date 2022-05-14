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
import PrivateRoute from './FirebaseAuth/PrivateRoute'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProviderHomePage from './components/provider/ProviderHomePage';
import ProviderIntakePage from './components/provider/ProviderIntakePage';
import ProviderPatientGrid from './components/provider/ProviderPatientGrid';
import PatientIntake from './components/patient/PatientIntake'
import Tabs from './components/provider/Tabs';
import ContactSubmission from './Home/ContactSubmission';
import UserContext from './UserContext';
import AddSymptomContext from './components/patient/AddSymptomContext';
import IntakePage from './components/patient/PatientIntake';

import ProviderContext from './components/provider/ProviderContext';

function App() {
    const [currentUser, setCurrentUser] = useState(null);
    const userType = null;

    return (
        <UserContext.Provider value={{userType, currentUser, setCurrentUser}}>
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
                    <Route path="/patientHome" element={<PrivateRoute><PatientHome /></PrivateRoute>} />
                    <Route path="/profileInfo" element={<PrivateRoute><IntakePage /></PrivateRoute>} />
                    <Route path="/symptomLog" element={<PrivateRoute><SymptomLog /></PrivateRoute>} />
                    <Route path="/addSymptom" element={<PrivateRoute><AddSymptom /></PrivateRoute>} />
<<<<<<< Updated upstream
                    <Route path="/addSymptomContext" element={<PrivateRoute><AddSymptomContext /></PrivateRoute>} />
=======

                    <Route path="/patientIntake" element={<PatientIntake/>} />

>>>>>>> Stashed changes
                </Routes>

                {/*<ProviderContext.Provider value={{currentUser, setCurrentUser}}>*/}
                    {/*provider routes*/}
                <Routes>
                    <Route path="/providerHome" element={<ProviderHomePage name="Jane Doe" clinicName='RI Hospital' title='MD' />} />
                    <Route path="/providerPatientGrid" element={<ProviderPatientGrid firstName="Jane" lastName="Doe" clinicName='RI Hospital' title='MD' patients={[]} />} />

                    <Route path="/providerIntake" element={<ProviderIntakePage />} />
                    <Route path="/providerTabs" element={<Tabs />} />
                    <Route path="/providerInfoPage" element={<ProviderInfoPage fname='Jane' lname='Doe' institution='RI Hospital' phoneNumber='012-345-6789' email='jane@gmail.com' />} />
                {/*</ProviderContext.Provider>*/}
                </Routes>
            </Router>
        </UserContext.Provider>
    );
}
export default App;