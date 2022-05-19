import React, {useContext} from 'react';
import profile from '../../icons/profile-icon.svg';
import './ProviderPatientGrid.css';
import ProviderHeader from './ProviderHeader';
import PortalHeader from '../PortalHeader';
import ProviderContext from "./contexts/ProviderContext";
import axios from "axios";
import CurrentPatientContext from "./contexts/CurrentPatientContext";
import {useNavigate} from "react-router-dom";


function PatientGrid() {

    const providerContext = useContext(ProviderContext);
    const currentPatientContext = useContext(CurrentPatientContext);
    const firstName = providerContext.demographics['1'];
    const lastName = providerContext.demographics['2'];
    const clinicName = providerContext.demographics['5'];
    const patients = providerContext.patients;
    const patientsData = providerContext.patientsData;
    const navigate = useNavigate();

    async function navigateToPatient(patientID: string) {
        axios.post('http://localhost:4567/patient-data', {patient_id: patientID})
            .then(response => {
                // console.log(response.data)
                currentPatientContext.setCurrentPatientDemos(response.data['patientData'])
                currentPatientContext.setCurrentPatientLogIDs(response.data['logIDs'])
                // console.log("after post")
                // console.log(currentPatientContext.symptomIDs)
            })
        // console.log("current patient demographics")
        // console.log(currentPatientContext.demographics)
        axios.post('http://localhost:4567/generic-table-data', {table_name: 'SymptomLog'})
            .then(response => {
                currentPatientContext.setPatientLogs(response.data)
                navigate('/provider-patientView')
            })
    }

    function generatePatients() {
        const numPatients: number = patientsData.length;
        const patientElements: JSX.Element[] = [];

        for (let i = 0; i < numPatients; i++) {
            let patientID = patientsData[i][0];
            let firstName = patientsData[i][1];
            let lastName = patientsData[i][2];
            patientElements.push(
                <div className="patient-grid-icon-div" onClick={() => {
                    navigateToPatient(patientID)
                }}>
                    <img src={profile} className="patient-grid-icon" alt="profile icon"/>
                    {lastName},&nbsp;{firstName}
                </div>
            )
        }
        return patientElements;
    }

    return (
        <div className="patient-grid-class" key="patient-grid-key">
            <PortalHeader wantLogOut={true} centered={false}/>
            <ProviderHeader firstName={firstName} lastName={lastName} title={'M.D.'} clinicName={clinicName}></ProviderHeader>
            <span className="patient-grid-div">
                <h2 id="patients-header">
                    Patients
                </h2>

                <input id="patient-filter"
                       type="text"
                       placeholder="Search for patients"/>
            </span>

            <div className="patient-grid-icons">
                {generatePatients()}
            </div>
        </div>
    )
}

export default PatientGrid;