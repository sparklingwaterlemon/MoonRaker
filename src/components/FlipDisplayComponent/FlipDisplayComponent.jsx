import "./FlipDisplayComponent.css";
import ASideDatePhase from "../ASideDatePhase/ASideDatePhase";
import BSideWeatherAstro from "../BSideWeatherAstro/BSideWeatherAstro";


export default function FlipDisplayComponent({flipAB, setFlipAB, indexForDate, currMoonPhase, cityLocation, weatherAstroData}){
    // button is hidden if no weatherAstroData is present

    return(
        <div className="flip-container">
            <div className="button-container">
                <button className={weatherAstroData ? "flip-button" : "hide-button"} onClick={() => setFlipAB(!flipAB)} />
                {flipAB 
                    ? 
                    <BSideWeatherAstro 
                        cityLocation={cityLocation} 
                        data={weatherAstroData}/> 
                    : 
                    <ASideDatePhase 
                        indexForDate={indexForDate} 
                        currMoonPhase={currMoonPhase}/>
                }
            </div>
        </div>
    )
}