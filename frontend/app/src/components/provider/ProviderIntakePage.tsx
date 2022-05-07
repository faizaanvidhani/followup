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
                        <input className="provider-input-box" type="text" id="fname" name="fname"/>
                        <br/>
                    </div>
                    <div className="last-name-input">
                        <label className="input-box-label" htmlFor="lname">Last name</label>
                        <br/>
                        <input className="provider-input-box" type="text" id="lname" name="lname"/>
                        <br/>
                    </div>

                    <div className="title-input">
                        <label className="input-box-label" htmlFor="title">Title</label>
                        <br/>
                        <input className="provider-input-box" type="text" id="title" name="title"/>
                        <br/>
                    </div>
                </div>

                <div className="break"></div>

                <div className="clinic-input">
                    <label className="input-box-label" htmlFor="clinic-name" id="clinic-name-label">Institution</label>
                    <br/>
                    <input className="provider-input-box" type="text" id="clinic-name" name="clinic-name"/>
                    <br/>
                </div>

            </div>

            <br/>
            <hr/>

            <h3>
                Contact Information
            </h3>

            <div className="contact-info-section">
                <label className="input-box-label" htmlFor="phone-number" id="phonenumber-label">Phone Number</label>
                <br/>
                <input className="provider-input-box" type="text" id="phone-number" name="phone-number"/>
                <br/>

                <label className="input-box-label" htmlFor="email" id="email-label">Email</label>
                <br/>
                <input className="provider-input-box" type="text" id="email" name="email"/>
                <br/>
            </div>

            <div className="submit">
                <input type="submit" value="Submit"/>
            </div>

        </form>
    )
}

export default ProviderIntakePage;