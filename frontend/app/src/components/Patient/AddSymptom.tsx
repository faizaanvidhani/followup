import { Card, Container } from 'react-bootstrap';
import PatientHeader from "./PatientHeader";
import { useState, useEffect } from 'react';
import PortalHeader from '../PortalHeader';
import 'bootstrap/dist/css/bootstrap.min.css';

function AddSymptom() {

    return (
        <div className="add-symptom">
            <PortalHeader wantLogOut={true} centered={false} />
            <PatientHeader name="Jane Doe" dob="01/01/2001" tel="012-345-6789" />

            <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "40vh" }}>
                <form>
                    <div className="form-group">
                        <small id="symptomHelp" className="form-text text-muted">Select a symptom: </small>
                        <select className="form-control" id="symptom">
                            <option>Tremor</option>
                            <option>Bradykinesia</option>
                            <option>Speech Changes</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <br></br>
                        <small id="severityHelp" className="form-text text-muted">Severity: </small>
                        <div className="form-check">
                        
                        </div>

                        <div className="form-group">
                            <div className="date-time">
                                <br></br>
                                <small id="dateHelp" className="form-text text-muted">Date and Time: </small>
                                <input type="datetime-local" className="form-control" id="date" placeholder="Date"></input>
                                <br></br>
                                <small id="durationHelp" className="form-text text-muted">Duration (mins): </small>
                                <input type="number" className="form-control" id="duration" placeholder="Duration"></input>
                                <br></br>
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="button-group">
                                <button type="submit" className="btn btn-primary">Next</button>
                            </div>
                        </div>

                    </div>

                </form>
            </Container>



        </div>

    );
}

export default AddSymptom;