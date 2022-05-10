import './PatientHome.css';
import { useState } from "react";
import { IconContext } from "react-icons";
import { BsFileMedical } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { GiMedicines } from "react-icons/gi";
import { MdOutlinePostAdd } from "react-icons/md";
import { FaClinicMedical } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Header from "./Header";

function PatientHome() {

    return (
 
        <div className="patient">
            <Header name="Jane Doe" dob="01/01/2001" tel="012-345-6789" />
            <div className="backgroundBox">
            <nav className='navbar'>
                <div className='navbar-header'>
                    <li className='linkOption'>
                        <div className='icon'>
                            <IconContext.Provider value={{ color: 'light-blue', size: '120px' }}>
                                <CgProfile />
                            </IconContext.Provider>
                        </div>
                        <NavLink className="navbar-brand" to="/profileInfo">
                            Profile Info
                        </NavLink>
                    </li>
                    <li className='linkOption'>
                        <div className='icon'>
                            <IconContext.Provider value={{ color: 'light-blue', size: '120px' }}>
                                <BsFileMedical />
                            </IconContext.Provider>
                        </div>
                        <NavLink className="navbar-brand" to="/symptomLog">
                            Symptom Log
                        </NavLink>
                    </li>
                    <li className='linkOption'>
                        <div className='icon'>
                            <IconContext.Provider value={{ color: 'light-blue', size: '120px' }}>
                                <MdOutlinePostAdd />
                            </IconContext.Provider>
                        </div>
                        <NavLink className="navbar-brand" to="/addSymptom">
                            Add Symptom
                        </NavLink>
                    </li>
                    
                    <li className='linkOption'>
                        <div className='icon'>
                            <IconContext.Provider value={{ color: 'light-blue', size: '120px' }}>
                                <FaClinicMedical />
                            </IconContext.Provider>
                        </div>
                        Provider Info
                    </li>
                </div>
            </nav>
            </div>
            
        </div>
    );
}

export default PatientHome;
