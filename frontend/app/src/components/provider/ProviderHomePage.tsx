import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './ProviderHomePage.css';
import clinic from '../../icons/clinic-icon.svg';
import profile from '../../icons/profile-icon.svg';
import ProviderHeader from './ProviderHeader';
import PortalHeader from '../PortalHeader';
import { NavLink } from "react-router-dom";

type ProviderHomeProps = {
    name: string,
    title: string,
    clinicName: string
}

function ProviderHome(props: ProviderHomeProps) {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    // const [title, setTitle] = useState("");
    // const [clinicName, setClinicName] = useState("");
    const [data, setData] = useState(null);

    const loadData = async() => {
        axios.post('http://localhost:4567/provider-data', {provider_id: '5M0V60JHRLA'})
            .then((response: any) => {
                console.log(response.data)
                // setData(response.data)
                // setFirstName(data!['providerData'][1])
                // setLastName(data!['providerData'][2])
            })

    }

    // const loadData = () => {
    //     fetch('http://localhost:4567/')
    // }

    // let navigate = useNavigate();
    // const routeToPatientView = () =>{
    //     let path = "/patients";
    //     navigate(path);
    // }
    return (

        <div className="provider-home">
            <PortalHeader wantLogOut={true} centered={false}/>
            <ProviderHeader firstName={firstName} lastName={lastName} title={props.title} clinicName={props.clinicName}/>
            <button id="fake-button" onClick={loadData}> Load data </button>
            <div className="provider-home-icons">
                <div className="icon-div" id="clinic-icon-div">
                    <img src={clinic} className="provider-home-icon" alt="clinic icon"/>
                    <b className="icon-text">
                        <NavLink className="navbar-brand" to="/providerPatientGrid">
                            Patients
                        </NavLink>
                    </b>
                </div>

                <div className="icon-div" id="profile-icon-div">
                    <img src={profile} className="provider-home-icon" alt="profile icon"/>
                    <b className="icon-text">
                        <NavLink className="navbar-brand" to="/providerInfoPage">
                            Profile Info
                        </NavLink>
                    </b>
                </div>
            </div>

        </div>
    )
}

export default ProviderHome;