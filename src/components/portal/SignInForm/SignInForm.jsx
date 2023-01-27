import "./SignInForm.css";
import { useState } from "react";
import { login } from "../../../utilities/portal/users-service";

export default function SignInForm({ setUser, showSignIn, setShowSignIn }){
    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState("");

    const handleSignInFormSubmit = async(evt) => {
        evt.preventDefault();
        try{
            const user = await login(credentials);
            setUser(user);
        } catch(e) {
            setError(e.message);
        }
    };

    const handleSignInFormChange = (evt) =>{ 
        setCredentials({...credentials, [evt.target.name]: evt.target.value})
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
                    type="password" 
                    name="password" 
                    onChange={handleSignInFormChange} 
                    placeholder="******"
                    required
                    />
                <br/>
                <button className="signin-button"> Log In </button>

            </form>
            <span className="signup-notice">don't have an account? <button id="change-signup" onClick={()=>{setShowSignIn(!showSignIn)}}>Sign Up</button></span>
            <p className="error-message">{error}</p>
        </div>
    )
}