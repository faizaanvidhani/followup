import {useContext, useState } from "react";
import PatientHeader from "./PatientHeader";
import PortalHeader from '../PortalHeader';
import UserContext from "../../UserContext";

function PatientInfo() {
    const {currentUser} = useContext(UserContext);
    return (
        <div>
            <PortalHeader wantLogOut={true} centered={false}/>
            <PatientHeader firstName='Jane' lastName='Doe' dob="01/01/2001" tel="012-345-6789" />
        </div>

        
       
    );
}

export default PatientInfo;