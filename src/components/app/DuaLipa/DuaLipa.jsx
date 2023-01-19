import "./DuaLipa.css";

export default function DuaLipa(){
    return(
        <div className="dua-container">
            <div className="dua-stage">
                <img className="dua-img" draggable="false" src={require("../../../assets/app/DuaLipa/DuaLipa.png")} alt="dualipa"/>
            </div>
        </div>      
    )
};