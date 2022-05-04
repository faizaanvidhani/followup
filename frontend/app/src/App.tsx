import React from 'react';
import logo from './logo.svg';
import './App.css';
import { signInWithGoogle, signOut } from "./Firebase";
import './components/login.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import ProviderHomePage from "./components/provider/ProviderHomePage";
import ProviderPatientGrid from "./components/provider/ProviderPatientGrid";
import ProviderIntakePage from './components/provider/ProviderIntakePage';
import Tabs from './components/provider/Tabs';
import PortalHeader from './components/PortalHeader';
import NewAccountPage from './components/NewAccountPage';

const data: any[] = []
function App() {
  return (
    <div className="App">
<<<<<<< HEAD
        {/*<Tabs></Tabs>*/}
        {/*<ProviderHomePage name="Jane Doe" title="M.D." clinicName="Rhode Island Hospital"/>*/}
        {/*<ProviderPatientGrid name="Jane Doe" title="M.D." clinicName="Rhode Island Hospital" patients={data}></ProviderPatientGrid>*/}
        {/*<NewAccountPage></NewAccountPage>*/}
        <ProviderIntakePage></ProviderIntakePage>

=======
        <div>
            <button className="login" onClick={signInWithGoogle}>Sign In With Google</button>
        </div>
        <br/>
        <div>
            <button className="login" onClick={signOut}>Sign Out</button>
        </div>
        {/*<div>*/}
        {/*    <ProviderHomePage name="Jane Doe" title="M.D." clinicName="Hospital"></ProviderHomePage>*/}
        {/*</div>*/}
        <div>
            <ProviderPatientGrid name="tJane Doe" title="M.D." clinicName="Hospital" patients={data}></ProviderPatientGrid>
        </div>
>>>>>>> eb195e895f1b55bb22796f1ebd5ca1e604608709
    </div>
  );
}

export default App;
