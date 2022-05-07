// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { useState } from "react";
import { getAnalytics } from "firebase/analytics";
import { getAuth,
    GoogleAuthProvider,
    signInWithRedirect,
    getRedirectResult,
    onAuthStateChanged } from "firebase/auth";
// import { Routes, Route, BrowserRouter } from "react-router-dom";

// Web app's Firebase configuration

// OLD
const firebaseConfig = {
    apiKey: "AIzaSyDrE8FpU-o4OXk_yA4Ud9SJEVyM1lwVD0w",
    authDomain: "followup-fcdd6.firebaseapp.com",
    projectId: "followup-fcdd6",
    storageBucket: "followup-fcdd6.appspot.com",
    messagingSenderId: "123391202165",
    appId: "1:123391202165:web:f918168aacc9747339793c",
    measurementId: "G-VH336N9YW5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const provider = new GoogleAuthProvider();

function FirebaseLogin() {
    const [email, setEmail] = useState("");

    // HANDLING GOOGLE SIGNIN

    // STEP 1: signing in
    signInWithRedirect(auth, provider)
        .then((result) => {
            getRedirectResult();
        })
        .catch((error) => {
            console.log("ERROR: " + error);
        });
}

// STEP 2: extracting user information from authentication
getRedirectResult(auth).then((result) => {
    // This gives you a Google Access Token. You can use it to access Google APIs.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    // assigning values to state variables
    // setId(result.user.uid);
    // setName(result.user.displayName);
    // setEmail(result.user.email)
    console.log(result.user.displayName)
    console.log(result.user.email)
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

// SIGNING OUT USER
export const signOut = () => {
    signOut(auth).then(() => {
        console.log("Successfully signed out.")
    }).catch((error) => {
        console.log("ERROR: " + error);
    });
}

export default FirebaseLogin;