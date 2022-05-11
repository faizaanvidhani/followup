import './PatientHome.css';
import { useState } from "react";
import { NavLink } from "react-router-dom";
import PatientHeader from "./PatientHeader";
import PortalHeader from '../PortalHeader';
import profile from '../../icons/profile-icon.svg';
import addSymptom from '../../icons/addSymptom.svg';
import symptomLog from '../../icons/symptomLog.svg';

function PatientHome() {

    return (
        <div className="patient-home">
            <PortalHeader wantLogOut={true} centered={false} />
            <PatientHeader name="Jane Doe" dob="01/01/2001" tel="012-345-6789" />
            <div className='patient-home-icons'>
                <div className='icon-div' id = 'pat-profile-icon-div'>
                    <img src={profile} className="provider-home-icon" alt="profile icon" />
                    <b className="icon-text">
                        <NavLink className="navbar-brand" to="/profileInfo">
                            Profile Info
                        </NavLink>
                    </b>
                </div>


                <div className='icon-div' id = 'symptom-icon-div'>
                    <img src={symptomLog} className="provider-home-icon" alt="symptom log icon" />
                    <b className="icon-text">
                        <NavLink className="navbar-brand" to="/symptomLog">
                            Symptom Log
                        </NavLink>
                    </b>
                </div>


                <div className='icon-div' id = 'add-icon-div'>
                    <img src={addSymptom} className="provider-home-icon" alt="add symptom icon" />
                    <b className="icon-text">
                        <NavLink className="navbar-brand" to="/addSymptom">
                            Add Symptom
                        </NavLink>
                    </b>
                </div>

            </div>
        </div >
    );
}

export default PatientHome;
