import './Home.css';
import home from '../images/home.svg';
import MainHeader from './MainHeader';
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap';
import { useContext } from 'react';
import UserContext from '../UserContext'

function Home() {
    const {currentUser} = useContext(UserContext);
    const navigate = useNavigate();

    function redirectUser() {
        console.log(currentUser);
        if (currentUser !== null) {
            // user is currently signed in
            navigate("/profileInfo");
        } else {
            // user is currently signed out
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