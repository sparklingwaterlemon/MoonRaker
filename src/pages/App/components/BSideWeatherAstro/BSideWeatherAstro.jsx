import "./BSideWeatherAstro.css";


export default function BSideWeatherAstro({ cityLocation, data }) {
    const unixToDateTimeConverter = (unix) => {
        var currDT = new Date(unix * 1000).toLocaleString().replace(",", " -");
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
                <div className="t-banner">{cityLocation}</div>
                <div>{unixToDateTimeConverter(data.current.dt)}</div>
                <div> {data.current.weather[0].description.toUpperCase()} 
                    <img src={`http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`} alt="weather-icon" height="20px" /> </div>
                <div> <span>Rain:</span> <span>{data.daily[0].pop}%</span></div>
                <div><span>Current: </span> <span>{data.current.temp} &#8457;</span></div>
                <div><span>Feels Like: </span> <span>{data.current.feels_like} &#8457;</span></div>
                <div><span>Today's High: </span> <span>{data.daily[0].temp.max} &#8457;</span></div>
                <div><span>Today's Low: </span> <span>{data.daily[0].temp.min} &#8457;</span></div>
            </div>
            <div className="c-moon">
                <div className="t-banner"> Moon Data </div>
                <div> {phaseConverter(data.daily[0].moon_phase)} </div>
                <div> <span>Moonrise:</span> <span>{unixToTimeConverter(data.daily[0].moonrise)} </span></div>
                <div> <span>Moonset:</span> <span>{unixToTimeConverter(data.daily[0].moonset)} </span></div>
                <div> <span>Sunrise:</span> <span>{unixToTimeConverter(data.daily[0].sunrise)} </span></div>
                <div> <span>Sunset:</span> <span>{unixToTimeConverter(data.daily[0].sunset)} </span></div>
            </div>
            <div className="c-night-stroll">
                <div className="t-banner">Night Stroll Planner </div>
                <div><span>{phaseConverter(data.daily[0].moon_phase)} </span></div>
                <div>{data.current.weather[0].description.toUpperCase()}
                    <img src={`http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`} alt="weather-icon" height="20px" /></div>
                <div><span>Rain: </span> <span>{data.daily[0].pop}%</span></div>
                <div><span>Cloudiness:</span> <span>{data.current.clouds}%</span></div>
                <div><span>Visibility:</span> <span>{data.current.visibility * .001} km</span></div>

                <div><span>Current:</span> <span>{data.current.temp} &#8457;</span></div>
                <div><span>Wind Speed:</span> <span>{data.current.wind_speed} mph</span></div>

                <div><span>Feels Like: </span> <span>{data.current.feels_like} &#8457;</span></div>

                <div><span>Evening Temp: </span> <span>{data.daily[0].temp.eve} &#8457;</span></div>
                <div><span>Night Temp: </span> <span>{data.daily[0].temp.night} &#8457;</span></div>
                <div><span>Today's Low: </span> <span>{data.daily[0].temp.min}  &#8457;</span></div>
            </div>
        </div>
    )
};