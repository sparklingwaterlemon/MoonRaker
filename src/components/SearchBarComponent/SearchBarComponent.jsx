import "./SearchBarComponent.css";
import { useState, useEffect } from "react";


// Variable outside of SearchBarComponent - location does not change
// goFetch variable used to prevent useEffect from fetchingAstroData prematurely
// goFetch === true, once COORDINATES are fetched
let goFetch = false;
                        

export default function SearchBarComponent({setCityLocation,setWeatherAstroData, setFlipAB}){
    const [zipcode, setZipcode] = useState("");
    const [lat, setLat] = useState();
    const [lon, setLon] = useState();

    let COORDINATES=`https://api.openweathermap.org/geo/1.0/zip?zip=${zipcode}&appid=${process.env.REACT_APP_OWM}`;
    let OPENWEATHERMAP=`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=imperial&appid=${process.env.REACT_APP_OWM}`;


    // -- step 4 --> step 5 is "BSideWeatherAstro". passing setWeatherAstroData -> "BSideWeatherAstro"
    const fetchWeatherAstroData = async() => {
        try{
            await fetch(OPENWEATHERMAP)
            .then(res => res.json())
            .then(data => {
                setWeatherAstroData(data);
                setFlipAB(true);
            })
        } catch(err){
            console.log("error fetching openweathermap data", err);
        };
    };

    // -- step 3
    useEffect(()=>{
        if(goFetch){
            fetchWeatherAstroData()
        };
        // eslint-disable-next-line
    },[lat])

    // -- step 1
    const fetchCoordinatesByZip = async() => {
        try{
            await fetch(COORDINATES)
            .then(res => res.json())
            .then(data => {
                console.log("1");
                setCityLocation(data.name);
                setLat(data.lat);
                setLon(data.lon);
                goFetch = true;
            });
        } catch(error){
            console.log("error fetching geo-api data", error);
        };      
    };

    // -- start
    // -- step 2
    const handleFormSubmit = async(evt) =>{
        evt.preventDefault();
        await fetchCoordinatesByZip();
        setZipcode("");
    };

    const handleFormInput = (evt) =>{
        setZipcode(evt.target.value);
    };

    return(
        <div className="zip-search-container">
            <form onSubmit={handleFormSubmit} autoComplete="off">
                <input className="zip-search-input" 
                    type="text" 
                    placeholder="enter zip only" 
                    value={zipcode} 
                    onChange={handleFormInput} 
                    required />
            </form>
        </div>
    )
};