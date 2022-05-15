import './PatientHome.css';
import {NavLink, useNavigate} from "react-router-dom";
import PatientHeader from "./PatientHeader";
import PortalHeader from '../PortalHeader';
import profile from '../../icons/profile-icon.svg';
import addSymptom from '../../icons/addSymptom.svg';
import symptomLog from '../../icons/symptomLog.svg';
import {useContext, useState } from "react";
import UserContext from '../../UserContext';
import {auth} from "../../FirebaseAuth/Firebase";
import {Card, Container} from "react-bootstrap";
import axios from 'axios';


function PatientHome() {
    const navigate = useNavigate();
    const {currentUser} = useContext(UserContext);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dob, setDob] = useState("");
    const [tel, setTel] = useState("");
    const [data, setData] = useState(null);

    // Fetch patient data from database
    const loadData = async() => {
        axios.post('http://localhost:4567/patient-data', {patient_id: '0eSEx9X1wlZeLQpaL3JqoSfJyKU2'})
            .then((response: any) => {
                setData(response.data)
                setFirstName(data!['patientData'][1])
                setLastName(data!['patientData'][2])
                setDob(data!['patientData'][3])
                setTel(data!['patientData'][4])
                console.log(data)
            })
    }

    return (
        <div className="patient-home">
            <PortalHeader wantLogOut={true} centered={false} />
            <PatientHeader firstName={firstName} lastName={lastName} dob={dob} tel={tel} />

            <button id="fake-button" onClick={loadData}> Load data </button>
            <Container className="dashboard-background">
                <Card id = "dashboard-card">
                    <h1 id="dashboard-heading">Dashboard</h1>
                    <div className='patient-home-icons'>
                        <div className='icon-div' id ='pat-profile-icon-div' onClick={() => {navigate("/profileInfo")}}>
                            <img src={profile} className="provider-home-icon" alt="profile icon" />
                            <p className="patient-icon-text">Profile Info</p>
                        </div>


                        <div className='icon-div' id = 'symptom-icon-div' onClick={() => {navigate("/symptomLog")}}>
                            <img src={symptomLog} className="provider-home-icon" alt="symptom log icon" />
                            <p className="patient-icon-text">Symptom Log</p>
                        </div>


                        <div className='icon-div' id = 'add-icon-div'>
                            <img src={addSymptom} className="provider-home-icon"
                                 alt="add symptom icon"
                                 onClick={() => {navigate("/addSymptom")}}/>
                            <p className="patient-icon-text">Add Symptom</p>
                        </div>
                    </div>
                </Card>
            </Container>
        </div >
    );
}

export default PatientHome;
