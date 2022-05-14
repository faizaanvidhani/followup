import MainHeader from './MainHeader';
import './Contact.css';

function ContactSubmission() {
    return (
        <div>
            <MainHeader/>
            <div className="backgroundContactBox">
                <p className="contactTitle">Thanks for letting us know.</p>
                <div className="foregroundContactSubmissionNotificationBox">
                    <p className="contactStatement">
                        Your message has been submitted.
                    </p>
                </div>
            </div>
        </div>
    );
}
export default ContactSubmission;