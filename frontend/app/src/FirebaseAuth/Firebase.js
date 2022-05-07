import firebase from "firebase/compat/app"
import "firebase/compat/auth"


const app = firebase.initializeApp({
    // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_FIREBASE_APP_ID,
    // measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
    apiKey: "AIzaSyDrE8FpU-o4OXk_yA4Ud9SJEVyM1lwVD0w",
    authDomain: "followup-fcdd6.firebaseapp.com",
    projectId: "followup-fcdd6",
    storageBucket: "followup-fcdd6.appspot.com",
    messagingSenderId: "123391202165",
    appId: "1:123391202165:web:f918168aacc9747339793c",
    measurementId: "G-VH336N9YW5"
});

export const auth = app.auth();
export default app;