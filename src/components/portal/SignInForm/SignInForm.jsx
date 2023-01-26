import "./SignInForm.css";
import { useState } from "react";

export default function SignInForm({showSignIn,setShowSignIn }){
    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
        error: "",
    });

    const handleSignInFormSubmit = () => {

    };
    const handleSignInFormChange = () =>{ 

    };

    return(
        <div className="signin-form-container">
            <h1> LOG IN </h1>
            <form className="signin-form" autoComplete="off" onSubmit={handleSignInFormSubmit}>
                <label className="signin-label">Email</label>
                <input className="signin-input" 
                    type="text" 
                    name="email" 
                    onChange={handleSignInFormChange} 
                    placeholder='thegreatgig@thesky.net' 
                    required/>
                <br/>
                <label className="signin-label">Password</label>
                <input className="signin-input" 
                    type="text" 
                    name="password" 
                    onChange={handleSignInFormChange} 
                    placeholder="******"
                    required
                    />
                <br/>
                <button className="signin-button"> Log In </button>

            </form>
            <span className="signup-notice">don't have an account? <a id="change-signup" onClick={()=>{setShowSignIn(!showSignIn)}}>Sign Up</a></span>
            <p className="error-message">{credentials.error}</p>
        </div>
    )
}