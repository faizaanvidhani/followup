import React from 'react';
import logo from './logo.svg';
import './App.css';
import PatientHome from "./Patient/PatientHome";
import { signInWithGoogle, signOut } from "./Firebase";
import './components/login.css';

function App() {
  return (
    <div className="App">
        <div>
            <button className="login" onClick={signInWithGoogle}>Sign In With Google</button>
        </div>
        <br/>
        <div>
            <button className="login" onClick={signOut}>Sign Out</button>
        </div>
        <br/>
    </div>
  );
}

export default App;
