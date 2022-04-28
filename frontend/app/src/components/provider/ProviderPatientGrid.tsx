import React from 'react';
import { CgProfile } from "react-icons/cg";
import {IconContext} from "react-icons";
import './ProviderPatientGrid.css';
import './ProviderInfo.css';

type PatientGridProps = {
    name: string,
    title: string,
    clinicName: string,
    patients: any[]
}

function generatePatients(patients: any[]) {
    const numPatients: number = patients.length;
    const patientElements: JSX.Element[] = [];

    for (let i = 0; i < numPatients; i++) {
        patientElements.push(
            <div className="patient-grid-icon-div">
                {/*<img src="../../../icons/profile-icon.png" id="patient-icon"/>*/}
                <IconContext.Provider value={{size: '50px'}}>
                    <CgProfile/>
                </IconContext.Provider>
                Last, First
            </div>
        )
    }

    return patientElements
}

function PatientGrid(props: PatientGridProps) {
    return (
        <div>
            <div className="provider-info">
                <h1 className="provider-name">
                    {props.name}, {props.title}
                </h1>
                <h3 className="provider-clinic">
                    {props.clinicName}
                </h3>
            </div>
            <hr/>

            <span className="patient-grid-div">
                <h2 id="patients-header">
                    Patients
                </h2>

                <input id="patient-filter"
                       type="text"
                       placeholder="Search here"/>
            </span>

            <div className="patient-grid-icons">
                {generatePatients(props.patients)}
            </div>

        </div>
    )
}

export default PatientGrid;