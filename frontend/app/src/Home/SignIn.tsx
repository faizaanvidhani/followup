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
import firebase from "firebase/compat";
import axios from "axios";

export function SignIn() {
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const appleProvider = new OAuthProvider('apple.com');
    const navigate = useNavigate();
    const {userType, currentUser, setCurrentUser} = useContext(UserContext);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const passwordConfirmRef = useRef(null);

    function loadProviderData(userID: string) {
        axios.post('http://localhost:4567/provider-data', {provider_id: userID})
            .then((response: any) => {
                console.log("LOADING");
                console.log(response.data)
            })
    }
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(function(user) {
            if (user) {
                // User is signed in.
                axios.post('http://localhost:4567/generic-table-data', {table_name: "Users"})
                    .then((response: any) => {
                        const userID = user.uid;
                        setCurrentUser(user.uid);
                        console.log(currentUser);
                        console.log(user.uid);
                        const knownUsers = response.data
                        console.log(knownUsers);
                        if (userID in knownUsers) {
                            const userInfoMap = knownUsers[userID];
                            const userType = userInfoMap['type'];
                            console.log(userType);
                            if (userType === "Patient") {
                                navigate("/patientHome");
                            } else if (userType === "Provider") {
                                loadProviderData(userID)
                                navigate("/providerHome");
                            } else {
                                console.log("ERROR: User is not of type patient nor provider.");
                            }
                        } else {
                            navigate("/newAccount");
                        }
                    })
            } else {
                setCurrentUser(false);
            }
        })
        return unsubscribe;
    }, [])

    function loginGoogle() {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                // setCurrentUser(result.user.uid);
                // navigate("/patientHome")
            }).catch((error) => {
                console.log("ERROR: " + error.message)
        });
    }
    function loginFacebook() {
        signInWithPopup(auth, facebookProvider)
            .then((result) => {
                setCurrentUser(result.user.uid);
                navigate("/patientHome")
            }).catch((error) => {
            console.log("ERROR: " + error.message)
        });
    }
    function loginApple() {
        signInWithPopup(auth, appleProvider)
            .then((result) => {
                setCurrentUser(result.user.uid);
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