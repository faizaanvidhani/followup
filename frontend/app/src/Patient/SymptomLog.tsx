import './SymptomLog.css';
import Header from "./Header";
function SymptomLog() {

    return (
        <div className="profile-info">
           <Header name="Jane Doe" dob="01/01/2001" tel="012-345-6789" />
            <div className="backgroundBox"></div>              
        </div>
    );

}

export default SymptomLog;