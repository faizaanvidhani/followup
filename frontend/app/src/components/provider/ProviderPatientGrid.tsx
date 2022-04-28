import React from 'react';

type PatientGridProps = {
    name: string,
    title: string,
    clinicName: string,
    patients: []
}

function generatePatients(patients: []) {
    const numPatients: number = patients.length;
    const patientElements: JSX.Element[] = [];

    for (let i = 0; i < numPatients; i++) {
        patientElements.push(
            <div className="patient-grid-icon">
                <img src="../../../icons/icons8-clinic-80.png" id="patient-icon"/>
                Last, First
            </div>
        )
    }

    return patientElements
}

function PatientGrid(props: PatientGridProps) {
    return (
        <div>
            <h1 className="provider-name">
                {props.name}, {props.title}
            </h1>
            <br/>
            <h3 className="provider-clinic-name">
                {props.clinicName}
            </h3>
            <br/>
            <hr/>

            <h2>
                Patients
            </h2>

            <input id="patient-filter"
                   type="text"
                   placeholder="Search here"/>

            <div className="patient-grid-icons">
                {generatePatients(props.patients)}
            </div>

        </div>
    )
}

export default PatientGrid;