import "./SignUpForm.css";
import { useState } from "react";

export default function SignUpForm() {
    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        password: "",
        confirm: "",
        error: "",
    });

    const disable = userInfo.password !== userInfo.confirm;
    
    const handleSignUpFormSubmit = function(evt){
        evt.preventDefault();
    };
    const handlSignUpFormChange = (evt) =>{
        setUserInfo({...userInfo, [evt.target.name]: evt.target.value});
        console.log(userInfo)
    };

    return (
      <>
        <div className="sign-up-form-container">
          <form autoComplete="off" onSubmit={handleSignUpFormSubmit}>
            <label className="signup-label">Name</label>
            <input className="signup-input" type="text" name="name" onChange={handlSignUpFormChange} required />
            <br />
            <label className="signup-label">Email</label>
            <input className="signup-input" type="email" name="email" onChange={handlSignUpFormChange} required />
            <br />
            <label className="signup-label">Password</label>
            <input className="signup-input" type="password" name="password" onChange={handlSignUpFormChange} required />
            <br />
            <label className="signup-label">Confirm</label>
            <input className="signup-input" type="password" name="confirm" onChange={handlSignUpFormChange} required />
            <br />
            <button className="signup-btn" type="submit" disabled={disable}>SIGN UP</button>
          </form>
        </div>
        <p className="error-message">&nbsp;{userInfo.error}</p>
      </>
    )
};