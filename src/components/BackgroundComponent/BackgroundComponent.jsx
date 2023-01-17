import "./BackgroundComponent.css";
import MoonImages from "../../assets/MoonImages/0000index";

export default function BackgroundComponent(){
    return(
        <div className="m-b-container">
            <div className="container2">
                <img className="m-b-image" src={MoonImages[0].imgRef} alt="background"/>
            </div>
        </div>
    )
}