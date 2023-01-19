import './App.css';
import { useState } from 'react';


import PreLoadImagesFunc from '../../utilities/app/PreLoadImagesFunc/PreLoadImagesFunc';
import BackgroundComponent from '../../components/app/BackgroundComponent/BackgroundComponent';
import MoonSection from '../../sections/app/MoonSection/MoonSection';
import DuaLipa from '../../components/app/DuaLipa/DuaLipa';
import AboutLinkComponent from '../../components/app/AboutLinkComponent/AboutLinkComponent';
import FormSection from '../../sections/app/FormSection/FormSection';
import FlipDisplaySection from '../../sections/app/FlipDisplaySection/FlipDisplaySection';
import SettingScrollFunc from '../../utilities/app/SettingScrollFunc/SettingScrollFunc';
import SpikingScrollFunc from '../../utilities/app/SpikingScrollFunc/SpikingScrollFunc';
import ConstructionDisplay from '../../utilities/app/ConstructionDisplay/ConstructionDisplay';


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
          <MoonSection 
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
          <FlipDisplaySection 
            flipAB={flipAB} 
            setFlipAB={setFlipAB} 
            indexForDate={indexForDate} 
            currMoonPhase={currMoonPhase} 
            cityLocation={cityLocation} 
            weatherAstroData={weatherAstroData}/>
        </div>
      </section>
      {/* <ConstructionDisplay /> */}
      {/* <SettingScrollFunc /> */}
      <SpikingScrollFunc />
    </>
  );
};
