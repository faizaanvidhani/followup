import './AddSymptom.css';
import Header from "./Header";
import { useState, useEffect } from 'react';

function AddSymptom() {

    return (
        <div className="add-symptom">
            <Header name="Jane Doe" dob="01/01/2001" tel="012-345-6789" />
        
            <div className="backgroundBox">
            <form>
                <div className="form-group">
                    <br></br>
                    <small id="symptomHelp" className="form-text text-muted">Select a symptom: </small>
                    <select className="form-control" id="symptom">
                        <option>Fever</option>
                        <option>Cough</option>
                        <option>Sore Throat</option>
                    </select>
                </div>
            </form>
            </div>              
                    
        </div>
    );
}

export default AddSymptom;