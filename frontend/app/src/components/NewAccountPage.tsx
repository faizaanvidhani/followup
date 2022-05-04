import React from 'react';
import PortalHeader from './PortalHeader';
import './NewAccountPage.css';

function NewAccountPage() {
    return (
        <body>
            <div className="background">
                <PortalHeader wantLogOut={false}/>
                <div className="container">
                    <h2>
                        Create a New Account
                    </h2>
                    <hr/>

                    <div className="button-container">
                        <button className="button" id="patient-button">
                            Patient
                        </button>
                        <button className="button" id="provider-button">
                            Provider
                        </button>
                    </div>

                </div>
            </div>
        
        </body>
    )
}

export default NewAccountPage;