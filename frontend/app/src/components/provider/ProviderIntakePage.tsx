import React from 'react';
import PortalHeader from '../PortalHeader';
import './ProviderIntakePage.css'

function ProviderIntakePage() {
    
    return (
        <form className="provider-intake-form">
            <PortalHeader wantLogOut={false} centered={false}/>
            <h3>
                Profile Information
            </h3>
            <div className="profile-input">
                <div className="name-inputs">
                    <div className="first-name-input">
                        <label className="input-box-label" htmlFor="fname" id="fname-label">First name</label>
                        <br/>
                        <input className="provider-input-box" type="text" id="fname" name="fname" required={true}/>
                        <br/>
                    </div>
                    <div className="last-name-input">
                        <label className="input-box-label" htmlFor="lname">Last name</label>
                        <br/>
                        <input className="provider-input-box" type="text" id="lname" name="lname" required={true}/>
                        <br/>
                    </div>

                    <div className="title-input">
                        <label className="input-box-label" htmlFor="title">Title</label>
                        <br/>
                        <input className="provider-input-box" type="text" id="title" name="title" required={true}/>
                        <br/>
                    </div>
                </div>

                <div className="break"></div>

                <div className="clinic-input">
                    <label className="input-box-label" htmlFor="clinic-name" id="clinic-name-label">Institution</label>
                    <br/>
                    <input className="provider-input-box" type="text" id="clinic-name" name="clinic-name" required={true}/>
                    <br/>
                </div>

            </div>

            <br/>
            <hr id="intake-page-line"/>

            <h3>
                Contact Information
            </h3>

            <div className="contact-info-section">
                <label className="input-box-label" htmlFor="phone-number" id="phonenumber-label">Phone Number</label>
                <br/>
                <input className="provider-input-box" type="text" id="phone-number" name="phone-number" required={true}/>
                <br/>

                <label className="input-box-label" htmlFor="email" id="email-label">Email</label>
                <br/>
                <input className="provider-input-box" type="text" id="email" name="email" required={true}/>
                <br/>
            </div>

            <div className="submit">
                <input type="submit" value="Submit"/>
            </div>

        </form>
    )
}

export default ProviderIntakePage;