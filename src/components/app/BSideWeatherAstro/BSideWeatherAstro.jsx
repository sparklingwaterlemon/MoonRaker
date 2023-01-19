import "./BSideWeatherAstro.css";


export default function BSideWeatherAstro({ cityLocation, data }) {
    console.log("5");

    const unixToDateTimeConverter = (unix) => {
        var currDT = new Date(unix * 1000).toLocaleString();
        return currDT
    };
    const unixToTimeConverter = (unix) => {
        var currT = new Date(unix * 1000).toLocaleTimeString();
        return currT
    };

    const phaseConverter = (x) => {
        if (x === 0 || x === 1) {
            return "New Moon"
        } else if (x > 0 && x < 0.25) {
            return "Waxing Crescent"
        } else if (x === 0.25) {
            return "First Quarter"
        } else if (x > 0.25 && x < 0.50) {
            return "Waxing Gibbous"
        } else if (x === 0.5) {
            return "Full Moon"
        } else if (x > 0.5 && x < 0.75) {
            return "Waning Gibbous"
        } else if (x === 0.75) {
            return "Third Quarter"
        } else if (x > 0.75 && x < 1) {
            return "Waning Crescent"
        } else {
            return "Error Converting Moon Phase"
        }
    };

    return (
        <div className="b-side-container">
            <div className="c-daily">
                {cityLocation}
                -- {unixToDateTimeConverter(data.current.dt)}

                <br /> Weather Condition : {data.current.weather[0].description.toUpperCase()}
                -- <img src={`http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`} alt="weather-icon" height="20px" />

                <br /> Chance of Rain : {data.daily[0].pop}%
                <br /> Today's High : {data.daily[0].temp.max}
                -- Today's Low : {data.daily[0].temp.min}

                <br /> Current Temp : {data.current.temp}
                -- Current Feels Like : {data.current.feels_like}
            </div>
            <div className="c-moon">
                <br /> Moon Data
                <br /> Moon Phase : {phaseConverter(data.daily[0].moon_phase)}

                <br /> Moon Rise : {unixToTimeConverter(data.daily[0].moonrise)}
                -- Moon Set : {unixToTimeConverter(data.daily[0].moonset)}

                <br /> Sunrise : {unixToTimeConverter(data.daily[0].sunrise)}
                -- Sunset : {unixToTimeConverter(data.daily[0].sunset)}
            </div>
            <div className="c-night-stroll">
                <br /> Night Time Stroll Planner
                <br /> Moon Phase : {phaseConverter(data.daily[0].moon_phase)}
                <br /> Weather Condition : {data.current.weather[0].description.toUpperCase()}
                <br /> Rain : {data.daily[0].pop}%
                -- Cloudiness : {data.current.clouds}%
                -- Visibility : {data.current.visibility * .001} km

                <br /> Currently : {data.current.temp}
                -- Current Wind Speed : {data.current.wind_speed} mph

                <br />Feels Like : {data.current.feels_like}

                <br /> Evening Temp: {data.daily[0].temp.eve}
                -- Night Temp: {data.daily[0].temp.night}
                <br /> Today's Low : {data.daily[0].temp.min}
            </div>
        </div>
    )
};