import "./FlipDisplaySection.css";
import ASideDatePhase from "../../../components/app/ASideDatePhase/ASideDatePhase";
import BSideWeatherAstro from "../../../components/app/BSideWeatherAstro/BSideWeatherAstro";


export default function FlipDisplaySection({flipAB, setFlipAB, indexForDate, currMoonPhase, cityLocation, weatherAstroData}){
    // button is hidden if no weatherAstroData is present

    return(
        <section id="flip-section">
            <div className="button-container">
                <button className={weatherAstroData.current ? "flip-button" : "hide-button"} onClick={() => setFlipAB(!flipAB)} />
                {flipAB && weatherAstroData.current
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
        </section>
    )
}