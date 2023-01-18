import "./ConstructionDisplay.css";
import { useState } from "react";

export default function ConstructionDisplay() {
    const [hideCSign, setHideCSign] = useState(false);

    let text = document.lastModified;

    const scrollDown = () => {
        var h = document.documentElement;
        var msh = h.scrollHeight - h.clientHeight;
        var sft = (msh / 91) * 30.5; // 91 is the frame count // 30.5 is the 30th frame
        var sft2 = Number(sft.toFixed(2));
        window.scroll({
            top: 0,
            left: 0,
        });
        console.log("button - top out");
        window.scroll({
            top: sft2,
            left: 0,
            behavior: "smooth"
        });
        console.log("button - to today");
    };


    return (
        <div className={hideCSign ? "construction-container hide" : "construction-container"}>
            <button className="hide-c-button" onClick={() => setHideCSign(true)}> HIDE </button>
            <div className="caution-border">
                <div className="c-signpost">

                    <span className="c-header">UNDER re-CONSTRUCTION</span>
                    <span className="c-update">LAST MODIFIED ON {text}</span>

                    Update - Created Basic About Page
                    <br/> .. scroll down
                    <div className="c-links">
                        <a href="https://github.com/sparklingwaterlemon/MoonRaker" target="_blank" rel="noreferrer">github</a>
                        <button onClick={scrollDown}>Refresh Scroll</button>
                    </div>
                </div>
            </div>
        </div>
    )
};