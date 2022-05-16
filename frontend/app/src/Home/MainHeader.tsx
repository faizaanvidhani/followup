import './MainHeader.css'
import {useNavigate } from "react-router-dom";

/**
 * MainHeader component. Displays the text for the outward-facing navigation bar.
 */
function MainHeader() {
    const navigate = useNavigate();
        return (
            <div>
                <h1 className="followup">FollowUp</h1>
                <div className="subpages">
                    <h1 className="heading" onClick={() => {navigate("/")}}>HOME</h1>
                    <h1 className="heading" onClick={() => {navigate("/mission");}}>MISSION</h1>
                    <h1 className="heading" onClick={() => {navigate("/contact");}}>CONTACT</h1>
                    <h1 className="heading" onClick={() => {navigate("/about");}}>ABOUT</h1>
                </div>
            </div>
        );
    }

export default MainHeader;