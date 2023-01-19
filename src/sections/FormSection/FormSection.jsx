import "./FormSection.css";
import SearchBarComponent from "../../components/SearchBarComponent/SearchBarComponent";
import { Link } from "react-router-dom";


export default function FormSection({setCityLocation, setWeatherAstroData, setFlipAB}){
    return(
        <section id="form-section">
            <div className="journal-link-container">
                <Link to="about" className="journal-link">
                    Journal Entry
                </Link>
            </div>
            <SearchBarComponent 
                setCityLocation={setCityLocation} 
                setWeatherAstroData={setWeatherAstroData} 
                setFlipAB={setFlipAB} />
        </section>
    )
};
