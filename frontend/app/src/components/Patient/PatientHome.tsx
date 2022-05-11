import './PatientHome.css';
import { useState } from "react";
import { IconContext } from "react-icons";
import { FaClinicMedical } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import PatientHeader from "./PatientHeader";
import PortalHeader from '../PortalHeader';
import profile from '../../icons/profile-icon.svg';
import addSymptom from '../../icons/addSymptom.svg';
import providerInfo from '../../icons/providerInfo.svg';
import symptomLog from '../../icons/symptomLog.svg';

function PatientHome() {

    return (
        <div className="patient">
            <PortalHeader wantLogOut={true} centered={false}/>
            <PatientHeader name="Jane Doe" dob="01/01/2001" tel="012-345-6789" />
            <div>
                <nav className='navbar'>
                    <div className='navbar-header'>
                        <li className='linkOption'>
                            <div className='icon'>
                            <img src={profile} className="provider-home-icon" alt="profile icon"/>
                            </div>
                            <NavLink className="navbar-brand" to="/profileInfo">
                                Profile Info
                            </NavLink>
                        </li>
                        <li className='linkOption'>
                            <div className='icon'>
                            <img src={symptomLog} className="provider-home-icon" alt="symptom log icon"/>
                            </div>
                            <NavLink className="navbar-brand" to="/symptomLog">
                                Symptom Log
                            </NavLink>
                        </li>
                        <li className='linkOption'>
                            <div className='icon'>
                            <img src={addSymptom} className="provider-home-icon" alt="add symptom icon"/>
                            </div>
                            <NavLink className="navbar-brand" to="/addSymptom">
                                Add Symptom
                            </NavLink>
                        </li>

                        <li className='linkOption'>
                            <div className='icon'>
                            <img src={providerInfo} className="provider-home-icon" alt="provider info icon"/>
                            </div>
                            <NavLink className="navbar-brand" to="/providerInfo">
                                Provider Info
                            </NavLink>
                        </li>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default PatientHome;
