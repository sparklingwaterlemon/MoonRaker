import "./SignUpForm.css";
import { useState } from "react";
import { signUp } from "../../utilities/users-service";


export default function SignUpForm({ setUser , showSignIn, setShowSignIn }) {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
    error: "",
  });

  const disable = userData.password !== userData.confirm;

  const handleSignUpFormSubmit = async function (evt) {
    evt.preventDefault();

    try {
      const formData = { ...userData };
      delete formData.confirm;
      delete formData.error;

      const user = await signUp(formData);
      setUser(user);

    } catch(err) {
      setUserData({ ...userData, error: err.message });
    }
  };


  const handlSignUpFormChange = (evt) => {
    setUserData({ ...userData, [evt.target.name]: evt.target.value });
  };

  return (
    <>
      <br />
      <div className="signup-form-container">
        {userData.error ? <h1 className="error-message">{userData.error}</h1> :
        <h1 className="banner"> SIGN UP </h1> }
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
        <span className="sign-in-notice">already have an account? <button id="change-sign-in" onClick={()=>{setShowSignIn(!showSignIn)}}>Sign In</button></span>
      </div>
    </>
  )
};