import './App.css';
import { useState } from 'react';



import PreLoadImagesFunc from "./utilities/PreLoadImagesFunc/PreLoadImagesFunc";
import BackgroundComponent from "./components/BackgroundComponent/BackgroundComponent";
import MoonSection from "./sections/MoonSection/MoonSection";
import DuaLipa from "./components/DuaLipa/DuaLipa"
import AboutLinkComponent from "./components/AboutLinkComponent/AboutLinkComponent";
import FormSection from "./sections/FormSection/FormSection";
import FlipDisplaySection from "./sections/FlipDisplaySection/FlipDisplaySection";
import SettingScrollFunc from "./utilities/SettingScrollFunc/SettingScrollFunc";
import SpikingScrollFunc from "./utilities/SpikingScrollFunc/SpikingScrollFunc";
import ConstructionDisplay from "./utilities/ConstructionDisplay/ConstructionDisplay";

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
      <main id="main-moon">
        <BackgroundComponent />
        <section className="leftside-moon">
          <MoonSection 
            setIndexForDate={setIndexForDate}
            setCurrMoonPhase={setCurrMoonPhase}/>
          <DuaLipa />
          <AboutLinkComponent />
        </section> 
        <section className="rightside-moon">
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
        </section>
      </main>
      <ConstructionDisplay />
      <SettingScrollFunc />
      <SpikingScrollFunc />
    </>
  );
};
