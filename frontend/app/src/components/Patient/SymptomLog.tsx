import PatientHeader from "./PatientHeader";
import PortalHeader from '../PortalHeader';
function SymptomLog() {

    return (
        <div>
            <PortalHeader wantLogOut={true} centered={false}/>
            <PatientHeader name="Jane Doe" dob="01/01/2001" tel="012-345-6789" />         
        </div>
    );

}

export default SymptomLog;