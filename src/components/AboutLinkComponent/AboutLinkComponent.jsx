import "./AboutLinkComponent.css";
import { Link } from "react-router-dom";

export default function AboutLinkComponent(){
    return(
        <div className="about-link-container">
            <div className="about-link-stage">
                <Link to="about" className="about-page-link">
                    ABOUT
                </Link>
            </div>
        </div>
    )
}