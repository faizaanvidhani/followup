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
        <div>
            <PatientHome name={'Jane Doe'} dob={'04/05/2001'} tel={'504-405-9585'}></PatientHome>
        </div>
    </div>
  );
}

export default App;
