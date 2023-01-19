import "./AboutPage.css";
import { useNavigate } from "react-router-dom";

export default function AboutPage(){
    const navigate = useNavigate();
    return(
        <section id="about-section">
            <button className="about-back-button" onClick={()=>navigate(-1)}>Back</button>
            <div className="about-container">
                <div className="about-links">
                    <span className="about-header">
                        Michael Kim 2023
                    </span>
                </div>
                <div className="about-links">
                    <a href="https://www.youtube.com/watch?v=C8Xc0VptCBY" target="_blank" rel="noreferrer" className="about-href">
                        The Great Gig In The Sky - Pink Floyd
                    </a>
                </div>
                <div className="about-links">
                    <a href="https://github.com/sparklingwaterlemon/MoonRaker" target="_blank" rel="noreferrer" className="about-href">
                    GitHub
                    </a>
                </div>
                <div className="about-links">
                    <a href="https://www.linkedin.com/in/michaelkim3/" target="_blank" rel="noreferrer" className="about-href">
                        LinkedIn
                    </a>
                </div>
                <div className="about-links">
                    <a href="https://michaelkim.netlify.app/" target="_blank" rel="noreferrer" className="about-href">
                        Portfolio
                    </a>
                </div>
            </div>
        </section>
    )
}