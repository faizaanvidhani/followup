import React from 'react';
import profile from '../../icons/profile-icon.svg';
import './PatientHeader.css';

type PatientHeaderProps = {
    firstName: string,
    lastName: string,
    DOB: string,
    phoneNumber: string
}

function PatientHeader(props: PatientHeaderProps) {
    return (
        <div className="patient-header">
            <div className="patient-info">

                <div className="image-container">
                    <img id="profile-icon" src={profile}/>
                </div>

                <div>
                    <h1 className="patient-name">
                        {props.firstName} {props.lastName}
                    </h1>
                    <p className="patient-contact-info">
                        <b> DOB </b>&nbsp;{props.DOB}&nbsp;|&nbsp;<b> Tel </b>&nbsp;{props.phoneNumber}
                    </p>
                </div>
            </div>

            <br/>
            <br/>
            <br/>
        </div>
    )
}

export default PatientHeader;