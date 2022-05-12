import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PatientHome from "./components/Patient/PatientHome";
import ProfileInfo from './components/Patient/ProfileInfo';
import SymptomLog from './components/Patient/SymptomLog';
import AddSymptom from './components/Patient/AddSymptom';
import ProviderInfo from './components/Patient/ProviderInfo';
import Home from './Home/Home';
import Mission from './Home/Mission';
import About from './Home/About';
import Contact from './Home/Contact';
// import SignUp from "./FirebaseAuth/SignUp"
// import LogIn from "./FirebaseAuth/LogIn"
import SignIn from "./Home/SignIn"
import PrivateRoute from './FirebaseAuth/PrivateRoute'
import { AuthProvider } from './FirebaseAuth/AuthContext'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProviderPatientView from './components/provider/ProviderPatientView';
import ProviderHomePage from './components/provider/ProviderHomePage';
import ProviderIntakePage from './components/provider/ProviderIntakePage';
import ProviderInfoPage from './components/provider/ProviderInfoPage';
import ProviderPatientGrid from './components/provider/ProviderPatientGrid';
import Tabs from './components/provider/Tabs';
import PortalHeader from './components/PortalHeader';
import NewAccountPage from './components/NewAccountPage';
import BootstrapIntakePage from './components/provider/BootstrapIntakePage';
import ContactSubmissionNotification from './Home/ContactSubmissionNotification';
import UserContext from './UserContext';
import { render } from 'react-dom';

function App() {
    const [currentUser, setCurrentUser] = useState(null);

    return (
        // @ts-ignore
        <UserContext.Provider value={{currentUser, setCurrentUser}}>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/mission" element={<Mission />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/contactformupdate" element={<ContactSubmissionNotification />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/login" element={<SignIn />} />
                    {/*<Route path="/login" element={<LogIn />} />*/}
                    {/*<Route path="/signup" element={<SignUp />} />*/}

                    {/*/!*DEMO PURPOSES: private routing*!/*/}
                    {/*<Route path="/dashboard" element={<PatientHome />} />*/}

                    <Route path="/patientHome" element={
                        <PrivateRoute>
                            <PatientHome />
                        </PrivateRoute>
                    } />

                    <Route path="/profileInfo" element={<PrivateRoute><ProfileInfo /></PrivateRoute>} />
                    <Route path="/symptomLog" element={<PrivateRoute><SymptomLog /></PrivateRoute>} />
                    <Route path="/addSymptom" element={<PrivateRoute><AddSymptom /></PrivateRoute>} />
                    <Route path="/providerInfo" element={<PrivateRoute><ProviderInfo /></PrivateRoute>} />
                </Routes>

                <Routes>
                    <Route path="/providerHome" element={<ProviderHomePage name="Jane Doe" clinicName='RI Hospital' title='MD' />} />
                    <Route path="/providerPatientGrid" element={<ProviderPatientGrid name="Jane Doe" clinicName='RI Hospital' title='MD' patients={[]} />} />
                    {/*<Route path="/providerIntakePage" element={<ProviderIntakePage />} />*/}
                    <Route path="/providerIntakePage" element={<BootstrapIntakePage />} />

                    {/*<Route path="/providerInfoPage" element={<ProviderInfoPage fname='Jane' lname='Doe' institution='RI Hospital' phoneNumber='012-345-6789' email='jane@gmail.com' />} />*/}
                </Routes>
            </Router>
        </UserContext.Provider>
    );
}
export default App;