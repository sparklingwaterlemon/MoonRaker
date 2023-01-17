import './App.css';
import { useState } from 'react';


import MoonComponent from '../components/MoonComponent/MoonComponent';
import BackgroundComponent from "../components/BackgroundComponent/BackgroundComponent";
import SearchBarComponent from '../components/SearchBarComponent/SearchBarComponent';

export default function App() {
  // indexForDate & currMoonPhase SET in MoonComponents, passed down FlipDisplayComponent -to-> be rendered in ASideDatePhase
  const [indexForDate, setIndexForDate] = useState();
  const [currMoonPhase, setCurrMoonPhase] = useState();
  // for FlipDisplayComponent -> passed down to -> SearchBarComponent to be triggered there as well
  const [flipAB, setFlipAB] = useState(false);
  // have to get cityLocation from 'COORDINATE' API fetch from "SearchBarComponent" to render data in --FlipDisplayComponet--to-->BSideWeatherAstro
  const [cityLocation, setCityLocation] = useState("no city");
  // weatherAstroData SET in SearchComponent, passed down FlipDisplayComponent -to-> be rendered in BSideWeatherAstro 
  const [weatherAstroData, setWeatherAstroData] = useState(false);




  return (
    <>
      <section id="section-moon">
        {/* <BackgroundComponent /> */}
        <div className="leftside-moon">
          <MoonComponent 
            setIndexForDate={setIndexForDate}
            setCurrMoonPhase={setCurrMoonPhase}/>
        </div>
        <div className="rightside-moon">
          <SearchBarComponent 
            setCityLocation={setCityLocation} 
            setWeatherAstroData={setWeatherAstroData} 
            setFlipAB={setFlipAB}/>

        </div>

      </section>
    </>
  );
}