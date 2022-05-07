import React from 'react';
import PortalHeader from '../PortalHeader';
import './ProviderInfoPage.css'

type ProviderInfoProps = {
    fname: string,
    lname: string,
    institution: string,
    phoneNumber: string,
    email: string
}
function ProviderInfoPage(props: ProviderInfoProps) {

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
                            <label className="label" htmlFor="fname" id="fname-label">First name</label>
                            <br/>
                            <p className="field">
                                {props.fname}
                            </p>
                            <br/>
                        </div>
                        <div className="last-name-input">
                            <label className="label" htmlFor="lname">Last name</label>
                            <br/>
                            <p className="field">
                                {props.lname}
                            </p>

                            <br/>
                        </div>
                    </div>

                    <div className="break"></div>

                    <div className="clinic-input">
                        <label className="label" htmlFor="clinic-name" id="clinic-name-label">Institution</label>
                        <br/>
                        <p className="field">
                            {props.institution}
                        </p>
                        <br/>
                    </div>
                </div>
            </div>


            <br/>
            <hr/>

            <h3>
                Contact Information
            </h3>

            <div className="contact-info-section">
                <div className="phone-div">
                    <label className="label" htmlFor="phone-number" id="phonenumber-label">Phone Number</label>
                    <br/>
                    <p className="field">
                        {props.phoneNumber}
                    </p>

                    <br/>
                </div>
                
                <div className="email-div">
                    <label className="label" htmlFor="email" id="email-label">Email</label>
                    <br/>
                    <p className="field">
                        {props.email}
                    </p>
                    <br/>
                </div>
                
            </div>
        </div>
    )
}

export default ProviderInfoPage;