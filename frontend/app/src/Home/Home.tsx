import './Home.css';
import home from '../images/home.svg';
import MainHeader from './MainHeader';
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap';
import { useContext } from 'react';
import UserContext from '../UserContext'

function Home() {
    const {userType, currentUser} = useContext(UserContext);
    const navigate = useNavigate();

    function redirectUser() {
        if (currentUser) {
            if (userType === "Patient") {
                navigate("/patientHome");
            } else if (userType === "Provider") {
                navigate("/providerHome");
            }
        } else {
            navigate("/login");
        }
    }
    return (
        <div>
            <MainHeader />
            <img className="homeImage" src={home} alt="home"/>
            <h1 className="homeDescription">Streamlined Movement Symptom-Tracking</h1>
            <button className="portal" onClick={redirectUser}>Enter Portal</button>
        </div>
    );
}

export default Home;