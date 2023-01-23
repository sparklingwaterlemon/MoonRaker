import "./SignUpForm.css";
import { useState } from "react";
import { signUp } from "../../../utilities/portal/users-service";

export default function SignUpForm() {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
    error: "",
  });

  const disable = userInfo.password !== userInfo.confirm;

  const handleSignUpFormSubmit = async function(evt) {
    evt.preventDefault();

    try {
      const formData = {...userInfo};
      delete userInfo.confirm;
      delete userInfo.error;


      const user = await signUp("test");
      console.log("user", user);

    } catch {      
      setUserInfo({ ...userInfo, error: "Sign Up Failed - Try Again" });
    }
    alert(JSON.stringify(userInfo))
  };



  const handlSignUpFormChange = (evt) => {
    setUserInfo({ ...userInfo, [evt.target.name]: evt.target.value });
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
      <p className="error-message">&nbsp;{userInfo.error}</p>
    </>
  )
};