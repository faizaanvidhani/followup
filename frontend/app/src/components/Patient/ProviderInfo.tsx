import React from 'react';
import PortalHeader from '../PortalHeader';
import PatientHeader from './PatientHeader';

function ProviderInfo() {
    return (
        <div className="provider">
            <PortalHeader wantLogOut={true} centered={false}/>
            <PatientHeader name="Jane Doe" dob="01/01/2001" tel="012-345-6789" />
            <h1 className="providerTitle">Provider Info</h1>
        </div>
    );
}

export default ProviderInfo;
