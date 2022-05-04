import {useState} from 'react';
import { IconContext } from "react-icons";
import { CgProfile } from "react-icons/cg";
import './Header.css';

type HeaderProps = {
    name: string;
    dob: string;
    tel: string;
}

function Header(props: HeaderProps) {
    const [name, setName] = useState(props.name);
    const [dob, setDob] = useState(props.dob);
    const [tel, setTel] = useState(props.tel);

    return (
        <div className="patient-header">
            <div className="patient-info">

                <div className="icon">
                    <IconContext.Provider value={{ className: "icon-cg-profile" , size: '120px'}}> 
                        <CgProfile />
                    </IconContext.Provider>
                </div>

                <div>
                    <h1 className="name">
                        {name}
                    </h1>
                    <h3 className="info">
                        DOB: {dob} | Tel: {tel}
                    </h3>
                </div>
            </div>

            <hr/>
            <br/>
            <br/>
            <br/>
        </div>
    );
}

export default Header;