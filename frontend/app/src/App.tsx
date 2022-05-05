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
import ProviderInfoPage from './components/provider/ProviderInfoPage';

const data: any[] = []
function App() {
  return (
    <div className="App">
        {/*<Tabs></Tabs>*/}
        <ProviderHomePage name="Jane Doe" title="M.D." clinicName="Rhode Island Hospital"/>
        {/*<ProviderPatientGrid name="Jane Doe" title="M.D." clinicName="Rhode Island Hospital" patients={data}/>*/}
        {/*<ProviderInfoPage fname="Jane" lname="Doe" institution="Rhode Island Hospital" phoneNumber="123-456-7890" email="janedoe@gmail.com"/>*/}
        {/*<NewAccountPage/>*/}
        {/*<ProviderIntakePage/>*/}
    </div>
  );
}

export default App;
