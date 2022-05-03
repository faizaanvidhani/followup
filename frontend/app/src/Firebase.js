// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,
    GoogleAuthProvider,
    signInWithRedirect,
    getRedirectResult,
    onAuthStateChanged } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const provider = new GoogleAuthProvider
export const auth = getAuth()

export const signInWithGoogle = () => {
    signInWithRedirect(auth, provider)
        .then((result) => {
            getRedirectResult();
        })
        .catch((error) => {
            console.log("ERROR: " + error);
        });
};

getRedirectResult(auth).then((result) => {
        // This gives you a Google Access Token. You can use it to access Google APIs.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        // The signed-in user info.
        console.log(result.user.displayName)
        console.log(result.user.email)
        //console.log(result.user.displayName);
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

export const signOut = () => {
    signOut(auth).then(() => {
        console.log("Successfully signed out.")
    }).catch((error) => {
        console.log("ERROR: " + error);
    });
}