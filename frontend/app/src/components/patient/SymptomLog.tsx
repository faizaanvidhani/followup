import PatientHeader from "./PatientHeader";
import PortalHeader from '../PortalHeader';
import { useContext } from "react";
import UserContext from "../../UserContext";
function SymptomLog() {
    const {currentUser} = useContext(UserContext);
    return (
        <div>
            <PortalHeader wantLogOut={true} centered={false}/>
            <PatientHeader firstName='Jane' lastName='Doe' dob="01/01/2001" tel="012-345-6789" />
        </div>
    );

}

export default SymptomLog;