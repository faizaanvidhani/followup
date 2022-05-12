import './MainHeader.css'
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from 'react';


function MainHeader() {
    const navigate = useNavigate();
        return (
            <div>
                <h1 className="followup">FollowUp</h1>
                <div className="subpages">
                    <h1 className="heading" onClick={() => {navigate("/")}}>HOME</h1>
                    <h1 className="heading" onClick={() => {navigate("/mission");}}>MISSION</h1>
                    <h1 className="heading" onClick={() => {navigate("/contact");}}>CONTACT</h1>
                    <h1 className="heading" onClick={() => {navigate("/about");}}>ABOUT</h1>
                </div>
            </div>
        );
    }

export default MainHeader;