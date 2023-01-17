import "./SearchBarComponent.css";

import { useState, useEffect } from "react";

// created this 'stop/go' variable to prevent useEffect from fetchingAstroData prematurely
// variables turns true once fetch(Coordinates)
let goFetch = false;
                        


export default function SearchBarComponent({setCityLocation,setWeatherAstroData, setFlipAB}){
    const [zipcode, setZipcode] = useState("");
    const [lat, setLat] = useState();
    const [lon, setLon] = useState();

    let COORDINATES=`https://api.openweathermap.org/geo/1.0/zip?zip=${zipcode}&appid=${process.env.REACT_APP_OWM}`;
    let OPENWEATHERMAP=`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=imperial&appid=${process.env.REACT_APP_OWM}`;


    const fetchWeatherAstroData = async() => {
        try{
            await fetch(OPENWEATHERMAP)
            .then(res => res.json())
            .then(data => {
                console.log("4");
                setWeatherAstroData(data);
                setFlipAB(true);
            })
        } catch(err){
            console.log("error fetching openweathermap data", err);
        };
    };

    useEffect(()=>{
        if(goFetch){
            fetchWeatherAstroData()
            console.log("3");
        };
        // eslint-disable-next-line
    },[lat])

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

    const handleFormSubmit = async(evt) =>{
        evt.preventDefault();
        await fetchCoordinatesByZip();
        console.log("2");
        setZipcode("");
    };

    const handleFormInput = (evt) =>{
        console.log(evt.target.value);
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