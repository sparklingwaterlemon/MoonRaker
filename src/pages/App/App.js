import './App.css';
import { useState } from 'react';


import PreLoadImagesFunc from '../../utilities/PreLoadImagesFunc/PreLoadImagesFunc';
import BackgroundComponent from "../../components/BackgroundComponent/BackgroundComponent";
import MoonComponent from '../../components/MoonComponent/MoonComponent';
import DuaLipa from '../../components/DuaLipa/DuaLipa';
import AboutLinkComponent from '../../components/AboutLinkComponent/AboutLinkComponent';
import FormSection from '../../components/FormSection/FormSection';
import FlipDisplayComponent from '../../components/FlipDisplayComponent/FlipDisplayComponent';
import SettingScrollFunc from '../../utilities/SettingScrollFunc/SettingScrollFunc';
import SpikingScrollFunc from '../../utilities/SpikingScrollFunc/SpikingScrollFunc';
import ConstructionDisplay from '../../utilities/ConstructionDisplay/ConstructionDisplay';


export default function App() {
  // indexForDate & currMoonPhase SET in "MoonComponents". Used in "FlipDisplayComponent" -to-> "ASideDatePhase"
  const [indexForDate, setIndexForDate] = useState();
  const [currMoonPhase, setCurrMoonPhase] = useState();
  // flipAB used for FlipDisplayComponent. Passed/ to be trigged in "SearchBarComponent"
  const [flipAB, setFlipAB] = useState(false);
  // cityLocation & weatherAstroData SET in "SearchBarComponent". Used in "FlipDisplayComponet" -to-> "BSideWeatherAstro"
  const [cityLocation, setCityLocation] = useState("no city");
  const [weatherAstroData, setWeatherAstroData] = useState(false);

  // --- IF CHANGING PAGE HEIGHT , ALSO UPDATE SETTINGSCROLLFUN()!!
  
  return (
    <>
      <PreLoadImagesFunc />
      <section id="section-moon">
        <BackgroundComponent />
        <div className="leftside-moon">
          <MoonComponent 
            setIndexForDate={setIndexForDate}
            setCurrMoonPhase={setCurrMoonPhase}/>
          <DuaLipa />
          <AboutLinkComponent />
        </div>
        <div className="rightside-moon">
          <FormSection 
            setCityLocation={setCityLocation} 
            setWeatherAstroData={setWeatherAstroData} 
            setFlipAB={setFlipAB}/>
          <FlipDisplayComponent 
            flipAB={flipAB} 
            setFlipAB={setFlipAB} 
            indexForDate={indexForDate} 
            currMoonPhase={currMoonPhase} 
            cityLocation={cityLocation} 
            weatherAstroData={weatherAstroData}/>
        </div>
      </section>
      {/* <ConstructionDisplay /> */}
      <SettingScrollFunc />
      <SpikingScrollFunc />
    </>
  );
};
