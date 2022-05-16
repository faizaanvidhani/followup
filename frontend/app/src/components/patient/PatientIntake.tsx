import axios from 'axios';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../UserContext';
import './PatientIntake.css';

type patientData = {
    fName: string,
    lName: string,
    phoneNumber: string,
    dob: string,
    address: string,
    provider_id: string,

}

export default function IntakePage() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dob, setDob] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [provider_id, setProvider_id] = useState("");
    const { userType, currentUser, setCurrentUser } = useContext(UserContext);
    let navigate = useNavigate();

    // Handle submit function
    const handleSubmit = (event: any) => {
        event.preventDefault();
        let userValues: string[] = [];
        let profileValues: string[] = [];
        userValues.push(currentUser!);
        profileValues.push(firstName);
        profileValues.push(lastName);
        profileValues.push(dob);
        profileValues.push(phoneNumber);
        profileValues.push(address);
        profileValues.push(provider_id);

        axios.post('http://localhost:4567/insert-data', { table_name: 'Users', row_values: userValues })
            .then(response => {
                console.log(response)
            })
            .catch(error => { console.log(error) })
        
        axios.post('http://localhost:4567/insert-data', { table_name: 'Patient', row_values: profileValues })
            .then(response => {
                console.log(response)
            })
            .catch(error => { console.log(error) })
    }

