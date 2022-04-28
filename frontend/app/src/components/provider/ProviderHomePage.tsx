import React from 'react';
import './ProviderHomePage.css';

type ProviderHomeProps = {
    name: string,
    title: string,
    clinicName: string
}

function ProviderHome(props: ProviderHomeProps) {
    return (
        <div className="provider-home">

            <div className="provider-info">
                <h1 className="provider-name">
                    {props.name}, {props.title}
                </h1>
                <h3 className="provider-clinic">
                    {props.clinicName}
                </h3>
            </div>

            <br/>
            <hr/>
            <br/>
            <br/>
            <br/>

            <div className="provider-home-icons">
                <div className="icon-div">
                    <img src="../../../icons/clinic-icon.png" id="patient-icon"/>
                    <b className="icon-text">
                        Patients
                    </b>
                </div>

                <div className="icon-div">
                    <img src="../../../icons/survey-icon.png" id="survey-icon"/>
                    <b className="icon-text">
                        Patient Questionnaires
                    </b>
                </div>

                <div className="icon-div">
                    <img src="../../../icons/profile-icon.png" id="profile-icon"/>
                    <b className="icon-text">
                        Profile Info
                    </b>
                </div>
            </div>

        </div>
    )
}

export default ProviderHome;