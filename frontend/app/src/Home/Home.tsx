import './Home.css';
import home from '../images/home.svg';
import MainHeader from './MainHeader';
import { NavLink } from "react-router-dom";

function Home() {
    return (
        <div>
            <MainHeader />
            <img className="homeImage" src={home} alt="home"/>
            <h1 className="homeDescription">Streamlined Movement Symptom-Tracking</h1>
            <button className="portal">
                <NavLink className="nav-link" to="/signup">
                    Enter Portal
                </NavLink>
                <NavLink className="nav-link" to="/providerHome">
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