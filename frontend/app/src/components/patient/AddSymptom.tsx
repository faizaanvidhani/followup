import { Card, Container } from 'react-bootstrap';
import PatientHeader from './PatientHeader';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import PortalHeader from '../PortalHeader';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AddSymptom.css';

function AddSymptom() {

    const navigate = useNavigate();
    const redirect = () => {
        navigate('/addSymptomContext');
    }

    return (
        <div className="add-symptom">
            <PortalHeader wantLogOut={true} centered={false} />
            <PatientHeader name="Jane Doe" dob="01/01/2001" tel="012-345-6789" />

            <Container id='container' className="d-flex align-items-center justify-content-center" style={{ minHeight: "40vh" }}>
                <form>
                    <div className="form-group">
                        <br></br>
                        <small className="form-text text-muted">Select a symptom: </small>
                        <select className="form-control" id="symptom" required>
                            <option>Tremor</option>
                            <option>Bradykinesia</option>
                            <option>Speech Changes</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <br></br>
                        <small id="severityHelp" className="form-text text-muted">Severity: </small>
                        <div className="form-check">
                            <select className="form-control" id="severity" required>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <div className="date-time">
                                <br></br>
                                <small id="dateHelp" className="form-text text-muted">Date and Time: </small>
                                <input type="datetime-local" className="form-control" id="date" placeholder="Date" required></input>
                                <br></br>
                                <small id="durationHelp" className="form-text text-muted">Duration (mins): </small>
                                <input type="number" className="form-control" id="duration" placeholder="Duration" required></input>
                                <br></br>
                            </div>
                        </div>

                        <div className="form-group">
                            <br></br>
                            <div className="button-group">
                                <button id="next-button" type="submit" className="btn btn-primary" onClick={redirect}>Next</button>
                            </div>
                            <br></br>
                            <br></br>
                        </div>

                    </div>

                </form>
            </Container>



        </div>

    );
}
export default AddSymptom;