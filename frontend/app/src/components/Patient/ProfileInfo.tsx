import { useState } from "react";
import PatientHeader from "./PatientHeader";
import PortalHeader from '../PortalHeader';

function ProfileInfo() {
    return (
        <div className="profile-info">
            <PortalHeader wantLogOut={true} centered={false}/>
            <PatientHeader name="Jane Doe" dob="01/01/2001" tel="012-345-6789" />
             
        </div>

        
       
    );
}

export default ProfileInfo;