import MainHeader from './MainHeader';
import './Contact.css';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Contact() {
    const navigate = useNavigate();

    function handleSubmit() {
        navigate("/contactformupdate")
    }
    return (
        <div>
            <MainHeader />
            <div className="backgroundContactBox">
                <p className="contactTitle">Questions? Concerns? Let us know.</p>
                <div className="foregroundContactBox">
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
                    <Button className="submit-button" type="submit" onClick={handleSubmit}>Submit</Button>
                </div>
            </div>
        </div>
    );
}
// export Contact
export default Contact;