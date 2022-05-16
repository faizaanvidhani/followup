import React, { useContext } from 'react';
import './PortalHeader.css';
import logOut from '../icons/logout.svg';
import { auth } from '../FirebaseAuth/Firebase'
import { signOut } from 'firebase/auth';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import logoutGoogle from "../Home/SignIn"
import UserContext from '../UserContext';

type headerProps = {
    wantLogOut: boolean
    centered: boolean
}

function ShowLogOut(wantLogOut: boolean) {
    const navigate = useNavigate();
    const {setUserType, setCurrentUser} = useContext(UserContext);

    function executeLogOut() {
        signOut(auth).then(() => {
            setCurrentUser(null);
            setUserType(null);
            navigate("/");
            // Sign-out successful.
        }).catch((error) => {
            console.log("ERROR: Failed to sign out user.");
        });

    }

    if (wantLogOut) {
        return (
            <Button className="log-out-button" onClick={executeLogOut} >
                <p className="log-out-text">Log Out</p>
                <img src={logOut} className="log-out-icon"/>
            </Button>
        )
    }
    return;
}
function PortalHeader(props: headerProps) {
    const navigate = useNavigate();
    function logoutGoogle() {
        signOut(auth).then(() => {
            navigate("/");
            // Sign-out successful.
        }).catch((error) => {
            console.log("ERROR: Failed to sign out.")
            // An error happened.
        });
    }

    return (
        <div className = "header">
            <p className= {props.centered ? "centered-logo": "left-logo"}>
                FollowUp
            </p>
            {ShowLogOut(props.wantLogOut)}
        </div>
    )
}

export default PortalHeader;