import {useState} from 'react';
import { IconContext } from "react-icons";
import { CgProfile } from "react-icons/cg";
import './PatientHeader.css';
import woman from '../../icons/janedoe.jpeg';

type HeaderProps = {
    name: string;
    dob: string;
    tel: string;
}

function PatientHeader(props: HeaderProps) {
    const [name, setName] = useState(props.name);
    const [dob, setDob] = useState(props.dob);
    const [tel, setTel] = useState(props.tel);

    return (
        <div className="patient-header">
            <div className="patient-info">

                <div className="image-container">
                    <img id="woman-image" src={woman}/>
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
        </div>
    );
}

export default PatientHeader;