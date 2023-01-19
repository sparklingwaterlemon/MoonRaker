import "./FormSection.css";
import SearchBarComponent from "../../components/SearchBarComponent/SearchBarComponent";

export default function FormSection({setCityLocation, setWeatherAstroData, setFlipAB}){
    return(
        <section id="form-section">
            <SearchBarComponent 
                setCityLocation={setCityLocation} 
                setWeatherAstroData={setWeatherAstroData} 
                setFlipAB={setFlipAB} />
        </section>
    )
};