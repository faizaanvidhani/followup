import './ProviderIntakePage.css';

export default function ProviderIntakePage() {
    return (
        <section className="vh-100 gradient-custom" id="provider-intake-section">
            <div className="container py-5 h-100">
                <div className="row justify-content-center align-items-center h-100">
                    <div className="col-12 col-lg-9 col-xl-7">
                        <div className="card shadow-2-strong card-registration" id="page-outer-box">
                            <div className="card-body p-4 p-md-5">
                                <h2 className="mb-4 pb-2 pb-md-0 mb-md-5" id="provider-form-title">Provider Sign Up</h2>
                                <form>
                                    {/*<h4 className="form-category-header">Profile Information</h4>*/}
                                    <div className="row">
                                        <div className="col-md-6 mb-4">

                                            <div className="form-label-group outline">
                                                <input type="text" id="firstName"
                                                       className="form-control form-control-lg"
                                                       placeholder="First name"
                                                       required={true}/>
                                                <span><label className="form-label" htmlFor="firstName" id="first-name-label">First Name</label></span>
                                            </div>

                                        </div>
                                        <div className="col-md-6 mb-4">

                                            <div className="form-label-group outline">
                                                <input type="text" id="lastName"
                                                       className="form-control form-control-lg"
                                                       placeholder="Last name"
                                                       required={true}/>
                                                <span><label className="form-label" htmlFor="lastName" id="last-name-label">Last Name</label></span>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-12 mb-4">
                                            <div className="form-label-group outline">
                                                <input type="text" className="form-control form-control-lg"
                                                       id="institution" placeholder="Institution"
                                                       required={true}/>
                                                <span><label htmlFor="institution" className="form-label" id="institution-label">Institution</label></span>
                                            </div>

                                        </div>
                                    </div>

                                    {/*<div className="row">*/}
                                    {/*    <hr id="intake-form-divider"/>*/}
                                    {/*</div>*/}

                                    {/*<h4 className="form-category-header">Contact Information</h4>*/}

                                    <div className="row">
                                        <div className="col-md-6 mb-4 pb-2">

                                            <div className="form-label-group outline">
                                                <input type="tel" id="phoneNumber"
                                                       className="form-control form-control-lg" placeholder="Phone number"
                                                       required={true}/>
                                                <span><label className="form-label" htmlFor="phoneNumber" id="number-label">Phone Number</label></span>
                                            </div>

                                        </div>
                                        <div className="col-md-6 mb-4 pb-2">

                                            <div className="form-label-group outline">
                                                <input type="email" id="emailAddress"
                                                       className="form-control form-control-lg" placeholder="Email"
                                                       required={true}/>
                                                <span><label className="form-label" htmlFor="emailAddress" id="email-label">Email</label></span>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="mt-4 pt-2">
                                        <input className="btn btn-primary btn-lg" id="provider-form-submit-btn" type="submit" value="SUBMIT"/>
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