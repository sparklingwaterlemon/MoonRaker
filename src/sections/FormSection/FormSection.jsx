import "./FormSection.css";
import SearchBarComponent from "../../components/SearchBarComponent/SearchBarComponent";
import { Link } from "react-router-dom";


export default function FormSection({setCityLocation, setWeatherAstroData, setFlipAB}){
    return(
        <section id="form-section">
            <div className="log-container">

            </div>
            <SearchBarComponent 
                setCityLocation={setCityLocation} 
                setWeatherAstroData={setWeatherAstroData} 
                setFlipAB={setFlipAB} />
        </section>
    )
};
