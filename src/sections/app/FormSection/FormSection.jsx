import "./FormSection.css";
import SearchBarComponent from "../../../components/app/SearchBarComponent/SearchBarComponent";
import PortalLinkComponent from "../../../components/app/PortalLinkComponent/PortalLinkComponent";


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
