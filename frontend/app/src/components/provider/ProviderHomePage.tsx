import React, {useContext, useState} from 'react';
import { useNavigate } from "react-router-dom";
import './ProviderHomePage.css';
import clinic from '../../icons/clinic-icon.svg';
import profile from '../../icons/profile-icon.svg';
import ProviderHeader from './ProviderHeader';
import PortalHeader from '../PortalHeader';
import ProviderContext from "./contexts/ProviderContext";
import axios from "axios";

// type ProviderHomeProps = {
//     name: string,
//     title: string,
//     clinicName: string
// }

function ProviderHome() {

    const providerContext = useContext(ProviderContext);
    const navigate = useNavigate();
    console.log("now in provider page")
    console.log(providerContext);
    const firstName = providerContext.demographics['1'];
    const lastName = providerContext.demographics['2'];
    const clinicName = providerContext.demographics['5'];

    // function getAllPatientData() {
    //     const patientData: any = [];
    //     console.log("number of patients" + providerContext.patients.length )
    //     if (providerContext.patients.length > 0) {
    //         for (let i=0; i < providerContext.patients.length; i++) {
    //             let patientID = providerContext.patients[i];
    //             axios.post('http://localhost:4567/patient-data', {patient_id: patientID})
    //                 .then(response => {
    //                     // let symptomArr = response.data['logIDs']
    //                     patientData.push(response.data['patientData'])
    //                     // patientSymptoms.push(symptomArr.unshift(patientID))
    //                 })
    //         }
    //     }
    //     providerContext.setPatientsData(patientData);
    // }

    // getAllPatientData();

    return (

        <div className="provider-home">
            <PortalHeader wantLogOut={true} centered={false}/>
            <ProviderHeader firstName={firstName} lastName={lastName} title={'M.D.'} clinicName={clinicName}/>

            <div className="provider-home-icons">
                <div className="icon-div" id="clinic-icon-div" onClick={() => {navigate("/providerPatientGrid")}}>
                    <img src={clinic} className="provider-home-icon" alt="clinic icon"/>
                    <p className="icon-text">
                        Patients
                    </p>
                </div>

                <div className="icon-div" id="profile-icon-div" onClick={() => {navigate("/providerInfoPage")}}>
                    <img src={profile} className="provider-home-icon" alt="profile icon"/>
                    <p className="icon-text">
                        Profile Info
                    </p>
                </div>
            </div>

        </div>
    )
}

export default ProviderHome;