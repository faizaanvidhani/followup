import React from 'react';
import logo from './logo.svg';
import './App.css';
import { signInWithGoogle, signOut } from "./Firebase";
import './components/login.css';
import ProviderHomePage from "./components/provider/ProviderHomePage";

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
        <div>
            <ProviderHomePage name="Jane Doe" title="M.D." clinicName="Hospital"></ProviderHomePage>
        </div>
    </div>
  );
}

export default App;
