import './Home.css';
import home from '../images/home.svg';
import MainHeader from './MainHeader';
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap';

function Home() {
    const navigate = useNavigate();

    function goToLogin() {
        navigate("/login");
    }
    return (
        <div>
            <MainHeader />
            <img className="homeImage" src={home} alt="home"/>
            <h1 className="homeDescription">Streamlined Movement Symptom-Tracking</h1>
            <button className="portal" onClick={goToLogin}>Enter Portal</button>

            <button>
                <NavLink className="nav-link" to="/providerIntakePage">
                    Provider
                </NavLink>
                <NavLink className="nav-link" to="/patientHome">
                    Patient
                </NavLink>
            </button>
        </div>
    );
}

export default Home;