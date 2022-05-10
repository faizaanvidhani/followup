import './MainHeader.css'
import { NavLink } from "react-router-dom";

function MainHeader() {
    return (
        <div>
            <h1 className="followup">FollowUp</h1>
            <div className="subpages">
                <h1 className="heading">
                    <NavLink className="nav-link" to="/">
                        HOME
                    </NavLink>
                </h1>
                <h1 className="heading">
                    <NavLink className="nav-link" to="/mission">
                        MISSION
                    </NavLink>
                </h1>
                <h1 className="heading">
                    <NavLink className="nav-link" to="/contact">
                        CONTACT
                    </NavLink>
                </h1>
                <h1 className="heading">
                    <NavLink className="nav-link" to="/about">
                        ABOUT
                    </NavLink>
                </h1>
            </div>
        </div>
    );
}

export default MainHeader;