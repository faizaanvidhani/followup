import {useContext, useState } from "react";
import PatientHeader from "./PatientHeader";
import PortalHeader from '../PortalHeader';
import UserContext from "../../UserContext";

function ProfileInfo() {
    const {currentUser} = useContext(UserContext);
    return (
        <div>
            <PortalHeader wantLogOut={true} centered={false}/>
            <PatientHeader name={currentUser!} dob="01/01/2001" tel="012-345-6789" />
        </div>

        
       
    );
}

export default ProfileInfo;