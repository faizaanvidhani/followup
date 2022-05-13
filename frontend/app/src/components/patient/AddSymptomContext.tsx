import PortalHeader from "../PortalHeader";
import PatientHeader from "./PatientHeader";
import {Container}  from "react-bootstrap";

// and a previous button that will direct to AddSymptom page
function AddSymptomContext() { 
    const redirect = () => {
        window.location.href = '/patientHome';
    }

    return (
        <div className="add-symptom">
            <PortalHeader wantLogOut={true} centered={false} />
            <PatientHeader name="Jane Doe" dob="01/01/2001" tel="012-345-6789" />
            <Container id="container" className="d-flex align-items-center justify-content-center" style={{ minHeight: "55vh", maxWidth: "55vh" }}>
                <form>
                    <div className="form-group">
                        <small id="symptomHelp" className="form-text text-muted">Additional Comments: </small>
                        <br></br>
                    </div>
                </form>
                <div className="form-group">
                    <div className="button-group">
                        <button type="submit" className="btn btn-primary" onClick={redirect}>Next</button>
                    </div>
                </div>
            </Container>
        </div>
    );

}

export default AddSymptomContext;