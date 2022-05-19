import React, {useContext} from 'react';
import PortalHeader from '../PortalHeader';
import './ProviderInfoPage.css'
import ProviderContext from "./contexts/ProviderContext";

function ProviderInfoPage() {

    const provider = useContext(ProviderContext);
    const firstName = provider.demographics['1'];
    const lastName = provider.demographics['2'];
    const email = provider.demographics['3'];
    const phone = provider.demographics['4'];
    const clinicName = provider.demographics['5'];

    return (
        <div className="provider-info-page">
            <PortalHeader wantLogOut={true} centered={false}/>
            <div className="profile-section">
                <h3>
                    Profile Information
                </h3>
                <div className="profile-info">

                    <div className="name-inputs">
                        <div className="first-name-input">
                            <label className="info-label" htmlFor="fname" id="fname-label">First name</label>
                            <br/>
                            <p className="field">
                                {firstName}
                            </p>
                            <br/>
                        </div>
                        <div className="last-name-input">
                            <label className="info-label" htmlFor="lname">Last name</label>
                            <br/>
                            <p className="field">
                                {lastName}
                            </p>

                            <br/>
                        </div>
                    </div>

                    <div className="break"></div>

                    <div className="clinic-input">
                        <label className="info-label" htmlFor="clinic-name" id="clinic-name-label">Institution</label>
                        <br/>
                        <p className="field">
                            {clinicName}
                        </p>
                        <br/>
                    </div>
                </div>
            </div>


            <br/>
            <hr id="info-page-line"/>

            <h3>
                Contact Information
            </h3>

            <div className="contact-info-section">
                <div className="phone-div">
                    <label className="info-label" htmlFor="phone-number" id="phonenumber-label">Phone Number</label>
                    <br/>
                    <p className="field">
                        {phone}
                    </p>

                    <br/>
                </div>
                
                <div className="email-div">
                    <label className="info-label" htmlFor="email" id="email-label">Email</label>
                    <br/>
                    <p className="field">
                        {email}
                    </p>
                    <br/>
                </div>
                
            </div>
        </div>
    )
}

export default ProviderInfoPage;