return (
    <section className="vh-100 gradient-custom" id="patient-intake-section">
        <div className="container py-5 h-100">
            <div className="row justify-content-center align-items-center h-100">
                <div className="col-12 col-lg-9 col-xl-7">
                    <div className="card shadow-2-strong card-registration" id="patient-page-outer-box">
                        <div className="card-body p-4 p-md-5">
                            <h2 className="mb-4 pb-2 pb-md-0 mb-md-5" id="patient-form-title">Patient Sign Up</h2>
                            <hr />
                            <form>
                                <h4 className="patient-form-header">Profile Information</h4>
                                <div className="row">
                                    <div className="col-md-5 mb-4">

                                        <div className="form-label-group outline">
                                            <input type="text" id="patient-firstName"
                                                className="form-control form-control-lg"
                                                placeholder="First name"
                                                required={true} />
                                            <span><label className="form-label" htmlFor="firstName" id="first-name-label">First Name</label></span>
                                        </div>

                                    </div>
                                    <div className="col-md-5 mb-4">

                                        <div className="form-label-group outline">
                                            <input type="text" id="patient-lastName"
                                                className="form-control form-control-lg"
                                                placeholder="Last name"
                                                required={true} />
                                            <span><label className="form-label" htmlFor="lastName" id="last-name-label">Last Name</label></span>
                                        </div>
                                    </div>

                                    <div className="col-md-2 mb-4">
                                        <select className="patient-intake-select" id="gender-select">
                                            <option value="1" selected disabled>Gender</option>
                                            <option value="2">Female</option>
                                            <option value="3">Male</option>
                                            <option value="4">Other</option>
                                        </select>
                                    </div>

                                </div>

                                <div className="row">

                                    <div className="col-md-5 mb-4">
                                        <div className="date-time" id="patient-dob">
                                            <div>
                                                <small id="dateHelp" className="form-text text-muted">DOB: </small>
                                            </div>
                                            <input type="date" className="form-control" id="date" placeholder="Date"></input>
                                        </div>
                                    </div>

                                    <div className="col-md-6 mb-4">

                                        <select className="patient-intake-select" id="race-select">
                                            <option value="1" selected disabled>Race/Ethnicity</option>
                                            <option value="2">American Indian or Alaska Native</option>
                                            <option value="3">Asian</option>
                                            <option value="4">Black or African American</option>
                                            <option value="5">Hispanic or Latino</option>
                                            <option value="6">Native Hawaiian or Other Pacific Islander</option>
                                            <option value="6">White</option>
                                        </select>

                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4 mb-4">

                                        <select className="patient-intake-select" id="provider-select">
                                            <option value="1" selected disabled>Select Provider</option>
                                        </select>

                                    </div>
                                </div>
                                <hr />
                                <h4 className="patient-form-header">Contact Information</h4>

                                <div className="address-div">
                                    <div className="row">
                                        <div className="col-md-12 mb-4">
                                            <div className="form-label-group outline">
                                                <input type="text" id="patient-address"
                                                    className="form-control form-control-lg"
                                                    placeholder="Street Address or P.O. Box"
                                                    required={true} />
                                                <span><label className="form-label" htmlFor="address" id="address-label">Street Address or P.O. Box</label></span>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-12 mb-4">
                                            <div className="form-label-group outline" id="patient-address-extra-input">
                                                <input type="text" id="address-extra-info"
                                                    className="form-control form-control-lg"
                                                    placeholder="Apt, suite, building, etc."
                                                    required={true} />
                                                <span><label className="form-label" htmlFor="address-extra-info" id="address-extra-label">Apt, suite, building, etc.</label></span>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-4 mb-4">
                                        <div className="form-label-group outline">
                                            <input type="text" id="patient-city"
                                                className="form-control form-control-lg"
                                                placeholder="City"
                                                required={true} />
                                            <span><label className="form-label" htmlFor="city" id="city-label">City</label></span>
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-4">
                                        <div className="form-label-group outline">
                                            <input type="text" id="patient-zip-code"
                                                className="form-control form-control-lg"
                                                placeholder="Zip Code"
                                                required={true} />
                                            <span><label className="form-label" htmlFor="zip-code" id="zipcode-label">Zip Code</label></span>
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-4">
                                        <select className="patient-intake-select" id="state-select" name="state">
                                            <option value="" selected disabled>State</option>
                                            <option value="AK">Alaska</option>
                                            <option value="AL">Alabama</option>
                                            <option value="AR">Arkansas</option>
                                            <option value="AZ">Arizona</option>
                                            <option value="CA">California</option>
                                            <option value="CO">Colorado</option>
                                            <option value="CT">Connecticut</option>
                                            <option value="DC">District of Columbia</option>
                                            <option value="DE">Delaware</option>
                                            <option value="FL">Florida</option>
                                            <option value="GA">Georgia</option>
                                            <option value="HI">Hawaii</option>
                                            <option value="IA">Iowa</option>
                                            <option value="ID">Idaho</option>
                                            <option value="IL">Illinois</option>
                                            <option value="IN">Indiana</option>
                                            <option value="KS">Kansas</option>
                                            <option value="KY">Kentucky</option>
                                            <option value="LA">Louisiana</option>
                                            <option value="MA">Massachusetts</option>
                                            <option value="MD">Maryland</option>
                                            <option value="ME">Maine</option>
                                            <option value="MI">Michigan</option>
                                            <option value="MN">Minnesota</option>
                                            <option value="MO">Missouri</option>
                                            <option value="MS">Mississippi</option>
                                            <option value="MT">Montana</option>
                                            <option value="NC">North Carolina</option>
                                            <option value="ND">North Dakota</option>
                                            <option value="NE">Nebraska</option>
                                            <option value="NH">New Hampshire</option>
                                            <option value="NJ">New Jersey</option>
                                            <option value="NM">New Mexico</option>
                                            <option value="NV">Nevada</option>
                                            <option value="NY">New York</option>
                                            <option value="OH">Ohio</option>
                                            <option value="OK">Oklahoma</option>
                                            <option value="OR">Oregon</option>
                                            <option value="PA">Pennsylvania</option>
                                            <option value="PR">Puerto Rico</option>
                                            <option value="RI">Rhode Island</option>
                                            <option value="SC">South Carolina</option>
                                            <option value="SD">South Dakota</option>
                                            <option value="TN">Tennessee</option>
                                            <option value="TX">Texas</option>
                                            <option value="UT">Utah</option>
                                            <option value="VA">Virginia</option>
                                            <option value="VT">Vermont</option>
                                            <option value="WA">Washington</option>
                                            <option value="WI">Wisconsin</option>
                                            <option value="WV">West Virginia</option>
                                            <option value="WY">Wyoming</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6 mb-4 pb-2">

                                        <div className="form-label-group outline">
                                            <input type="tel" id="patient-phoneNumber"
                                                className="form-control form-control-lg" placeholder="Phone number"
                                                required={true} />
                                            <span><label className="form-label" htmlFor="phoneNumber" id="number-label">Phone Number</label></span>
                                        </div>

                                    </div>
                                    <div className="col-md-6 mb-4 pb-2">

                                        <div className="form-label-group outline">
                                            <input type="email" id="patient-emailAddress"
                                                className="form-control form-control-lg" placeholder="Email"
                                                required={true} />
                                            <span><label className="form-label" htmlFor="emailAddress" id="email-label">Email</label></span>
                                        </div>

                                    </div>
                                </div>

                                <div className="mt-4 pt-2">
                                    <input className="btn btn-primary btn-lg" id="provider-form-submit-btn" type="submit" value="SUBMIT" />
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)
}