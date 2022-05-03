import './Home.css';
import home from '../images/home.svg';
import { NavLink } from "react-router-dom";

function Home() {
    return (
        <div>
            <h1 className="followup">FollowUp</h1>
            <div className="subpages">
                <h1 className="heading">
                    <NavLink className="nav-link" to="/home">
                        Home
                    </NavLink>
                </h1>
                <h1 className="heading">
                    <NavLink className="nav-link" to="/mission">
                        Mission
                    </NavLink>
                </h1>
                <h1 className="heading">
                    <NavLink className="nav-link" to="/contact">
                        Contact
                    </NavLink>
                </h1>
                <h1 className="heading">
                    <NavLink className="nav-link" to="/about">
                        About
                    </NavLink>
                </h1>
            </div>
                <img className="homeImage" src={home} alt="home"/>
                <h1 className="homeDescription">Streamlined Movement Symptom-Tracking</h1>
                <button className="portal">Enter Portal</button>
        </div>

    );
}

export default Home;