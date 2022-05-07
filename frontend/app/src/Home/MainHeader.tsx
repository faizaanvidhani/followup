import './MainHeader.css'
import { NavLink } from "react-router-dom";

function MainHeader() {
    return (
        <div>
            <h1 className="followup">FollowUp</h1>
            <div className="subpages">
                <h1 className="heading">
                    <NavLink className="nav-link" to="/">
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
        </div>
    );
}

export default MainHeader;