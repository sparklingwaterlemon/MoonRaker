import "./FormSection.css";
import SearchBarComponent from "../../components/SearchBarComponent/SearchBarComponent";
import PortalLinkComponent from "../../components/PortalLinkComponent/PortalLinkComponent";


export default function FormSection({setCityLocation, setWeatherAstroData, setFlipAB}){
    return(
        <section id="form-section">
            <PortalLinkComponent />
            <SearchBarComponent 
                setCityLocation={setCityLocation} 
                setWeatherAstroData={setWeatherAstroData} 
                setFlipAB={setFlipAB} />
        </section>
    )
};
