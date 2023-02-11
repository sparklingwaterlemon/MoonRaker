import "./AuthPage.css";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import SignInForm from "../../components/SignInForm/SignInForm";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function AuthPage({setUser}) {
    const [showSignIn, setShowSignIn] = useState(false);

    return (
        <div className="auth-page">
            {showSignIn ? 
                <SignInForm setUser={setUser} showSignIn={showSignIn} setShowSignIn={setShowSignIn}/>
                :
                <SignUpForm setUser={setUser} showSignIn={showSignIn} setShowSignIn={setShowSignIn}/>
            }
            <Link to="/">
                <button className="auth-back-button">Go Back</button>
            </Link>
        </div>
    )
}