import "./SignUpForm.css";
import { useState } from "react";
import { signUp } from "../../../utilities/portal/users-service";

export default function SignUpForm() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
    error: "",
  });

  const disable = userData.password !== userData.confirm;

  const handleSignUpFormSubmit = async function(evt) {
    evt.preventDefault();

    try {
      const formData = {...userData};
      delete formData.confirm;
      delete formData.error;

      const user = await signUp(formData);
      console.log("<- curr @ SignUpForm \\ users-service.js ")
      console.log("user", user);

    } catch(e) {      
      console.error("SignUpForm.jsx ", e);
      setUserData({ ...userData, error: e.message});
    }
  };


  const handlSignUpFormChange = (evt) => {
    setUserData({ ...userData, [evt.target.name]: evt.target.value });
  };

  return (
    <>
      <div className="signup-form-container">
        <form autoComplete="off" className="signup-form" onSubmit={handleSignUpFormSubmit}>
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
          <button className="signup-button" type="submit" disabled={disable}>SIGN UP</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{userData.error}</p>
    </>
  )
};