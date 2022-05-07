import MainHeader from './MainHeader';
import './Contact.css';

function Contact() {
    return (
        <div>
            <MainHeader />
            <div className="backgroundBox">
                <p className="contactTitle">Questions? Concerns? Let us know.</p>
                <div className="foregroundBox">
                    <div>
                        <h1 className="contactSubHeading">Send us a message.</h1>
                    </div>
                    <div className="inputFields">
                        <input className="contactInputField" type="text" placeholder="Full Name*"/>
                        <br/>
                        <input className="contactInputField" type="email" placeholder="Email Address*"/>
                        <br/>
                        <input className="contactInputField" type="text" placeholder="Subject"/>
                        <textarea className="moreDetailsBody" placeholder="Message"></textarea>
                    </div>
                    <input className="submit" type="submit" value="Submit"/>
                </div>
            </div>
        </div>
    );
}
// export Contact
export default Contact;