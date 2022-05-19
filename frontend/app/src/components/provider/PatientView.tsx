import React, {useContext, useState} from 'react';
import PortalHeader from '../PortalHeader';
import PatientHeader from './PatientHeader';
import './PatientView.css';
import CurrentPatientContext from "./contexts/CurrentPatientContext";
import Table from 'react-bootstrap/table';

function PatientView() {

    const currentPatient = useContext(CurrentPatientContext);
    console.log(currentPatient.demographics);
    const firstName = currentPatient.demographics[1];
    const lastName = currentPatient.demographics[2];
    const DOB = currentPatient.demographics[3];
    const number = currentPatient.demographics[4];
    const address = currentPatient.demographics[5];

    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index: number) => {
        setToggleState(index);
    }

    const generateRows = () => {
        const rows: JSX.Element[] = [];
        for (const id of currentPatient.symptomIDs) {
            const symptomLog = currentPatient.allSymptomLogs[id];
            rows.push(
                <tr>
                    <td>{symptomLog['date_time']}</td>
                    <td>{symptomLog['symptom_name']}</td>
                    <td>{symptomLog['severity']}</td>
                    <td>{symptomLog['duration']}</td>
                </tr>
            )
        }
        return rows;
    }

    const getSymptomLogs = () => {
        const symptomLogs = [];
        for (const id of currentPatient.symptomIDs) {
            symptomLogs.push(currentPatient.allSymptomLogs[id]);
        }
        return symptomLogs;
    }

    return (
        <div className="patient-page">
            <div className="header-div">
                <PortalHeader wantLogOut={true} centered={true}/>
                <PatientHeader firstName={firstName} lastName={lastName} phoneNumber={number} DOB={DOB}/>
            </div>

            <div className="container">
                <div className="bloc-tabs">
                    <div
                        className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(1)}
                    >Symptom Logs</div>
                    <div
                        className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(2)}
                    >Demographic Info</div>
                    {/*<div*/}
                    {/*    className={toggleState === 3 ? "tabs active-tabs" : "tabs"}*/}
                    {/*    onClick={() => toggleTab(3)}*/}
                    {/*>Questionnaire Templates</div>*/}
                </div>


                <div className="content-tabs">

                    <div className={toggleState === 1 ? "content active-content" : "content"}>

                        <Table striped bordered hover className="symptom-log-table">
                            <thead>
                                <tr>
                                    <th>Date and Time</th>
                                    <th>Symptom</th>
                                    <th>Severity</th>
                                    <th>Duration</th>
                                </tr>
                            </thead>
                            <tbody>
                                {generateRows()}
                            </tbody>
                        </Table>

                    </div>

                    <div className={toggleState === 2 ? "content active-content" : "content"}>

                        <div className="patient-info-page" id="provider-patient-view-patient-info">
                            <div className="profile-section" id="provider-patient-view-profile-section">

                                <div className="name-inputs" id="provider-patient-view-name-inputs">
                                    <div className="first-name-input">
                                        <label className="info-label" htmlFor="fname" id="fname-label">First name</label>
                                        <br/>
                                        <p className="field">
                                            {firstName}
                                        </p>
                                        <br/>
                                    </div>
                                    <div className="last-name-input">
                                        <label className="info-label" htmlFor="lname">Last name</label>
                                        <br/>
                                        <p className="field">
                                            {lastName}
                                        </p>

                                        <br/>
                                    </div>

                                    <div className="dob-input">
                                        <label className="info-label" htmlFor="dob">DOB</label>
                                        <br/>
                                        <p className="field">
                                            {DOB}
                                        </p>

                                        <br/>
                                    </div>
                                </div>

                                <div className="break"></div>

                                <div className="phone-input">
                                    <label className="info-label" htmlFor="number">Phone Number</label>
                                    <br/>
                                    <p className="field">
                                        {number}
                                    </p>

                                    <br/>
                                </div>

                                <div className="address-input">
                                    <label className="info-label" htmlFor="address">Physical Address</label>
                                    <br/>
                                    <p className="field">
                                        {address}
                                    </p>

                                    <br/>
                                </div>


                            </div>
                        </div>
                    </div>

                    {/*<div className={toggleState === 3 ? "content active-content" : "content"}>*/}
                    {/*    <h2>*/}
                    {/*        Content 3*/}
                    {/*    </h2>*/}
                    {/*    <p>*/}
                    {/*        Patient questionnaire templates here.*/}
                    {/*    </p>*/}
                    {/*</div>*/}

                </div>
            </div>
        </div>
    )
}

export default PatientView;