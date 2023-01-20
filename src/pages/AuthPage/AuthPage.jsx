import "./AuthPage.css";
import SignUpForm from "../../components/portal/SignUpForm/SignUpForm";

export default function AuthPage(){
    return(
        <div>
            <h1> AUTH PAGE </h1>
            <br/>
            <h3> SIGN UP</h3>
            <SignUpForm />
            <h3> SIGN IN</h3>
        </div>
    )
}