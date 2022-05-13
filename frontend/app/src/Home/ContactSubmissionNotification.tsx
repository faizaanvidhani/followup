import MainHeader from './MainHeader';
import './Contact.css';

function ContactSubmissionNotification() {
    return (
        <div>
            <MainHeader />
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
// export Contact
export default ContactSubmissionNotification;