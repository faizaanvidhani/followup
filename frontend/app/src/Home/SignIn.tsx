import google from '../icons/google.svg';
import facebook from '../icons/facebook.svg';
import apple from '../icons/apple.svg';
import './SignIn.css';
import MainHeader from './MainHeader';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth,
    GoogleAuthProvider,
    FacebookAuthProvider,
    OAuthProvider,
    signInWithRedirect,
    signInWithPopup,
    getRedirectResult,
    signOut} from "firebase/auth";
import { auth } from '../FirebaseAuth/Firebase'
import { useState, useEffect, useRef, useContext } from "react";
import {Alert, Button, Card, Container, Form } from 'react-bootstrap';
import UserContext from '../UserContext';
import ProviderContext from "../components/provider/contexts/ProviderContext";
import axios from "axios";
import {userInfo} from "os";


export function SignIn() {
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const appleProvider = new OAuthProvider('apple.com');
    const navigate = useNavigate();
    const userContext = useContext(UserContext);
    // const {userType, setUserType, currentUser, setCurrentUser} = useContext(UserContext);
    // const {providerDemographics, setProviderDemos, providerPatients, setProviderPatients} = useContext(ProviderContext);
    const providerContext = useContext(ProviderContext);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const passwordConfirmRef = useRef(null);

    async function getAllPatientData(patientIDs: []) {
        const patientData = [];
        console.log("number of patients" + patientIDs.length )
        for (let i=0; i < patientIDs.length; i++) {
            let patientID = patientIDs[i];
            const response = await axios.post('http://localhost:4567/patient-data', {patient_id: patientID})
            // let symptomArr = response.data['logIDs']
            patientData.push(response.data['patientData'])
            // patientSymptoms.push(symptomArr.unshift(patientID))
        }
        providerContext.setPatientsData(patientData);
    }

    const loadProviderData = async (userID: string) => {
        const response = await axios.post('http://localhost:4567/provider-data', {provider_id: userID})
        providerContext.setProviderDemographics(response.data['providerData']);
        providerContext.setPatients(response.data['patientIDs']);
        console.log(response.data['patientIDs']);
        console.log("number of patients" + response.data['patientIDs'].length)

        if (response.data['patientIDs'].length > 0) {
            await getAllPatientData(response.data['patientIDs'])
        } else {
            providerContext.setPatientsData([]);
        }
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(function(user) {
            if (user) {
                // User is signed in.
                axios.post('http://localhost:4567/generic-table-data', {table_name: "Users"})
                    .then((response: any) => {
                        redirectUser(response, user);
                    })
            } else {
                userContext.setCurrentUser(null);
            }
        })
        return unsubscribe;
    }, [])

    async function redirectUser(response: any, user: any) {
        const userID = user.uid;
        console.log(user.uid);
        userContext.setCurrentUser(user.uid);
        // setCurrentUser(user.uid);
        const knownUsers = response.data
        if (userID in knownUsers) {

            const userInfoMap = knownUsers[userID];
            userContext.setUserType(userInfoMap['type'])
            // setUserType(userInfoMap['type']);
            if (userInfoMap['type'] === "Patient") {
                navigate("/patientHome");
            } else if (userInfoMap['type'] === "Provider") {
                await loadProviderData(userID)
                navigate("/providerHome");
            } else {
                console.log("ERROR: User is not of type patient nor provider.");
            }
        } else {
            navigate("/newAccount");
        }
    }

    function loginGoogle() {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                axios.post('http://localhost:4567/generic-table-data', {table_name: "Users"})
                    .then((response: any) => {
                        // redirectUser(response, response.user);
                    })
            }).catch((error) => {
                console.log("ERROR: " + error.message)
        });
    }
    function loginFacebook() {
        signInWithPopup(auth, facebookProvider)
            .then((result) => {
                userContext.setCurrentUser(result.user.uid);
                // setCurrentUser(result.user.uid);
                navigate("/patientHome")
            }).catch((error) => {
            console.log("ERROR: " + error.message)
        });
    }
    function loginApple() {
        signInWithPopup(auth, appleProvider)
            .then((result) => {
                userContext.setCurrentUser(result.user.uid);
                // setCurrentUser(result.user.uid);
                navigate("/patientHome")
            }).catch((error) => {
            console.log("ERROR: " + error.message)
        });
    }
    return (
        <div>
            <MainHeader />
            <div className="backgroundSignInBox">
                <h1 className="signInTitle">Sign In</h1>
                <div className="foregroundSignInBox">
                    <div className="welcome">
                        <h1>Welcome back!</h1>
                    </div>
                    <div className="inputFields">
                        <input className="email" type="email" placeholder="Email address"/>
                        <br/>
                        <input className="password" type="password" placeholder="Password"/>
                    </div>
                    <Button className="bg-custom-login">Log In</Button>
                    <div className="loginSeparator">
                        <span className="textInSeparator">or</span>
                    </div>
                    <div className="icons">
                        <img className="google" src={google} alt="google" onClick={loginGoogle}/>
                        <img className="fb" src={facebook} alt="fb" onClick={loginFacebook}/>
                        <img className="apple" src={apple} alt="apple" onClick={loginApple}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;