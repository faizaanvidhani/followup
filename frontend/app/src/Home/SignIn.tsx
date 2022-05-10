import google from '../icons/google.svg';
import facebook from '../icons/facebook.svg';
import apple from '../icons/apple.svg';
import './SignIn.css';
import MainHeader from './MainHeader';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth,
    GoogleAuthProvider,
    signInWithRedirect,
    getRedirectResult,
    signOut} from "firebase/auth";
import { auth } from '../FirebaseAuth/Firebase'
import { useState, useEffect, useRef } from "react";
import {Alert, Button, Card, Container, Form } from 'react-bootstrap';

function SignIn() {
    const provider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const passwordConfirmRef = useRef(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user: any) => {
            // setLoading(false);
            setCurrentUser(user);
        })
        return unsubscribe;
    }, [])

    function loginGoogle() {

        signInWithRedirect(auth, provider)
            .then((result) => {
                getRedirectResult(auth);
            })
            .catch((error) => {
                console.log("ERROR: " + error);
            });
        getRedirectResult(auth).then((result) => {
            // This gives you a Google Access Token. You can use it to access Google APIs.
            const credential = GoogleAuthProvider.credentialFromResult(result!);
            const token = credential!.accessToken;
            console.log(result!.user.displayName)
            console.log(result!.user.email)
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });

        if (currentUser !== null) {
            navigate("/dashboard");
        }
    }
    return (
        <div>
            <MainHeader />
            <div className="backgroundBox">
                <h1 className="signInTitle">Sign In</h1>
                <div className="foregroundBox">
                    <div className="welcome">
                        <h1>Welcome back!</h1>
                    </div>
                    <div className="inputFields">
                        <input className="email" type="email" placeholder="Email address"/>
                        <br/>
                        <input className="password" type="password" placeholder="Password"/>
                    </div>
                    <button className="login">Log In</button>
                    <div className="loginSeparator">
                        <span className="textInSeparator">or</span>
                    </div>
                    <div className="icons">
                        <img className="google" src={google} alt="google" onClick={loginGoogle}/>
                        <img className="fb" src={facebook} alt="fb"/>
                        <img className="apple" src={apple} alt="apple"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;