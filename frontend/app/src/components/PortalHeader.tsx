import React from 'react';
import './PortalHeader.css';
import logOut from '../icons/logout.svg';

type headerProps = {
    wantLogOut: boolean
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
        <div className="portal-header">
            <p className="logo">
                FollowUp
            </p>
            {showLogOut(props.wantLogOut)}
        </div>
    )
}

export default PortalHeader;