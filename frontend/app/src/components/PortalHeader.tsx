import React from 'react';
import './PortalHeader.css';
import logOut from '../icons/logout.svg';
import { auth } from '../FirebaseAuth/Firebase'
import { signOut } from 'firebase/auth';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

type headerProps = {
    wantLogOut: boolean
    centered: boolean
}

function showLogOut(wantLogOut: boolean) {
    if (wantLogOut) {
        return (
            <Button className="log-out-div" >
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
            {showLogOut(props.wantLogOut)}
        </div>
    )
}

export default PortalHeader;