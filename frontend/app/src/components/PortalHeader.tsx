import React from 'react';
import './PortalHeader.css';
import logOut from '../icons/logout.svg';

type headerProps = {
    wantLogOut: boolean
    centered: boolean
}

function showLogOut(wantLogOut: boolean) {
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