import React from 'react';
import { useNavigate } from "react-router-dom";
import PortalHeader from './PortalHeader';
import './NewAccountPage.css';

function NewAccountPage() {
    let navigate = useNavigate();
    return (
        <body id="new-account-page">
            <div className="background">
                <PortalHeader wantLogOut={true} centered={false}/>
                <div className="account-page-container">
                    <h2 id="account-page-h2">
                        Create a New Account
                    </h2>
                    <hr id="account-page-hr"/>

                    <div className="account-button-container">
                        <button className="account-choice-button" id="patient-button" onClick={() => {navigate('/patientIntake')}}>
                            Patient
                        </button>
                        <button className="account-choice-button" id="provider-button" onClick={() => {navigate('/providerIntake')}}>
                            Provider
                        </button>
                    </div>

                </div>
            </div>
        
        </body>
    )
}

export default NewAccountPage;