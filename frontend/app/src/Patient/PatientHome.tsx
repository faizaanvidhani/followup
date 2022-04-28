import {
    BrowserRouter as Router,
    Route,
    NavLink
} from "react-router-dom";
import './homePage.css';

function PatientHome() {
    return (

      <div className="patient">
          <h1 className='header'>Jane Doe</h1>
          <nav className='navbar'>
              <div className='navbar-header'>
                  <li className='linkOption'>Profile Info</li>
                  <li className='linkOption'>Symptom Log</li>
                  <li className='linkOption'>Add Symptom</li>
                  <li className='linkOption'>Provider Info</li>
                  <li className='linkOption'>Treatment Plan</li>
              </div>
          </nav>
      </div>
    );
}

export default PatientHome;
