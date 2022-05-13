import './AddSymptom.css';
import PatientHeader from "./PatientHeader";
import { useState, useEffect, useContext } from 'react';
import PortalHeader from '../PortalHeader';
import UserContext from '../../UserContext';

function AddSymptom() {
    const {currentUser} = useContext(UserContext);
    return (
        <div className="add-symptom">
            <PortalHeader wantLogOut={true} centered={false}/>
            <PatientHeader name={currentUser!} dob="01/01/2001" tel="012-345-6789" />

            <form>
                <div className="form-group">
                    <br></br>
                    <small id="symptomHelp" className="form-text text-muted">Select a symptom: </small>
                    <select className="form-control" id="symptom">
                        <option>Tremor</option>
                        <option>Bradykinesia</option>
                        <option>Speech Changes</option>
                    </select>
                </div>
                <div className="form-group">
                    <small id="severityHelp" className="form-text text-muted">Severity: </small>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="severity" id="severity1" value="1" checked></input>
                        <label className="form-check-label" htmlFor="severity1">1</label>
                        <input className="form-check-input" type="radio" name="severity" id="severity2" value="2"></input>
                        <label className='form-check-label' htmlFor='severity2'>2</label>
                        <input className="form-check-input" type="radio" name="severity" id="severity2" value="2"></input>
                        <label className='form-check-label' htmlFor='severity3'>3</label>
                        <input className="form-check-input" type="radio" name="severity" id="severity3" value="3"></input>
                        <label className='form-check-label' htmlFor='severity4'>4</label>
                        <input className="form-check-input" type="radio" name="severity" id="severity4" value="4"></input>
                        <label className='form-check-label' htmlFor='severity5'>5</label>
                        <input className="form-check-input" type="radio" name="severity" id="severity5" value="5"></input>
                        <label className='form-check-label' htmlFor='severity6'>6</label>
                        <input className="form-check-input" type="radio" name="severity" id="severity6" value="6"></input>
                        <label className='form-check-label' htmlFor='severity7'>7</label>
                        <input className="form-check-input" type="radio" name="severity" id="severity7" value="7"></input>
                        <label className='form-check-label' htmlFor='severity8'>8</label>
                        <input className="form-check-input" type="radio" name="severity" id="severity8" value="8"></input>
                        <label className='form-check-label' htmlFor='severity9'>9</label>
                        <input className="form-check-input" type="radio" name="severity" id="severity9" value="9"></input>
                        <label className='form-check-label' htmlFor='severity10'>10</label>
                        <input className="form-check-input" type="radio" name="severity" id="severity10" value="10"></input>
                    </div>

                    <div className="form-group">
                    <div className="date-time">
                        <br></br>
                        <small id="dateHelp" className="form-text text-muted">Date and Time: </small>
                        <input type="datetime-local" className="form-control" id="date" placeholder="Date"></input>
                        <br></br>
                        <br></br>
                        <small id="durationHelp" className="form-text text-muted">Duration (mins): </small>
                        <input type="number" className="form-control" id="duration" placeholder="Duration"></input>
                        <br></br>
                    </div>
                    </div>

                    <div className="form-group">
                        <div className="button-group">
                            <button type="submit" className="btn btn-primary">Next</button>
                        </div>
                    </div>

                </div>

            </form>
            </div>          
                    
    );
}

export default AddSymptom;