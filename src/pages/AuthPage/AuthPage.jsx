import "./AuthPage.css";
import SignUpForm from "../../components/portal/SignUpForm/SignUpForm";
import { Link } from "react-router-dom";

export default function AuthPage() {
    return (
        <div className="auth-page">
            <Link to="/">
                <button className="about-back-button">Back</button>
            </Link>
            <h1> AUTH PAGE </h1>
            <br />
            <h3> SIGN UP</h3>
            <SignUpForm />
            <h3> SIGN IN</h3>
        </div>
    )
}