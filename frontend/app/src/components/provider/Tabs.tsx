import { useState } from 'react';
import PortalHeader from '../PortalHeader';
import PatientHeader from './PatientHeader';
import './Tabs.css';

function Tabs() {

    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index: number) => {
        setToggleState(index);
    }
    return (
        <div className="patient-page">
            <div className="header-div">
                <PortalHeader wantLogOut={true} centered={true}/>
                <PatientHeader firstName="John" lastName="Smith" phoneNumber="123-456-7890" DOB="1/23/4567"/>
            </div>

            <div className="container">
                <div className="bloc-tabs">
                    <div
                        className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(1)}
                    >Symptom Logs</div>
                    <div
                        className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(2)}
                    >Demographic Info</div>
                    <div
                        className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(3)}
                    >Questionnaire Templates</div>
                </div>


                <div className="content-tabs">

                    <div className={toggleState === 1 ? "content active-content" : "content"}>
                        <h2>
                            Content 1
                        </h2>
                        <p>
                            Patient Symptom Logs will be displayed here.
                        </p>
                    </div>

                    <div className={toggleState === 2 ? "content active-content" : "content"}>
                        <h2>
                            Content 2
                        </h2>
                        <p>
                            Patient demographic info here.
                        </p>
                    </div>

                    <div className={toggleState === 3 ? "content active-content" : "content"}>
                        <h2>
                            Content 3
                        </h2>
                        <p>
                            Patient questionnaire templates here.
                        </p>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Tabs;