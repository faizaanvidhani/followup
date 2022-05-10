import './ProfileInfo.css';

import { useState } from "react";
import { IconContext } from "react-icons";
import { BsFileMedical } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { GiMedicines } from "react-icons/gi";
import { MdOutlinePostAdd } from "react-icons/md";
import { FaClinicMedical } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Header from "./Header";
import './ProfileInfo.css';

function ProfileInfo() {
    return (
        <div className="profile-info">
           <Header name="Jane Doe" dob="01/01/2001" tel="012-345-6789" />
            <div className="backgroundBox"></div>              
        </div>

        
       
    );
}

export default ProfileInfo;