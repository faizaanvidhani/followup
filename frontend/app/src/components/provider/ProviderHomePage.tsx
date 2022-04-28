import React from 'react';
import { FaClinicMedical } from "react-icons/fa";
import { FcSurvey } from "react-icons/fc";
import { CgProfile } from "react-icons/cg";
import {IconContext} from "react-icons";
import './ProviderHomePage.css';
import './ProviderInfo.css'

type ProviderHomeProps = {
    name: string,
    title: string,
    clinicName: string
}

function ProviderHome(props: ProviderHomeProps) {
    return (

        <div className="provider-home">

            <div className="provider-info">
                <h1 className="provider-name">
                    {props.name}, {props.title}
                </h1>
                <h3 className="provider-clinic">
                    {props.clinicName}
                </h3>
            </div>

            <hr/>
            <br/>
            <br/>
            <br/>

            <div className="provider-home-icons">
                <div className="icon-div">
                    {/*<img src="../../../icons/clinic-icon.png" id="patient-icon"/>*/}
                    <IconContext.Provider value={{color: 'light-blue', size: '60px'}}>
                        <div>
                            <FaClinicMedical/>
                        </div>
                    </IconContext.Provider>
                    <b className="icon-text">
                        Patients
                    </b>
                </div>

                <div className="icon-div">
                    {/*<img src="../../../icons/survey-icon.png" id="survey-icon"/>*/}
                    <IconContext.Provider value={{color: 'light-blue', size: '60px'}}>
                        <div>
                            <FcSurvey/>
                        </div>
                    </IconContext.Provider>
                    <b className="icon-text">
                        Patient Questionnaires
                    </b>
                </div>

                <div className="icon-div">
                    {/*<img src="../../../icons/profile-icon.png" id="profile-icon"/>*/}
                    <IconContext.Provider value={{color: 'light-blue', size: '60px'}}>
                        <div>
                            <CgProfile/>
                        </div>
                    </IconContext.Provider>
                    <b className="icon-text">
                        Profile Info
                    </b>
                </div>
            </div>

        </div>
    )
}

export default ProviderHome;