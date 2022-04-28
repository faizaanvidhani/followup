import React from 'react';
import logo from './logo.svg';
import './App.css';
import { signInWithGoogle, signOut } from "./Firebase";
import './components/login.css';
import ProviderHomePage from "./components/provider/ProviderHomePage";
import ProviderPatientGrid from "./components/provider/ProviderPatientGrid";

const data: any[] = []
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
        {/*<div>*/}
        {/*    <ProviderPatientGrid name="Jane Doe" title="M.D." clinicName="Hospital" patients={data}></ProviderPatientGrid>*/}
        {/*</div>*/}
    </div>
  );
}

export default App;
