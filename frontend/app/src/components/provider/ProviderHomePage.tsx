import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './ProviderHomePage.css';
import clinic from '../../icons/clinic-icon.svg';
import profile from '../../icons/profile-icon.svg';
import ProviderHeader from './ProviderHeader';
import PortalHeader from '../PortalHeader';


// const [name, setName] = useState("");
// const [title, setTitle] = useState("");
// const [clinicName, setClinicName] = useState("");

type ProviderHomeProps = {
    name: string,
    title: string,
    clinicName: string
}

function ProviderHome(props: ProviderHomeProps) {

    // let navigate = useNavigate();
    // const routeToPatientView = () =>{
    //     let path = "/patients";
    //     navigate(path);
    // }
    return (

        <div className="provider-home">
            <PortalHeader wantLogOut={true}/>
            <ProviderHeader name={props.name} title={props.title} clinicName={props.clinicName}/>
            <div className="provider-home-icons">
                <div className="icon-div" id="clinic-icon-div">
                    <img src={clinic} alt="clinic icon"/>
                    <b className="icon-text">
                        Patients
                    </b>
                </div>

                <div className="icon-div" id="profile-icon-div">
                    <img src={profile} alt="profile icon"/>
                    <b className="icon-text">
                        Profile Info
                    </b>
                </div>
            </div>

        </div>
    )
}

export default ProviderHome;