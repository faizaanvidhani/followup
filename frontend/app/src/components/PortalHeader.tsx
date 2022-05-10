import React from 'react';
import './PortalHeader.css';
import logOut from '../icons/logout.svg';
import { auth } from '../FirebaseAuth/Firebase'
import { signOut } from 'firebase/auth';

type headerProps = {
    wantLogOut: boolean
    centered: boolean
}

function showLogOut(wantLogOut: boolean) {
    function logoutGoogle() {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            console.log("ERROR: Failed to sign out.")
            // An error happened.
        });
    }
    if (wantLogOut) {
        return (
            <div className="log-out-div">
                <p className="log-out-text">
                    Log Out
                </p>
                <img src={logOut} className="log-out-icon"/>
            </div>

        )
    }
    return;
}
function PortalHeader(props: headerProps) {
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