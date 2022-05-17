import React, {useContext, useState} from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './ProviderHomePage.css';
import clinic from '../../icons/clinic-icon.svg';
import profile from '../../icons/profile-icon.svg';
import ProviderHeader from './ProviderHeader';
import PortalHeader from '../PortalHeader';
import { NavLink } from "react-router-dom";
import ProviderContext from "./ProviderContext";

// type ProviderHomeProps = {
//     name: string,
//     title: string,
//     clinicName: string
// }

function ProviderHome() {

    const providerContext = useContext(ProviderContext);
    console.log("in provider home")
    console.log(providerContext.demographics)
    console.log(providerContext.patients)
    const firstName = providerContext.demographics['1'];
    const lastName = providerContext.demographics['2'];
    const clinicName = providerContext.demographics['5'];

    return (

        <div className="provider-home">
            <PortalHeader wantLogOut={true} centered={false}/>
            <ProviderHeader firstName={firstName} lastName={lastName} title={'M.D.'} clinicName={clinicName}/>
            {/*<ProviderHeader firstName={'Jane'} lastName={'Doe'} title={'M.D.'} clinicName={'Hospital'}/>*/}

            <div className="provider-home-icons">
                <div className="icon-div" id="clinic-icon-div">
                    <img src={clinic} className="provider-home-icon" alt="clinic icon"/>
                    <b className="icon-text">
                        <NavLink className="navbar-brand" to="/providerPatientGrid">
                            Patients
                        </NavLink>
                    </b>
                </div>

                <div className="icon-div" id="profile-icon-div">
                    <img src={profile} className="provider-home-icon" alt="profile icon"/>
                    <b className="icon-text">
                        <NavLink className="navbar-brand" to="/providerInfoPage">
                            Profile Info
                        </NavLink>
                    </b>
                </div>
            </div>

        </div>
    )
}

export default ProviderHome;