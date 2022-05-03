import './Home.css';
import home from './images/home.svg';

function Home() {
    return (
        <div>
            <h1 className="followup">FollowUp</h1>
            <div className="subpages">
                <h1 className="heading">Home</h1>
                <h1 className="heading">Mission</h1>
                <h1 className="heading">Contact</h1>
                <h1 className="heading">About</h1>
            </div>
                <img className="homeImage" src={home} alt="home"/>
                <h1 className="homeDescription">Streamlined Movement Symptom-Tracking</h1>
                <button className="portal">Enter Portal</button>
        </div>

    );
}

export default Home;