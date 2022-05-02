import './homePage.css';
import {useState} from "react";
import {IconContext} from "react-icons";
import {BsFileMedical} from "react-icons/bs";
import {CgProfile} from "react-icons/cg";
import {GiMedicines} from "react-icons/gi";
import {MdOutlinePostAdd} from "react-icons/md";
import {FaClinicMedical} from "react-icons/fa";

type PatientHomeProps = {
    name: string,
    dob: string,
    tel: string
}

function PatientHome(props: PatientHomeProps) {
    const [name, setName] = useState<string>(props.name);
    const [dob, setDOB] = useState<string>(props.dob);
    const [tel, setTel] = useState<string>(props.tel);

    return (

      <div className="patient">
          <h1 className='header'>{name}</h1>
          <h3 className='subheader'>DOB: {dob} | Tel: {tel}</h3>
          <nav className='navbar'>
              <div className='navbar-header'>
                  <li className='linkOption'>
                      <div className='icon'>
                          <IconContext.Provider value={{color: 'light-blue', size: '60px'}}>
                              <CgProfile/>
                          </IconContext.Provider>
                      </div>
                      Profile Info
                  </li>
                  <li className='linkOption'>
                      <div className='icon'>
                          <IconContext.Provider value={{color: 'light-blue', size: '60px'}}>
                              <BsFileMedical/>
                          </IconContext.Provider>
                      </div>
                      Symptom Log
                  </li>
                  <li className='linkOption'>
                      <div className='icon'>
                          <IconContext.Provider value={{color: 'light-blue', size: '60px'}}>
                              <MdOutlinePostAdd/>
                          </IconContext.Provider>
                      </div>
                      Add Symptom
                  </li>
                  <li className='linkOption'>
                      <div className='icon'>
                          <IconContext.Provider value={{color: 'light-blue', size: '60px'}}>
                              <FaClinicMedical/>
                          </IconContext.Provider>
                      </div>
                      Provider Info
                  </li>
                  <li className='linkOption'>
                      <div className='icon'>
                        <IconContext.Provider value={{color: 'light-blue', size: '60px'}}>
                            <GiMedicines/>
                        </IconContext.Provider>
                      </div>
                      Treatment Plan
                  </li>
              </div>
          </nav>
      </div>
    );
}

export default PatientHome;
