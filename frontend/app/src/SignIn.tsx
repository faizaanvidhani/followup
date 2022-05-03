import google from './icons/google.svg';
import facebook from './icons/facebook.svg';
import apple from './icons/apple.svg';
import './SignIn.css';
import { signInWithGoogle, signOut } from "./Firebase";

function SignIn() {
    return (
        <div className="backgroundBox">
           <h1 className="signInTitle">Sign In</h1>
            <div className="foregroundBox">
                <div className="welcome">
                    <h1>Welcome back!</h1>
                </div>
                <div className="inputFields">
                    <input className="email" type="email" placeholder="Email address"/>
                    <br/>
                    <input className="password" type="password" placeholder="Password"/>
                </div>
                <button className="login">Log In</button>
                <div className="loginSeparator">
                    <span className="textInSeparator">or</span>
                </div>
                <div className="icons">
                    <img className="google" src={google} alt="google" onClick={signInWithGoogle}/>
                    <img className="fb" src={facebook} alt="fb"/>
                    <img className="apple" src={apple} alt="apple"/>
                </div>
            </div>
        </div>

    );
}

export default SignIn;