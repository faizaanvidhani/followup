import PortalHeader from "../PortalHeader";
import PatientHeader from "./PatientHeader";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import UserContext from '../../UserContext';
import "./AddSymptom.css";

function AddSymptomContext() {
    const navigate = useNavigate();
    const {currentUser} = useContext(UserContext);

    const redirectHome = () => {
        navigate('/patientHome');
    }

    const redirectPrevious = () => {
        navigate('/addSymptom');
    }

    return (
        <div className="add-symptom">
            <PortalHeader wantLogOut={true} centered={false} />
            <PatientHeader firstName="Jane" lastName="Doe" dob="01/01/2001" tel="012-345-6789" />
            <Container id='container' className="d-flex align-items-center justify-content-center" style={{ minHeight: "40vh" }}>
                <form>
                    <div className="form-group" id='symptomHelp'>
                        <small className="form-text text-muted">Additional Comments: </small>
                        <input type="text" className="form-control" id="symptomTextContext" placeholder="Enter symptom context" required></input>
                        <br></br>
                    </div>
                    <div className="form-group">
                        <div className="button-group">
                            <button type="submit" id='submit-btn' className="btn btn-primary" onClick={redirectHome}>Submit</button>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="button-group">
                            <button type="submit" id='prev-btn' className="btn btn-primary" onClick={redirectPrevious}>Previous</button>
                        </div>
                    </div>
                </form>

            </Container>
        </div>
    );

}

export default AddSymptomContext;